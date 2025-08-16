# 📁 Project Structure

This document outlines the complete file structure of the YouTube MP3 Downloader project.

## 🏗️ Root Directory Structure

```
youtube-mp3-downloader/
├── 📁 .angular/                   # Angular CLI cache (auto-generated)
├── 📁 .git/                      # Git repository data
├── 📁 .vscode/                   # VS Code settings
├── 📁 backend/                   # 🔴 EXPRESS API SERVER
│   ├── 📁 node_modules/          # Backend dependencies
│   ├── 📁 temp/                  # Temporary download files (auto-created)
│   ├── package.json              # Backend dependencies & scripts
│   ├── package-lock.json         # Backend dependency lock file
│   └── server.js                 # 🔴 MAIN API SERVER FILE
│
├── 📁 dist/                      # Angular production build (auto-generated)
├── 📁 node_modules/              # Frontend dependencies
├── 📁 public/                    # Static assets
│   └── favicon.ico
│
├── 📁 src/                       # 🔵 ANGULAR FRONTEND SOURCE
│   ├── 📁 app/                   # Angular application
│   │   ├── 📁 components/
│   │   │   └── 📁 song-downloader/
│   │   │       ├── song-downloader.component.ts    # 🔵 MAIN COMPONENT LOGIC
│   │   │       ├── song-downloader.component.html  # 🔵 UI TEMPLATE
│   │   │       ├── song-downloader.component.scss  # 🔵 COMPONENT STYLES
│   │   │       └── song-downloader.component.spec.ts # Component tests
│   │   │
│   │   ├── 📁 services/
│   │   │   └── song-downloader.service.ts    # 🔵 HTTP API SERVICE
│   │   │
│   │   ├── app.config.ts         # Angular app configuration
│   │   ├── app.config.server.ts  # Server-side rendering config
│   │   ├── app.routes.ts         # Frontend routing
│   │   ├── app.routes.server.ts  # Server-side routing
│   │   ├── app.ts                # Main app component
│   │   ├── app.html              # App template
│   │   ├── app.scss              # Global app styles
│   │   └── app.spec.ts           # App tests
│   │
│   ├── index.html                # Main HTML file
│   ├── main.ts                   # Angular bootstrap (client)
│   ├── main.server.ts            # Angular bootstrap (server)
│   ├── server.ts                 # Angular SSR server
│   └── styles.scss               # Global styles
│
├── 📄 .editorconfig             # Editor configuration
├── 📄 .gitignore                # Git ignore rules
├── 📄 angular.json              # Angular CLI configuration
├── 📄 package.json              # 🔵 FRONTEND DEPENDENCIES & SCRIPTS
├── 📄 package-lock.json         # Frontend dependency lock file
├── 📄 README.md                 # 📖 MAIN DOCUMENTATION
├── 📄 start.bat                 # 🚀 WINDOWS STARTUP SCRIPT
├── 📄 start.sh                  # 🚀 LINUX/MAC STARTUP SCRIPT
├── 📄 tsconfig.json             # TypeScript configuration (base)
├── 📄 tsconfig.app.json         # TypeScript configuration (app)
└── 📄 tsconfig.spec.json        # TypeScript configuration (tests)
```

## 🎯 Key Files Explained

### 🔴 Backend Files (Express API)
- **`backend/server.js`** - Main Express server handling YouTube downloads
- **`backend/package.json`** - Backend-specific dependencies (ytdl-core, ffmpeg, etc.)

### 🔵 Frontend Files (Angular)
- **`src/app/components/song-downloader/`** - Main download component
- **`src/app/services/song-downloader.service.ts`** - Service for API communication
- **`package.json`** - Angular dependencies and build scripts

### 🚀 Startup Files
- **`start.bat`** - Windows startup script (double-click to run)
- **`start.sh`** - Linux/Mac startup script

### 📖 Documentation
- **`README.md`** - Complete project documentation
- **`PROJECT_STRUCTURE.md`** - This file

## 🔗 How Components Connect

```
User Browser (http://localhost:4200)
        ↕️ HTTP Requests
Angular Frontend (src/app/)
        ↕️ API Calls (http://localhost:3000)
Express Backend (backend/server.js)
        ↕️ File Operations
YouTube API & FFmpeg
```

## 📦 Dependencies Separation

### Frontend Dependencies (package.json)
- Angular framework and tools
- TypeScript and build tools
- Development utilities

### Backend Dependencies (backend/package.json)
- Express.js web framework
- YouTube downloading (ytdl-core)
- Audio processing (fluent-ffmpeg)
- CORS and utilities

## 🚀 Quick Start Commands

```bash
# Install all dependencies
npm run setup

# Start both servers
npm run dev

# Start only frontend
npm run start:frontend

# Start only backend
npm run start:backend
```

## 🗂️ Clean Architecture Benefits

1. **Separation of Concerns** - Frontend and backend are clearly separated
2. **Independent Development** - Can work on frontend/backend separately
3. **Easy Deployment** - Each part can be deployed independently
4. **Maintainability** - Easy to understand and modify
5. **Scalability** - Can add features to either side easily

## 🧹 What Was Removed

The following files were removed for clean organization:
- ❌ `frontend/` (empty folder)
- ❌ `production-server.js` (unused)
- ❌ `api-server-prod.js` (unused)
- ❌ `docker-compose.yml` (not needed for local development)
- ❌ `Dockerfile` (not needed for local development)
- ❌ `.dockerignore` (not needed for local development)
- ❌ Root `temp/` folder (backend creates its own)
