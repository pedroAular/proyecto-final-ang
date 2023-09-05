import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";
import { AuthService } from "../../auht.service";



describe('LoginComponent', () => {
    let component: LoginComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [MatFormFieldModule, MatInputModule, HttpClientTestingModule,]
        });

        component = TestBed.createComponent(LoginComponent).componentInstance
    });

    it('el formulario debe ser inválido si los campos quedan en blanco', () => {
        component.emailControl.setValue('');
        component.passwordControl.setValue('');
        expect(component.loginForm.invalid).toBe(true);
    });
    it('al llamar al método login() y el formulario es inválido, se debe llamar al método markAllAsTouched() de la propiedad loginForm', () => {
        component.emailControl.setValue('');
        component.passwordControl.setValue('');
        expect(component.loginForm.invalid).toBeTrue();
    
        const spyOfMarkAllAsTouched = spyOn(component.loginForm, 'markAllAsTouched');
        component.login();
    
        expect(spyOfMarkAllAsTouched).toHaveBeenCalled();
        
    });
    it('Al llamar login() y el fomrulario es Valido, debe haberse llamado el metodo login del AuthService', () =>{
        const authService = TestBed.inject(AuthService);
        component.emailControl.setValue('jose@g.com');
        component.passwordControl.setValue('1!qQwe32');
        expect(component.loginForm.valid).toBeTrue();
        const spyOnAuhtServiceLogin = spyOn(authService,'login');
        component.login();
        expect (spyOnAuhtServiceLogin).toHaveBeenCalled()
    })
});
