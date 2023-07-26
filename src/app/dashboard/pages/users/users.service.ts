import { Injectable } from '@angular/core';
import { users } from './models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private users: users[]=[
  
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
];

private users$ = new BehaviorSubject<users[]>([]);


  constructor() { }
loadUsers(): void{
  this.users$.next(this.users);
}


  getUsers(): Subject<users[]>{
    return this.users$;
  }
createUser(users:users):void{
  this.users= [
    ...this.users, 
    users
  ]
}


}
