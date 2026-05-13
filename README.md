# Containerized Node.js App on AWS ECS

## Project Overview
This project demonstrates deploying a Dockerized Node.js application using AWS ECS (Fargate) and Amazon ECR. The application is containerized using Docker and deployed on a serverless container infrastructure.

## Tech Stack
- Node.js
- Docker
- AWS ECR (Elastic Container Registry)
- AWS ECS (Fargate)

## Features
- Containerized Node.js application
- Serverless deployment using AWS Fargate
- Publicly accessible API endpoint
- Health check endpoint for monitoring

## Architecture
1. Built a Node.js application
2. Containerized using Docker
3. Pushed Docker image to Amazon ECR
4. Deployed container on ECS Fargate
5. Exposed application via public IP

## Screenshots

### Local Docker Output
<img src="https://github.com/user-attachments/assets/6b7dd4d9-e865-4a2a-9477-34a8d2f4bae1" />

### ECS Running Task
<img src="https://github.com/user-attachments/assets/4a4e0d27-ca32-4150-a0a6-37d946d28eae" />

### Live Application ⭐
<img src="https://github.com/user-attachments/assets/a88fa158-7e90-4bc9-b458-c403c6919198" />

## Live Demo
Application deployed on AWS ECS and accessible via public IP.

## Run Locally
```bash
docker build -t node-app .
docker run -p 3000:3000 node-app
