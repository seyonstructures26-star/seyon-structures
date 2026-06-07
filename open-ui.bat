@echo off
title Seyon Structures - Dev Server
cd /d "%~dp0"

if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    if errorlevel 1 (
        echo Failed to install dependencies.
        pause
        exit /b 1
    )
)

echo.
echo Starting Seyon Structures website...
echo Browser will open at http://localhost:5173
echo Press Ctrl+C to stop the server.
echo.

call npm run dev -- --open

pause
