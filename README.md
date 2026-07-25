# ShopNex - Full Stack E-Commerce Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](YOUR_FRONTEND_URL)

![ShopNex Banner](./screenshots/Home.png)


## Project Overview

ShopNex is a modern full-stack e-commerce web application that provides a seamless online shopping experience.

Users can browse products, search items, manage their cart, place orders, and manage their profiles. The application also includes an admin dashboard with role-based access control to manage products, users, and orders.

The project follows a full-stack architecture using **React.js, Node.js, Express.js, and PostgreSQL** with secure authentication and API integration.


---

# Features


## User Features

- User registration and login
- JWT-based authentication
- Secure password encryption using bcrypt
- Browse products
- Search products
- View product details
- Add products to cart
- Update cart quantity
- Remove products from cart
- Wishlist management
- Secure checkout process
- Place orders
- View order history
- Manage user profile


---

## Authentication & Authorization

- JWT token authentication
- Protected routes
- Role-based access control
- Separate User and Admin roles
- Secure API authorization
- Persistent login using local storage


---

## Admin Features

- Admin dashboard
- View total products, users, and orders
- Manage products
- Add new products
- Update product details
- Delete products
- View customer orders
- Manage users
- Admin-only protected routes


---

# Tech Stack


## Frontend

- React.js
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Icons


## Backend

- Node.js
- Express.js
- PostgreSQL
- JWT Authentication
- bcrypt


## Additional Tools

- Git & GitHub
- VS Code
- Postman
- Cloudinary (Image Upload)


---

# Project Structure


```text
ShopNex_Ecommerce_Website
│
├── client
│   │
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── context
│   │   ├── services
│   │   ├── protected
│   │   └── assets
│   │
│   └── package.json
│
├── server
│   │
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── config
│   ├── database
│   └── server.js
│
├── screenshots
│
├── README.md
└── .gitignore

```


---

# Screenshots


## Home Page

![Home Page](./screenshots/Home.png)



## Products Page

![Products Page](./screenshots/Products.png)



## Product Details Page

![Product Details](./screenshots/Product-details.png)



## Admin Dashboard

![Admin Dashboard](./screenshots/Admin-Dashboard.png)



---

# Installation & Setup


## 1. Clone Repository

```bash
git clone https://github.com/abishajebamani/ShopNex-Ecommerce-Website.git
```


Navigate to project:

```bash
cd ShopNex-Ecommerce-Website
```



---

# Frontend Setup


Go to client folder:

```bash
cd client
```


Install dependencies:

```bash
npm install
```


Create `.env` file:

```env
VITE_API_URL=your_backend_api_url
```


Run frontend:

```bash
npm run dev
```


Frontend runs on:

```
http://localhost:5173
```



---

#  Backend Setup


Go to server folder:

```bash
cd server
```


Install dependencies:

```bash
npm install
```


Create `.env` file:


```env
PORT=5000

DATABASE_URL=your_postgresql_database_url

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloudinary_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret

```


Run backend:

```bash
npm run dev
```


Backend runs on:

```
http://localhost:5000
```


---

#  Environment Variables


| Variable | Description |
|---|---|
| PORT | Backend server port |
| DATABASE_URL | PostgreSQL database connection |
| JWT_SECRET | Authentication secret key |
| CLOUDINARY_CLOUD_NAME | Cloudinary cloud name |
| CLOUDINARY_API_KEY | Cloudinary API key |
| CLOUDINARY_API_SECRET | Cloudinary secret key |



---

# Deployment


ShopNex is deployed and available online.


## Live Application


### Frontend

🔗 YOUR_FRONTEND_URL


### Backend API

🔗 YOUR_BACKEND_URL



## Deployment Stack


- Frontend: Vercel
- Backend: Render
- Database: PostgreSQL Cloud Database
- Image Storage: Cloudinary



---

#  Future Improvements


- Online payment integration
- Product reviews and ratings
- Advanced product filtering
- AI-based product recommendation
- Sales analytics dashboard
- Email notifications
- Performance optimization



---

#  Developer


**Abisha Jebamani**

Full Stack Developer


GitHub:

https://github.com/abishajebamani



---

# ⭐ Support


If you like this project, consider giving it a ⭐ on GitHub.


