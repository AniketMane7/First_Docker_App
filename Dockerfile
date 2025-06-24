# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy files into container
COPY . .

# Command to run app
CMD ["npm", "start"]
