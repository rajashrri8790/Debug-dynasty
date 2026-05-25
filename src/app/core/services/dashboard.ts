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

export class DashboardService {

  // Backend API URL

  private apiUrl =
    'https://localhost:7259/api/Dashboard';

  constructor(
    private http: HttpClient
  ) { }

  // =========================
  // GET DASHBOARD STATS
  // =========================

  getDashboardStats():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/stats`

    );

  }

  // =========================
  // GET TOTAL BOOKINGS
  // =========================

  getTotalBookings():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/total-bookings`

    );

  }

  // =========================
  // GET TOTAL HOTELS
  // =========================

  getTotalHotels():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/total-hotels`

    );

  }

  // =========================
  // GET TOTAL CUSTOMERS
  // =========================

  getTotalCustomers():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/total-customers`

    );

  }

  // =========================
  // GET TOTAL REVENUE
  // =========================

  getTotalRevenue():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/total-revenue`

    );

  }

  // =========================
  // GET RECENT BOOKINGS
  // =========================

  getRecentBookings():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/recent-bookings`

    );

  }

  // =========================
  // GET REVENUE CHART
  // =========================

  getRevenueChart():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/revenue-chart`

    );

  }

  // =========================
  // GET CUSTOMER GROWTH
  // =========================

  getCustomerGrowth():
  Observable<any> {

    return this.http.get(

      `${this.apiUrl}/customer-growth`

    );

  }

}