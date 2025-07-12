import {
  Directive,
  Input,
  OnDestroy,
  HostBinding,
  ElementRef,
  DoCheck,
  OnInit,
  inject,
} from '@angular/core';
import { MatFormFieldControl } from '@angular/material/form-field';
import { NgxMatQuill } from './ngx-mat-quill';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

let nextUniqueId = 0;

@Directive({
  selector: 'ngx-mat-quill[ngxMatQuillFormFieldControl]',
  providers: [
    {
      provide: MatFormFieldControl,
      useExisting: MatQuillFormFieldControlDirective,
    },
  ],
})
export class MatQuillFormFieldControlDirective
  implements MatFormFieldControl<string>, OnDestroy, DoCheck, OnInit
{
  private elRef = inject(ElementRef);
  public ngControl = inject(NgControl, { optional: true, self: true });
  private quill = inject(NgxMatQuill, { host: true });

  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'mat-quill-editor';
  @HostBinding() id = `mat-quill-editor-${nextUniqueId++}`;
  describedBy = '';

  get value(): string {
    return this.quill.value;
  }
  set value(val: string) {
    this.quill.value = val;
    this.stateChanges.next();
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

  @Input()
  get placeholder(): string {
    return this.quill.placeholder;
  }
  set placeholder(value: string) {
    this.quill.placeholder = value;
    this.stateChanges.next();
  }

  @Input()
  get required(): boolean {
    return this.quill.required;
  }
  set required(value: boolean) {
    this.quill.required = value;
    this.stateChanges.next();
  }

  @Input()
  get disabled(): boolean {
    return this.quill.disabled;
  }
  set disabled(value: boolean) {
    this.quill.disabled = value;
    this.stateChanges.next();
  }

  constructor() {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this.quill;
    }
  }

  ngOnInit() {
    // Listen to focus/blur from the Quill component
    this.quill.stateChanges.subscribe(() => {
      this.stateChanges.next();
    });

    // Listen to focus state changes from the Quill component
    this.quill.stateChanges.subscribe(() => {
      this.focused = this.quill.focused;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }

  ngDoCheck() {
    // Only sync focus state if not already focused by the component
    if (!this.quill.focused) {
      this.focused = this.elRef.nativeElement.contains(document.activeElement);
    }
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(_event: MouseEvent): void {
    // Focus the Quill editor when the container is clicked
    this.quill.focus();
  }
}
