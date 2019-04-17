// send the page title as a chrome message

var body = document.getElementsByClassName("TweetTextSize--jumbo")[0].textContent;
var handle = document.querySelector('#permalink-overlay-dialog > div.PermalinkOverlay-content > div > div > div.permalink.light-inline-actions.stream-uncapped.has-replies.original-permalink-page > div.permalink-inner.permalink-tweet-container > div > div.content.clearfix > div > a > span.username.u-dir.u-textTruncate').textContent;
var tweetDateString = document.querySelector('#permalink-overlay-dialog > div.PermalinkOverlay-content > div > div > div.permalink.light-inline-actions.stream-uncapped.has-replies.original-permalink-page > div.permalink-inner.permalink-tweet-container > div > div.js-tweet-details-fixer.tweet-details-fixer > div.client-and-actions > span > span').textContent
// "2011-10-10T14:48:00"
var components = tweetDateString.split(" ");
let day = components[3];
let month = components[4];
let year = components[5];

var monthInt = 0
if (month == "Jan") { monthInt = 1 }
else if (month == "Feb") { monthInt = 2 }
else if (month == "Mar") { monthInt = 3 }
else if (month == "Apr") { monthInt = 4 }
else if (month == "May") { monthInt = 5 }
else if (month == "Jun") { monthInt = 6 }
else if (month == "Jul") { monthInt = 7 }
else if (month == "Aug") { monthInt = 8 }
else if (month == "Sep") { monthInt = 9 }
else if (month == "Oct") { monthInt = 10 }
else if (month == "Nov") { monthInt = 11 }
else if (month == "Dec") { monthInt = 12 }

let time = components[0];
let modifier = components[1];

let [hours, minutes] = time.split(':');

if (hours === '12') {
  hours = '00';
}

if (modifier === 'PM') {
  hours = parseInt(hours, 10) + 12;
}

let finalString = year + "/" + monthInt.toString() + "/" + day + " " + hours.toString() + ":" + minutes.toString() + ":00"
var unixTimeZero = Date.parse(finalString).toString();
chrome.runtime.sendMessage({tweetBody: body, tweetHandle: handle, datePosted: unixTimeZero}, function(response) {});