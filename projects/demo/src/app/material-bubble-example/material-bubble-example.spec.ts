import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBubbleExample } from './material-bubble-example';

describe('MaterialBubbleExample', () => {
  let component: MaterialBubbleExample;
  let fixture: ComponentFixture<MaterialBubbleExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialBubbleExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialBubbleExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
