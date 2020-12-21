var tweet = prompt("Hey there! Compose your tweet");
var tweetCount = tweet.length;
var tweetRemaining = 280 - tweetCount;

//The twitter character count limit it 280 characters

alert(" You have written" + tweetCount + " characters. You have " + tweetRemaining + " characters remaining.");
