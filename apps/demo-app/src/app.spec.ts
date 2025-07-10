import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuillEditor } from './app';

describe('QuillEditor', () => {
  let component: QuillEditor;
  let fixture: ComponentFixture<QuillEditor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuillEditor],
    }).compileComponents();

    fixture = TestBed.createComponent(QuillEditor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
