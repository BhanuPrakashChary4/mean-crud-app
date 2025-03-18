# MEAN CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built using the MEAN stack (MongoDB, Express.js, Angular, Node.js).


## Backend

The backend is built using Node.js, Express.js, and MongoDB.

### Setup

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file and add the following environment variables:
    ```env
    PORT=5000
    MONGO_URI=mongodb://mongo:27017/mean-app
    ```

4. Start the server:
    ```sh
    npm start
    ```

### API Endpoints

- `GET /api/users`: Get all users
- `POST /api/users`: Create a new user

## Frontend

The frontend is built using Angular.

### Setup

1. Navigate to the `frontend/angular-app` directory:
    ```sh
    cd frontend/angular-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:4200/`.

## Docker

You can also run the application using Docker.

### Build and Run

1. Build the Docker images:
    ```sh
    docker-compose build
    ```

2. Start the containers:
    ```sh
    docker-compose up
    ```

3. The backend will be available at `http://localhost:5000` and the frontend at `http://localhost:4200`.

## License

This project is licensed under the MIT License.