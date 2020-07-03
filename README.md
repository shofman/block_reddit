# block_reddit

Extensions for both firefox and chrome that allow a user to block navigating to reddit directly, but allow for individual links to be seen.

## Background

Reddit is a massive waste of time for myself, and so I want to take steps to reclaim my time by blocking it on my main computer. However, there is still useful content within Reddit that I would like to be able to access (if I know a direct link or visit from a search engine).

## Solution
Check that the previous URL is an acceptable source (search engine -> duckduckgo, google, bing). If it is, and it is not the reddit homepage, allow the content. Otherwise, the site will be blocked


## TODO
* Reduce the broad permissions - scope to Reddit only
* Block new Reddit's "beneath the post" content - it loads the top views from the subreddit in question, and contributes to more time wasting. 
* Improve the blocking messaging in Firefox. Blocking content does not give user feedback (Chrome displays a warning that 'extension has blocked request')