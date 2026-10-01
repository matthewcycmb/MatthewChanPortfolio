I first tried using Instagram’s official API, but that didn’t give me the conversations I wanted. After a couple of days, I tried opening Instagram’s website inside an app instead. That became the first version I could actually use for my own messages.

Konvo uses a WKWebView, with JavaScript and CSS to hide Feed, Reels, and Explore. Restricting every allowed page broke parts of Instagram’s login, so the app redirects the feed pages and leaves the login steps alone. Individual posts shared in conversations can still open.

The tradeoff is that Konvo depends on Instagram’s interface. Some hiding rules can be updated remotely, but other changes need a new app release.
