import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceCodeDisplay } from './source-code-display';

describe('SourceCodeDisplay', () => {
  let component: SourceCodeDisplay;
  let fixture: ComponentFixture<SourceCodeDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SourceCodeDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SourceCodeDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
