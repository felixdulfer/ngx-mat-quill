import { Component } from '@angular/core';
import { NgxMatQuillFormField } from 'ngx-mat-quill';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SourceCodeDisplayComponent } from '../source-code-display/source-code-display';

@Component({
  selector: 'app-precomposed-snow-example',
  standalone: true,
  imports: [
    NgxMatQuillFormField,
    MatTabsModule,
    MatButtonModule,
    RouterModule,
    SourceCodeDisplayComponent,
  ],
  templateUrl: './precomposed-snow-example.html',
  styleUrl: './precomposed-snow-example.css',
})
export class PrecomposedSnowExampleComponent {
  htmlCode = `<ngx-mat-quill-form-field
  label="Rich Text (Pre-composed)"
  theme="snow"
  appearance="outline"
/>`;

  typescriptCode = `import { NgxMatQuillFormField } from 'ngx-mat-quill';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgxMatQuillFormField],
  template: \`
    <ngx-mat-quill-form-field
      label="Rich Text (Pre-composed)"
      theme="snow"
      appearance="outline"
    />
  \`
})
export class ExampleComponent {}`;
}
