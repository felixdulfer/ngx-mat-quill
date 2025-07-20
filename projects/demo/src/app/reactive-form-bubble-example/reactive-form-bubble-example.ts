import { Component } from '@angular/core';
import { NgxMatQuill, MatQuillFormFieldControlDirective } from 'ngx-mat-quill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SourceCodeDisplayComponent } from '../source-code-display/source-code-display';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reactive-form-bubble-example',
  standalone: true,
  imports: [
    NgxMatQuill,
    MatQuillFormFieldControlDirective,
    MatFormFieldModule,
    ReactiveFormsModule,
    JsonPipe,
    MatTabsModule,
    MatButtonModule,
    RouterModule,
    SourceCodeDisplayComponent,
    MatInputModule,
  ],
  templateUrl: './reactive-form-bubble-example.html',
  styleUrl: './reactive-form-bubble-example.css',
})
export class ReactiveFormBubbleExampleComponent {
  form = new FormGroup({
    editor: new FormControl({
      ops: [
        { insert: 'This is the initial value!\n' }
      ]
    }),
  });

  htmlCode = `<form [formGroup]="form">
  <mat-form-field appearance="outline" class="mat-quill-form-field">
    <ngx-mat-quill
      ngxMatQuillFormFieldControl
      formControlName="editor"
      theme="bubble"
    />
    <mat-label>Reactive Rich Text (Bubble Theme)</mat-label>
  </mat-form-field>
</form>
<div>
  <strong>Form Value:</strong>
  <pre>{{ form.value | json }}</pre>
</div>`;

  typescriptCode = `import { NgxMatQuill, MatQuillFormFieldControlDirective } from 'ngx-mat-quill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    NgxMatQuill,
    MatQuillFormFieldControlDirective,
    MatFormFieldModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  template: \`
    <form [formGroup]="form">
      <mat-form-field appearance="outline" class="mat-quill-form-field">
        <ngx-mat-quill
          ngxMatQuillFormFieldControl
          formControlName="editor"
          theme="bubble"
        />
        <mat-label>Reactive Rich Text (Bubble Theme)</mat-label>
      </mat-form-field>
    </form>
    <div>
      <strong>Form Value:</strong>
      <pre>{{ form.value | json }}</pre>
    </div>
  \`
})
export class ExampleComponent {
  form = new FormGroup({
    editor: new FormControl({
      ops: [
        { insert: 'This is the initial value!\n' }
      ]
    }),
  });
}`;
}
