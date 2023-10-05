const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition:{
      openapi: "3.0.0",
        info:{
            title:'API',
            description:'Implemented APIs to Create and Get users from mongoDB',
            version:'1.0.0',
            contact:{
                name:"Ayush Verma",
            },
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [{
            bearerAuth: []
        }],
        
        servers:[{url:'http://localhost:3000'}]
    },
    apis:['./Source/Routes/Routing.js']
  }

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;