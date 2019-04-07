chrome.pageAction.onClicked.addListener(function (activeTab)
{
    var baseUrl = activeTab.url.split("force.com")[0] + "force.com";
    chrome.tabs.create({ url: baseUrl + "/_ui/common/apex/debug/ApexCSIPage" });
});