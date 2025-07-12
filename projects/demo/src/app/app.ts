import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMatQuill } from 'ngx-mat-quill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  imports: [
    RouterModule,
    MatFormFieldModule,
    NgxMatQuill,
    ReactiveFormsModule,
    JsonPipe,
  ],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'ngx-mat-quill';

  form = new FormGroup({
    editor: new FormControl('This is the initial value!'),
  });
}
