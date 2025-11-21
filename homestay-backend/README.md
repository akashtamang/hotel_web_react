# Homestay Backend

API for the `Hotel_web_front` React application. Provides CRUD endpoints for guest reviews backed by MongoDB + Mongoose.

## Tech Stack

- Node.js + Express
- MongoDB with Mongoose ODM
- Helmet, CORS, Morgan middleware
- express-validator for payload validation

## Getting Started

1. Install dependencies:

   ```
   cd homestay-backend
   npm install
   ```

2. Copy `env.example` to `.env` and adjust values:

   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/hotel_reviews
   ADMIN_SECRET=change-me
   ALLOWED_ORIGINS=http://localhost:5173
   ```

3. Run the server:

   ```
   npm run dev
   ```

   The API will be available at `http://localhost:5000`.

## API Overview

| Method | Endpoint                | Description                                    |
| ------ | ----------------------- | ---------------------------------------------- |
| GET    | `/api/health`           | Health check                                   |
| GET    | `/api/reviews`          | List reviews (approved by default)             |
| POST   | `/api/reviews`          | Create a new review (defaults to `pending`)    |
| PATCH  | `/api/reviews/:id/status` | Update review status (requires admin secret) |

### Query Parameters (GET `/api/reviews`)

- `status`: `approved` (default), `pending`, `rejected`, or `all`
- `page`: page number (default `1`)
- `limit`: page size (default `50`, max `100`)
- `withMeta`: `true` to include pagination metadata

### Admin Endpoint

`PATCH /api/reviews/:id/status` requires a header `x-admin-secret` that matches `ADMIN_SECRET`. Use this to approve or reject newly submitted reviews.

## Connecting the Frontend

The React frontend already points to `http://localhost:5000/api/reviews`. Run both apps simultaneously and ensure CORS origins include the frontend URL (`http://localhost:5173` when using Vite).

