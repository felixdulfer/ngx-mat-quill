import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  MatQuillEditorComponent,
  MatQuillInlineEditorComponent,
  MatQuillFormFieldControl,
} from '@felixdulfer/ngx-mat-quill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';

@Component({
  imports: [
    RouterModule,
    MatFormFieldModule,
    MatLabel,
    MatQuillEditorComponent,
    MatQuillInlineEditorComponent,
    MatQuillFormFieldControl,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ngx-mat-quill';
}
