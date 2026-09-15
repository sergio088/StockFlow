# StockFlow 📦

**StockFlow is a full-stack inventory and sales management SaaS designed to help businesses manage products, track sales, and monitor revenue in one place.**

The project was built as a portfolio SaaS to practice and demonstrate real-world full-stack development, including authentication, database modeling, CRUD operations, sales workflows, and data visualization.

## 🚀 Features

### Authentication

- User registration and login
- Password hashing with bcrypt
- User-based data isolation
- Session-based authentication

### Inventory Management

- Create products
- Edit products
- Remove products
- Search products
- Track product quantities
- Track product prices
- Soft-delete support

### Sales

- Add products to a shopping cart
- Increase or decrease quantities
- Register sales
- Store sale items and prices
- Calculate sale totals
- Keep sales history

### Dashboard

- Monthly revenue
- Total revenue
- Total sales
- Revenue by month
- Top-selling products
- Data visualization with charts

## 🛠️ Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Next.js Server Actions / Server-side logic
- Prisma ORM
- PostgreSQL

### Authentication

- Credentials authentication
- bcrypt
- Session-based user identification

### Development

- Git
- GitHub
- Docker
- Vercel

## 🏗️ Architecture

The application follows a full-stack Next.js architecture.

```text
User
  ↓
Next.js / React
  ↓
Server-side logic
  ↓
Prisma ORM
  ↓
PostgreSQL
```

The application separates UI components from server-side data operations and uses Prisma to interact with the PostgreSQL database.

## 📊 Database

The main entities include:

```text
User
 ├── Items
 └── Sales
      └── SaleItems
           └── Item
```

### Main models

**Item**

- Product name
- Price
- Quantity
- Creation date
- User relationship
- Soft-delete timestamp

**Sale**

- Total
- Creation date
- User relationship
- Sale items

**SaleItem**

- Product name
- Quantity
- Price
- Product relationship
- Sale relationship

## 🔐 Security

The application implements user-specific data access so that inventory and sales information belongs to the authenticated user.

Passwords are securely hashed using bcrypt rather than being stored as plain text.

## 🎯 Why I Built This

I built StockFlow to go beyond simple CRUD exercises and practice the problems involved in building a real SaaS application.

The project helped me develop practical experience with:

- Relational database design
- Authentication
- Server-side data handling
- CRUD operations
- Sales workflows
- State management
- Data aggregation
- Dashboard development
- Database migrations
- Full-stack application architecture
- Deployment

## 🌐 Demo

**Live application:**
https://portifolio-rho-bice.vercel.app

> Demo link can be replaced with the direct StockFlow deployment URL if available.

## 👨‍💻 Author

**Sergio Santos**

Full-Stack Developer focused on React, Next.js, TypeScript, Node.js, and modern web applications.

- GitHub: https://github.com/sergio088
- Portfolio: https://portifolio-rho-bice.vercel.app
