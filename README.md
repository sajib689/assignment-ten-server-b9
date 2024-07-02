# TouristaTrek Server

This is the server-side application for the TouristaTrek website, which facilitates the backend operations for the tourism platform.

## Features

- User Authentication and Authorization
- Manage Tours and Bookings
- Handle Payments
- User Reviews and Ratings
- Admin Dashboard

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT for Authentication
- Mongoose for MongoDB Object Modeling

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/touristatrek-server.git
    cd touristatrek-server
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```sh
    npm start
    ```

## API Endpoints

### Auth

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login a user

### Tours

- **GET /api/tours**: Get all tours
- **POST /api/tours**: Create a new tour (Admin only)
- **GET /api/tours/:id**: Get a single tour by ID
- **PUT /api/tours/:id**: Update a tour by ID (Admin only)
- **DELETE /api/tours/:id**: Delete a tour by ID (Admin only)

### Bookings

- **POST /api/bookings**: Create a new booking
- **GET /api/bookings/user/:userId**: Get bookings for a specific user
- **GET /api/bookings/tour/:tourId**: Get bookings for a specific tour

### Reviews

- **POST /api/reviews**: Create a new review
- **GET /api/reviews/tour/:tourId**: Get reviews for a specific tour

## Contribution

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License.
