import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(err =>
          this.handleError(err)
        )
      );
  }

  handleError(error: HttpErrorResponse): Observable<any> {
    const code = error['status'];
    if (code === 401 || code === 417) {
      this.authenticationService.logout();
      // location.reload(true);//TODO
      console.error('unauthorized');
    }
    return throwError(error);
  }
}
