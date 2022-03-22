import { Injectable } from '@angular/core';
import { CalculatorModel } from '../models/calculator.model';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {

    calculateAmounts = (inputFor: string, calculatorModel: CalculatorModel): void => {
        if (calculatorModel.vatRate != null && calculatorModel.vatRate !== undefined) {
          let gross = 0, vat=0, net =0;
          switch (inputFor) {
            case "NET":
              if (calculatorModel.netAmount)
              {
                vat = ((calculatorModel.netAmount * calculatorModel.vatRate) / 100);
                calculatorModel.vatAmount = Math.round((vat + Number.EPSILON) * 100) / 100;
                gross = parseInt(calculatorModel?.netAmount.toString()) + parseInt(calculatorModel.vatAmount.toString());
                calculatorModel.grossAmount = Math.round((gross + Number.EPSILON) * 100) / 100;
                if(isNaN(calculatorModel.grossAmount))
                {
                  calculatorModel.grossAmount = undefined;
                }
                if(isNaN(calculatorModel.vatAmount))
                {
                  calculatorModel.vatAmount = undefined;
                }
              }
              
              break;
            case "VAT":
              if (calculatorModel.vatAmount)
              {
                net = (calculatorModel.vatAmount * 100) / calculatorModel.vatRate;
                calculatorModel.netAmount = Math.round((net + Number.EPSILON) * 100) / 100;
                gross = parseInt(calculatorModel.netAmount.toString()) + parseInt(calculatorModel.vatAmount.toString());
                calculatorModel.grossAmount = Math.round((gross + Number.EPSILON) * 100) / 100;
                if(isNaN(calculatorModel.grossAmount))
                {
                  calculatorModel.grossAmount = undefined;
                }
                if(isNaN(calculatorModel.netAmount))
                {
                  calculatorModel.netAmount = undefined;
                }
              }
              break;
            case "GROSS":
              if (calculatorModel.grossAmount)
              {
                vat = calculatorModel.grossAmount / (1 + parseInt(calculatorModel.vatRate.toString()));
                calculatorModel.vatAmount = Math.round((vat + Number.EPSILON) * 100) / 100;
                net = parseInt(calculatorModel.grossAmount.toString()) * parseInt(calculatorModel.vatRate.toString()) / (1 + parseInt(calculatorModel.vatRate.toString()));
                calculatorModel.netAmount = Math.round((net + Number.EPSILON) * 100) / 100;
                if(isNaN(calculatorModel.vatAmount))
                {
                  calculatorModel.vatAmount = undefined;
                }
                if(isNaN(calculatorModel.netAmount))
                {
                  calculatorModel.netAmount = undefined;
                }
              }
              break;
          }
    
        }
      }

}