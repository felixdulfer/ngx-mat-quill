import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecomposedBubbleExample } from './precomposed-bubble-example';

describe('PrecomposedBubbleExample', () => {
  let component: PrecomposedBubbleExample;
  let fixture: ComponentFixture<PrecomposedBubbleExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecomposedBubbleExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecomposedBubbleExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
