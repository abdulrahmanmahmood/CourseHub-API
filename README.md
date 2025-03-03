📚 A robust RESTful API for a course management system built with Node.js and Express. Features comprehensive CRUD operations with proper validation and clean architecture. Ideal for educational platforms or learning management systems.

## 🔑 Key Features  
- **Full CRUD operations** (Create, Read, Update, Delete) for courses  
- **Express-validator middleware** for robust input validation  
- **Clean architecture** with MVC pattern  
- RESTful endpoints with proper HTTP status codes  
- In-memory data persistence (easily extendable to databases)  
- Error handling middleware  
- Organized route management  

## 🛠 Tech Stack  
- Node.js  
- Express.js  
- Express-validator  
- REST API principles  

## 📁 Project Structure  
```
/
├── index.js            # Main application entry point
├── data/
│   └── courses.js      # In-memory data storage layer
├── routes/
│   └── courses.route.js # Course-related endpoints
├── controllers/
│   └── courses.controllers.js # Business logic handlers
├── validators/
│   └── courses.validator.js # Validation middleware
└── node_modules/
```

## 🌐 API Endpoints  

| Method | Endpoint             | Description                  |
|--------|----------------------|------------------------------|
| GET    | /api/courses         | Retrieve all courses         |
| GET    | /api/courses/:id     | Get single course            |
| POST   | /api/courses         | Create new course            |
| PUT    | /api/courses/:id     | Update existing course       |
| DELETE | /api/courses/:id     | Remove course                |

## ✅ Best Practices  
- Strict input validation using express-validator  
- Consistent error handling middleware  
- Modular code structure for scalability  
- Separation of concerns with MVC architecture  
- Clear documentation for endpoints  
- Semantic versioning support  

---

**Developed as a foundational project for learning REST API development with Node.js and Express.**  

