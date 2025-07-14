import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoExamples } from './demo-examples';

describe('DemoExamples', () => {
  let component: DemoExamples;
  let fixture: ComponentFixture<DemoExamples>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoExamples]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoExamples);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
