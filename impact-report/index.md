# Operating System Login

When starting an Apple, Microsoft, or Linux computer starting for the first time, it will have them setup a personal profile with the social security on the American Internet or attach to an existing one.

If the user already has a personal profile, there social security number is sent to social security where there active personal profile URL is returned.

When setting up new personal profiles the operating system receiving a list of providers from the USA internet by reviewing the directory of .personal-profile-providers.

The user will redirect to these providers, and create a profile.

# State Issued ID

The first step will be to scan your ID via the camera.

Each state will have an open API to validate driver licenses.

The state will return all the details of the drivers license meta-data where it will be set as the default for the social security card information.

Out of pocket questions will also be presented to the user.

# Social Security

Once the ID is scanned, a profile is created, it's oAuth'ed with the Social Security Office.

If the state ID is already in the system, it redirected to a recovery process for the profile already created.

The Social Security than asks for permission to receive their full name and address to receive social security checks.

Once approved, the user is logged in to their session under that personal profile Id, and the social security guard is added to the personal profile.

# Checking for new Services

Each time the personal profile is logged in, the operating system must check to see if new services need to be authorized. A flag will be set for the federal reserve when starting up, and more services will be added as they come available.

# Federal Reserve

The user will also oAuth to the federal reserve where they get all their bank issued cards.

The federal reserve oAuth allow for:

- The ability to get transactional card Ids when processing them threw credit card payment networks.
- The ability to get transactional card Ids for processing on the real-time e-check network.
- All cards will have a URL with a token to get a transactional card id each time a transaction takes place on a payment network.

# API

The only API available for the version will be to the handset carriers to make sure systems are operating correctly. The API surface will include:

/identification/state/<id>/front
/identification/state/<id>/back

This will return the identification in a watermarked container that can be swiped right to left to flip.

/cards

Cards will allow the operating system to get a list of cards with their masked details, to receive a transactional card id the URL will be as part of the card details in the personal profile.

/cards/<id>/transactional-id

This will get a transactional id for the card to process on the correct processing network. A list of processing networks and their API end points will be available at the federal reserve.

Two licensed domains will be available to start :

moolah.credit-card-processor
federal-reserve.e-check-processor

# Operating System Startup

The operating system must support capabilities to use the usa: prefix when browsing the web.

All applications must support a manifest that ensures on communications are done on the American Internet or not. A flag will be presented on all applications and websites that are using the United States domain system.

Mixed DNS systems are not allowed in web pages, or applications.
