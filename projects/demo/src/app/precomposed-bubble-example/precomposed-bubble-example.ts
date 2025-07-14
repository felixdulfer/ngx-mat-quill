import { Component } from '@angular/core';
import { NgxMatQuillFormField } from 'ngx-mat-quill';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SourceCodeDisplayComponent } from '../source-code-display/source-code-display';

@Component({
  selector: 'app-precomposed-bubble-example',
  standalone: true,
  imports: [
    NgxMatQuillFormField,
    MatTabsModule,
    MatButtonModule,
    RouterModule,
    SourceCodeDisplayComponent,
  ],
  templateUrl: './precomposed-bubble-example.html',
  styleUrl: './precomposed-bubble-example.css',
})
export class PrecomposedBubbleExampleComponent {
  htmlCode = `<ngx-mat-quill-form-field
  label="Rich Text (Bubble)"
  placeholder="Type here..."
  theme="bubble"
  appearance="fill"
/>`;

  typescriptCode = `import { NgxMatQuillFormField } from 'ngx-mat-quill';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgxMatQuillFormField],
  template: \`
    <ngx-mat-quill-form-field
      label="Rich Text (Bubble)"
      placeholder="Type here..."
      theme="bubble"
      appearance="fill"
    />
  \`
})
export class ExampleComponent {}`;
}
