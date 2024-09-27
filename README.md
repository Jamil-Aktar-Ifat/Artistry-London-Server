# Artistry London Backend

## Description
The Artistry London backend provides a RESTful API designed to manage various art and craft items. It facilitates user authentication and allows users to create, read, update, and delete (CRUD) their crafts seamlessly. The application is built on Node.js and Express, utilising MongoDB for data storage.

The backend is structured to handle various requests from the frontend and respond with the appropriate data, ensuring a smooth user experience.

## Live API URL
You can access the live API at the following URL: [API Documentation](https://artistry-london-server-bdp4bd6hl-jamil-aktar-ifats-projects.vercel.app)

## Features
- **CRUD Operations**: 
    - Create: Add new craft items to the database.
    - Read: Fetch all craft items or specific items by ID.
    - Update: Modify existing craft item details.
    - Delete: Remove craft items from the database.
- **User Authentication**: 
    - Secure user login and registration process.
    - Authentication tokens are issued upon successful login for protected routes.
- **MongoDB Integration**: 
    - Efficiently store and retrieve user information and craft items.
- **Error Handling**: 
    - Custom error messages for various scenarios such as invalid credentials, duplicate entries, or items not found.
- **Middleware Integration**: 
    - Implemented middleware for logging requests, handling errors, and checking user authentication.

## Key Rules
- **Environment Variables**: 
    - Sensitive data such as MongoDB connection strings are stored in environment variables for security. Ensure to create a `.env` file in the root directory to include your variables.

## API Endpoints
Here’s a detailed list of the API endpoints available in this application:

### User Authentication
- `POST /register`
    - **Description**: Register a new user.
    - **Request Body**: 
    ```json
    {
        "name": "User Name",
        "email": "user@example.com",
        "password": "UserPassword123"
    }
    ```
- `POST /login`
    - **Description**: Authenticate user login.
    - **Request Body**: 
    ```json
    {
        "email": "user@example.com",
        "password": "UserPassword123"
    }
    ```

### Craft Items
- `GET /crafts`
    - **Description**: Retrieve all craft items.
    - **Response**: Array of craft items with details.
- `GET /crafts/:id`
    - **Description**: Retrieve a specific craft item by ID.
    - **Response**: Single craft item details.
- `POST /crafts`
    - **Description**: Add a new craft item (Protected route).
    - **Request Body**: 
    ```json
    {
        "image": "ImageURL",
        "item_name": "Craft Item Name",
        "subcategory_name": "Subcategory Name",
        "short_description": "Brief Description",
        "price": 20.99,
        "rating": 4.5,
        "customization": "Yes",
        "processing_time": "2 weeks",
        "stock_status": "In Stock",
        "user_email": "user@example.com",
        "user_name": "User Name"
    }
    ```
- `PUT /crafts/:id`
    - **Description**: Update an existing craft item (Protected route).
    - **Request Body**: Same as `POST /crafts`.
- `DELETE /crafts/:id`
    - **Description**: Delete a craft item (Protected route).
    - **Response**: Confirmation message on successful deletion.

## Technologies Used
- **Node.js**: JavaScript runtime for building the server-side.
- **Express.js**: Web framework for Node.js to build the API.
- **MongoDB**: NoSQL database for storing user and craft item data.
- **dotenv**: For managing environment variables.

## Getting Started
To run the backend locally, follow these steps:
1. **Clone the Repository**: 
    ```bash
    git clone https://github.com/yourusername/artistry-london-backend.git
    ```
2. **Navigate to the Backend Directory**: 
    ```bash
    cd artistry-london-backend
    ```
3. **Install Dependencies**: 
    ```bash
    npm install
    ```
4. **Set Up Environment Variables**: 
    - Create a `.env` file in the root directory and add your MongoDB URI and other sensitive information:
    ```plaintext
    MONGODB_URI=your_mongodb_connection_string
    
    ```
5. **Run the Server**: 
    ```bash
    npm start
    ```
6. **Access the API**: 
    Open your browser or API client (like Postman) and start making requests to the API endpoints.

## Contribution
Contributions are welcome! Please feel free to fork the repository and submit pull requests.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
