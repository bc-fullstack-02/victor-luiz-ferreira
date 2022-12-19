# Backend Social Network
Project Backend - Victor Luiz Ferreira


![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Swagger](https://img.shields.io/badge/Swagger-83eb2?style=for-the-badge&logo=swagger&logoColor=black)

![MongoDB](https://img.shields.io/badge/MongoDB-183a43?style=for-the-badge&logo=mongodb&logoColor=green)
![RabbitMQ](https://img.shields.io/badge/RabbitMQ-aaafc4?style=for-the-badge&logo=rabbitmq&logoColor=orange)
![Docker](https://img.shields.io/badge/Docker-99a2a6?style=for-the-badge&logo=docker&logoColor=blue)
# Running this project locally

Clone this repository:

```sh
git clone https://github.com/bc-fullstack-02/victor-luiz-ferreira
cd rede-social
cd backend
cd api
```

On the project folder, install the dependencies:

```sh
npm install
```

or 

```sh
npm i
```

# Seting this project locally

Set the database MongoDB configuration

```sh
npm run mongo:start
```

Set the RabbitMQ configuration

```sh
npm run rabbit:start
```

And then you're ready to run this project locally:

```sh
npm start
```

# To run via docker

```sh
docker-compose up
```

*Note* The Docker aplication is not working at the moment. Project in development, fixes and updates are required

# Executing the project

1) Open the project on port http://localhost:4000/api-docs 

2) On the Swagger web page go to /security/register and create a new User

3) After creating a User go to /security/login to Login your user account, this will generate a token to authenticate and authorize the user

4) You will see the api working


# How to reach me

[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/victor-luiz-ferreira-501637195/)](https://www.linkedin.com/in/victor-luiz-ferreira-501637195/)
