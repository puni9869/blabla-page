chrome.action.onClicked.addListener(tab => {
    var newURL = "https://blabla.page/";
    chrome.tabs.create({ url: newURL });
});