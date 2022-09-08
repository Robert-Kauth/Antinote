# Start with the python:3.9 image

# Set the following enviroment variables
#
# REACT_APP_BASE_URL -> Your deployment URL
# FLASK_APP -> entry point to your flask app
# FLASK_ENV -> Tell flask to use the production server
# SQLALCHEMY_ECHO -> Just set it to true

# Set the directory for upcoming commands to /var/www

# Copy all the files from your repo to the working directory

# Copy the built react app (it's built for us) from the
# /react-app/build/ directory into your flasks app/static directory

# Run the next two python install commands with PIP
# install -r requirements.txt
# install psycopg2

# Start the flask environment by setting our
# closing command to gunicorn app:app
FROM node:16 AS build-stage

WORKDIR /antinote-v1
COPY antinote-v1/. .

# You have to set this because it should be set during build time.
ENV ANTINOTE_APP_BASE_URL=https://antinote.herokuapp.com/

# Build our React App
RUN npm install
RUN npm run build

# Setup Express environment
ENV DB_USERNAME=auth_app
ENV DB_PASSWORD=codelife
ENV DB_DATABASE=auth_db
ENV DB_HOST=localhost

EXPOSE 5000

WORKDIR /var/www
COPY . .
COPY --from=build-stage /react-app/build/* app/static/

