import { Directive } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from "@angular/forms";

@Directive({
    selector: '[appAmountValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: AmountValidatorDirective, multi: true }]
})
export class AmountValidatorDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        var re = new RegExp('^[0-9.]+$');
        if (!re.test(control.value) && control.value != "") {
            return { 'amountInvalid': true };
        }
        return null;
    }
}