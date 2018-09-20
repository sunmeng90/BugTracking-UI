import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

const API_URL = environment.API_URL;

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  constructor(private httpClient: HttpClient) {
  }

  login(loginId: string, password: string) {
    return this.httpClient.post<any>(`${API_URL}/auth/login`, {loginId: loginId, password: password})
      .pipe(map(authToken => {
        // login successful if there's a jwt token in the response
        if (authToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          const currentUser = {
            loginId: loginId,
            authToken: authToken
          };
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          return currentUser;
        }
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
