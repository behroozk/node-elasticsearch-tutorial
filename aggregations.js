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
      size: 0, // size is set to 0 here to focus on the aggregations and not the articles
      from: 0,
      query: {
        match_all: {}
      },
      aggregations: {
        min_year: {
          min: {field: 'year'}
        },
        max_year: {
          max: {field: 'year'}
        },
        year_percentile: {
          percentiles: {field: 'year'}
        },
        year_histogram: {
          histogram: {field: 'year', interval: 5}
        },
        keywords: {
          terms: {
            field: 'keywords',
            size: 20
          }
        }
      }
    };

    console.log(`retrieving documents with a combined bool query and filter (displaying ${body.size} items at a time)`);
    search('library', body)
    .then(results => {
      console.log(`calculated aggregations in ${results.took}ms`);

      console.log(`\nthe oldest article is published in ${results.aggregations.min_year.value}`);

      console.log(`\nthe newest article is published in ${results.aggregations.max_year.value}`);

      console.log(`\nhistogram of number of articles published in 5-year intervals`);
      results.aggregations.year_histogram.buckets.forEach(bucket => console.log(`\tnumber of articles published in ${bucket.key}-${bucket.key + 4}: ${'#'.repeat(bucket.doc_count/5)} (${bucket.doc_count})`));

      console.log(`\npercentile of articles published in different years:`);
      console.log(`\t1% of articles are published on or before ${results.aggregations.year_percentile.values['1.0']}`);
      console.log(`\t5% of articles are published on or before ${results.aggregations.year_percentile.values['5.0']}`);
      console.log(`\t25% of articles are published on or before ${results.aggregations.year_percentile.values['25.0']}`);
      console.log(`\t50% of articles are published on or before ${results.aggregations.year_percentile.values['50.0']}`);
      console.log(`\t75% of articles are published on or before ${results.aggregations.year_percentile.values['75.0']}`);
      console.log(`\t95% of articles are published on or before ${results.aggregations.year_percentile.values['95.0']}`);
      console.log(`\t99% of articles are published on or before ${results.aggregations.year_percentile.values['99.0']}`);

      console.log(`\ntop ${results.aggregations.keywords.buckets.length} article tags:`);
      results.aggregations.keywords.buckets.forEach((bucket, index) => console.log(`\t${++index} ${bucket.key}: ${bucket.doc_count}`));
    })
    .catch(console.error);
  };

  test();

  module.exports = {
    search
  };
} ());
