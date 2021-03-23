import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'jabil-checkbox',
  templateUrl: './jabil-check-box.component.html',
  styleUrls: ['./jabil-check-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JabilCheckBoxComponent),
      multi: true
    }
  ]
})
export class JabilCheckBoxComponent implements OnInit, ControlValueAccessor {
  @Input() nameControl: string;
  @Input() caption: string;
  value: boolean = false;
  isDisabled: boolean;
  onChange = (_: any) => { }
  onTouch = () => { }

  constructor() { }

  ngOnInit(): void {
  }

  onChecked(event: any) {
    this.value = event.target["checked"];
    this.onTouch();
    this.onChange(this.value);
    console.log(this.value);
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value || false;
    } else {
      this.value = false;
    }
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouch = fn; }
  setDisabledState(isDisabled: boolean): void { this.isDisabled = isDisabled; }
}
