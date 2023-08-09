import { Injectable } from "@angular/core";
import { loginPayload } from "./models";
import { BehaviorSubject, Observable, map, take } from "rxjs";
import { users } from "../dashboard/pages/users/models";
import { NotifierService } from "../core/services/notifier.service";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {

  public authUsers$ = new BehaviorSubject<users | null>(null);

  constructor(private notifier: NotifierService, private router: Router) {}

  isAuthenticated(): Observable<boolean> {
    return this.authUsers$.pipe(
      take(1),
      map(user => !!user) // Corrección aquí
    );
  }

  login(payload: loginPayload): void {

    const MOCK_USER: users = {
      id: 50,
      name: "mockname",
      surname: "Mocksurname",
      email: "mock@email.com",
      password: "1234567"
    }

    if (payload.email === MOCK_USER.email && payload.password === MOCK_USER.password) {
      this.authUsers$.next(MOCK_USER);
      this.router.navigate(['/dashboard']);
    } else {
      this.notifier.showError('Email o contraseña inválido');
      this.authUsers$.next(null);
    }
  }
}
