@echo off
setlocal
set "PIDFILE=%~dp0gads-background-server.pid"

if not exist "%PIDFILE%" (
  echo No saved server PID found.
  pause
  exit /b
)

for /f %%p in (%PIDFILE%) do (
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Stop-Process -Id %%p -ErrorAction SilentlyContinue"
)

del "%PIDFILE%" >nul 2>nul
echo Server stopped.
pause
