chrome.tabs.onUpdated.addListener(
	function(request, sender, sendResponse) {
		console.log("Request: " + request.content);
	});

