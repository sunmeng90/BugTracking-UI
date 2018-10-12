import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugEditorComponent } from './bug-editor.component';

describe('BugEditorComponent', () => {
  let component: BugEditorComponent;
  let fixture: ComponentFixture<BugEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
