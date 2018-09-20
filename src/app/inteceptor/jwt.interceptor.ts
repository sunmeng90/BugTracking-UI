import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    // const authToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyb290IiwicGVybWlzc2lvbnMiOlsiZW1wbG95ZWU6Y3JlYXRlIiwiZW1wbG95ZWU6dXBkYXRlIiwiZW1wbG95ZWVSZXBvcnQ6cmVhZCIsImVtcGxveWVlOnJlYWQiLCJlbXBsb3llZTpkZWxldGUiXSwiZXhwIjoxNTM3Mjg0ODEwLCJpYXQiOjE1MzcxOTg0MTAsImlzcyI6ImJ1Z3RyYWNraW5nLmlvIn0.tgAfnRqZExqyJ5iUSkroUbvymWeIMoVeD4zRphulj4Yj7mnjU3mpJVS8xCpIV9XH8X5zzs6Ef7VSN14VjZRmHg';
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.authToken) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.authToken}`
        }
      });
    }
    return next.handle(req);
  }
}
