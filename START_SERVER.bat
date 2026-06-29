@echo off
echo =================================================
echo Starting BPDACC Inventory Management System...
echo =================================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please install Node.js 14.x from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if dependencies are installed
if not exist "node_modules\" (
    echo Installing dependencies for the first time...
    call npm install
    echo.
)

REM Check if build folder exists
if not exist "dist\" (
    echo Building application...
    call npm run build
    echo.
)

echo Starting server...
echo.
node server.cjs

pause
