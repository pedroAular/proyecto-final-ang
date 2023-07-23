import { Injectable } from '@angular/core';
import { users } from './models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
private users: users[]=[
  
    {
      id: 0,
      name: '',
      surname: '',
      email: '',
      password: '',
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
