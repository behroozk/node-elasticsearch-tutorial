(function () {
	'use strict';
  
	const elasticsearch = require('elasticsearch');
	const esClient = new elasticsearch.Client({
	  host: '127.0.0.1:9200',
	  log: 'error'
	});
  
	const search = function search(index, body) {
	  return esClient.search({index: index, body: body});
	};
  
	// only for testing purposes
	// all calls should be initiated through the module
	const test = function test() {
	  let body = {
		size: 20,
		from: 0,
		query: {
		  match_phrase: {
			title: {
			  query: 'voluptate anim',
			}
		  }
		}
	  };
	  console.log(`retrieving documents whose title matches phrase '${body.query.match_phrase.title.query}' (displaying ${body.size} items at a time)...`);
	  search('library', body)
	  .then(results => {
		console.log(`found ${results.hits.total.value} items in ${results.took}ms`);
		if (results.hits.total.value > 0) console.log(`returned article titles:`);
		results.hits.hits.forEach((hit, index) => console.log(`\t${body.from + ++index} - ${hit._source.title} (score: ${hit._score})`));
	  })
	  .catch(console.error);
	};
  
	test();
  
	module.exports = {
	  search
	};
  } ());
  