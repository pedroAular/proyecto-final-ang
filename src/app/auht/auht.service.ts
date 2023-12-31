import { Injectable } from "@angular/core";
import { loginPayload } from "./models";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { users } from "../dashboard/pages/users/models";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { authReducer } from "../store/auht/auth.reducer";
import { AuthActions } from "../store/auht/auth.actions";

@Injectable({ providedIn: 'root' })
export class AuthService {

  public authUsers$ = new BehaviorSubject<users | null>(null);

  constructor(
    private notifier: NotifierService, 
    private router: Router,
    private httpClient: HttpClient,
    private store:Store
    ) {}


  isAuthenticated(): Observable<boolean> {
   return this.httpClient.get<users[]>('http://localhost:3000/users', {
    params:{
      token: localStorage.getItem('token') || '',
    }
   }).pipe(
    map((usersResult) => {
      return !!usersResult.length
    })
   )
  }

  login(payload: loginPayload): void {
    this.httpClient.get<users[]>('http://localhost:3000/users',{
      params:{
        email:payload.email || '',
        password:payload.password || '',
      }
    }).subscribe({
      next: (response) =>{
        if (response.length){
          const authUsers= response[0];
          this.authUsers$.next(authUsers);
          this.store.dispatch(AuthActions.setAuthUsers({payLoad : authUsers}))
          this.router.navigate(['/dashboard']);
          localStorage.setItem('token', authUsers.token); 
        }else {
  this.notifier.showError('Email o contraseña inválido');
      this.authUsers$.next(null);
      this.store.dispatch(AuthActions.setAuthUsers({payLoad : null}))
        }
      },
      error:(err) =>{
        if( err instanceof HttpErrorResponse){
          let mensaje ='Problemas de configuración del servidor';
          if (err.status ===500){
          }
          if (err.status===401){
          mensaje= 'Credenciales incorrectas';
        }
        this.notifier.showError(mensaje)
        }
      
      },
    });
    
    }
    public logout(): void {
      this.store.dispatch(AuthActions.setAuthUsers({payLoad : null}))
  }
  
}
