import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";

describe('LoginComponent', () => {
    let component: LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [MatFormFieldModule, MatInputModule, HttpClientTestingModule]
        });

        const fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('el formulario debe ser inválido si los campos quedan en blanco', () => {
        component.emailControl.setValue('');
        component.passwordControl.setValue('');
        expect(component.loginForm.invalid).toBe(true);
    });

    it('al llamar al método login() y el formulario es inválido, se debe llamar al método markAllAsTouched() de la propiedad loginForm', () => {
        spyOn(component.loginForm, 'markAllAsTouched');
        component.login();
        expect(component.loginForm.markAllAsTouched).toHaveBeenCalled();
    });
});
