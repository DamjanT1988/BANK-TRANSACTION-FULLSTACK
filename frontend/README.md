
# Transaction Management App

## Structure:
- **Backend**: Node.js & Express (Port 5000)
- **Frontend**: React & Axios (Port 3000)
- **Database**: In-memory storage
- **Testing**: Cypress

## Instructions:

### 1️⃣ Backend Setup:
```
cd backend
npm install
node app.js
```

### 2️⃣ Frontend Setup:
```
cd frontend
npm install
npm start
```

### 3️⃣ Run Cypress Tests:
```
cd frontend
npx cypress open
npx cypress run
```

### 4️⃣ Docker Setup (Backend Only):
```
cd backend
docker build -t transaction-backend .
docker run -p 5000:5000 transaction-backend
```
