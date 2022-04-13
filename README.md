# Codecademy Quote API

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This is a codecademy challenge project. I was given some starter code with a basic front-end and some features that the back-end should implement. It was then up to me to implement those features.

Required Back-End Features:
- Server should listen at 'localport:4001'
- GET '/api/quotes/random' route that returns a random quote from the API
- GET '/api/quotes' route that:
    - Returns all quotes if the request has no query params
    - '/api/quotes?person=<name of person>' returns all quotes attributed to the person entered in the <name of person> place, or an empty array if there are no quotes from that person.
- POST '/api/quotes/' route that adds a new quote.
    - If the query string has a 'quote' and 'person' property with their respective values, a new quote object is made and added to the API. The new quote object is then sent back in the response.
    - If the query string is missing either or both of the 'quote' and 'person' properties, then status 400 response is sent back.
	
## Technologies
Project is created with: 
* Express.js
	
## Setup
To run this project, follow these steps:
- In the terminal, navigate into the directory in which you would like to clone the project
- Clone my repository into that directory by typing:
```
git clone https://github.com/lofiandcode/codecademy-quote-api.git
```
- Change directories to the codecademy-quote-api directory
- Finally, while in the codecademy-dasmotos-arts-and-crafts-project directory, type in the terminal
```
node server.js
``` 
- Now hit enter.
- Finally open a browser and go to http://localport:4001

