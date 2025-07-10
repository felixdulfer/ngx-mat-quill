import { Component } from '@angular/core';
import { QuillModule } from 'ngx-quill';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-mat-quill-editor',
  standalone: true,
  imports: [CommonModule, QuillModule],
  template: `
    <quill-editor
      [modules]="modules"
      [styles]="{ minHeight: '120px' }"
      [placeholder]="'Type here...'"
      theme="snow"
      class="mat-quill-editor"
    ></quill-editor>
  `,
  styleUrls: ['./ngx-mat-quill.css'],
})
export class MatQuillEditorComponent {
  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };
}

@Component({
  selector: 'lib-mat-quill-inline-editor',
  standalone: true,
  imports: [CommonModule, QuillModule],
  template: `
    <quill-editor
      [modules]="modules"
      [styles]="{ minHeight: '120px' }"
      [placeholder]="'Type here...'"
      theme="bubble"
      class="mat-quill-editor"
    ></quill-editor>
  `,
  styleUrls: ['./ngx-mat-quill.css'],
})
export class MatQuillInlineEditorComponent {
  modules = {
    toolbar: false, // disables fixed toolbar, enables inline bubble toolbar
  };
}
