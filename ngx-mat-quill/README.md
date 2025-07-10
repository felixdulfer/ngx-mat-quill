# ngx-mat-quill

This library provides Angular Material-themed Quill editor components for Angular projects.

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
  <lib-mat-quill-form-field-control placeholder="Type here..." [required]="true"></lib-mat-quill-form-field-control>
  <mat-label>Rich Text</mat-label>
</mat-form-field>
```

You can also use the fixed-toolbar and inline-toolbar editors:

```html
<lib-mat-quill-editor></lib-mat-quill-editor> <lib-mat-quill-inline-editor></lib-mat-quill-inline-editor>
```

## Running unit tests

Run `nx test ngx-mat-quill` to execute the unit tests.
