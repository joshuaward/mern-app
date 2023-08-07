
# - Use the official Node.js image as the base image
FROM node:18

# - Set the working directory in the container
WORKDIR /app  # Changed the working directory to /app

# - Copy the application files into the working directory
COPY . /app  # Copied the application files into the /app directory

# - Install the application dependencies
RUN cd /app \  # Changed the directory to /app before running npm install
    && npm install

# - Define the entry point for the container
CMD ["npm", "start"]
