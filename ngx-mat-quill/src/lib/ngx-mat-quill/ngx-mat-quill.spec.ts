import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxMatQuill } from './ngx-mat-quill';

describe('NgxMatQuill', () => {
  let component: NgxMatQuill;
  let fixture: ComponentFixture<NgxMatQuill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMatQuill],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxMatQuill);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
