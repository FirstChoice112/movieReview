# Movie Review Backend

## Description

This project is the backend part of a web application for managing movie reviews. A user can register and log in to leave reviews on movies available in the database.

#### Movie

- **title**: String, required
- **director**: String, required
- **releaseYear**: Number, required
- **genre**: String, required

#### Review

- **movieId**: ObjectId (reference to Movie), required
- **userId**: ObjectId (reference to User), required
- **rating**: Number, required
- **comment**: String, optional
- **createdAt**: Date, default Date.now

#### User

- **username**: String, required
- **email**: String, required, unique
- **password**: String, required
- **role**: String, default 'user', enum ['user', 'admin']

## API Endpoints

### Movies

- **POST /movies**: Add a new movie.
- **GET /movies**: Retrieve a list of all movies.
- **GET /movies/:id**: Retrieve details of a specific movie.
- **PUT /movies/:id**: Update a specific movie.
- **DELETE /movies/:id**: Delete a specific movie.
- **GET /movies/ratings**: Retrieve a list of all movies and their average ratings. (For higher grade)

### Reviews

- **POST /reviews**: Add a new review.
- **GET /reviews**: Retrieve a list of all reviews.
- **GET /reviews/:id**: Retrieve details of a specific review.
- **PUT /reviews/:id**: Update a specific review.
- **DELETE /reviews/:id**: Delete a specific review.

### Users

- **POST /register**: Register a new user.
- **POST /login**: Log in a user.

## Roles and Permissions

- **User**: Can retrieve movies and read/write reviews.
- **Admin**: Can retrieve movies and read/write reviews. Only admin can add, update, or delete movies.
