import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {
  @Output() eventClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.eventClick.emit();
  }
}
