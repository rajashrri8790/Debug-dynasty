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

export class PaymentService {

  // Backend API URL

  private apiUrl =
    'https://localhost:7259/api/Payment';

  constructor(
    private http: HttpClient
  ) { }

  // =========================
  // GET ALL PAYMENTS
  // =========================

  getAllPayments():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}`

    );

  }

  // =========================
  // GET PAYMENT BY ID
  // =========================

  getPaymentById(id: number):
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/${id}`

    );

  }

  // =========================
  // CREATE PAYMENT
  // =========================

  createPayment(data: any):
  Observable<any> {

    return this.http.post(

      `${this.apiUrl}`,

      data

    );

  }

  // =========================
  // UPDATE PAYMENT
  // =========================

  updatePayment(
    id: number,
    data: any
  ): Observable<any> {

    return this.http.put(

      `${this.apiUrl}/${id}`,

      data

    );

  }

  // =========================
  // DELETE PAYMENT
  // =========================

  deletePayment(id: number):
  Observable<any> {

    return this.http.delete(

      `${this.apiUrl}/${id}`

    );

  }

  // =========================
  // PROCESS PAYMENT
  // =========================

  processPayment(data: any):
  Observable<any> {

    return this.http.post(

      `${this.apiUrl}/process`,

      data

    );

  }

  // =========================
  // VERIFY PAYMENT
  // =========================

  verifyPayment(
    transactionId: string
  ): Observable<any> {

    return this.http.get(

      `${this.apiUrl}/verify/${transactionId}`

    );

  }

  // =========================
  // PAYMENT HISTORY
  // =========================

  getPaymentHistory():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/history`

    );

  }

}