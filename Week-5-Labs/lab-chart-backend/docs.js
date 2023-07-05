const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
const fs = require('fs')

fs.writeFile('./docs.json', JSON.stringify(openapiSpecification, null, '\t'), err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
