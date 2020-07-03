chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const trustedSources = new RegExp(".*duckduckgo.com|.*bing.com|.*google.com")
    
    const blockedUrlRegex = new RegExp('.*reddit.com')

    const homepageUrlRegex = new RegExp(".*reddit\.com\/?$")
    
    const currentUrl = details.url

    let comingFromValidSource = false
    
    if (details.initiator) {
      const isHomepage = homepageUrlRegex.test(currentUrl)
      comingFromValidSource = trustedSources.test(details.initiator) && !isHomepage
    }
    
    const shouldBeCancelled = blockedUrlRegex.test(currentUrl) && details.type === 'main_frame'
    
    return {
      cancel: shouldBeCancelled && !comingFromValidSource
    };
  },
  {urls: ["<all_urls>"]},
  ["blocking", "requestBody", "extraHeaders"]
);
