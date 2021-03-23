import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AOMComponent } from './aom.component';

describe('AOMComponent', () => {
  let component: AOMComponent;
  let fixture: ComponentFixture<AOMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AOMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AOMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
