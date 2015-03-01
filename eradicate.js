var quoteList = [ 
	{
		quote: "I have just three things to teach: simplicity, patience, compassion. These three are your greatest treasures.",
		source: "Lao Tzu"
	},
	{
		quote: "In character, in manner, in style, in all things, the supreme excellence is simplicity.",
		source: "Henry Wadsworth Longfellow"
	},
	{
		quote: "If we don't discipline ourselves, the world will do it for us.",
		source: "William Feather"
	},
	{
		quote: "Rule your mind or it will rule you.",
		source: "Horace"
	},
  {
   quote: "When you want to succeed as much as you want to breathe, that’s when you will be successful!",
    source: "Eric Thomas"
  }
  ,
	{
		quote: "All that we are is the result of what we have thought.",
		source: "Buddha"
	},
	{
		quote: "Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all.",
		source: "Pulsifer, Take Action; Don't Procrastinate"
	},
	{
		quote: "Never leave that till tomorrow which you can do today.",
		source: "Benjamin Franklin"
	},
	{
		quote: "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
		source: "Christopher Parker"
	},
	{
		quote: "Someday is not a day of the week.",
		source: "Author Unknown"
	},
	{
		quote: "Tomorrow is often the busiest day of the week.",
		source: "Spanish Proverb"
	},
	{
		quote: "I can accept failure, everyone fails at something. But I can't accept not trying.",
		source: "Michael Jordan"
	},
	{
		quote: "There’s a myth that time is money. In fact, time is more precious than money. It’s a nonrenewable resource. Once you’ve spent it, and if you’ve spent it badly, it’s gone forever.",
		source: "Neil A. Fiore"
	},
	{
		quote: "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
		source: "Thomas Jefferson"
	},
	{
		quote: "There is only one success--to be able to spend your life in your own way.",
		source: "Christopher Morley"
	},
	{
		quote: "Success is the good fortune that comes from aspiration, desperation, perspiration and inspiration.",
		source: "Evan Esar"
	},
	{
		quote: "We are still masters of our fate. We are still captains of our souls.",
		source: "Winston Churchill"
	},
	{
		quote: "Our truest life is when we are in dreams awake.",
		source: "Henry David Thoreau"
	},
	{
		quote: "The best way to make your dreams come true is to wake up.",
		source: "Paul Valery"
	},
	{
		quote: "Life without endeavor is like entering a jewel mine and coming out with empty hands.",
		source: "Japanese Proverb"
	},
	{
		quote: "Happiness does not consist in pastimes and amusements but in virtuous activities.",
		source: "Aristotle"
	},
    {
        quote: "By constant self-discipline and self-control, you can develop greatness of character.",
        source: "Grenville Kleiser"
    },
    {
        quote: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
        source: "Vince Lombardi Jr."
    },
    {
        quote: "At the end of the day, let there be no excuses, no explanations, no regrets.",
        source: "Steve Maraboli"
    },
    {
        quote: "Inaction will cause a man to sink into the slough of despond and vanish without a trace.",
        source: "Farley Mowat"
    },
    {
        quote: "True freedom is impossible without a mind made free by discipline.",
        source: "Mortimer J. Adler"
    },
    {
        quote: "The most powerful control we can ever attain, is to be in control of ourselves.",
        source: "Chris Page"
    },
    {
        quote: "Idleness is only the refuge of weak minds, and the holiday of fools.",
        source: "Philip Dormer Stanhope"
    },
    {
        quote: "This is your life and it's ending one minute at a time.",
        source: "Tyler Durden, Fight Club"
    },
	{
		quote: "You create opportunities by performing, not complaining.",
		source: "Muriel Siebert"
	},
	{
		quote: "Great achievement is usually born of great sacrifice, and is never the result of selfishness.",
		source: "Napoleon Hill"
	},

	{
		quote: "Whether you think you can, or you think you can't, you're right.",
		source: "Henry Ford"
	},
	{
		quote: "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.",
		source: "Martin Luther"
	}
];

