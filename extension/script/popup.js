
$(function() {
  $('#pushButton').click(function(e) {
    e.preventDefault();
    alert("testing "+ $('#streamIDInput').val());

    const Http = new XMLHttpRequest();
    const url='https://ptsv2.com/t/mightyducks123/post';
    Http.open("POST", url);
    Http.send();
    Http.onreadystatechange=(e)=>{
    alert(Http.responseText);
    }
  });
});

// Inject the payload.js script into the current tab after the popout has loaded
window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('payloadText').innerHTML = message;
});