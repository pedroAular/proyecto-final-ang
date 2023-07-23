import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';


interface MyCustomNotification {
  type: 'success' | 'error',
  tittle:string,
  message: string,
}



@Injectable({
  providedIn: 'root'
})
export class NotifierService {
private notifer$ = new Subject <MyCustomNotification>()


  constructor() {
    this.notifer$.subscribe({
      next:(myNotification)=> {
        Swal.fire(myNotification.tittle, myNotification.message, myNotification.type)
      }
    })
   }
showSuccess ( message: string, tittle = 'Realizazo',): void{
  this.notifer$.next({
    type: 'success',
    tittle,
    message,
  })
}



}

