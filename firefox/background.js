const blockListener = (details) => {
  const trustedSources = new RegExp(".*duckduckgo.com|.*bing.com|.*google.com")
    
  const blockedUrlRegex = new RegExp('.*reddit.com')

  const homepageUrlRegex = new RegExp(".*reddit\.com\/?$")
  
  const currentUrl = details.url

  let comingFromValidSource = false
  
  if (details.originUrl) {
    const isHomepage = homepageUrlRegex.test(currentUrl)
    comingFromValidSource = trustedSources.test(details.originUrl) && !isHomepage
  }
  
  const shouldBeCancelled = blockedUrlRegex.test(currentUrl) && details.type === 'main_frame'
  
  return {
    cancel: shouldBeCancelled && !comingFromValidSource
  };
}
const filter = {
  urls: ['<all_urls>'],
  types: ['main_frame']
}
const extraInfoSpec = ['blocking', 'requestBody'  ]

browser.webRequest.onBeforeRequest.addListener(
  blockListener,
  filter,
  extraInfoSpec
)
