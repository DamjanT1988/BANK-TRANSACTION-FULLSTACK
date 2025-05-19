# Transaction Management Fullstack Application

A fullstack web application for recording and viewing financial transactions across bank accounts, featuring an Express.js API backend and a React frontend.

---

## Table of Contents
1. [Features](#features)
2. [Tech Stack](#tech-stack)
3. [Prerequisites](#prerequisites)
4. [Getting Started](#getting-started)
   - [Clone Repository](#clone-repository)
   - [Backend Setup](#backend-setup)
   - [Frontend Setup](#frontend-setup)
5. [Running Tests](#running-tests)
6. [Docker Support](#docker-support)
7. [Development Container](#development-container)
8. [Project Structure](#project-structure)
9. [Contributing](#contributing)
10. [License](#license)

---

## Features
- **Create Transactions**: Deposit or withdraw funds by submitting an account ID and amount.
- **View Transactions**: List all past transactions, with newest first.
- **Retrieve Transaction**: Fetch details of a specific transaction by ID.
- **Account Balances**: View the current balance for any account.
- **Form Validation**: Client-side validation for account IDs and amounts.
- **End-to-End Testing**: Cypress tests for critical user flows.

## Tech Stack
- **Backend**: Node.js, Express, UUID, CORS
- **Frontend**: React (Create React App), Fetch API (or Axios)
- **Testing**: Cypress
- **Dev Container**: VS Code Remote – Containers
- **CI/CD**: GitHub Actions

## Prerequisites
- **Node.js** (v16 or newer)
- **npm** (bundled with Node.js)
- **Docker** (for Docker-based setups)
- **VS Code** (optional, with Remote – Containers extension)

## Getting Started

### Clone Repository
```bash
git clone <repository-url>
cd BANK-TRANSACTION-FULLSTACK-main
```

### Backend Setup
1. Install dependencies and start the server:
   ```bash
   cd backend
   npm install
   npm start
   ```
2. The API will be available at `http://localhost:5000`.

### Frontend Setup
1. Install dependencies and launch the React app:
   ```bash
   cd frontend
   npm install
   npm start
   ```
2. The application will open at `http://localhost:3000` and interact with the backend.

## Running Tests
Ensure both backend and frontend are running, then:
```bash
cd frontend
# Launch Cypress UI
npx cypress open
# Or run headless tests
npx cypress run
```

## Docker Support
**Backend** can be containerized:
```bash
cd backend
docker build -t transaction-backend .
docker run -p 5000:5000 transaction-backend
```

## Development Container
A VS Code Dev Container is provided for a consistent development environment:
1. Install **Remote – Containers** extension in VS Code.
2. Open the project and select **Reopen in Container** when prompted.

## Project Structure
```
├── .devcontainer/           # VS Code Dev Container config
├── .github/                 # GitHub Actions workflows
├── backend/                 # Express.js API
│   ├── app.js               # API routes and server setup
│   ├── package.json         # Backend dependencies and scripts
│   └── Dockerfile           # Docker image build
└── frontend/                # React application
    ├── public/              # Static HTML
    ├── src/                 # React components
    │   ├── App.js
    │   └── index.js
    ├── package.json         # Frontend dependencies and scripts
    └── cypress/             # End-to-end tests
```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the **MIT License**.
