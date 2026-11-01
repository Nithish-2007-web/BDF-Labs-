# Lab 1: Node.js and Express Server

## Objective

To create a web server using Node.js and Express.js, implement different routes, and handle HTTP requests.

## Technologies Used

* Node.js
* Express.js
* JavaScript
* Visual Studio Code

## Installation

Install Express.js using:

```bash
npm install express
```

## How to Run

### 1. Basic HTTP Server

```bash
node basic-server.js
```

Open http://localhost:3000 to see the Hello message.

### 2. Express Server

Stop the basic server using Ctrl+C, then run:

```bash
node server.js
```

## API Endpoints

| HTTP Method | Endpoint   | Description                       | Status Code |
| ----------- | ---------- | --------------------------------- | ----------- |
| GET         | `/`        | Displays a welcome message        | 200         |
| GET         | `/about`   | Returns name and section as JSON  | 200         |
| GET         | `/time`    | Returns the current date and time | 200         |
| GET         | `/unknown` | Displays a page-not-found message | 404         |

## Screenshots

Save screenshots of all four endpoints in the `screenshots` folder.

## Conclusion

I learned how to create a Node.js HTTP server, use Express.js, implement GET routes, return JSON responses, and handle unknown routes using a 404 status code.
