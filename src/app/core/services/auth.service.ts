import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private LOGIN_URL = 'http://localhost:8080/auth/login'
  private tokenKey = 'authToken';

  constructor(private httpCliente: HttpClient, private router: Router) { }

  login(user: string, password: string): Observable<any> {
    return this.httpCliente.post<any>(this.LOGIN_URL, { user, password }).pipe(
      tap(response => {
        if (response.token) {
          console.log(response.token);
          this.setToken(response.token);
        }
      })
    )
  }

  //save in localStorage
  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  //get token from localStorage
  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  //expiration time validation
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }
    const payload = JSON.parse(atob(token.split('.')[1]));
    const exp = payload.exp * 1000;
    return Date.now() < exp;

  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

}
