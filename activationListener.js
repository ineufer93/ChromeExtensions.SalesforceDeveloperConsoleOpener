chrome.tabs.onUpdated.addListener(turnExtensionOnOrOff);

function turnExtensionOnOrOff(tabId, changeInfo, tab)
{
    if (tab.url.indexOf("force.com") > -1)
    {
        chrome.pageAction.show(tabId);
    }
    else
    {
        chrome.pageAction.hide(tabId);
    }
}