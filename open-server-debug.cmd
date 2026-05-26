@echo off
setlocal
cd /d "%~dp0"

set "PORT=8765"
set "LOG=%~dp0gads-server.log"
set "PYTHON_EXE=C:\Users\Admin\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"

echo === GADS Insight Lab launcher === > "%LOG%"
echo Folder: %CD% >> "%LOG%"
echo Time: %DATE% %TIME% >> "%LOG%"

if exist "%PYTHON_EXE%" (
  set "PY=%PYTHON_EXE%"
) else (
  where python >nul 2>nul
  if errorlevel 1 (
    echo Python not found. >> "%LOG%"
    echo Python not found.
    echo Try open-direct.cmd instead.
    pause
    exit /b 1
  )
  set "PY=python"
)

echo Python: %PY% >> "%LOG%"
echo Starting server at http://127.0.0.1:%PORT%/ >> "%LOG%"

start "" "http://127.0.0.1:%PORT%/"
"%PY%" -m http.server %PORT% --bind 127.0.0.1 >> "%LOG%" 2>&1

echo.
echo Server stopped. Log:
echo %LOG%
pause
