import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecomposedSnowExample } from './precomposed-snow-example';

describe('PrecomposedSnowExample', () => {
  let component: PrecomposedSnowExample;
  let fixture: ComponentFixture<PrecomposedSnowExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrecomposedSnowExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecomposedSnowExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
