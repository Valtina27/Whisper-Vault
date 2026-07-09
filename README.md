---

# WHISPER VAULT

## SECURE FILE ENCRYPTION AND DECRYPTION PLATFORM USING RSA CRYPTOGRAPHY

## OVERVIEW

Whisper Vault is a secure web-based file encryption and decryption platform developed as a Capstone Project for the B.Sc. Artificial Intelligence and Data Science program.

The application enables users to securely upload, encrypt, decrypt, and manage confidential files using RSA asymmetric cryptography. It is designed to ensure data confidentiality while providing an intuitive and user-friendly interface for secure file management.

---

## OBJECTIVES

* Protect sensitive files using RSA encryption.
* Enable secure file sharing and storage.
* Prevent unauthorized access to confidential documents.
* Provide a simple web interface for encryption and decryption operations.

---

## KEY FEATURES

* RSA Asymmetric Encryption
* Secure File Upload
* File Encryption and Decryption
* User Authentication
* Modern Responsive User Interface
* Client-Server Architecture
* Secure Key-Based File Protection
* Organized File Management

---

## TECHNOLOGY STACK

### FRONTEND

* React.js
* HTML5
* CSS3
* JavaScript
* Vite

### BACKEND

* Node.js
* Express.js

### DATABASE

* MongoDB

### SECURITY

* RSA Cryptography
* JWT Authentication
* Environment Variables

---

## PROJECT STRUCTURE

```
Whisper-Vault
│
├── client/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── app.js
│   └── package.json
│
├── assets/
│   └── screenshots/
│
├── document/
│
└── README.md
```

---

## INSTALLATION

### Clone the Repository

```bash
git clone https://github.com/Valtina27/Whisper-Vault.git
```

### Install Client Dependencies

```bash
cd client
npm install
```

### Install Server Dependencies

```bash
cd ../server
npm install
```

### Configure Environment Variables

Create a `.env` file inside both the client and server directories and configure the required environment variables.

### Start the Application

Backend

```bash
npm start
```

Frontend

```bash
npm run dev
```

---

## WORKFLOW

1. User registers and logs into the application.
2. User uploads a file.
3. The server encrypts the file using RSA cryptography.
4. The encrypted file is securely stored.
5. The user can decrypt the file whenever authorized.
6. Only authorized users can access protected files.

---

## APPLICATION MODULES

### Client

* User Interface
* Authentication Pages
* File Upload Interface
* Encryption Dashboard
* Decryption Dashboard

### Server

* Authentication Controller
* Encryption Controller
* Decryption Controller
* Database Configuration
* File Management

---

## PROJECT HIGHLIGHTS

* Secure implementation of RSA-based encryption.
* Separation of frontend and backend architecture.
* Responsive web interface.
* Secure authentication workflow.
* Academic capstone demonstrating cybersecurity and full-stack development concepts.

---

## FUTURE ENHANCEMENTS

* AES and Hybrid Encryption Support
* Cloud File Storage
* Multi-Factor Authentication
* File Version Control
* Role-Based Access Control
* Secure File Sharing Links
* Activity Logs and Audit Reports

---

## PROJECT DOCUMENTATION

The complete project documentation is available inside the `document` folder.

Contents include:

* Project Report
* Chapter-wise Documentation

---

## SCREENSHOTS

Application screenshots are available inside the `assets/screenshots` directory.

---

## AUTHOR

**Valtina A**

B.Sc. Artificial Intelligence and Data Science

Rathinam College of Liberal Arts and Science @ TIPS Global Institute

Academic Year: 2025–2026

---

## LICENSE

This project was developed for educational and academic purposes as part of the Capstone Project.

---


