import { Component, Input, OnDestroy, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { QuillModule } from 'ngx-quill';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-mat-quill-form-field-control',
  standalone: true,
  imports: [QuillModule],
  template: `
    <quill-editor
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
  static nextId = 0;
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'mat-quill-editor';
  id = `mat-quill-editor-${MatQuillFormFieldControl.nextId++}`;

  @Input() placeholder = '';
  @Input() required = false;
  @Input() disabled = false;

  private _value = '';
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
    return false; // implement validation if needed
  }

  onChange = (_: any) => {
    /* no-op */
  };
  onTouched = () => {
    /* no-op */
  };

  ngControl = inject(NgControl, { optional: true, self: true });

  constructor() {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(val: string): void {
    this._value = val;
    this.stateChanges.next();
    // Setting value programmatically is not directly supported by ngx-quill, but can be done via ViewChild if needed
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
    this._value = event.html;
    this.onChange(this._value);
    this.stateChanges.next();
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

  shouldLabelFloat = true;
  setDescribedByIds(ids: string[]): void {
    // No-op for now
  }
  onContainerClick(event: MouseEvent): void {
    // Optionally focus the editor
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }
}
