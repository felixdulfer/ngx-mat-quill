import { Component, Input, OnDestroy, forwardRef, ViewChild } from '@angular/core';
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
      (onContentChanged)="onContentChanged($event)"
      (onBlur)="onBlur()"
      (onFocus)="onFocus()"
      class="mat-quill-editor"
    />
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatQuill),
      multi: true,
    },
  ],
})
export class NgxMatQuill implements ControlValueAccessor, OnDestroy {
  @ViewChild('quill', { static: false }) quillEditor?: QuillEditorComponent;

  stateChanges = new Subject<void>();
  focused = false;
  touched = false;

  @Input() theme = 'snow';
  @Input() placeholder = '';
  @Input() required = false;
  @Input() disabled = false;

  private _value = '';

  get value(): string {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    this.stateChanges.next();
    this.onChange(val);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (_: any) => {};
  onTouched = () => {
    this.touched = true;
    this.stateChanges.next();
  };

  writeValue(val: string): void {
    this._value = val;
    this.stateChanges.next();
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
