import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./index-page/index-page').then((m) => m.IndexPageComponent),
  },
  {
    path: 'basic-snow',
    loadComponent: () =>
      import('./basic-snow-example/basic-snow-example').then(
        (m) => m.BasicSnowExampleComponent
      ),
  },
  {
    path: 'basic-bubble',
    loadComponent: () =>
      import('./basic-bubble-example/basic-bubble-example').then(
        (m) => m.BasicBubbleExampleComponent
      ),
  },
  {
    path: 'material-snow',
    loadComponent: () =>
      import('./material-snow-example/material-snow-example').then(
        (m) => m.MaterialSnowExampleComponent
      ),
  },
  {
    path: 'material-bubble',
    loadComponent: () =>
      import('./material-bubble-example/material-bubble-example').then(
        (m) => m.MaterialBubbleExampleComponent
      ),
  },
  {
    path: 'precomposed-snow',
    loadComponent: () =>
      import('./precomposed-snow-example/precomposed-snow-example').then(
        (m) => m.PrecomposedSnowExampleComponent
      ),
  },
  {
    path: 'precomposed-bubble',
    loadComponent: () =>
      import('./precomposed-bubble-example/precomposed-bubble-example').then(
        (m) => m.PrecomposedBubbleExampleComponent
      ),
  },
  {
    path: 'reactive-form',
    loadComponent: () =>
      import('./reactive-form-example/reactive-form-example').then(
        (m) => m.ReactiveFormExampleComponent
      ),
  },
  {
    path: 'reactive-form-precomposed',
    loadComponent: () =>
      import(
        './reactive-form-precomposed-example/reactive-form-precomposed-example'
      ).then((m) => m.ReactiveFormPrecomposedExampleComponent),
  },
];
