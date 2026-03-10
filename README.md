# Backend Authentication System

## Overview

This project is a full-stack **Expo (React Native) mood tracking application** with a **Node.js / Express backend** and **MongoDB database**. The application allows users to create accounts, securely authenticate, and store mood-tracking data.

My primary contribution focused on designing and implementing the **backend authentication system**, with an emphasis on **secure credential handling, token-based authentication, and safe database practices**.

The backend provides secure user registration, login, and protected API endpoints using **bcrypt password hashing and JSON Web Tokens (JWT)**.

---

# My Role

I contributed to the backend authentication architecture and security implementation. My work focused on designing secure authentication workflows, implementing password hashing, integrating MongoDB user storage, and creating middleware for JWT verification.

Key responsibilities included:

- Implementing secure **user signup and login routes**
- Designing **token-based authentication using JWT**
- Hashing user credentials using **bcrypt**
- Building **authorization middleware for protected routes**
- Implementing safe **MongoDB data handling and validation**
- Structuring backend routes and authentication logic for the Express API

---

# Backend Architecture

Backend Stack:

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- bcrypt

Frontend:

- React Native
- Expo

---

# Authentication Workflow

1. User signs up with email and password
2. Password is hashed using bcrypt
3. User credentials are stored securely in MongoDB
4. Backend generates a signed JWT token
5. Client sends token in the `Authorization` header
6. Middleware verifies token before granting access to protected routes

---

# Security Features

## Password Hashing

User passwords are **never stored in plaintext**.

Passwords are hashed using the bcrypt algorithm with salting before being stored in MongoDB.

```javascript
const hash = await bcrypt.hash(password, BCRYPT_ROUNDS);
```
This protects against:
- credential theft
- rainbow table attacks
- database leaks

Security Concepts Demonstrated

This project demonstrates practical implementation of several key security concepts:

- Secure password hashing
- Token-based authentication
- API authorization middleware
- Secure credential validation
- MongoDB user data protection
- Stateless authentication systems

Attribution
This repository is a fork of the original collaborative project and highlights my contributions to the backend authentication and security implementation.
