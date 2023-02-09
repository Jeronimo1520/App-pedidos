import { AbstractControl } from "@angular/forms"

export const ValidacionDePasswords = (passwordControName:string,
    confirmarPasswordControlName: string) =>{
        const validator = (form:AbstractControl) =>{
            const passwordControl = form.get(passwordControName);
            const confirmarPasswordControl = form.get(confirmarPasswordControlName);

            if(!passwordControl || !confirmarPasswordControl) return;

            if(passwordControl.value !== confirmarPasswordControl.value){
                confirmarPasswordControl.setErrors({notMatch: true});
            }else{
                const errors = confirmarPasswordControl.errors;
                if(!errors) return;

                delete errors["notMatch"];
                confirmarPasswordControl.setErrors(errors);
            }
        }

        return validator;
    }