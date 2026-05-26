@echo off
setlocal
cd /d "%~dp0"

set "PYTHON_EXE=C:\Users\Admin\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
set "PORT=8765"

if not exist "%PYTHON_EXE%" (
  echo Python runtime was not found:
  echo %PYTHON_EXE%
  echo.
  echo Opening index.html directly instead.
  start "" "%~dp0index.html"
  pause
  exit /b
)

start "GADS Insight Server" /min "%PYTHON_EXE%" -m http.server %PORT% --bind 127.0.0.1
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:%PORT%/"

echo GADS Insight Lab is opening at:
echo http://127.0.0.1:%PORT%/
echo.
echo Keep this window if the app needs the local server. Close the minimized server window when finished.
pause
