$(function() {
  $('a').live('click', function() {
    var url;
    if ($(this).attr('href')[0] === '/') {
      url = 'https://twitter.com' + $(this).attr('href');
    } else {
      url = $(this).attr('href');
    }
    url = url.replace(/mobile\.twitter\.com/, 'twitter.com');
    chrome.tabs.create({
      url: url
    });
    window.close();
    return false;
  });
  return $.ajax({
    url: 'https://mobile.twitter.com/macanai',
    dataType: 'html'
  }).success(function(html) {
    var tweet;
    tweet = $(html).find('.list-tweet:eq(0)');
    return $('body').append(tweet);
  });
});