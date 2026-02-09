@echo off
echo ========================================
echo PDF Text Extraction Script
echo ========================================
echo.

REM Try different Python commands
echo Attempting to run Python script...
echo.

REM Try python
python extract_writing_pdf.py 2>nul
if %errorlevel% equ 0 goto :success

REM Try python3
python3 extract_writing_pdf.py 2>nul
if %errorlevel% equ 0 goto :success

REM Try py launcher
py extract_writing_pdf.py 2>nul
if %errorlevel% equ 0 goto :success

REM If all fail
echo.
echo ERROR: Python is not installed or not in PATH
echo.
echo Please install Python from: https://www.python.org/downloads/
echo Make sure to check "Add Python to PATH" during installation
echo.
echo After installing Python, you also need to install PyMuPDF:
echo    pip install PyMuPDF
echo.
pause
exit /b 1

:success
echo.
echo ========================================
echo Extraction completed successfully!
echo ========================================
pause
