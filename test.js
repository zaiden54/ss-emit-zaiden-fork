const Pornsearch = require('pornsearch');
const Searcher = new Pornsearch('asian');

Searcher.videos()
  .then(videos => console.log(videos[0]));