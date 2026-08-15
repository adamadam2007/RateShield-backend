# RateShield API Documentation

## Authentication
- POST /api/auth/register
- POST /api/auth/login

## Businesses
- POST /api/businesses
- GET /api/businesses
- GET /api/businesses/:id

## Products
- POST /api/products
- GET /api/products
- GET /api/products/:id
- PUT /api/products/:id
- DELETE /api/products/:id

## Prices
- POST /api/prices/calculate
- POST /api/prices/approve
- GET /api/prices/history/:productId

## Alerts
- POST /api/alerts
- GET /api/alerts
- PUT /api/alerts/:id/read
