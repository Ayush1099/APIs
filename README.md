## Introduction
This is a Backend Application consisting of 2 APIs of type GET and POST method.

## Features
-- The POST method is used to create new data and 
-- GET method is used to fetch Data.
-- Implemented JWT mechanism for Authentication and Authorization and 
-- Error Handling Middlware.
-- Integrated Swagger for API Documentation and Testing.

## Technologies Used
-- Framework: Express JS
-- Database: MongoDB

## Installation
To run this applcation locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Ayush1099/APIs.git`
2. Install the dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and visit: `http://localhost:3000`

## Setup DB and collection in MongoDB
1. Open Command Prompt
2. Enter the following command to create a DB and collection: `mongoimport --db User --collection users --file "PATH_TO_JSON_FILE" --jsonArray`
   NOTE:- "PATH_TO_JSON_FILE" should be the path of the json file which has the data to be imported to MongoDB.
          The JSON file will be included in the CollectionData Folder in the project

## Validations for Request Parameters
1. Name: Mandatory & Length should be greater then or equal to 3
2. EmailID : Mandatory & of correct format
3. Phone No : Mandatory & Length should be equal to 10
4. User ID: Mandatory & Length should be equal to 3

## Setup Postmon to generate Token
1. Collection to generate token is provided in the Token Collection folder which then needs to be imported in the Postman
2. Token will get generated only when this Express JS application is running as the code to generate the token is present in this application