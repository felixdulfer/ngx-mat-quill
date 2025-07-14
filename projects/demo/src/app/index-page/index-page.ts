import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [RouterModule, MatCardModule, MatButtonModule],
  templateUrl: './index-page.html',
  styleUrl: './index-page.css',
})
export class IndexPageComponent {
  examples = [
    {
      title: 'Basic Quill Editor (Snow Theme)',
      description: 'Simple Quill editor with snow theme',
      route: '/basic-snow',
      category: 'Basic',
    },
    {
      title: 'Basic Quill Editor (Bubble Theme)',
      description: 'Simple Quill editor with bubble theme',
      route: '/basic-bubble',
      category: 'Basic',
    },
    {
      title: 'Material Quill Editor (Snow Theme)',
      description: 'Quill editor integrated with Angular Material form field',
      route: '/material-snow',
      category: 'Material Integration',
    },
    {
      title: 'Material Quill Editor (Bubble Theme)',
      description:
        'Quill editor with bubble theme integrated with Angular Material',
      route: '/material-bubble',
      category: 'Material Integration',
    },
    {
      title: 'Pre-composed Form Field (Snow Theme)',
      description:
        'Pre-composed component combining Quill and Material form field',
      route: '/precomposed-snow',
      category: 'Pre-composed',
    },
    {
      title: 'Pre-composed Form Field (Bubble Theme)',
      description: 'Pre-composed component with bubble theme',
      route: '/precomposed-bubble',
      category: 'Pre-composed',
    },
    {
      title: 'Reactive Form Example',
      description: 'Quill editor integrated with reactive forms',
      route: '/reactive-form',
      category: 'Reactive Forms',
    },
    {
      title: 'Reactive Form Example (Pre-composed)',
      description: 'Pre-composed component with reactive forms',
      route: '/reactive-form-precomposed',
      category: 'Reactive Forms',
    },
  ];

  getExamplesByCategory() {
    const categories = this.examples.reduce((acc, example) => {
      if (!acc[example.category]) {
        acc[example.category] = [];
      }
      acc[example.category].push(example);
      return acc;
    }, {} as Record<string, typeof this.examples>);

    return Object.entries(categories);
  }
}
