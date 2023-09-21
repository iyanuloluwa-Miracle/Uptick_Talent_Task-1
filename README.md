
# Task Management API Documentation

## Overview

The Task Management API allows you to create, retrieve, update, and delete tasks. Tasks can have titles, descriptions, completion status, start dates, and end dates.

## Base URL

The base URL for all API endpoints is: `https://your-api-url.com/api`

## Endpoints

### Create a Task

- **Endpoint:** `POST /tasks`
- **Description:** Create a new task.
- **Request:**
  - **Method:** POST
  - **URL:** `https://your-api-url.com/api/tasks`
  - **Headers:**
    - `Content-Type: application/json`
  - **Request Body:**
    ```json
    {
      "title": "Complete Task 1",
      "description": "This is the first task",
      "completed": false,
      "startDate": "2023-09-21",
      "endDate": "2023-09-25"
    }
    ```
- **Response:**
  - **Status:** 201 Created
  - **Response Body:**
    ```json
    {
      "_id": "unique_task_id",
      "title": "Complete Task 1",
      "description": "This is the first task",
      "completed": false,
      "startDate": "2023-09-21T00:00:00.000Z",
      "endDate": "2023-09-25T00:00:00.000Z"
    }
    ```

### Get All Tasks

- **Endpoint:** `GET /tasks`
- **Description:** Retrieve a list of all tasks.
- **Request:**
  - **Method:** GET
  - **URL:** `https://your-api-url.com/api/tasks`
- **Response:**
  - **Status:** 200 OK
  - **Response Body:**
    ```json
    [
      {
        "_id": "task_id_1",
        "title": "Complete Task 1",
        "description": "This is the first task",
        "completed": false,
        "startDate": "2023-09-21T00:00:00.000Z",
        "endDate": "2023-09-25T00:00:00.000Z"
      },
      {
        "_id": "task_id_2",
        "title": "Complete Task 2",
        "description": "This is the second task",
        "completed": true,
        "startDate": "2023-09-22T00:00:00.000Z",
        "endDate": "2023-09-26T00:00:00.000Z"
      }
    ]
    ```

### Get a Task by ID

- **Endpoint:** `GET /tasks/:id`
- **Description:** Retrieve a single task by its unique identifier (`id`).
- **Request:**
  - **Method:** GET
  - **URL:** `https://your-api-url.com/api/tasks/task_id_1`
- **Response:**
  - **Status:** 200 OK
  - **Response Body:**
    ```json
    {
      "_id": "task_id_1",
      "title": "Complete Task 1",
      "description": "This is the first task",
      "completed": false,
      "startDate": "2023-09-21T00:00:00.000Z",
      "endDate": "2023-09-25T00:00:00.000Z"
    }
    ```

### Update a Task by ID

- **Endpoint:** `PUT /tasks/:id`
- **Description:** Update a task by its unique identifier (`id`).
- **Request:**
  - **Method:** PUT
  - **URL:** `https://your-api-url.com/api/tasks/task_id_1`
  - **Headers:**
    - `Content-Type: application/json`
  - **Request Body:**
    ```json
    {
      "completed": true
    }
    ```
- **Response:**
  - **Status:** 200 OK
  - **Response Body:**
    ```json
    {
      "_id": "task_id_1",
      "title": "Complete Task 1",
      "description": "This is the first task",
      "completed": true,
      "startDate": "2023-09-21T00:00:00.000Z",
      "endDate": "2023-09-25T00:00:00.000Z"
    }
    ```

### Delete a Task by ID

- **Endpoint:** `DELETE /tasks/:id`
- **Description:** Delete a task by its unique identifier (`id`).
- **Request:**
  - **Method:** DELETE
  - **URL:** `https://your-api-url.com/api/tasks/task_id_1`
- **Response:**
  - **Status:** 204 No Content
  - **Response Body:** No content is returned upon successful deletion.

## Error Responses

- 400 Bad Request: Invalid request data.
- 404 Not Found: The requested resource does not exist.
- 500 Internal Server Error: Server encountered an error while processing the request.

## Authentication

Authentication is not required for these endpoints in this simple example. In a real-world application, you would typically implement authentication and authorization mechanisms as needed.

---

This detailed API documentation provides the request and response examples for each endpoint, including the HTTP method, URL, headers, request body (if applicable), status code, and response body. You can use this documentation to guide the development and testing of your API.