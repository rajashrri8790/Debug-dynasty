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

export class BookingService {

  // Backend API URL

  private apiUrl =
    'https://localhost:7259/api/Booking';

  constructor(
    private http: HttpClient
  ) { }

  // =========================
  // GET ALL BOOKINGS
  // =========================

  getAllBookings():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}`

    );

  }

  // =========================
  // GET BOOKING BY ID
  // =========================

  getBookingById(id: number):
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/${id}`

    );

  }

  // =========================
  // CREATE BOOKING
  // =========================

  createBooking(data: any):
  Observable<any> {

    return this.http.post(

      `${this.apiUrl}`,

      data

    );

  }

  // =========================
  // UPDATE BOOKING
  // =========================

  updateBooking(
    id: number,
    data: any
  ): Observable<any> {

    return this.http.put(

      `${this.apiUrl}/${id}`,

      data

    );

  }

  // =========================
  // DELETE BOOKING
  // =========================

  deleteBooking(id: number):
  Observable<any> {

    return this.http.delete(

      `${this.apiUrl}/${id}`

    );

  }

  // =========================
  // CONFIRM BOOKING
  // =========================

  confirmBooking(id: number):
  Observable<any> {

    return this.http.put(

      `${this.apiUrl}/confirm/${id}`,

      {}

    );

  }

  // =========================
  // CANCEL BOOKING
  // =========================

  cancelBooking(id: number):
  Observable<any> {

    return this.http.put(

      `${this.apiUrl}/cancel/${id}`,

      {}

    );

  }

}