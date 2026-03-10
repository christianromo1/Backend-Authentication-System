# Backend Authentication System

## Overview

This project is a full-stack **mood tracking application** built with **React Native (Expo)** and a **Node.js / Express backend** connected to a **MongoDB database**. The application allows users to create accounts, securely authenticate, and store mood-tracking data.

My primary contribution focused on designing and implementing the **backend authentication and authorization system**, with an emphasis on **secure credential handling, token-based authentication, and safe database practices**.

The backend provides secure user registration, login, and protected API endpoints using **bcrypt password hashing** and **JSON Web Tokens (JWT)**.

---

## My Role

I contributed to the backend authentication architecture and security implementation of the application.

My work focused on ensuring that authentication flows followed modern backend security practices and protected user credentials appropriately.

### Key responsibilities included

- Implementing **secure signup and login API routes**
- Designing **JWT-based authentication**
- Implementing **password hashing using bcrypt**
- Building **authorization middleware for protected endpoints**
- Integrating **MongoDB user storage**
- Implementing safe **database validation and credential storage practices**

My goal was to ensure that authentication flows followed modern backend security practices and properly protected user credentials.

---

## Backend Architecture

### Backend Technologies

- Node.js
- Express.js
- MongoDB
- JSON Web Tokens (JWT)
- bcrypt

### Frontend

- React Native
- Expo

---

## Authentication Workflow

The authentication system follows a secure token-based workflow:

1. User signs up using email and password  
2. Password is hashed using bcrypt before storage  
3. User credentials are securely stored in MongoDB  
4. Backend generates a signed JWT token  
5. Client sends the token in the Authorization header  
6. Middleware verifies the token before granting access to protected endpoints  

This approach enables stateless authentication, allowing the backend to verify users without storing active session data.

---

## Security Features

### Password Hashing

User passwords are **never stored in plaintext**.

Passwords are hashed using the bcrypt hashing algorithm before being stored in MongoDB. This ensures that even if the database were compromised, the original passwords could not be easily recovered.

Password hashing protects against:
- credential theft
- rainbow table attacks
- database leaks
- plaintext credential exposure

---

### Token-Based Authentication

After successful login or signup, the server generates a **JSON Web Token (JWT)** which is returned to the client.

The token contains the user ID and is signed using a secret stored in environment variables.

The token is then used to authenticate future requests without requiring the user to send their password again.

Benefits include:
- stateless authentication
- reduced credential exposure
- secure API authorization

---

### Authorization Middleware

Protected backend routes use middleware to validate JWT tokens before allowing access.

The middleware:

- extracts the token from the Authorization header
- verifies the token signature
- extracts the authenticated user ID
- rejects invalid or expired tokens

This ensures that **only authenticated users can access protected API endpoints**.

---

## MongoDB Security Practices

MongoDB is used to store user accounts and authentication data.

Several security-focused database practices were implemented.

### Secure Credential Storage

User passwords are never stored directly. Instead, the database stores a hashed password value (passwordHash).

This prevents attackers from recovering user passwords even if the database were exposed.

---

### Input Normalization

User emails are normalized before database queries.

Normalization ensures consistent formatting and prevents duplicate account creation caused by case or whitespace differences.
This improves both database integrity and authentication reliability.

---

### Duplicate Account Prevention

Before creating a new account, the backend checks whether a user already exists with the same email.

This protects database integrity and prevents multiple accounts from being registered under the same email.

---

### Secure Password Verification

Login attempts use bcrypt’s secure comparison functions to validate passwords against stored password hashes.

This prevents vulnerabilities caused by insecure string comparisons.

---

## Security Concepts Demonstrated

This project demonstrates practical implementation of several key security engineering concepts:

- Secure password hashing
- Token-based authentication
- API authorization middleware
- Secure credential validation
- MongoDB user credential protection
- Stateless authentication systems

These authentication patterns mirror the architecture used in modern production applications.

---

## Threat Model

When designing the authentication system, several potential security threats were considered.

### Credential Stuffing

Attackers may attempt to reuse credentials from breached databases.

Potential mitigations:

- bcrypt password hashing
- future login rate limiting
- stronger password policy enforcement

---

### Token Theft

If a JWT token is stolen, an attacker could impersonate the user.

Mitigations include:

- signed tokens
- token expiration
- server-side verification of tokens

Future improvements may include **refresh token rotation**.

---

### Brute Force Login Attempts

Attackers may attempt repeated password guesses.

Future improvements include:

- rate limiting authentication endpoints
- account lockout after repeated failures

---

### Database Exposure

If the MongoDB database were compromised, attackers might attempt to extract user credentials.

Mitigations implemented include:

- bcrypt password hashing
- secure credential storage
- environment-based secret management

---

## Future Security Improvements

Possible improvements to strengthen the system include:

- refresh token implementation
- authentication rate limiting
- account lockout mechanisms
- stronger password complexity policies
- centralized authentication logging

---

## Attribution

This repository is a fork of the original collaborative project developed as part of a university course.

This version highlights my contributions to the **backend authentication system and security architecture**.
