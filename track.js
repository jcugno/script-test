
setTimeout(function() { 
  console.log("Setting an image here");
(new Image()).src = (location.protocol == "https:" ? "https:" : "http:") + "//bcn.schooldata.com/track?pageUrl=" + window.location.href + '&ref=' + document.referrer + '_=' + new Date().getTime();
}, 5000);
