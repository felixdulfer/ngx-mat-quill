import { Component, Input, forwardRef, ViewChild } from '@angular/core';
import {
  MatFormFieldModule,
  MatFormFieldAppearance,
} from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { NgxMatQuill } from './ngx-mat-quill';
import { MatQuillFormFieldControlDirective } from './mat-quill-form-field-control.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ngx-mat-quill-form-field',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatLabel,
    NgxMatQuill,
    MatQuillFormFieldControlDirective,
  ],
  template: `
    <mat-form-field [appearance]="appearance" class="mat-quill-form-field">
      <ngx-mat-quill
        #quill
        ngxMatQuillFormFieldControl
        [placeholder]="placeholder"
        [theme]="theme"
        [required]="required"
        [disabled]="disabled"
      />
      <mat-label>{{ label }}</mat-label>
    </mat-form-field>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxMatQuillFormField),
      multi: true,
    },
  ],
})
export class NgxMatQuillFormField implements ControlValueAccessor {
  @ViewChild('quill') quillComponent!: NgxMatQuill;

  @Input() appearance: MatFormFieldAppearance = 'outline';
  @Input() placeholder = '';
  @Input() theme: 'snow' | 'bubble' = 'snow';
  @Input() required = false;
  @Input() disabled = false;
  @Input() label = '';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(val: string): void {
    if (this.quillComponent) {
      this.quillComponent.writeValue(val);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
    if (this.quillComponent) {
      this.quillComponent.registerOnChange(fn);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    if (this.quillComponent) {
      this.quillComponent.registerOnTouched(fn);
    }
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (this.quillComponent) {
      this.quillComponent.setDisabledState(isDisabled);
    }
  }

  focus() {
    if (this.quillComponent) {
      this.quillComponent.focus();
    }
  }
}
