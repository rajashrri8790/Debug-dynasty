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

export class ReviewService {

  // Backend API URL

  private apiUrl =
    'https://localhost:7259/api/Review';

  constructor(
    private http: HttpClient
  ) { }

  // =========================
  // GET ALL REVIEWS
  // =========================

  getAllReviews():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}`

    );

  }

  // =========================
  // GET REVIEW BY ID
  // =========================

  getReviewById(id: number):
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/${id}`

    );

  }

  // =========================
  // CREATE REVIEW
  // =========================

  createReview(data: any):
  Observable<any> {

    return this.http.post(

      `${this.apiUrl}`,

      data

    );

  }

  // =========================
  // UPDATE REVIEW
  // =========================

  updateReview(
    id: number,
    data: any
  ): Observable<any> {

    return this.http.put(

      `${this.apiUrl}/${id}`,

      data

    );

  }

  // =========================
  // DELETE REVIEW
  // =========================

  deleteReview(id: number):
  Observable<any> {

    return this.http.delete(

      `${this.apiUrl}/${id}`

    );

  }

  // =========================
  // GET HOTEL REVIEWS
  // =========================

  getHotelReviews(
    hotelId: number
  ): Observable<any> {

    return this.http.get(

      `${this.apiUrl}/hotel/${hotelId}`

    );

  }

  // =========================
  // GET USER REVIEWS
  // =========================

  getUserReviews(
    userId: number
  ): Observable<any> {

    return this.http.get(

      `${this.apiUrl}/user/${userId}`

    );

  }

  // =========================
  // APPROVE REVIEW
  // =========================

  approveReview(id: number):
  Observable<any> {

    return this.http.put(

      `${this.apiUrl}/approve/${id}`,

      {}

    );

  }

}