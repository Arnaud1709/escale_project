Escale_project

Installation Guide
To run this project locally, follow the instructions below:

1. Clone the Repository
First, clone this repository to your local machine using the following command:
https://github.com/Arnaud1709/escale_project.git

2. Build Docker Images
Navigate to the project directory in your terminal. To create the required Docker images, run the following commands at the root of the project:
docker build -t "api-server" ./server/
docker build -t "react-app" ./client/

3. Start the Application
Once the Docker images are created, you can start the application using Docker Compose. Run the following command at the root of the project:

docker-compose up

This command will start the containers based on the images created earlier and set up the application.

4. Access the Application
After the containers are up and running, you can access the application by opening your web browser and visiting:

API Server: http://localhost:5000
React App: http://localhost:3000
