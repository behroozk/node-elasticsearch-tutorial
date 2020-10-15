(function () {
	'use strict';
  
	const elasticsearch = require('elasticsearch');
	const esClient = new elasticsearch.Client({
	  host: '127.0.0.1:9200',
	  log: 'error'
	});
  
	const suggest = function search(index, body) {
	  return esClient.search({index: index, body: body});
	};
  
	// only for testing purposes
	// all calls should be initiated through the module
	const test = function test() {
	  let body = {
		suggest : {
		  text: 'Et duis',
		  simple_phrase: {
			phrase: {
			  field: "title",
			}
		  }
		}
	  };
  
	  console.log(`retrieving phrase suggestions for "${body.suggest.text}"...`);
	  suggest('library', body)
	  .then(results => {
		console.log(`suggestions for the phrase are:`);
		results.suggest.simple_phrase.forEach(phrase => {
		  console.log(`phrase: ${phrase.text}`);
		  phrase.options.forEach((option, index) => console.log(`\t suggestion ${++index}: ${option.text}`));
		});
	  })
	  .catch(console.error);
	};
  
	test();
  
	module.exports = {
	  suggest
	};
  } ());
  