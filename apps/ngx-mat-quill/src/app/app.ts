import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMatQuill } from '@felixdulfer/ngx-mat-quill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';

@Component({
  imports: [RouterModule, MatFormFieldModule, MatLabel, NgxMatQuill],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected title = 'ngx-mat-quill';
}
