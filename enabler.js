chrome.browserAction.onClicked.addListener(tab => {
    chrome.tabs.executeScript({ file: 'script.js', allFrames: true });
 });