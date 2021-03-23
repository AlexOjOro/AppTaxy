import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-save',
  templateUrl: './button-save.component.html',
  styleUrls: ['./button-save.component.scss']
})
export class ButtonSaveComponent implements OnInit {
  @Output() eventClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.eventClick.emit();
  }

}
