chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {
		console.info("URL: " + tab.url);
	});

