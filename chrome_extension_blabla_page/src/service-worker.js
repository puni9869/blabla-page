chrome.action.onClicked.addListener(tab => {
    var newURL = "https://www.blabla.page/";
    chrome.tabs.create({ url: newURL });
});