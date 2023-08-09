import { Injectable } from '@angular/core';
import { createUserData, users } from './models';
import { BehaviorSubject, Observable, defaultIfEmpty, map,mergeMap, take,} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users$ = new BehaviorSubject<users[]>([]);
  private users$ = this._users$.asObservable();

  constructor(private httpClient: HttpClient) {
    this.loadUsers();
  }

  loadUsers(): void {
    this.httpClient.get<users[]>('http://localhost:3000/users').subscribe({
      next: (response) => {
        console.log('RESPONSE:', response);
        this._users$.next(response);
      },
    });
  }

  getUsers(): Observable<users[]> {
    return this._users$.asObservable();
  }

  createUser(Payload: createUserData): void {
    this.httpClient
      .post<users>('http://localhost:3000/users', Payload)
      .pipe(
        mergeMap((userCreate) =>
          this.users$.pipe(
            take(1),
            map((arrayActual) => [...arrayActual, userCreate])
          )
        )
      )
      .subscribe({
        next: (arrayActualizado) => {
          this._users$.next(arrayActualizado);
        },
      });
    
  }

  updateUsersById(id: number, data: Partial<users>): void {
    this._users$.pipe(take(1)).subscribe({
      next: (arregloActual) => {
        const usuariosActualizados = arregloActual.map((u) =>
          u.id === id ? { ...u, ...data } : u
        );
        this._users$.next(usuariosActualizados);
      },
    }); 
  }

  usersToDelete(id:number):void{
    this.httpClient.delete('http://localhost:3000/users/'+ id).subscribe({
      next:(userDelete) => console.log(userDelete),
    })

  }
}
