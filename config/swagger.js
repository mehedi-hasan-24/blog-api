const path = require('path');
const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
  info: {
    version: '',            // by default: '1.0.0'
    title: '',              // by default: 'REST API'
    description: ''         // by default: ''
  },
  servers: [
    {
      url: '',              // by default: 'http://localhost:3000'
      description: 'local server'       // by default: ''
    },
    // { ... }
  ],
  tags: [                   // by default: empty Array
    {
      name: 'Tests',             // Tag name
      description: ''       // Tag description
    },
    // { ... }
  ],
  components: {}            // by default: empty object
};

// const outputFile = path.resolve(__dirname, './../static/swagger_output.json');
// const endpointsFiles = [path.resolve(__dirname,'./../routes/index.js')]; // Your route files


const outputFile = './../static/swagger_output.json';
const endpointsFiles = ['./../routes/index.js']; // Your route files

const generateSwaggerDoc = async () => {
  await swaggerAutogen(outputFile, endpointsFiles, doc);
};
generateSwaggerDoc().then(()=>{
    console.log("swagger_output.json generatated");
});
module.exports = generateSwaggerDoc;