var imglist = [
  "http://addicted2success.com/wp-content/uploads/2013/12/Do-Good-Inspirational-Picture-Quotes.png",
  "http://addicted2success.com/wp-content/uploads/2013/12/Dont-give-up-picture-quote.png",
  "http://addicted2success.com/wp-content/uploads/2013/12/dont-just-give-up-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/dreams-bigger-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/Effort-Picture-Quote-About-Life.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/face-challenges-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/failure-is-not-fatal-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/failures-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/honesty-picture-quote-john-lennon.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/i-wish-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/Jack-Sparrow-Picture-Quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/learn-and-win-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/lift-you-up-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/Live-Your-Life-Picture-Quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/martin-luther-king-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/Mirror-picture-quote.png",
  "http://addicted2success.com/wp-content/uploads/2013/12/never-give-up-ever-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/Never-stop-learning-picture-quote-for-life.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/No-more-Excuses-Picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/no-quitting-picture-quote.png",
  "http://addicted2success.com/wp-content/uploads/2013/12/Nobody-Is-Perfect-Picture-Life-Quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/opportunities-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/Picture-Quote-Be-Strong-.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-haters-and-doubters.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-how-to-be-successful.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/Picture-Quote-I-can-and-I-will.png",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-mentality.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-prove-them-wrong.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-push-harder.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-success-happiness.png",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-think-of-yourself.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-to-be-different.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-your-life-story.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quote-zig-ziglar-born-to-win.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quotes-better-friends.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/picture-quotes-results.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/positive-life-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/regret-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/Socrates-build-new-picture-quote-motivation.png",
  "http://addicted2success.com/wp-content/uploads/2013/12/start-today-fitness-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/the-best-days-picture-quote-motivation.png",
  "http://addicted2success.com/wp-content/uploads/2013/12/Trust-Actions-Picture-Quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/warm-up-workout-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/workout-picture-quote.jpg",
  "http://addicted2success.com/wp-content/uploads/2013/12/worth-it-picture-quote.jp"

];

var selectedQuote = quoteList[Math.floor(Math.random() * quoteList.length)];



//var pic_name = "file:///Users/aditya/Downloads/news-feed-eradicator-master/news-feed-eradicator-master/pics/"+randpicnum + ".png";
var pic_name = imglist[Math.floor(Math.random() * imglist.length)];;
console.log(pic_name);



var quoteDiv, quoteText, quoteSource, fbLink, infoPanel, taikoPic;

quoteDiv = $("<div class='nfe-quote'/>");

fbsucks = $("<div class='nfe-fbsucks'/>");

nambi = $("<div class='nambimaxx' />");

quoteText1 = $("<p>"+"Nambi U Rock!!"+"</p>")
  .addClass('nfe-nambs-text')
  .appendTo(nambi);// Info panel, hidden by default


quoteText2 = $("<p>"+"Fb SUCKS!! Fb SUCKS"+"</p>")
  .addClass('nfe-fb-text')
  .appendTo(fbsucks);// Info panel, hidden by default

infoPanel = $("<div class='nfe-info-panel'></div>")
    .hide()
    .appendTo(quoteDiv);

quoteText = $("<p>“"+selectedQuote.quote+"”</p>")
    .addClass('nfe-quote-text')
    .appendTo(quoteDiv);

quoteSource = $("<p>~ "+selectedQuote.source+"</p>")
    .addClass('nfe-quote-source')
    .appendTo(quoteDiv);

//quoteText3 = $("<iframe width='500' height='315' src='https://www.youtube.com/embed/mgmVOuLgFB0' frameborder='0' allowfullscreen></iframe>").appendTo(quoteDiv);
  yo = "<img  src='"+pic_name+"' height='315' width='500'>"
console.log(yo);
  quoteText3 = $(yo).appendTo(quoteDiv);
var hideInfoPanel = function(){
    $('div.nfe-info-panel').hide();
}

var extensionURL = function(relativeURL){
    if(window.chrome !== undefined){
        // Chrome extension

     // console.log(relativeURL);
        return chrome.extension.getURL(relativeURL);
    }else{
        // Firefox extension
        return self.options.urls[relativeURL];
    }
}
/*
fbLink = $("<a href='javascript:;'>News Feed Eradicator :)</a>")
    .addClass('nfe-info-link')
    .on('click', function(){
      var handleClose = function() {
        $('.nfe-close-button').on('click', hideInfoPanel);
      };
      var url = 'info-panel.html';

      if (window.chrome !== undefined) {
        // Chrome extension
        infoPanel.load(chrome.extension.getURL(url),
                       handleClose);
      } else {
        // Firefox extension
        self.port.emit('requestUrl', url);
        self.port.once(url, function(data) {
          console.log("Received data for ", url);
          infoPanel.html(data);
          handleClose();
        });
      }
      infoPanel.show();
    })
	.appendTo(quoteDiv);
*/
// This delay ensures that the elements have been created by Facebook's
// scripts before we attempt to replace them
setInterval(function(){
  // Delete the ticker
  $("div#pagelet_ticker").remove();
    // Replace the news feed
	$("div#pagelet_home_stream").replaceWith(quoteDiv).append(fbsucks);
	$("div[id^='topnews_main_stream']").replaceWith(quoteDiv);
 $("div#pagelet_ego_pane").replaceWith(nambi);
  $("div.ticker_container").remove();
  $("div#pagelet_composer").remove();







  // Delete the trending box
    $("div#pagelet_trending_tags_and_topics").remove();
}, 1000);


