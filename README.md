Backend Authentication System – Security Implementation
Project Overview

This project is a full-stack mood tracking application built with Expo (React Native) and a Node.js/Express backend with MongoDB. The application allows users to securely create accounts, authenticate, and store mood-tracking data.

My primary contribution focused on backend authentication architecture and security mechanisms, including implementing secure credential storage, token-based authentication, and authorization middleware.

My Role

I contributed to the backend authentication system, focusing on implementing secure login and session management mechanisms. My work involved building the authentication routes, implementing password hashing, and developing middleware to protect API endpoints using JSON Web Tokens (JWT).

Key contributions included:

Implementing secure user authentication workflows

Designing JWT-based session authentication

Implementing password hashing using bcrypt

Building Express middleware for token validation

Structuring backend routes for authentication and protected API access

Security Features Implemented
Password Hashing

User passwords are never stored in plaintext. Passwords are hashed using the bcrypt hashing algorithm with salting, ensuring that stored credentials remain protected even if the database is compromised.

const hash = await bcrypt.hash(password, BCRYPT_ROUNDS);

This protects against:

credential theft

rainbow table attacks

database leaks

JSON Web Token (JWT) Authentication

After successful login or account creation, the backend issues a signed JSON Web Token (JWT) used for session authentication.

const token = jwt.sign(
  { userId: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "7d" }
);

This token:

authenticates future requests

prevents repeated credential transmission

allows stateless authentication

Authorization Middleware

To protect backend routes, I implemented an Express middleware function that verifies JWT tokens before allowing access to protected endpoints.

Example logic:

const token = header.split(" ")[1];
const payload = jwt.verify(token, process.env.JWT_SECRET);

The middleware ensures:

only authenticated users can access protected routes

invalid or expired tokens are rejected

authorization headers are validated before request processing

Input Validation and Credential Checking

The authentication routes validate input fields and enforce credential verification:

ensures email and password fields are provided

prevents duplicate account creation

securely compares password hashes using bcrypt

Example:

const ok = await bcrypt.compare(password, user.passwordHash);
Authentication Flow

User signs up with email and password

Password is hashed using bcrypt

User credentials are stored securely in MongoDB

A JWT token is generated and returned

Client includes JWT in the Authorization header

Middleware verifies token before allowing protected requests

Technologies Used

Frontend

React Native

Expo

Backend

Node.js

Express.js

Security & Authentication

bcrypt

JSON Web Tokens (JWT)

Database

MongoDB

Security Concepts Demonstrated

This project demonstrates practical implementation of:

Secure password hashing

Token-based authentication

API authorization middleware

Secure credential validation

Stateless authentication systems

Future Security Improvements

Planned security enhancements include:

refresh token implementation

rate limiting for authentication endpoints

account lockout protection

stronger password policy enforcement

centralized logging for authentication events

Attribution

Original project developed collaboratively as part of a university project.
This repository is a fork highlighting my contributions to the backend authentication and security architecture.
