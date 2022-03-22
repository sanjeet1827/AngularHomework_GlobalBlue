import { TestBed } from "@angular/core/testing";
import { CalculatorModel } from "../models/calculator.model";
import { CalculatorService } from "./app.calculator.service";

describe('ValueService', () => {
    let service: CalculatorService;
    let calculatorModel: CalculatorModel;
    beforeEach(() => { 
        TestBed.configureTestingModule({ providers: [CalculatorService] });
        service = TestBed.inject(CalculatorService);
        calculatorModel = new CalculatorModel()
    });

    it('#ForNetInout should calculate vat amount and gross amount', () => {
        calculatorModel.vatRate=10;
        calculatorModel.netAmount=100;
        service.calculateAmounts('NET',calculatorModel);
        expect(calculatorModel.vatAmount).toBe(10);
        expect(calculatorModel.grossAmount).toBe(110);
    });

    it('#ForVATInout should calculate net amount and gross amount', () => {
        calculatorModel.vatRate=10;
        calculatorModel.vatAmount=10;
        service.calculateAmounts('VAT',calculatorModel);
        expect(calculatorModel.netAmount).toBe(100);
        expect(calculatorModel.grossAmount).toBe(110);
    });

    it('#ForGrossInout should calculate net amount and vat amount', () => {
        calculatorModel.vatRate=10;
        calculatorModel.grossAmount=110;
        service.calculateAmounts('GROSS',calculatorModel);
        expect(calculatorModel.netAmount).toBe(100);
        expect(calculatorModel.vatAmount).toBe(10);
    });
});