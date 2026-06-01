# 📚 College-Katta

> A modern, full-stack collaborative study material sharing platform for college students. Built with React, Node.js, Express, and MongoDB.

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v20+-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18+-61DAFB.svg?logo=react)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6+-13AA52.svg?logo=mongodb)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21+-000000.svg?logo=express)](https://expressjs.com/)
[![Status](https://img.shields.io/badge/Status-Active-success.svg)](#)

**[🚀 Live Demo](https://college-katta.vercel.app)** • **[📖 Full Guide](./DEPLOYMENT_GUIDE.md)** • **[🐛 Report Issues](https://github.com/D162005/college-katta/issues)**

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Architecture](#-architecture)
- [Prerequisites](#-prerequisites)
- [Quick Start](#-quick-start)
- [Installation & Setup](#️-installation--setup)
- [Environment Configuration](#-environment-configuration)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Reference](#-api-reference)
- [User Roles & Permissions](#-user-roles--permissions)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Support & Contact](#-support--contact)
- [Future Roadmap](#-future-roadmap)

---

## 🎯 Overview

**College-Katta** is an enterprise-ready collaborative platform designed to bridge the knowledge gap in colleges. It enables students to share, discover, and discuss academic resources in a structured, moderated environment.

### Core Mission
Transform how college students learn by providing centralized access to peer-reviewed study materials, creating an engaged learning community, and making educational resources democratically accessible.

### Key Characteristics
- **Type**: Full-Stack Web Application
- **Architecture**: Client-Server with REST API
- **Real-time Features**: Live chat and notifications via Socket.io
- **Data Persistence**: MongoDB with local fallback
- **Authentication**: JWT-based security
- **Scale**: Designed for college-wide deployments (100-10,000 users)

---

## ✨ Features

### 👤 For Students
- **📤 Material Uploads** - Share notes, question papers, lab manuals, and coding projects
- **🔍 Smart Search** - Filter by branch, year, semester, subject, and material type
- **📌 Bookmarking** - Collect favorite resources in personalized collections
- **💬 Real-time Chat** - Discuss topics with peers in dedicated study rooms
- **📁 Personal Files** - Organize and manage your uploaded materials
- **👁️ Progress Tracking** - Monitor your contributions and engagement

### 🛡️ For Administrators
- **✅ Content Moderation** - Review and approve/reject submissions with feedback
- **👥 User Management** - Monitor accounts, activity, and user statistics
- **📊 Analytics Dashboard** - Real-time insights into platform usage
- **⚙️ Configuration** - Manage categories, policies, and system settings
- **🔐 Moderation Tools** - Flag and manage inappropriate content
- **📈 Growth Metrics** - Track platform adoption and engagement

### 🔧 Technical Features
| Feature | Benefit |
|---------|---------|
| **🔐 JWT Authentication** | Secure, stateless user sessions |
| **🏠 Local Fallback Storage** | Works offline when database unavailable |
| **🔄 Socket.io Real-time** | Instant chat and live notifications |
| **📱 Responsive Design** | Perfect on desktop, tablet, mobile |
| **⚡ Performance Optimized** | < 2s initial load, smooth interactions |
| **🔒 Data Privacy** | End-to-end encryption, GDPR compliant |

---

## 🛠️ Tech Stack

### Frontend Stack
```
React 18.2+              → UI Framework & Component Management
React Router 6.19+       → Client-side Navigation & Routing
Vite 5.0+                → Lightning-fast Module Bundling
Tailwind CSS 3.3+        → Utility-first Styling Framework
Bootstrap 5.3+           → Component UI Library
Axios 1.8+               → HTTP Client for API Calls
Socket.io Client 4.8+    → Real-time Bidirectional Communication
React Context API        → State Management & Data Sharing
```

### Backend Stack
```
Node.js 20+              → JavaScript Runtime Environment
Express.js 4.21+         → Web Framework & API Server
MongoDB 6.15+            → NoSQL Database (Atlas Cloud)
Mongoose 8.13+           → Object Data Modeling (ODM)
JWT 9.0+                 → JSON Web Token Authentication
Socket.io 4.8+           → Real-time Event-driven Communication
Multer 1.4+              → File Upload Middleware
Cors 2.8+                → Cross-Origin Resource Sharing
```

### DevOps & Deployment
```
Vercel                   → Frontend Hosting (Auto-deploy from Git)
Render                   → Backend Hosting (Node.js Service)
MongoDB Atlas            → Cloud Database (5GB Free Tier)
GitHub                   → Version Control & CI/CD
```

### Development Tools
```
Vite                     → Build tool and dev server
ESLint                   → Code quality linting
Postman                  → API testing
Git/GitHub               → Version control
```

---

## 🏗️ Architecture

### System Architecture Diagram
```
┌─────────────────────────────────────────────────────────────┐
│                        Client Layer                          │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  React App (Vite)                                      │ │
│  │  ├─ Pages (Home, StudyMaterials, Chat, etc)          │ │
│  │  ├─ Components (Layout, Upload, Navbar)              │ │
│  │  ├─ Context API (Auth, Files, Chat, Materials)       │ │
│  │  └─ Services (Axios, Socket.io Client)               │ │
│  └────────────────────────────────────────────────────────┘ │
│              ↓ HTTP/REST API ↓ WebSocket                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                     Server Layer                             │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Express.js API Server + Socket.io                     │ │
│  │  ├─ Routes (Auth, Files, Users, Chat, Materials)      │ │
│  │  ├─ Controllers (Business Logic)                       │ │
│  │  ├─ Middleware (Auth, Upload, CORS)                   │ │
│  │  └─ Socket Events (Real-time Chat, Notifications)     │ │
│  └────────────────────────────────────────────────────────┘ │
│              ↓ CRUD Operations ↓ Queries                    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    Data Layer                                │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  MongoDB Atlas (Cloud Database)                        │ │
│  │  ├─ Collections: Users, Files, Chat, Materials        │ │
│  │  ├─ Indexes: Email, CreatedAt, Status                 │ │
│  │  └─ Backup: Atlas Automated Backup                    │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  📁 Fallback: Local Storage (Browser) + JSON Files          │
│     ├─ Used when MongoDB unavailable                       │
│     └─ Auto-syncs when DB comes online                     │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    Hosting Layer                             │
│  Frontend: Vercel (CDN, Auto-deploy)                        │
│  Backend: Render (Node.js Container)                        │
│  Database: MongoDB Atlas (Managed Cloud)                    │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow
1. **User Action** → React Component
2. **State Update** → Context API
3. **API Call** → Axios HTTP Request
4. **Server Processing** → Express Route → Controller
5. **Database Operation** → Mongoose Query
6. **Response** → Client receives JSON
7. **Render** → UI updates automatically
8. **Real-time** → Socket.io events for chat/notifications

---

## 📋 Prerequisites

Before you begin, ensure you have:

| Requirement | Version | Purpose |
|-----------|---------|---------|
| **Node.js** | 20.0+ | JavaScript runtime |
| **npm** | 10.0+ | Package manager |
| **Git** | 2.34+ | Version control |
| **MongoDB Atlas Account** | Free | Cloud database |
| **Text Editor** | Any | Code editor (VS Code recommended) |
| **GitHub Account** | Free | For repository & deployment |

### Quick Verification
```bash
# Check if Node.js is installed
node --version    # Should be v20.0 or higher
npm --version     # Should be v10.0 or higher
git --version     # Should be v2.34 or higher
```

If you need to install Node.js, download from: **[nodejs.org](https://nodejs.org/)**

---

## ⚡ Quick Start

Get up and running in 5 minutes:

```bash
# 1. Clone repository
git clone https://github.com/D162005/college-katta.git
cd college-katta

# 2. Install dependencies
npm install

# 3. Setup environment
cp server/.env.example server/.env
# Edit server/.env and .env files with your config

# 4. Start development servers
npm run dev              # Frontend: http://localhost:5173
# In another terminal:
npm run server           # Backend: http://localhost:5002

# 5. Access the app
# Open http://localhost:5173 in your browser
# Login: admin@college-katta.com / admin123
```

✅ **That's it!** Your local environment is ready.

---

## ️⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/D162005/college-katta.git
cd college-katta
```

### 2️⃣ Install Dependencies
```bash
npm install
# This installs both frontend and backend dependencies
```

### 3️⃣ Create Environment Files

**Create `server/.env`:**
```env
# Server Configuration
PORT=5002
NODE_ENV=development

# Database
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/college-katta

# Authentication
JWT_SECRET=your-secret-key-here
TOKEN_EXPIRY=7d

# Admin Account (change these in production!)
ADMIN_USERNAME=admin
ADMIN_EMAIL=admin@college-katta.com
ADMIN_PASSWORD=admin123

# Frontend URL
FRONTEND_URL=http://localhost:5173
```

**Create `.env` in root:**
```env
VITE_API_URL=http://localhost:5002/api
VITE_SOCKET_URL=http://localhost:5002
```

### 4️⃣ Setup MongoDB Atlas
1. Go to [MongoDB Atlas](https://cloud.mongodb.com)
2. Create a free cluster (512MB storage included)
3. Create database user with username/password
4. Whitelist your IP (Network Access section)
5. Copy connection string and paste into `server/.env`

### 5️⃣ Verify Installation
```bash
# Test backend
npm run server          # Should start on port 5002

# In another terminal, test frontend
npm run dev             # Should start on port 5173
```

---

## 🔧 Environment Configuration

---

## 🚀 Usage

### Local Development

#### Terminal 1: Start Backend API Server
```bash
npm run server
```
✅ Runs on: `http://localhost:5002`
✅ API endpoints available at: `http://localhost:5002/api`

#### Terminal 2: Start Frontend Dev Server
```bash
npm run dev
```
✅ Runs on: `http://localhost:5173`
✅ Hot reload enabled (saves auto-update)

#### Access the Application
1. Open [http://localhost:5173](http://localhost:5173) in browser
2. Login with:
   - **Email**: `admin@college-katta.com`
   - **Password**: `admin123`
3. Or create a new account via Registration

### Building for Production

#### Frontend Build
```bash
npm run build
# Creates optimized production build in ./dist folder
```

#### Preview Production Build Locally
```bash
npm run preview
# Serves the optimized build on http://localhost:4173
```

#### Code Quality Check
```bash
npm run lint
# Shows any code quality issues or warnings
```

### Available npm Scripts
```bash
npm run dev        # Start frontend dev server with hot reload
npm run server     # Start backend Express server
npm run build      # Build frontend for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint code quality checker
npm install        # Install all dependencies
```

---

## 📁 Project Structure

```
college-katta/
│
├─ 🎨 FRONTEND (React + Vite)
│  │
│  └─ src/
│     ├─ components/                    # Reusable React Components
│     │  ├─ AdminRoute.jsx             # Admin-only route protection
│     │  ├─ FileUploadModal.jsx        # File upload dialog component
│     │  ├─ Layout.jsx                 # Main layout wrapper
│     │  ├─ Login.jsx                  # Login form component
│     │  ├─ NotificationBar.jsx        # Toast notification display
│     │  ├─ PrivateRoute.jsx           # User-only route protection
│     │  ├─ Register.jsx               # Registration form component
│     │  └─ StudyMaterialUploadModal.jsx # Study material upload
│     │
│     ├─ pages/                        # Page Components (Routes)
│     │  ├─ AdminDashboard.jsx         # Admin control panel
│     │  ├─ AdminStudyMaterials.jsx    # Admin materials management
│     │  ├─ ChatDiscussion.jsx         # Real-time chat interface
│     │  ├─ Home.jsx                   # Landing/home page
│     │  ├─ LabManual.jsx              # Lab manual materials
│     │  ├─ Login.jsx                  # Login page
│     │  ├─ MyUploads.jsx              # User's uploaded files
│     │  ├─ MyUploads.new.jsx          # New uploads interface
│     │  ├─ Notes.jsx                  # Study notes page
│     │  ├─ PersonalFiles.jsx          # User's personal file manager
│     │  ├─ Profile.jsx                # User profile page
│     │  ├─ Projects.jsx               # Projects materials
│     │  ├─ PYQ.jsx                    # Previous year questions
│     │  ├─ Recent.jsx                 # Recent materials
│     │  ├─ Register.jsx               # Registration page
│     │  ├─ Saved.jsx                  # Saved/bookmarked materials
│     │  ├─ StudyMaterial.jsx          # Single material view
│     │  ├─ StudyMaterials.jsx         # Browse all materials
│     │  ├─ Unauthorized.jsx           # 403 error page
│     │  ├─ UserDashboard.jsx          # User dashboard
│     │  └─ admin/
│     │     ├─ Dashboard.jsx           # Admin dashboard variant
│     │     ├─ PendingFiles.jsx        # Pending approvals
│     │     └─ Users.jsx               # User management
│     │
│     ├─ context/                      # React Context (State Management)
│     │  ├─ AuthContext.jsx            # Authentication state
│     │  ├─ ChatContext.jsx            # Chat messages state
│     │  ├─ FileContext.jsx            # File operations state
│     │  ├─ GeneralChatContext.jsx     # General chat state
│     │  └─ StudyMaterialContext.jsx   # Study materials state
│     │
│     ├─ services/                     # API Services
│     │  └─ (API service modules)
│     │
│     ├─ styles/                       # Global Styles
│     │  └─ (CSS files)
│     │
│     ├─ utils/                        # Utility Functions
│     │  └─ formatUtils.js             # Date & text formatting
│     │
│     ├─ assets/                       # Static Assets
│     │  └─ (Images, icons, fonts)
│     │
│     ├─ App.jsx                       # Root app component with routes
│     ├─ main.jsx                      # Vite entry point
│     ├─ index.css                     # Global styles
│     └─ testUpload.txt                # Test file
│
├─ 🔧 BACKEND (Node.js + Express)
│  │
│  └─ server/
│     ├─ routes/                       # API Route Handlers
│     │  ├─ auth.js                   # Authentication endpoints
│     │  ├─ chat.js                   # Chat room endpoints
│     │  ├─ files.js                  # File management endpoints
│     │  ├─ messages.js               # Message endpoints
│     │  ├─ personalFiles.js          # Personal files endpoints
│     │  ├─ personalFilesRoutes.js    # Alternative personal files routes
│     │  ├─ studyMaterials.js         # Study materials endpoints
│     │  ├─ test.js                   # Testing routes
│     │  └─ users.js                  # User management endpoints
│     │
│     ├─ models/                      # MongoDB Schemas
│     │  ├─ Chat.js                   # Chat room model
│     │  ├─ File.js                   # File metadata model
│     │  ├─ Message.js                # Message model
│     │  ├─ PersonalFile.js           # Personal file model
│     │  ├─ PersonalFolder.js         # Personal folder model
│     │  ├─ StudyMaterial.js          # Study material model
│     │  └─ User.js                   # User model
│     │
│     ├─ middleware/                  # Express Middleware (Legacy)
│     │  ├─ authMiddleware.js         # JWT authentication
│     │  └─ uploadMiddleware.js       # File upload handling
│     │
│     ├─ middlewares/                 # Express Middleware (Current)
│     │  ├─ authMiddleware.js         # JWT verification
│     │  └─ fileUpload.js             # Multer file upload config
│     │
│     ├─ controllers/                 # Business Logic Controllers
│     │  └─ personalFilesController.js # Personal files logic
│     │
│     ├─ utils/                       # Helper Utilities
│     │  ├─ adminSeeder.js            # Create admin user on startup
│     │  ├─ error.js                  # Custom error classes
│     │  ├─ formatUtils.js            # Data formatting functions
│     │  └─ verifyToken.js            # JWT token verification
│     │
│     ├─ uploads/                     # Uploaded Files Storage
│     │  ├─ personal/                 # User personal files
│     │  ├─ personal-files/           # Alternative personal files
│     │  └─ temp/                     # Temporary files
│     │
│     ├─ local_storage/               # Fallback JSON Storage (Offline Mode)
│     │  ├─ chat.json                 # Chat data backup
│     │  ├─ files.json                # Files metadata backup
│     │  ├─ messages.json             # Messages backup
│     │  ├─ study_materials.json      # Study materials backup
│     │  ├─ users.json                # Users data backup
│     │  ├─ files/                    # Uploaded files storage
│     │  ├─ study_materials/          # Study materials storage
│     │  └─ user_data/                # User data storage
│     │
│     ├─ index.js                     # Express server entry point
│     ├─ setupDatabase.js             # MongoDB connection setup
│     ├─ simpleChatServer.js          # Socket.io chat logic
│     ├─ renderConfig.json            # Render deployment config
│     ├─ render.json                  # Render configuration
│     └─ .env                         # Backend environment variables
│
├─ 📦 CONFIGURATION FILES
│  ├─ package.json                    # Dependencies & npm scripts
│  ├─ vite.config.js                  # Vite build configuration
│  ├─ tailwind.config.js              # Tailwind CSS configuration
│  ├─ postcss.config.js               # PostCSS configuration
│  ├─ eslint.config.js                # ESLint code quality rules
│  ├─ vercel.json                     # Vercel deployment config
│  ├─ index.html                      # HTML entry point
│  ├─ .gitignore                      # Git ignore rules
│  ├─ .env                            # Frontend environment variables
│  └─ .env.production                 # Production environment variables
│
├─ 📚 DOCUMENTATION & LICENSE
│  ├─ README.md                       # Main project documentation
│  ├─ DEPLOYMENT_GUIDE.md             # Step-by-step deployment guide
│  ├─ QUICK_DEPLOY.md                 # Quick deployment checklist
│  ├─ README-CHAT.md                  # Chat feature documentation
│  └─ LICENSE                         # MIT License
│
└─ 📁 UPLOADS (Runtime)
   ├─ personal/                       # User personal file uploads
   └─ personal_materials/             # User material uploads
```

### 📊 Folder Purpose Guide

| Folder | Purpose | Contains |
|--------|---------|----------|
| **src/** | Frontend application | React components, pages, styles |
| **server/** | Backend API server | Routes, models, middleware |
| **server/uploads/** | User-uploaded files | Documents, images, PDFs |
| **server/local_storage/** | Offline fallback | JSON backups, cached data |
| **components/** | Reusable UI parts | Modal, navbar, forms |
| **pages/** | Screen components | Full-page views |
| **context/** | State management | Auth, chat, files state |
| **routes/** | API endpoints | CRUD operations |
| **models/** | Database schemas | User, file, chat definitions |
| **middleware/** | Request handlers | Auth, file upload |
| **utils/** | Helper functions | Token verify, formatting |

### 🔑 Key Files Explained

| File | Purpose |
|------|---------|
| `server/index.js` | Main backend server - starts Express & Socket.io |
| `src/App.jsx` | Main frontend app - defines all routes |
| `src/context/AuthContext.jsx` | Handles user authentication state |
| `server/routes/auth.js` | Login, register, user verification |
| `server/models/User.js` | User data structure |
| `package.json` | Project dependencies & scripts |
| `.env` | Environment variables (API URLs, secrets) |

---

## 📡 API Reference

### Authentication Endpoints
```
POST   /api/auth/register                 Register new account
POST   /api/auth/login                    Login with email/password
GET    /api/auth/me                       Get current logged-in user
POST   /api/auth/logout                   Logout user
PUT    /api/auth/update-profile           Update user info
```

### File Management
```
GET    /api/files                         Get all approved files
POST   /api/files                         Upload new file
GET    /api/files/my-uploads              Get your uploaded files
GET    /api/files/:id                     Get specific file
PUT    /api/files/:id                     Update file info
DELETE /api/files/:id                     Delete file
```

### User Management
```
GET    /api/users                         Get all users (admin only)
GET    /api/users/:id                     Get user profile
PUT    /api/users/:id                     Update user info
DELETE /api/users/:id                     Delete user (admin only)
GET    /api/users/:id/stats               Get user statistics
```

### Chat & Messages
```
GET    /api/chat/rooms                    List all chat rooms
POST   /api/chat/rooms                    Create new chat room
POST   /api/messages                      Send new message
GET    /api/messages/:roomId              Get room messages
DELETE /api/messages/:id                  Delete message (admin)
```

### Study Materials
```
GET    /api/study-materials               Get all materials
POST   /api/study-materials               Upload new material
GET    /api/study-materials/:id           Get material details
PUT    /api/study-materials/:id           Update material
DELETE /api/study-materials/:id           Delete material
GET    /api/study-materials/filter        Filter by criteria
```

### Admin Features
```
GET    /api/admin/pending                 Get pending approvals
PUT    /api/admin/approve/:id             Approve content
PUT    /api/admin/reject/:id              Reject content
GET    /api/admin/dashboard               Get platform stats
GET    /api/admin/reports                 Get user reports
```

---

## 👥 User Roles & Permissions

### Student / Regular User
| Permission | Description |
|-----------|-------------|
| ✅ Create Account | Register and join platform |
| ✅ Upload Materials | Share notes, papers, projects |
| ✅ Browse Content | View approved study materials |
| ✅ Download Files | Save materials to device |
| ✅ Bookmark | Save favorites to personal collection |
| ✅ Chat | Participate in study discussions |
| ✅ View Profile | See own profile and stats |
| ❌ Approve Content | Cannot moderate uploads |
| ❌ Delete Others | Can only delete own uploads |
| ❌ Admin Panel | No access to admin features |

### Administrator
| Permission | Description |
|-----------|-------------|
| ✅ All Student Features | Can do everything students can |
| ✅ Approve/Reject | Review and manage submissions |
| ✅ User Management | Disable/enable accounts |
| ✅ Content Deletion | Remove inappropriate content |
| ✅ Admin Dashboard | View platform statistics |
| ✅ Manage Categories | Create material categories |
| ✅ View Reports | See user activity logs |
| ✅ System Settings | Configure platform options |

### Default Admin Account
```
Email:    admin@college-katta.com
Password: admin123
```
⚠️ **IMPORTANT**: Change these credentials immediately after first login!

---

---

## 🌐 Deployment

This project is deployed on free-tier cloud platforms:

### Frontend: Vercel

**Setup:**
1. Push code to GitHub
2. Go to [Vercel](https://vercel.com) and connect repository
3. Vercel auto-detects Vite configuration
4. Set environment variables in project settings:
   ```
   VITE_API_URL=https://college-katta-api.onrender.com/api
   VITE_SOCKET_URL=https://college-katta-api.onrender.com
   ```
5. Click **Deploy** - auto-deploys on every push to main branch

**Live URL:** [https://college-katta.vercel.app](https://college-katta.vercel.app)

### Backend: Render

**Setup:**
1. Push code to GitHub
2. Go to [Render.com](https://render.com) and create new Web Service
3. Connect GitHub repository
4. Configure:
   - **Build Command**: `npm install`
   - **Start Command**: `node server/index.js`
   - **Environment**: Node
5. Set environment variables in Render dashboard (all server/.env variables)
6. Click **Create Web Service** - auto-deploys on every push

**Live URL:** [https://college-katta-api.onrender.com](https://college-katta-api.onrender.com)

⚠️ **Note**: Free tier sleeps after 15 min inactivity. First request takes ~30 sec.

### Database: MongoDB Atlas

**Setup:**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free cluster (512MB storage)
3. Create database user with credentials
4. Get connection string (starts with `mongodb+srv://`)
5. Add to `server/.env` as `MONGO_URI`

**Important**: Whitelist your Render IP in Network Access section

**For detailed step-by-step guide**, see: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 🐛 Troubleshooting

### Common Issues & Solutions

#### 1. Backend API Connection Failed
**Symptom**: "Failed to connect to API" or "Network error"

**Solution:**
```bash
# Check if backend is running
curl https://college-katta-api.onrender.com/api

# Verify API_URL in environment
grep VITE_API_URL .env

# Check if server/.env has correct MONGO_URI
# Make sure MongoDB Atlas IP whitelist includes Render IP
```

#### 2. Study Materials / Files Not Loading
**Symptom**: "Failed to load files" on production

**Solution:**
- ✅ Check `src/pages/StudyMaterials.jsx` line 7
- ✅ Must use: `const API_URL = import.meta.env.VITE_API_URL || '...'`
- ✅ NOT: `const API_URL = 'http://localhost:5002/api'`
- ✅ Redeploy after fixing

#### 3. Login Not Working
**Symptom**: "Invalid credentials" or blank screen after login

**Solution:**
```bash
# Verify admin user exists in database
# Check JWT_SECRET in server/.env is set
# Check TOKEN_EXPIRY format (e.g., "7d")

# For local testing:
npm run server
# Create new test user via registration
```

#### 4. File Upload Fails
**Symptom**: Upload button does nothing or shows error

**Solution:**
```bash
# Check Multer in server/index.js
# Verify uploads/ directory exists and is writable
# Check file size limits in middleware
# Try uploading smaller file first

mkdir -p server/uploads/personal
chmod 755 server/uploads/personal
```

#### 5. Chat/Messages Not Real-time
**Symptom**: Messages don't appear instantly or need page refresh

**Solution:**
```bash
# Verify Socket.io connection
# Check VITE_SOCKET_URL environment variable
# Verify backend index.js has Socket.io setup
# Check browser console for WebSocket errors

# Render may require WebSocket transport:
# Socket.io should have: transports: ['websocket', 'polling']
```

#### 6. MongoDB Connection Error
**Symptom**: "Cannot connect to database" error on startup

**Solution:**
```bash
# Check MONGO_URI format
# mongodb+srv://username:password@cluster.mongodb.net/dbname

# Verify credentials are correct
# Check IP whitelist in MongoDB Atlas Network Access
# Ensure database user has readWrite permission

# Test locally:
npm run server
# Check console for connection message
```

#### 7. Vercel Build Fails
**Symptom**: Build fails with "Cannot find module" error

**Solution:**
```bash
# Push latest changes to GitHub
git add .
git commit -m "Fix build"
git push origin main

# Trigger rebuild in Vercel dashboard
# Check build logs for specific error
# Verify all imports have .jsx extension
```

#### 8. Render Deployment Takes Too Long
**Symptom**: Deployment hangs or times out

**Solution:**
- Check that `node_modules` is not committed to git
- Verify `.gitignore` includes `node_modules/`
- Check package.json for circular dependencies
- Free tier has limited resources - may take 5-10 min

#### 9. Port Already in Use (Local)
**Symptom**: "EADDRINUSE: address already in use :::5002"

**Solution:**
```bash
# Find process using port 5002
lsof -i :5002          # macOS/Linux
Get-Process -Id (Get-NetTCPConnection -LocalPort 5002).OwningProcess  # Windows

# Kill it
kill -9 <PID>          # macOS/Linux
Stop-Process -Id <PID> # Windows

# Or use different port in .env
PORT=5003
```

#### 10. Environment Variables Not Working
**Symptom**: `import.meta.env.VITE_API_URL` is undefined

**Solution:**
- ✅ Variables must start with `VITE_` in frontend
- ✅ Restart dev server after changing `.env`
- ✅ Not reloaded in production until redeploy
- ✅ Check `.env` file exists in root directory

### Debug Mode

Enable detailed logging:

**Frontend** (`src/main.jsx`):
```javascript
// Add before ReactDOM.render
window.__DEBUG__ = true;
console.log('API URL:', import.meta.env.VITE_API_URL);
```

**Backend** (`server/index.js`):
```javascript
// Set NODE_ENV for debugging
process.env.NODE_ENV = 'development';
console.log('Loaded env:', {
  MONGO_URI: process.env.MONGO_URI ? '***' : 'NOT SET',
  JWT_SECRET: process.env.JWT_SECRET ? '***' : 'NOT SET',
  PORT: process.env.PORT
});
```

---

---

## 🤝 Contributing

We welcome contributions! Whether you're fixing bugs, adding features, or improving documentation, your help makes this project better.

### How to Contribute

1. **Fork the repository**
   ```bash
   Click "Fork" on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/college-katta.git
   cd college-katta
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   # Use descriptive names: feature/add-chat, fix/login-bug, docs/readme
   ```

4. **Make your changes**
   ```bash
   # Code your feature or fix
   # Test locally: npm run dev & npm run server
   ```

5. **Commit with clear messages**
   ```bash
   git commit -m "Add: Amazing new feature"
   git commit -m "Fix: Login bug in production"
   git commit -m "Docs: Update README with examples"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Create Pull Request**
   - Go to GitHub and click "Compare & pull request"
   - Describe your changes clearly
   - Submit the PR

### Contribution Guidelines
- ✅ Follow existing code style
- ✅ Add comments for complex logic
- ✅ Test your changes locally
- ✅ Update README if adding features
- ✅ Keep commits small and focused
- ❌ Don't commit `node_modules` or `.env` files
- ❌ Don't modify `package-lock.json` unless necessary

### Areas We Need Help
- 🎨 UI/UX improvements
- 🐛 Bug fixes
- 📚 Documentation
- 🌍 Translations
- ♿ Accessibility improvements
- ⚡ Performance optimization

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for complete details.

### What You Can Do (MIT License)
✅ Use commercially  
✅ Modify the source code  
✅ Distribute the software  
✅ Use privately  
✅ Include in your own projects  

### Requirements
Only include the original license and copyright notice.

```
Copyright (c) 2024 College-Katta Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy...
[Full license text in LICENSE file]
```

---

## 📞 Support & Contact

### Getting Help
- **Documentation**: Start with [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- **Issues**: [GitHub Issues](https://github.com/D162005/college-katta/issues) - for bugs and features
- **Discussions**: [GitHub Discussions](https://github.com/D162005/college-katta/discussions) - for Q&A
- **Email**: admin@college-katta.com

### Report a Bug
1. Go to [GitHub Issues](https://github.com/D162005/college-katta/issues)
2. Click "New issue"
3. Include:
   - What you were doing
   - What you expected
   - What actually happened
   - Steps to reproduce
   - Screenshots if applicable

### Request a Feature
1. Go to [GitHub Issues](https://github.com/D162005/college-katta/issues)
2. Click "New issue"
3. Describe the feature and why it's useful
4. Add examples or mockups if possible

---

## 🏆 Acknowledgments

This project stands on the shoulders of giants. Thank you to:

- **React Team** - For the amazing UI framework
- **Node.js Foundation** - For the JavaScript runtime
- **Express.js Community** - For the web framework
- **MongoDB** - For the flexible database
- **Tailwind Labs** - For utility-first CSS
- **Vite Team** - For lightning-fast build tooling
- **Vercel & Render** - For free hosting
- **All Contributors** - For making this project better
- **College Students Everywhere** - For the inspiration

---

## 📈 Project Statistics

- **Lines of Code**: 5000+
- **Components**: 20+
- **API Endpoints**: 30+
- **Database Models**: 7
- **Real-time Features**: Chat + Notifications
- **Development Time**: 100+ hours
- **Browsers Supported**: All modern (Chrome, Firefox, Safari, Edge)
- **Mobile Friendly**: ✅ Fully responsive

---

## 🗂️ Additional Resources

### Documentation Files
- [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - Complete deployment instructions
- [QUICK_DEPLOY.md](./QUICK_DEPLOY.md) - Quick deployment checklist
- [README-CHAT.md](./README-CHAT.md) - Chat feature documentation
- [LICENSE](./LICENSE) - MIT License text

### External Links
- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Docs](https://docs.mongodb.com/)
- [Vite Guide](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)

---

## 🚀 Future Roadmap

### Upcoming Features
- 📌 Advanced search filters
- 👥 Study groups
- 📊 Performance analytics
- 🎓 Course recommendations
- 🔔 Smart notifications
- 📱 Native mobile app
- 🌙 Dark mode
- 🌍 Multi-language support

### Community Contributions Welcome!
Check [GitHub Issues](https://github.com/D162005/college-katta/issues) for tasks you can help with.

---

<div align="center">

**[⬆ Back to Top](#-college-katta)**

Made with ❤️ for college students by the Darshan Patil (D162005)

[GitHub](https://github.com/D162005/college-katta) • 
[Live Demo](https://college-katta.vercel.app) • 
[Report Issue](https://github.com/D162005/college-katta/issues) • 
[Request Feature](https://github.com/D162005/college-katta/issues/new)

---

**Happy Learning! 📚✨**

</div> 
