@echo off
echo 🎵 YouTube MP3 Downloader - Startup Script
echo ==========================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo ❌ Node.js is not installed!
    echo Please install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js is installed

REM Check if npm is installed
npm --version >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo ❌ npm is not installed!
    pause
    exit /b 1
)

echo ✅ npm is installed

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing frontend dependencies...
    npm install
)

if not exist "backend\node_modules" (
    echo 📦 Installing backend dependencies...
    cd backend
    npm install
    cd ..
)

echo.
echo 🚀 Starting YouTube MP3 Downloader...
echo Frontend will be available at: http://localhost:4200
echo Backend API will be available at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the servers
echo.

REM Start both servers
npm run dev

pause
