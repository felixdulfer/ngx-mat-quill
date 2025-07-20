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
  implements MatFormFieldControl<any>, OnDestroy, DoCheck, OnInit
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

  get value(): any {
    return this.quill.value;
  }
  set value(val: any) {
    this.quill.value = val;
    this.stateChanges.next();
  }

  get empty() {
    if (!this.value) {
      return true;
    }
    
    if (typeof this.value === 'object' && this.value.ops) {
      // Check if there's actual content in the Delta
      let hasContent = false;
      
      for (const op of this.value.ops) {
        if (op.insert) {
          if (typeof op.insert === 'string') {
            // Check if this operation contains actual text content
            const text = op.insert;
            // Remove newlines and check if there's actual text
            const textWithoutNewlines = text.replace(/\n/g, '');
            if (textWithoutNewlines.trim() !== '') {
              hasContent = true;
              break;
            }
          }
        }
      }
      
      return !hasContent;
    }
    
    // For string values, check if it's empty or just whitespace
    if (typeof this.value === 'string') {
      return this.value.trim() === '';
    }
    
    return false;
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
    // Listen to state changes from the Quill component
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
