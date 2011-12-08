var update;
update = function() {
  var url;
  url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=hitode909&count=1';
  return $.getJSON(url, function(res) {
    var label, tweet;
    console.log(res);
    tweet = res[0];
    console.log(tweet.text);
    if (tweet.text.match(/\d+\/\d+/)) {
      label = tweet.text.match(/\d+\/\d+/)[0];
    } else {
      label = '';
    }
    return chrome.browserAction.setBadgeText({
      text: label
    });
  });
};
chrome.browserAction.setBadgeBackgroundColor({
  color: [70, 49, 32, 255]
});