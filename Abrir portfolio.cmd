@echo off
cd /d "%~dp0"
title Portfolio - Lana Oliveira
where npm >nul 2>nul
if errorlevel 1 (
  echo Instale o Node.js para abrir o portfolio.
  pause
  exit /b 1
)
if not exist "node_modules\vite\bin\vite.js" (
  call npm ci
  if errorlevel 1 (
    pause
    exit /b 1
  )
)
echo Mantenha esta janela aberta enquanto visualiza o portfolio.
echo Endereco: http://127.0.0.1:5173/
call npm run dev -- --open
if errorlevel 1 (
  echo Caso a porta ja esteja em uso, abra http://127.0.0.1:5173/ no navegador.
  pause
)
