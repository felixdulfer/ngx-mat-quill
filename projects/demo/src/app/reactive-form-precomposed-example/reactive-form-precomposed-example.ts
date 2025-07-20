import { Component } from '@angular/core';
import { NgxMatQuillFormField } from 'ngx-mat-quill';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SourceCodeDisplayComponent } from '../source-code-display/source-code-display';

@Component({
  selector: 'app-reactive-form-precomposed-example',
  standalone: true,
  imports: [
    NgxMatQuillFormField,
    ReactiveFormsModule,
    JsonPipe,
    MatTabsModule,
    MatButtonModule,
    RouterModule,
    SourceCodeDisplayComponent,
  ],
  templateUrl: './reactive-form-precomposed-example.html',
  styleUrl: './reactive-form-precomposed-example.css',
})
export class ReactiveFormPrecomposedExampleComponent {
  form = new FormGroup({
    editor: new FormControl({
      ops: [
        { insert: 'This is the initial value!\n' }
      ]
    }),
  });

  htmlCode = `<form [formGroup]="form">
  <ngx-mat-quill-form-field
    label="Reactive Rich Text (Pre-composed)"
    theme="snow"
    appearance="outline"
    formControlName="editor"
  />
</form>
<div>
  <strong>Form Value:</strong>
  <pre>{{ form.value | json }}</pre>
</div>`;

  typescriptCode = `import { NgxMatQuillFormField } from 'ngx-mat-quill';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [
    NgxMatQuillFormField,
    ReactiveFormsModule,
    JsonPipe
  ],
  template: \`
    <form [formGroup]="form">
      <ngx-mat-quill-form-field
        label="Reactive Rich Text (Pre-composed)"
        theme="snow"
        appearance="outline"
        formControlName="editor"
      />
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
