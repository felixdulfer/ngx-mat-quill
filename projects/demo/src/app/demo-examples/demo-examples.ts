import { Component } from '@angular/core';
import { BasicSnowExampleComponent } from '../basic-snow-example/basic-snow-example';
import { BasicBubbleExampleComponent } from '../basic-bubble-example/basic-bubble-example';
import { MaterialSnowExampleComponent } from '../material-snow-example/material-snow-example';
import { MaterialBubbleExampleComponent } from '../material-bubble-example/material-bubble-example';
import { PrecomposedSnowExampleComponent } from '../precomposed-snow-example/precomposed-snow-example';
import { PrecomposedBubbleExampleComponent } from '../precomposed-bubble-example/precomposed-bubble-example';
import { ReactiveFormExampleComponent } from '../reactive-form-example/reactive-form-example';
import { ReactiveFormPrecomposedExampleComponent } from '../reactive-form-precomposed-example/reactive-form-precomposed-example';

@Component({
  selector: 'app-demo-examples',
  standalone: true,
  imports: [
    BasicSnowExampleComponent,
    BasicBubbleExampleComponent,
    MaterialSnowExampleComponent,
    MaterialBubbleExampleComponent,
    PrecomposedSnowExampleComponent,
    PrecomposedBubbleExampleComponent,
    ReactiveFormExampleComponent,
    ReactiveFormPrecomposedExampleComponent,
  ],
  templateUrl: './demo-examples.html',
  styleUrl: './demo-examples.css',
})
export class DemoExamplesComponent {}
