# Use an official Node.js runtime as the base image
FROM node:19

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the app dependencies inside the container
RUN npm install && npm install -g ts-node

# Copy the rest of the application code into the container
COPY . .

# Run the app when the container launches
CMD [ "ts-node", "src/bot.ts" ] 

EXPOSE 3001