import { Injectable } from '@angular/core';
import { createUserData, users } from './models';
import { BehaviorSubject, Observable, Subject, delay, of, take } from 'rxjs';

const USERS_DB: Observable<users[]> = of ([
  
  {
    id: 1,
    name: 'pedro',
    surname: 'aular',
    email: 'pedro@jmail.com',
    password: 'Qq12!!',
  },
  {
    id: 2,
    name: 'Diego',
    surname:'Cordoba',
    email: 'Dieg@jmail.com',
    password: 'Dieg12=?',
  },
  {
    id: 3,
    name: 'Susana',
    surname: 'Medina',
    email: 'Susi@jmail.com',
    password: 'Susi12!"',
  },
  {
    id: 4,
    name: 'Juan ',
    surname: 'Capote',
    email: 'Juan@jmail.com',
    password: 'Juan34#$',
  },
]).pipe(delay(1000))


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users$ = new BehaviorSubject<users[]>([]);

  constructor() {
    this.loadUsers();
  }

  loadUsers(): void {
    USERS_DB.subscribe({
      next: (usuariosDesdeDb) => this.users$.next(usuariosDesdeDb)
    });
  }

  getUsers(): Observable<users[]> {
    return this.users$.asObservable();
  }

  createUser(usuario: createUserData): void {



    this.users$.pipe(take(1)).subscribe({


      next: (arregloActual) =>
      this.users$.next([
        ...arregloActual,


      {...usuario, id:arregloActual.length + 1 },
    ]),
      })
  }

  updateUsersById(id: number, data: Partial<users>): void {
    this.users$.pipe(take(1)).subscribe({
      next: (arregloActual) => {
        const usuariosActualizados = arregloActual.map((u) =>
          u.id === id ? { ...u, ...data } : u
        );
        this.users$.next(usuariosActualizados);
      }
    });
  }
}