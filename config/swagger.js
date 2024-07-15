const path = require('path');
const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});
const mongooseToSwagger = require('mongoose-to-swagger');
const {Article} = require('./../model/index');
const m2sOptions = { 
  /**
   * Whitelist of custom meta fields.
   */
  props: ['format'],
  /**
   * Fields to omit from model root. "__v" and "id" are omitted by default with omitMongooseInternals (default: true)
   */
  omitFields: ['_id'], 
  /**
   * Omit mongoose internals, omits mongoose internals from result ("__v", "id" - mongoose version field and virtual id field) (default: true)
   */
  omitMongooseInternals: true
};

const doc = {
  info: {
    version: '',            // by default: '1.0.0'
    title: 'Blog API',              // by default: 'REST API'
    description: 'My blog API for learning purpose'         // by default: ''
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
      description: 'Tests endpoints'       // Tag description
    },                  // by default: empty Array
    {
      name: 'Articles',             // Tag name
      description: 'Articles endpoints'       // Tag description
    },
    // { ... }
  ],
  components: {
    '@schemas': {
      article: mongooseToSwagger(Article, m2sOptions)
    }
  }            // by default: empty object
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
