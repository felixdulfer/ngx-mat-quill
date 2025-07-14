import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormPrecomposedExample } from './reactive-form-precomposed-example';

describe('ReactiveFormPrecomposedExample', () => {
  let component: ReactiveFormPrecomposedExample;
  let fixture: ComponentFixture<ReactiveFormPrecomposedExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormPrecomposedExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormPrecomposedExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
