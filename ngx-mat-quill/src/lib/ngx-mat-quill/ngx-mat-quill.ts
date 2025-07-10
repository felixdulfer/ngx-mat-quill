import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-mat-quill-editor',
  standalone: true,
  template: `<div>MatQuillEditorComponent (fixed toolbar) will go here</div>`,
})
export class MatQuillEditorComponent {}

@Component({
  selector: 'lib-mat-quill-inline-editor',
  standalone: true,
  template: `<div>
    MatQuillInlineEditorComponent (inline formatter) will go here
  </div>`,
})
export class MatQuillInlineEditorComponent {}
