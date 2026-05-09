@echo off
setlocal

cd /d "%~dp0"

start "R6 Server" node server.js
timeout /t 1 /nobreak > nul
start "R6 Bracket" http://127.0.0.1:4173/

endlocal
