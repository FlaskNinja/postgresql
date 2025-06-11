# 🚀 User Management API (Express.js + PostgreSQL)

This is a simple RESTful API that allows you to manage users — add, retrieve, update, and delete user data — built using **Express.js** and **PostgreSQL**.

---

## 📁 Project Structure

```
project-folder/
├── app.js
├── db.js
├── controllers/
│   └── usercontrollers.js
├── routes/
│   └── userRoutes.js
└── package.json
```

---

## 🔧 Technologies Used

- Node.js
- Express.js
- PostgreSQL
- pg (Node PostgreSQL client)
- uuid (for generating user IDs)

---

## ⚙️ Setup Instructions

### 1. Clone the Project

```bash
git clone <your-repo-link>
cd project-folder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup PostgreSQL Database

Make sure PostgreSQL is running. Then run:

```sql
CREATE DATABASE trialdb;

CREATE TABLE trialtable (
  id UUID PRIMARY KEY,
  name VARCHAR(100),
  age INT,
  occupation VARCHAR(100)
);
```

### 4. Configure Database Connection

Check and update the `db.js` file with your PostgreSQL settings if different:

```js
const con = new Client({
  host: 'localhost',
  user: 'postgres',
  port: 5432,
  password: 'tboy',
  database: 'trialdb'
});
```

---

## ▶️ Run the App

To start the server:

```bash
node app.js
```

Or with `nodemon` (if installed):

```bash
nodemon app.js
```

The API will run on:  
👉 `http://localhost:3000`

---

## 📡 API Endpoints

| Method | Endpoint     | Description          |
|--------|--------------|----------------------|
| GET    | `/`          | Get all users        |
| POST   | `/`          | Add a new user       |
| GET    | `/:id`       | Get user by ID       |
| PUT    | `/:id`       | Update user by ID    |
| DELETE | `/:id`       | Delete user by ID    |

---

## 🧪 Sample JSON for POST/PUT

```json
{
  "name": "John Doe",
  "age": 30,
  "occupation": "Engineer"
}
```

---

## 👤 Author

- **Name**: Triumph Ojocheyi Samuel  
- **Project**: 3MTT User API Assignment