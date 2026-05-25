export const environment = {
  production: false,

  // Main Backend API URL
  apiUrl: 'https://localhost:5001/api/v1',

  // Authentication APIs
  authApi: 'https://localhost:5001/api/v1/auth',

  // Hotel APIs
  hotelApi: 'https://localhost:5001/api/v1/hotels',

  // Booking APIs
  bookingApi: 'https://localhost:5001/api/v1/bookings',

  // Payment APIs
  paymentApi: 'https://localhost:5001/api/v1/payments',

  // Dashboard APIs
  dashboardApi: 'https://localhost:5001/api/v1/dashboard',

  // Review APIs
  reviewApi: 'https://localhost:5001/api/v1/reviews',

  // Nearby Attractions APIs
  attractionApi: 'https://localhost:5001/api/v1/nearby-attractions',

  // Google Maps API
  googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',

  // JWT Configuration
  tokenKey: 'stayease_token',

  // Application Settings
  appName: 'StayEase',
  appVersion: '1.0.0',

  // Pagination
  defaultPageSize: 10,

  // Retry Count for APIs
  apiRetryCount: 2,

  // Session Timeout (minutes)
  sessionTimeout: 30,

  // Feature Toggles
  enableDarkMode: true,
  enableNotifications: true,
  enableAnalytics: true
};