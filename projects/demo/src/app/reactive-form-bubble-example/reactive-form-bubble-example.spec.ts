import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormBubbleExample } from './reactive-form-bubble-example';

describe('ReactiveFormBubbleExample', () => {
  let component: ReactiveFormBubbleExample;
  let fixture: ComponentFixture<ReactiveFormBubbleExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormBubbleExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormBubbleExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
