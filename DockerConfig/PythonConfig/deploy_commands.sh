#!/bin/bash

# Apply database migrations
echo "Apply database migrations"
python manage.py migrate

# Create database superuser
echo "Create database superuser"
python manage.py auth_script

# Start server
echo "Starting server"
python manage.py runserver 0.0.0.0:1992


