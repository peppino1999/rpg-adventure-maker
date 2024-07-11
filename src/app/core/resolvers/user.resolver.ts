// import { inject } from '@angular/core';
// import { ActivatedRoute, ResolveFn, Router } from '@angular/router';
// import { Observable, catchError, throwError } from 'rxjs';

// export const userResolver: ResolveFn<User> = (route, state) => {
//  const router = inject(Router)
//  const activatedRoute = inject (ActivatedRoute)
//   return catchErrors<User>(
//     inject(UsersService).getUser(route.params['id']),
//     () => router.navigate(['../'], {
//         relativeTo: activatedRoute
//     })
//   )
    
// };

// export const usersResolver: ResolveFn<User[]> = (route, state) =>{
//     return catchErrors<User[]>(
//         inject(UsersService).getUsers()
//     )
// }

// function catchErrors<T>(obs:Observable<T>, callback: Function = () => null):Observable<T>{
//     return obs.pipe(
//         catchError((error) => {
//           callback()
//           return throwError(() => error);
//         })
//       );
// }
