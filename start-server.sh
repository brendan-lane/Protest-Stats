#! /bin/bash

# Make sure that python3 and pip3 is installed
sudo apt-get update && sudo apt-get install python3 python3-pip -y

# Setup python3 virtual environment and install Flask webserver using pip3
python3 -m venv env
source env/bin/activate
pip3 install flask

# Run webserver
export FLASK_APP=http-server.py
flask run