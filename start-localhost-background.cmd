@echo off
setlocal
cd /d "%~dp0"

set "PORT=8765"
set "PYTHON_EXE=C:\Users\Admin\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

if not exist "%PYTHON_EXE%" (
  echo Python runtime not found. Opening standalone file instead.
  start "" "%~dp0GADS-Insight-Lab-Standalone.html"
  exit /b 1
)

netstat -ano | findstr ":%PORT% " >nul
if errorlevel 1 (
  start "GADS Insight Localhost" /min "%PYTHON_EXE%" -m http.server %PORT% --bind 0.0.0.0
  timeout /t 2 /nobreak >nul
)

start "" "http://127.0.0.1:%PORT%/"
