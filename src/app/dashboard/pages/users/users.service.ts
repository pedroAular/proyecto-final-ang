import { Injectable } from '@angular/core';
import { createUserData, users } from './models';
import { BehaviorSubject, Observable, defaultIfEmpty, map,mergeMap, take,} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotifierService } from 'src/app/core/services/notifier.service';
import { generateRandomString } from 'src/app/shared/utils/helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _users$ = new BehaviorSubject<users[]>([]);
  private users$ = this._users$.asObservable();
  private _isLoading$ = new BehaviorSubject(false);
  public isLoading$ = this._isLoading$.asObservable();
  constructor(private notifier: NotifierService ,private httpClient: HttpClient) {
    this.loadUsers();
  }

  loadUsers(): void {
    this._isLoading$.next(true);
    this.httpClient.get<users[]>(environment.baseApiUrl+'/users', {
    headers: new HttpHeaders({
    
    })
    }).subscribe({
      next: (response) => {
        console.log('RESPONSE:', response);
        this._users$.next(response);
      },
      error: ()=>{
        this.notifier.showError ('Ups error al cargar los alumnos')
      },
      complete:() =>{
        this._isLoading$.next(false);
      }
    });
  }

  getUsers(): Observable<users[]> {
    return this._users$.asObservable();
  }

  createUser(Payload: createUserData): void {
    const token= generateRandomString(20)
    this.httpClient
      .post<users>(environment.baseApiUrl+'/users', {...Payload, token})
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
    this.httpClient.put(environment.baseApiUrl+'/users/' + id, data).subscribe({
      next:()=> this.loadUsers(),
    }) 
  }

  usersToDelete(id: number): void {
    this.httpClient.delete(environment.baseApiUrl+'/users/' + id).subscribe({
      next: (userDelete) => {
        console.log(userDelete);

        const updatedUsers = this._users$.value.filter(u => u.id !== id);
        this._users$.next(updatedUsers);
      },
    });
  }
  
}
