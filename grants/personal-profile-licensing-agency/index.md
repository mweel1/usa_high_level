# Personal Profile Licensing Agency

In-order for 3rd party applications to work with the personal profile they must register their domain with the personal profile licensing agency where they receive a client ID that must be sent as part of the oAuth process with the personal profile.

When 3rd party applications access the personal profile they provide:

- Client ID
- Verification Token

The personal profile will send a request to the 3rd party with this verification token to the domain registered on the licensing server. The 3rd party must always have a /validate-client-id end-point where it receives the verification token originally sent.

The licensing service also provides a set of API end-points and webhooks that can be registered with the personal profile during the oAuth process.

The following are the types of applications that can be registered:

- Operating System
- Medical Management System
