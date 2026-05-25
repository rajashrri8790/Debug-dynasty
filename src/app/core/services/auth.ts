import { Injectable } from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // Backend API URL

  private apiUrl =
    'https://localhost:7259/api/Auth';

  constructor(
    private http: HttpClient
  ) { }

  // =========================
  // REGISTER
  // =========================

  register(data: any): Observable<any> {

    return this.http.post(

      `${this.apiUrl}/register`,

      data

    );

  }

  // =========================
  // LOGIN
  // =========================

  login(data: any): Observable<any> {

    return this.http.post(

      `${this.apiUrl}/login`,

      data

    );

  }

  // =========================
  // FORGOT PASSWORD
  // =========================

  forgotPassword(email: any): Observable<any> {

    return this.http.post(

      `${this.apiUrl}/forgot-password`,

      email

    );

  }

  // =========================
  // SAVE TOKEN
  // =========================

  saveToken(token: string) {

    localStorage.setItem(

      'stayease_token',

      token

    );

  }

  // =========================
  // GET TOKEN
  // =========================

  getToken() {

    return localStorage.getItem(

      'stayease_token'

    );

  }

  // =========================
  // LOGOUT
  // =========================

  logout() {

    localStorage.clear();

  }

  // =========================
  // CHECK LOGIN
  // =========================

  isLoggedIn(): boolean {

    return !!localStorage.getItem(
      'stayease_token'
    );

  }

}