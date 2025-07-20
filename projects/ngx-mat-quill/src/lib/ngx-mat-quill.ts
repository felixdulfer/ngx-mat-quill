import {
  Component,
  Input,
  OnDestroy,
  forwardRef,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { QuillModule, QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'ngx-mat-quill',
  standalone: true,
  imports: [QuillModule],
  template: `
    <quill-editor
      #quill
      [placeholder]="placeholder"
      [readOnly]="disabled"
      [required]="required"
      [theme]="theme"
      format="object"
      (onContentChanged)="onContentChanged($event)"
      (onBlur)="onBlur()"
      (onFocus)="onFocus()"
      class="mat-quill-editor"
    />
  `,
  styles: [
    `
      mat-form-field quill-editor {
        display: block !important;
      }
      ngx-mat-quill {
        display: block;
        height: 100%;
      }
      quill-editor {
        display: block;
        height: 100%;
      }
      .mat-quill-editor {
        display: block;
        width: 100%;
      }
      mat-form-field .ql-container .ql-editor {
        padding: 0;
        margin: 0;
      }
      mat-form-field .ql-tooltip {
        z-index: 9999;
        transform: translateY(2rem) !important;
      }
    `,
  ],
  styleUrls: ['./quill.bubble.custom.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatQuill),
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NgxMatQuill
  implements ControlValueAccessor, OnDestroy, AfterViewInit, OnInit
{
  @ViewChild('quill', { static: false }) quillEditor?: QuillEditorComponent;

  stateChanges = new Subject<void>();
  focused = false;
  touched = false;

  @Input() theme = 'snow';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() disabled = false;

  private _value: any = null;
  private _pendingValue: any = null;
  editorContent: any = null;

  get value(): any {
    return this._value;
  }
  set value(val: any) {
    this._value = val;
    this.editorContent = val;
    this.stateChanges.next();
    this.onChange(val);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (_: any) => {};
  onTouched = () => {
    this.touched = true;
    this.stateChanges.next();
  };

  ngOnInit() {
    // Don't initialize with empty Delta - let Quill handle it
    // This was causing the ParchmentError
  }

  ngAfterViewInit() {
    // Use a longer timeout to ensure Quill is fully initialized
    setTimeout(() => {
      // If there's a pending value, set it now that the editor is available
      if (this._pendingValue !== null) {
        this.setQuillContent(this._pendingValue);
        this._pendingValue = null;
      } else if (this._value) {
        // If there's an initial value, set it
        this.setQuillContent(this._value);
      }
    }, 100); // Increased timeout to ensure Quill is ready
  }

  writeValue(val: any): void {
    this._value = val;
    this.stateChanges.next();

    // If the editor is available, set the content immediately
    if (this.quillEditor) {
      this.setQuillContent(val);
    } else {
      // Store the value to set it when the editor becomes available
      this._pendingValue = val;
    }
  }

  private setQuillContent(content: any): void {
    console.log('setQuillContent called with:', content);
    if (this.quillEditor) {
      console.log('Quill editor is available');
      try {
        // Try to set content via ngx-quill's API
        if (typeof this.quillEditor['writeValue'] === 'function') {
          console.log('Using ngx-quill writeValue API');
          this.quillEditor['writeValue'](content);
          return;
        }

        // Fallback: set innerHTML directly
        if (this.quillEditor['editorElem']) {
          console.log('Using innerHTML fallback');
          const editor = this.quillEditor['editorElem'];
          if (content && content.ops && content.ops.length > 0) {
            // Convert Delta to HTML for display
            let html = '';
            content.ops.forEach((op: any) => {
              if (op.insert) {
                if (typeof op.insert === 'string') {
                  if (op.insert === '\n') {
                    html += '<br>';
                  } else {
                    html += op.insert;
                  }
                }
              }
            });
            console.log('Setting innerHTML to:', html);
            editor.innerHTML = html || '<p><br></p>';
          } else {
            editor.innerHTML = '<p><br></p>';
          }
        } else {
          console.log('No editorElem available');
        }
      } catch (error) {
        console.error('Error setting Quill content:', error);
      }
    } else {
      console.log('Quill editor not available');
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }

  onContentChanged(event: any) {
    console.log('onContentChanged event:', event);
    // The event should now contain the Delta format as an object
    this._value = event.content;
    this.editorContent = event.content;
    console.log('Updated _value and editorContent to:', event.content);
    this.onChange(event.content);
    this.stateChanges.next(); // Trigger state change for form field label
  }

  onFocus() {
    this.focused = true;
    this.stateChanges.next();
  }

  onBlur() {
    this.focused = false;
    this.touched = true;
    this.onTouched();
    this.stateChanges.next();
  }

  focus() {
    console.log('focus() method called');
    this.focused = true;
    this.stateChanges.next();

    if (this.quillEditor) {
      console.log('Quill editor available, attempting to focus');
      try {
        // Try to focus the editor element
        if (this.quillEditor['editorElem']) {
          console.log('Focusing editorElem');
          (this.quillEditor['editorElem'] as HTMLElement).focus();
        } else {
          console.log('No focusable element found');
        }
      } catch (error) {
        console.error('Error focusing Quill editor:', error);
      }
    } else {
      console.log('Quill editor not available for focus');
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }
}
