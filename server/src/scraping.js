const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.json');

// Write Headers
// writeStream.write(`Title,Link,Date \n`);

request('https://www.ndtv.com/topic/farmers', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    $('.news_list').each((i, el) => {
      const title = $(el)
        .find('a')
        .text()
        .replace(/\s\s+/g, '');
      const link = $(el)
        .find('a')
        .attr('href');

        console.log(title, link);
    //   const date = $(el)
    //     .find('.post-date')
    //     .text()
    //     .replace(/,/, '');

      // Write Row To CSV
      writeStream.write(`"title":${title},"link": ${link} \n`);
    });

   
  }
});