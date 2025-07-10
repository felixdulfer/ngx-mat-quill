import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatQuillEditorComponent,
  MatQuillInlineEditorComponent,
} from '@felixdulfer/ngx-mat-quill';

@Component({
  imports: [
    RouterModule,
    MatQuillEditorComponent,
    MatQuillInlineEditorComponent,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ngx-mat-quill';
}
