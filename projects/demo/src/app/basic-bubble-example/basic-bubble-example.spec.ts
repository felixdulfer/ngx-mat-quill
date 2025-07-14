import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicBubbleExample } from './basic-bubble-example';

describe('BasicBubbleExample', () => {
  let component: BasicBubbleExample;
  let fixture: ComponentFixture<BasicBubbleExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicBubbleExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicBubbleExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
