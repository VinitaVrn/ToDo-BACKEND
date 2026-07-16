# Todo Management Backend

A scalable REST API for a Todo Management application built with **Node.js**, **Express**, **TypeScript**, **Prisma ORM**, and **PostgreSQL**.

---

## Features

- User Authentication (JWT)
- Create Todo
- Get All Todos
- Get Todo by ID
- Update Todo
- Archive / Restore Todo
- Permanent Delete
- Search by Title or Tags
- Filter by Status
- Filter by Priority
- Soft Delete (Archive)
- Hard Delete
- Checklist Support
- Input Validation using Zod
- Repository-Service-Controller-Route Module Architecture

---

## Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- Prisma ORM
- Zod
- JWT Authentication
- bcrypt

---

## Project Structure

```text
todo-backend/
│
├── prisma/
│   ├── migrations/
│   └── schema.prisma
│
├── src/
│   ├── config/
│   │   ├── env.ts
│   │   └── prisma.ts
│   │
│   ├── auth-middlewares/
│   │   └── auth-middleware.ts
│   │
│   ├── modules/
│   │   ├── authentication/
│   │   │   ├── auth-controller.ts
│   │   │   ├── auth-repository.ts
│   │   │   ├── auth-routes.ts
│   │   │   ├── auth-service.ts
│   │   │   ├── auth-validator.ts
│   │   │   └── jwt.ts
│   │   │
│   │   ├── todo/
│   │   │   ├── todo-controller.ts
│   │   │   ├── todo-repository.ts
│   │   │   ├── todo-routes.ts
│   │   │   ├── todo-service.ts
│   │   │   └── todo-validator.ts
│   │   │
│   │   └── user/
│   │       ├── user-controller.ts
│   │       ├── user-repository.ts
│   │       ├── user-routes.ts
│   │       └── user-service.ts
│   │
│   ├── utils/
│   │   ├── constants.ts
│   │   └── todo-types.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Architecture

The project follows a **Module-Based Architecture** with the Repository-Service-Controller pattern.

Each feature is organized independently into:

- Controller (HTTP request handling)
- Service (Business logic)
- Repository (Database operations)
- Routes (API endpoints)
- Validator (Request validation using Zod)

This separation improves maintainability, scalability, and testability.


## Installation

Clone the repository

```bash
git clone https://github.com/VinitaVrn/ToDo-BACKEND.git

cd todo-backend
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file.

```env
PORT=4000

DATABASE_URL="postgresql://username:password@localhost:5432/todo_db"

JWT_SECRET=jhygygjghhjjhgythhvhgvghvh

```

---

## Prisma Setup

Generate Prisma Client

```bash
npx prisma generate
```

Run migrations

```bash
npx prisma migrate dev
```

Open Prisma Studio

```bash
npx prisma studio
```

---

## Run the Project

Development

```bash
npm run dev
```

Production

```bash
npm run build

npm start
```

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | api/auth/login | Login User |

---

### Todos

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST |/api/todos/create | Create Todo |
| GET | /api/todos/get | Get Todos |
| GET | /api/todos/getById:id | Get Todo by ID |
| PATCH | /api/todos/update/:id | Update Todo |
| DELETE |/api/todos/delete/:id | Permanently Delete Todo |

---

## Query Parameters

### Search

```
GET /api/todos/get?search=backend
```

Searches by

- Title
- Tags

---

### Filter by Status

```
GET /todos?status=done
```

Possible values

- in_progress
- blocked
- done
- cancelled

---

### Filter by Priority

```
GET /todos?priority=high
```

Possible values

- low
- medium
- high
- critical

---

### Archived Todos

Active Todos

```
GET /todos?isArchived=false
```

Archived Todos

```
GET /todos?isArchived=true
```

---

## Example Create Todo Request

```json
{
  "title": "Complete Backend",
  "description": "Finish Todo Backend",
  "type": "task",
  "status": "in_progress",
  "priority": "high",
  "tags": [
    "backend",
    "node"
  ],
  "dueDate": "2026-07-30"
}
```

---

## Successful Response

```json
{
  "success": true,
  "message": "Todo created successfully",
  "data": {
    ...
  }
}
```

---

## Validation

Request validation is handled using **Zod**.

Examples

- Required title
- Valid enum values
- Proper date validation
- Checklist validation

---

## Database

### Todo

- title
- description
- status
- priority
- type
- tags
- dueDate
- isPinned
- isArchived
- items
- createdAt
- updatedAt

---

## Authentication

Protected routes require

```
Authorization: Bearer <JWT_TOKEN>
```

---

## Future Improvements

- Pagination
- Sorting from Backend
- Rate Limiting
- Swagger Documentation
- Unit Tests
- Docker Support
- Redis Caching
- Email Notifications

---

## Author

Vinita

```

---


