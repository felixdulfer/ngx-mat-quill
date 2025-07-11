import {
  Component,
  Input,
  OnDestroy,
  forwardRef,
  HostBinding,
  ViewChild,
  inject,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { QuillModule, QuillEditorComponent } from 'ngx-quill';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { ElementRef } from '@angular/core';

let nextUniqueId = 0;

@Component({
  selector: 'ngx-mat-quill-form-field-control',
  standalone: true,
  imports: [QuillModule],
  template: `
    <quill-editor
      #quill
      [placeholder]="placeholder"
      [readOnly]="disabled"
      [required]="required"
      (onContentChanged)="onContentChanged($event)"
      (onBlur)="onBlur()"
      (onFocus)="onFocus()"
      class="mat-quill-editor"
    ></quill-editor>
  `,
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: forwardRef(() => MatQuillFormFieldControl),
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatQuillFormFieldControl),
      multi: true,
    },
  ],
  styleUrls: ['./ngx-mat-quill.css'],
})
export class MatQuillFormFieldControl
  implements MatFormFieldControl<string>, ControlValueAccessor, OnDestroy
{
  static ngAcceptInputType_disabled: boolean | string | null | undefined;
  static ngAcceptInputType_required: boolean | string | null | undefined;

  @ViewChild('quill', { static: false }) quillEditor?: QuillEditorComponent;

  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'mat-quill-editor';
  @HostBinding() id = `mat-quill-editor-${nextUniqueId++}`;

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder = '';

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _disabled = false;

  private _value = '';
  @Input()
  get value() {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.stateChanges.next();
    this.onChange(val);
  }

  get empty() {
    return !this.value || this.value.length === 0;
  }

  get errorState() {
    return !!(
      this.ngControl &&
      this.ngControl.invalid &&
      (this.ngControl.touched || this.ngControl.dirty)
    );
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @HostBinding('attr.aria-describedby') describedBy = '';

  onChange = (_: any) => {
    this.stateChanges.next();
  };
  onTouched = () => {
    this.touched = true;
    this.stateChanges.next();
  };

  ngControl = inject(NgControl, { optional: true, self: true });
  _elementRef = inject(ElementRef);

  constructor() {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(val: string): void {
    this._value = val;
    this.stateChanges.next();
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.stateChanges.next();
  }

  onContentChanged(event: any) {
    this.value = event.html;
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

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }
  onContainerClick(event: MouseEvent): void {
    // Focus the editor when the container is clicked
    if (this.quillEditor && this.quillEditor['editorElem']) {
      (this.quillEditor['editorElem'] as HTMLElement).focus();
    }
  }

  focus() {
    this.focused = true;
    this.stateChanges.next();
    if (this.quillEditor && this.quillEditor['editorElem']) {
      (this.quillEditor['editorElem'] as HTMLElement).focus();
    }
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }
}
