# Still Rolling Our Own: Passport.js and Testing

* Speaker: Andy Taton
* Date: August 14, 2018
* Authentication middleware for Node/Express
* API style similar to Express:
  * E.g., .use(route,...middleware)
* Coordinates with Express session middleware
* Can be configured for local and external (third-party, OAuth, JWT) authentication schemes.
* Lightweight!
* Great StackOverflow coverage
* Docs not great
* Infrequently maintained
* Passport Modifies Incoming Requests
  * Middleware that takes incoming requests and adds information to them.
* List of oauth providers: <https://en.wikipedia.org/wiki/List_of_OAuth_providers>
* OAuth Authorization Code Grant Flow