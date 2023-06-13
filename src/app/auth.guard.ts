import { CanActivateFn, Router } from '@angular/router';

export const authguard: CanActivateFn = () => {
  const router = new Router(); // Instantiate the Router

  if (localStorage.getItem('token')) {
    return true; // User is authenticated
  } 
  else {
    router.navigate(['login']); // Redirect to the signin page
    return false;
  }
};
