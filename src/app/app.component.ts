import { Component } from '@angular/core';
import { CalculatorModel } from './models/calculator.model';
import { CalculatorService } from './services/app.calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "AngularHomework";
  public calculatorModel = new CalculatorModel()
  constructor(private calculatorService: CalculatorService) {}

  calculateAmounts = (inputFor: string): void => {
    this.calculatorService.calculateAmounts(inputFor, this.calculatorModel);
  }
}
