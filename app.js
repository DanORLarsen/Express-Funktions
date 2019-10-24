const express = require('express');
const greetMiddleware = require('./greet.js');

class GreetingServince{
    constructor(greeting = 'Hello'){
        this.greeting = greeting;
    }

    createGreeting(name){
        return `${this.greeting}, ${name}!`;
    }
}

express()
.use('/api/v1/service1', greetMiddleware({service: new GreetingServince('Hello'),}))
.use('/api/v1/service2', greetMiddleware({service: new GreetingServince('Hi'),}))
.listen(8080);

//http://localhost:8080/api/v1/service1/greet?name=World = uses createGreeting method and sets name to world.
//Without the name=World it will say hello strangerDanger because i told it to in Greet if it didnt get a name in the query
//Currently at 3.4 chapter in NodeJs Notes For Professionals
