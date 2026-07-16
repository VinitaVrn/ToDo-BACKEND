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
- Todo History
- Input Validation using Zod
- Repository-Service-Controller-Route Layered Architecture

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

JWT_SECRET=your_secret_key

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
| POST | /auth/register | Register User |
| POST | /auth/login | Login User |

---

### Todos

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | /todos | Create Todo |
| GET | /todos | Get Todos |
| GET | /todos/:id | Get Todo by ID |
| PATCH | /todos/:id | Update Todo |
| DELETE | /todos/:id | Permanently Delete Todo |

---

## Query Parameters

### Search

```
GET /todos?search=backend
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

### I would also suggest adding these badges at the top of the README for a more professional GitHub appearance:

```md
# Todo Management Backend

![Node.js](https://img.shields.io/badge/Node.js-22-green)
![Express](https://img.shields.io/badge/Express-5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-blue)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-blue)
```

This format is clean, recruiter-friendly, and follows the style commonly seen in well-maintained open-source backend repositories.