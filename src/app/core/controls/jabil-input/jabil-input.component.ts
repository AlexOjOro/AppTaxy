import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'jabil-input',
  templateUrl: './jabil-input.component.html',
  styleUrls: ['./jabil-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JabilInputComponent),
      multi: true
    }
  ]
})
export class JabilInputComponent implements OnInit, ControlValueAccessor {
  @Input() caption: string;
  @Input() nameControl: string;
  @Input() type: string = "text";
  value: any;
  isDisabled: boolean;
  onChange = (_: any) => { }
  onTouch = () => { }

  constructor() { }

  ngOnInit(): void {
  }

  onInput(value: any) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  writeValue(value: any): void {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }

  registerOnChange(fn: any): void { this.onChange = fn; }
  registerOnTouched(fn: any): void { this.onTouch = fn; }
  setDisabledState(isDisabled: boolean): void { this.isDisabled = isDisabled; }
}
