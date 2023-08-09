import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router'; 
import { AuthService } from '../auht/auht.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('paso por guards');
  const router = inject(Router);
  const authService = inject(AuthService)

  return authService.isAuthenticated().pipe(
    map((isAuth)=>{
      if (isAuth) return true;
     return router.createUrlTree(['/auht/login']) 
    })
    
    
    
    
 
  )


};
