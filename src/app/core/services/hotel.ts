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

export class HotelService {

  // Backend API URL

  private apiUrl =
    'https://localhost:7259/api/Hotel';

  constructor(
    private http: HttpClient
  ) { }

  // =========================
  // GET ALL HOTELS
  // =========================

  getAllHotels():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}`

    );

  }

  // =========================
  // GET HOTEL BY ID
  // =========================

  getHotelById(id: number):
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/${id}`

    );

  }

  // =========================
  // CREATE HOTEL
  // =========================

  createHotel(data: any):
  Observable<any> {

    return this.http.post(

      `${this.apiUrl}`,

      data

    );

  }

  // =========================
  // UPDATE HOTEL
  // =========================

  updateHotel(
    id: number,
    data: any
  ): Observable<any> {

    return this.http.put(

      `${this.apiUrl}/${id}`,

      data

    );

  }

  // =========================
  // DELETE HOTEL
  // =========================

  deleteHotel(id: number):
  Observable<any> {

    return this.http.delete(

      `${this.apiUrl}/${id}`

    );

  }

  // =========================
  // SEARCH HOTELS
  // =========================

  searchHotels(
    location: string
  ): Observable<any> {

    return this.http.get(

      `${this.apiUrl}/search/${location}`

    );

  }

  // =========================
  // GET FEATURED HOTELS
  // =========================

  getFeaturedHotels():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/featured`

    );

  }

  // =========================
  // GET HOTEL REVIEWS
  // =========================

  getHotelReviews(id: number):
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/${id}/reviews`

    );

  }

}