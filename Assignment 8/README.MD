# ASSIGNMENT 8

- Name: Kumar Navdisha Batra
- NUID: 002293379
- Email ID: batra.ku@northeastern.edu
- Prof. Vishal Chawla

## Topic: Assignment 8th use of CRUD operations with the help Node, Mongo, and Express on Postman

### Project aspects:

developed an app.js file to establish a connection with MongoDB and to host a localhost server on port 3000.

Routers: userRouters have been implemented to handle various operations, each    directing requests to their corresponding Controllers.
Controllers: Within userControllers, distinct methods have been established for individual operations, incorporating asynchronous handling with await to execute their respective tasks on MongoDB.
Models: In userModel, the schema for the user table has been outlined, alongside password encryption using bcrypt before storing it in the database.
Middlewares: errorMiddlewares have been configured to manage generic errors, such as responding with a 400 "Not Found" or 201 "Success" status code.
This structure ensures organized handling of requests and responses, facilitating efficient interaction with the MongoDB database.

### Setup:

- Open the app.js file on vscode & in terminal write the "nodemon run start"
- Open the Postman and start performing operations with the below URLs
  - POST -> http://localhost:3000/user/create
  - PUT -> http://localhost:3000/user/edit
  - DELETE -> http://localhost:3000/user/delete
  - GET -> http://localhost:3000/user/getAll
