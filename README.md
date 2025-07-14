# ngx-mat-quill

A rich text editor component for Angular Material that integrates Quill.js with Angular Material form fields.

## Features

- 🎨 **Multiple Themes**: Support for both Snow and Bubble themes
- 🔧 **Material Integration**: Seamless integration with Angular Material form fields
- 📝 **Reactive Forms**: Full support for Angular reactive forms
- 🎯 **Pre-composed Components**: Ready-to-use form field components
- ♿ **Accessibility**: Proper Material Design accessibility features
- 🎨 **Customizable**: Easy to customize and extend

## Installation

```bash
npm install @felixdulfer/ngx-mat-quill
```

## Quick Start

```typescript
import { NgxMatQuill } from "@felixdulfer/ngx-mat-quill";

@Component({
  selector: "app-example",
  standalone: true,
  imports: [NgxMatQuill],
  template: ` <ngx-mat-quill placeholder="Type here..." theme="snow" /> `,
})
export class ExampleComponent {}
```

## Usage Examples

### Basic Usage

```typescript
import { NgxMatQuill } from '@felixdulfer/ngx-mat-quill';

// Snow theme (default)
<ngx-mat-quill placeholder="Type here..." theme="snow" />

// Bubble theme
<ngx-mat-quill placeholder="Type here..." theme="bubble" />
```

### Material Integration

```typescript
import { NgxMatQuill, MatQuillFormFieldControlDirective } from "@felixdulfer/ngx-mat-quill";
import { MatFormFieldModule } from "@angular/material/form-field";

@Component({
  imports: [NgxMatQuill, MatQuillFormFieldControlDirective, MatFormFieldModule],
  template: `
    <mat-form-field appearance="outline">
      <ngx-mat-quill ngxMatQuillFormFieldControl placeholder="Type here..." theme="snow" />
      <mat-label>Rich Text Editor</mat-label>
    </mat-form-field>
  `,
})
export class ExampleComponent {}
```

### Pre-composed Component

```typescript
import { NgxMatQuillFormField } from "@felixdulfer/ngx-mat-quill";

@Component({
  imports: [NgxMatQuillFormField],
  template: ` <ngx-mat-quill-form-field label="Rich Text Editor" placeholder="Type here..." theme="snow" appearance="outline" /> `,
})
export class ExampleComponent {}
```

### Reactive Forms

```typescript
import { NgxMatQuill, MatQuillFormFieldControlDirective } from "@felixdulfer/ngx-mat-quill";
import { ReactiveFormsModule, FormGroup, FormControl } from "@angular/forms";

@Component({
  imports: [NgxMatQuill, MatQuillFormFieldControlDirective, ReactiveFormsModule],
  template: `
    <form [formGroup]="form">
      <mat-form-field appearance="outline">
        <ngx-mat-quill ngxMatQuillFormFieldControl formControlName="editor" placeholder="Type here..." theme="snow" />
        <mat-label>Rich Text Editor</mat-label>
      </mat-form-field>
    </form>
  `,
})
export class ExampleComponent {
  form = new FormGroup({
    editor: new FormControl("Initial value"),
  });
}
```

## Development

### Prerequisites

- Node.js (v18 or higher)
- Angular CLI
- Conventional Changelog tools

### Setup

```bash
# Install dependencies
npm install

# Install conventional changelog tools globally
npm install -g conventional-recommended-bump conventional-changelog

# Serve the demo app
npm start
```

### Building

```bash
# Build the library
ng build ngx-mat-quill

# Build the demo app
ng build demo
```

## Deployment

The project includes an automated deployment script that handles version bumping, building, and publishing to npm.

### Prerequisites

1. **NPM Login**: Make sure you're logged in to npm

   ```bash
   npm login
   ```

2. **Conventional Changelog Tools**: Install the required tools globally

   ```bash
   npm install -g conventional-recommended-bump conventional-changelog
   ```

3. **Git Setup**: Ensure you're on the main branch with a clean working directory

### Deploy

```bash
# Run the deployment script
npm run deploy
```

The deploy script will:

1. ✅ **Check prerequisites** (main branch, clean working directory, npm login)
2. 📊 **Determine version bump** using conventional-recommended-bump with Angular preset
3. 📝 **Update version** in package.json
4. 🔨 **Build the library** using Angular CLI
5. 📦 **Publish to npm** under `@felixdulfer/ngx-mat-quill`
6. 🏷️ **Create git tag** with the new version
7. 📤 **Push changes and tags** to the repository

### Manual Deployment

If you prefer to deploy manually:

```bash
# 1. Bump version (patch, minor, or major)
npm version patch|minor|major

# 2. Build the library
ng build ngx-mat-quill

# 3. Navigate to dist and publish
cd dist/ngx-mat-quill
npm publish --access public

# 4. Push tags
git push --tags
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Commit using conventional commit format
6. Push and create a pull request

### Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## License

MIT License - see LICENSE file for details.
