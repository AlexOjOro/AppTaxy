import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-cancel',
  templateUrl: './button-cancel.component.html',
  styleUrls: ['./button-cancel.component.scss']
})
export class ButtonCancelComponent implements OnInit {
  @Output() eventClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.eventClick.emit();
  }
}
