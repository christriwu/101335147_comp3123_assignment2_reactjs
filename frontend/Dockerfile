# Use the official Node.js image as the base image

FROM node:14


# Create a working directory

WORKDIR /usr/src/app


# Copy package.json and package-lock.json into the working directory

COPY package*.json ./


# Install the dependencies

RUN npm install


# Copy the rest of the application code into the working directory

COPY . .


# Expose the port your application will run on

EXPOSE 3003


# Specify the command to start your application

CMD ["npm", "start"]