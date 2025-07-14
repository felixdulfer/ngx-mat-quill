import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSnowExample } from './basic-snow-example';

describe('BasicSnowExample', () => {
  let component: BasicSnowExample;
  let fixture: ComponentFixture<BasicSnowExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicSnowExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSnowExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
