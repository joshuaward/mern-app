# Use the official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR . /

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install --production

# Define the entry point for the container
CMD ["npm", "start"]