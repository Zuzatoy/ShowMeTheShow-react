




var Feed = require('rss-to-json');
 
Feed.load('https://meduza.io/rss/all', function(err, rss){
    console.log(rss);
});

