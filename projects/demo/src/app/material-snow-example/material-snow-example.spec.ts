import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSnowExample } from './material-snow-example';

describe('MaterialSnowExample', () => {
  let component: MaterialSnowExample;
  let fixture: ComponentFixture<MaterialSnowExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialSnowExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialSnowExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
