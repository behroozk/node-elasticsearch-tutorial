# Build a Custom Search Engine with Node.js and Elasticsearch

Behrooz Kamali takes an in-depth look at elasticsearch—a scalable, high-performance search engine—demonstrating how to integrate it into a Node project.

**Article url**: https://www.sitepoint.com/search-engine-node-elasticsearch

## Requirements

* [Node.js](http://nodejs.org/) (min version v0.11.0)
* [Java Runtime Environment](https://java.com/en/) (min version 1.8)
* [Elasticsearch](https://www.elastic.co/)

## Installation Steps

1. Clone repo
2. Run `npm install`
3. Start Elasticsearch

More precise instructions can be found in the [installation section of the article](https://www.sitepoint.com/search-engine-node-elasticsearch#installingelasticsearch)

## List of files in this repo:

1. `data.json`: sample data file
2. `index.js`: script for indexing the data in elasticsearch
3. `indices.js`: script to check indexing was successful
4. `search_all.js`: return all documents in one or more indices
5. `search_match.js`: match documents that contain specific values in a field
6. `search_multi_match.js`: search within multiple fields
7. `search_match_phrase.js`: match a complete phrase
8. `search_bool.js`: combining multiple queries
9. `filter.js`: basic filter functionality
10. `aggregations.js`: demonstration of how aggregations work
11. `suggest_term.js`: generate suggestions for search terms
12. `suggest_phrase.js`: generate suggestions for search phrases

## License

The MIT License (MIT)

Copyright (c) 2016 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
