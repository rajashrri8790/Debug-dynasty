export const environment = {
  production: true,

  // Production Backend API URL
  apiUrl: 'https://your-production-api.com/api/v1',

  // Authentication APIs
  authApi: 'https://your-production-api.com/api/v1/auth',

  // Hotel APIs
  hotelApi: 'https://your-production-api.com/api/v1/hotels',

  // Booking APIs
  bookingApi: 'https://your-production-api.com/api/v1/bookings',

  // Payment APIs
  paymentApi: 'https://your-production-api.com/api/v1/payments',

  // Dashboard APIs
  dashboardApi: 'https://your-production-api.com/api/v1/dashboard',

  // Review APIs
  reviewApi: 'https://your-production-api.com/api/v1/reviews',

  // Nearby Attractions APIs
  attractionApi: 'https://your-production-api.com/api/v1/nearby-attractions',

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