# ngx-mat-quill

This library provides an Angular Material-themed Quill editor component for Angular projects.

## Installation

Install the library and its peer dependencies:

```sh
npm install @felixdulfer/ngx-mat-quill ngx-quill quill @angular/material @angular/cdk
```

## Quill CSS Setup

To ensure the Quill editor is styled correctly, add the following to your app's `angular.json` (or `project.json` for Nx):

```json
"styles": [
  "apps/demo-app/src/styles.css",
  "node_modules/quill/dist/quill.snow.css",
  "node_modules/quill/dist/quill.bubble.css"
]
```

Or, import them in your global styles file:

```css
@import 'quill/dist/quill.snow.css';
@import 'quill/dist/quill.bubble.css';
```

## Usage Example

```html
<mat-form-field appearance="outline">
  <ngx-mat-quill placeholder="Type here..." [required]="true" theme="snow"></ngx-mat-quill>
  <mat-label>Rich Text (Snow Theme)</mat-label>
</mat-form-field>

<mat-form-field appearance="outline">
  <ngx-mat-quill placeholder="Type here..." [required]="true" theme="bubble"></ngx-mat-quill>
  <mat-label>Rich Text (Bubble Theme)</mat-label>
</mat-form-field>
```

## Running unit tests

Run `nx test ngx-mat-quill` to execute the unit tests.
