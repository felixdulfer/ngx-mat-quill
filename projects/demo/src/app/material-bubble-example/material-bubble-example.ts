import { Component } from '@angular/core';
import { NgxMatQuill, MatQuillFormFieldControlDirective } from 'ngx-mat-quill';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SourceCodeDisplayComponent } from '../source-code-display/source-code-display';

@Component({
  selector: 'app-material-bubble-example',
  standalone: true,
  imports: [
    NgxMatQuill,
    MatQuillFormFieldControlDirective,
    MatFormFieldModule,
    MatTabsModule,
    MatButtonModule,
    RouterModule,
    SourceCodeDisplayComponent,
  ],
  templateUrl: './material-bubble-example.html',
  styleUrl: './material-bubble-example.css',
})
export class MaterialBubbleExampleComponent {
  htmlCode = `<mat-form-field appearance="outline" class="mat-quill-form-field">
  <ngx-mat-quill
    ngxMatQuillFormFieldControl
    placeholder="Type here..."
    theme="bubble"
  />
  <mat-label>Rich Text (Bubble Theme)</mat-label>
</mat-form-field>`;

  typescriptCode = `import { NgxMatQuill, MatQuillFormFieldControlDirective } from 'ngx-mat-quill';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgxMatQuill, MatQuillFormFieldControlDirective, MatFormFieldModule],
  template: \`
    <mat-form-field appearance="outline" class="mat-quill-form-field">
      <ngx-mat-quill
        ngxMatQuillFormFieldControl
        placeholder="Type here..."
        theme="bubble"
      />
      <mat-label>Rich Text (Bubble Theme)</mat-label>
    </mat-form-field>
  \`
})
export class ExampleComponent {}`;
}
