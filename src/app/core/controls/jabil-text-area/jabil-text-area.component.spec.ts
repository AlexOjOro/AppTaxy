import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JabilTextAreaComponent } from './jabil-text-area.component';

describe('JabilTextAreaComponent', () => {
  let component: JabilTextAreaComponent;
  let fixture: ComponentFixture<JabilTextAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JabilTextAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JabilTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
