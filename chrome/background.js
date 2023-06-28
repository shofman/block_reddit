const blockedHosts = ["reddit.com", "old.reddit.com", "i.reddit.com", "preview.redd.it", "v.redd.it"];
const trustedSources = ["duckduckgo.com", "bing.com", "google.com"];

chrome.runtime.onInstalled.addListener(() => {
  blockedHosts.forEach((domain, index) => {
    let id = index + 1;

    chrome.declarativeNetRequest.updateDynamicRules({
      addRules: [
        {
          id: id,
          priority: 1,
          action: { type: "block" },
          condition: {
            urlFilter: domain,
            resourceTypes: ["main_frame"],
            excludedInitiatorDomains: trustedSources,
          },
        },
      ],
      removeRuleIds: [id],
    });
  });
});
