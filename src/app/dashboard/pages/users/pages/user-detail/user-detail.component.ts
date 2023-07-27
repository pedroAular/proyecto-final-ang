import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { users } from '../../models';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  public users: users | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private notifierService: NotifierService
  ) {
    const userId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(userId);

    // Verifica si el parámetro "id" es un número válido
    if (isNaN(Number(userId))) {
      // Si no es un número válido, redirige a otra ruta o muestra una notificación
      this.router.navigate(['dashboard','users']); // Reemplaza '/ruta-invalida' por la ruta que desees redirigir en caso de un "id" inválido.
      this.notifierService.showError('El ID de usuario no es válido', 'Ups!'); 
    } else {
      // Si es un número válido, carga los detalles del usuario
      this.loadUsers();
    }
  }

  loadUsers(): void {
/*     const userId = this.activatedRoute.snapshot.paramMap.get('id');
    this.usersService.getUsersById(userId).subscribe({
      next: (users: users | null) => {
        this.users = users;
      },
      error: (error) => {
        console.error(error);
      }
    });
  } */
}



/* loadUsers(): void{
  UsersService.getUsersById((this.activatedRoute.snapshot.paramMap.get('id')).suscribe({
    next: (users)=> {
      this.users=users
    }
  })
} */
}

