import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormExample } from './reactive-form-example';

describe('ReactiveFormExample', () => {
  let component: ReactiveFormExample;
  let fixture: ComponentFixture<ReactiveFormExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
