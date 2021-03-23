import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'jabil-select',
  templateUrl: './jabil-select.component.html',
  styleUrls: ['./jabil-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => JabilSelectComponent),
      multi: true
    }
  ]
})
export class JabilSelectComponent implements OnInit, ControlValueAccessor {
  @Input() dataSource: any[];
  @Input() displayText: string;
  @Input() displayValue: string;
  @Input() isMultiple: boolean = false;
  @Input() caption: string;
  @Input() nameControl: string;
  value: any;
  isDisabled: boolean;
  onChange = (_: any) => { }
  onTouch = () => { }

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(value: any) {
    console.log(value);
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
