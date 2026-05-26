@echo off
setlocal
set "APP=%~dp0index.html"

if not exist "%APP%" (
  echo Cannot find:
  echo %APP%
  pause
  exit /b 1
)

set "EDGE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
set "CHROME=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
set "CHROME_X86=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"

if exist "%EDGE%" (
  start "" "%EDGE%" "%APP%"
  exit /b
)

if exist "%CHROME%" (
  start "" "%CHROME%" "%APP%"
  exit /b
)

if exist "%CHROME_X86%" (
  start "" "%CHROME_X86%" "%APP%"
  exit /b
)

start "" "%APP%"
