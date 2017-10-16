(function () {
  'use strict';

  const elasticsearch = require('elasticsearch');
  const esClient = new elasticsearch.Client({
    host: '127.0.0.1:9200',
    log: 'error'
  });

  const indices = function indices() {
    return esClient.cat.indices({v: true})
    .then(console.log)
    .catch(err => console.error(`Error connecting to the es client: ${err}`));
  };

  // only for testing purposes
  // all calls should be initiated through the module
  const test = function test() {
    console.log(`elasticsearch indices information:`);
    indices();
  };

  test();

  module.exports = {
    indices
  };
} ());
