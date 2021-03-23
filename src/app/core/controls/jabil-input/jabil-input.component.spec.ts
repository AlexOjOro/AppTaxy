import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JabilInputComponent } from './jabil-input.component';

describe('JabilInputComponent', () => {
  let component: JabilInputComponent;
  let fixture: ComponentFixture<JabilInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JabilInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JabilInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
