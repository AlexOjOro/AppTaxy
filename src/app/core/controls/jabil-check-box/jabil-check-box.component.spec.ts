import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JabilCheckBoxComponent } from './jabil-check-box.component';

describe('JabilCheckBoxComponent', () => {
  let component: JabilCheckBoxComponent;
  let fixture: ComponentFixture<JabilCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JabilCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JabilCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
