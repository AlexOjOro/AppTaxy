import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JabilSelectComponent } from './jabil-select.component';

describe('JabilSelectComponent', () => {
  let component: JabilSelectComponent;
  let fixture: ComponentFixture<JabilSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JabilSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JabilSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
