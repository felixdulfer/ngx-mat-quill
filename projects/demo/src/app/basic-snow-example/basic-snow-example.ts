import { Component } from '@angular/core';
import { NgxMatQuill } from 'ngx-mat-quill';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SourceCodeDisplayComponent } from '../source-code-display/source-code-display';

@Component({
  selector: 'app-basic-snow-example',
  standalone: true,
  imports: [
    NgxMatQuill,
    MatTabsModule,
    MatButtonModule,
    RouterModule,
    SourceCodeDisplayComponent,
  ],
  templateUrl: './basic-snow-example.html',
  styleUrl: './basic-snow-example.css',
})
export class BasicSnowExampleComponent {
  htmlCode = `<ngx-mat-quill placeholder="Type here..." theme="snow" />`;

  typescriptCode = `import { NgxMatQuill } from 'ngx-mat-quill';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [NgxMatQuill],
  template: \`
    <ngx-mat-quill placeholder="Type here..." theme="snow" />
  \`
})
export class ExampleComponent {}`;
}
