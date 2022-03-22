import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './app.input.html',
  styleUrls: ['./app.input.css']
})
export class InputComponent  {
  @Input() inputLabel = "";
  @Input() inputPlaceholder = "";
  @Input() InputName = '';
  @Input() inputValue? : number = 0;
  @Output() inputValueChange = new EventEmitter<number>();

  updateValue(){
    this.inputValueChange.emit(this.inputValue);
  }
}
