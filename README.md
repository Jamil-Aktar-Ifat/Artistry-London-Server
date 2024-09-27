# Artistry London Backend

## Description
The backend of Artistry London provides a RESTful API for managing art and craft items. It handles user authentication, CRUD operations for crafts, and integrates with a MongoDB database.

## Live API URL
[API Documentation](https://artistry-london-server-bdp4bd6hl-jamil-aktar-ifats-projects.vercel.app)

## Features
- **CRUD Operations**: Create, Read, Update, and Delete craft items.
- **User Authentication**: Secure user login and registration.
- **MongoDB Integration**: Store and retrieve user and craft item data.

## Key Rules
- The application has a minimum of **8 notable GitHub commits** on the server side.
- Environment variables are used to secure sensitive data like MongoDB credentials.

## API Endpoints
- `POST /register`: Register a new user.
- `POST /login`: Authenticate user login.
- `GET /crafts`: Retrieve all craft items.
- `POST /crafts`: Add a new craft item (Protected route).
- `PUT /crafts/:id`: Update an existing craft item (Protected route).
- `DELETE /crafts/:id`: Delete a craft item (Protected route).

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication

## Getting Started
To run the backend locally:
1. Clone the repository.
2. Navigate to the backend directory.
3. Install the dependencies with `npm install`.
4. Set up your environment variables for MongoDB.
5. Run the server using `npm start`.
