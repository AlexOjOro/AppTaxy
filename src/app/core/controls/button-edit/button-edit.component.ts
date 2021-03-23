import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.scss']
})
export class ButtonEditComponent implements OnInit {
  @Output() eventClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    this.eventClick.emit();
  }
}
