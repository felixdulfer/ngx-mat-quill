import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-source-code-display',
  standalone: true,
  imports: [CommonModule, MatTabsModule],
  templateUrl: './source-code-display.html',
  styleUrl: './source-code-display.css',
})
export class SourceCodeDisplayComponent {
  @Input() htmlCode = '';
  @Input() typescriptCode = '';
  @Input() title = 'Source Code';
}
