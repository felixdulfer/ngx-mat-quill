import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatQuillEditorComponent } from './ngx-mat-quill';

describe('MatQuillEditorComponent', () => {
  let component: MatQuillEditorComponent;
  let fixture: ComponentFixture<MatQuillEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatQuillEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MatQuillEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
