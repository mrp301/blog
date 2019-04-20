const cheerio = require('cheerio');

function addClass(ctx) {
  const $ = cheerio.load(ctx)
  $('pre').addClass('line-numbers')
  return $.html()
}

module.exports = {
  'addClass' : addClass
}
