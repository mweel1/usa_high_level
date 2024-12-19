# Servers

All personal profile servers must protect from key attacks.

# Setup

## Multi-Tenant Personal Profiles

Multi-Tenant personal profiles can bet setup where a provisioning process will be provided where the personal profile e-mail and password is stored along with a tenant id.

## Single Server

The initial setup will setup a personal profile. The personal profile will be encrypted with a passphrase and an e-mail address where it can be recovered or changed.

## Authenticator Setup

When installing an authenticator application to a personal profile you will use your password to make the connection to the personal profile, where the personal profile will oAuth to the personal profile and receive a JWT & refresh token and make a socket connection. The authenticator app will provide also provide a device id.

Once authenticated a private channel will be created on the pusher server and returned to authenticator.

The socket connection will make a connection to a private channel on pusher.

Once the social security office implements this, the authenticator process will be part of any operating system that is setup where the unique id of the device will be available to the browser along with the profile.

Applications that use personal servers must register their domain, where a public key will be provided to interact with personal servers.

## Login Procedures

### Signing Up

The login application will request the following from the browser/os:

    - Device Id
    - Personal Profile Url

Once received, it will send a request to the personal server for sign-up which will include:

    - Permissions Requested
        - Internal Data
        - 3rd Party Services
    - AccountGuid
    - Public Application Id

The personal server will also provide any other logins for this public application.

Once accepted the personal server will store the AccountGuid and and the returned login key, and call the URL set in the personal profile application settings that the account is logged in.

The login application will then set a server side cookie with a JWT or other session.

## Logging In

When logging into an application it will request the following from the browser/os :

- Personal Profile Url
- Device Id

## Security

The JWT and Refresh Key will be stored encrypted in the user folder with where the key will be stored.

### Mac / Apple Phone

The key will be stored in Mac keychain.

### Windows

The key will be stored in the Windows Data Protection API (DPAPI)

####

# Login to Websites and Applications

- The OS will have your personal profile URL. Which will be in the URL form of SSN.profile.

- When using an application or browsing a website. These applications can use the personal profile to login.

- The host operating system will have a channel to the personal profile. A website or application can use the operating system channel to request a one-time auth key which is passed to an application server where the authorization or authentication process can be proceed.

If a key for the domain is not found the authenticator applications will accept a key from the calling the site, where the key and meta-data will be stored upon confirmation.

If a key for the domain is already found, it's returned to the calling application along with any meta-data associated with they key.

# Login to 3rd party key services.

When you make an initial connection to a 3rd party API service they will provide a 3rd party application auth key that will:

1. Allow you to retrieve an application key for direct 3rd party application access.
2. Receive the scopes of the 3rd party application and present them.

When a 3rd party application is installed with another 3rd party application:

1. The 3rd party application scopes are provided to the user.

2. The user will ack those scopes.

3. The 3rd party service will provide an authorization key to the source 3rd party application to the destination 3rd party application.

# Government Id

We will use a government id validation service and add the front and back image. All operating systems must provide a frame around the ID when presenting people. Operating systems must not show this frame under any other circumstances.

In the future, users will be able to oauth to their department of motor vehicles to add their state ID. All DMV offices must have an e-mail on file for all licenses issued.

Once a government Id is added, a service will be available to verify age.

An attribute can be passed where an age verification can complete with parents approval.

# Parents

If a government Id is uploaded of a person under the age of 18, at least 1 parent must be associated to the account to provide services for the child where needed.

# Credit Cards

Card companies will provide a directory of issuing banks based on the card number.

When adding a card, the wallet will contact the issuing bank where a key will be provided for the card.

All payment gateways must accept these keys when processing payments.

# Debit Cards

Debit card would be added by oAuthing to your bank where the source account ids would be provided as a key along with the accounts.

When accounts are transacted with a 3rd party process these cards will use the [United Stated Debit System](/debit) to process transaction between two parties.

# Public API

- Language Code

# Protected Storage Categories

## Address Information

- A website will call your personal profile requesting your billing or shipping address.
- The OS will confirm that the website is requesting your address.

## Receipts

All receipts would have to include the JSON and UPC information.

## Date of Birth

## Owned Homes

All title transfer companies must accept a personal profile URL to set details about the home, or it can be manually entered.

## Rented Homes

All rental agreements must use the personal profile URL to set rental information, or it can be manually entered.

## Medical Events

Licensed medical systems would receive and send medical events to the personal profile.

### Home Automation Devices

[Home automation hubs](/grants/home-automation/) can be added to your personal profile where their services can be shared.

## Bookmarks

- Bookmarks can have multiple categories.

- Bookmarks can be saved from the browser, and all native applications must have bookmarking functionality along along with optionally having deep linking capabilities.

## Contacts

When adding a contact you can add it in clear text, or you can have a direct API link to another contact so when there information changes so does yours.

## Communication

[Communication lines](./communication/) can be setup between personal profile to make voice calls, and text messaging services.

# Untied States Post Office

The USPO would manage all the mail where all communications would be routed through the USPO for national security purposes.

All mail would have to have a category when sent.

There would be special govt in-box, and a public in-box.

Any mail readers that accessed the the in-boxes would have the following requirements for govt emails when received:

1. It would have to show the government agency associated with the e-mail.
2. A special inbox for govt communications only.
3. Provide alerts for critical e-mail(s).
4. Provide a confirmation status they received the e-mail when read.

# Application Store

An application store would be available to use your personal information.
Associated applications can:

- Subscribe to events in your personal profile
- Access personal profile information.
- Provide access keys for application to application communication.

# Storage

A storage provider can be attached to a personal profile where folders and files can be managed. For example i-cloud, DropBox, and more. All storage facilities must provide a transfer capability if people want to switch.

# Keys

All keys can have meta-data associated with them along with the key. For example, a hotel room might have meta data around the room #. Furthermore keys can be issued where applications and URls are associated where applications would have direct access to the keys contents without a permission request. For example a hotel can provide a key and hotel automation system could have access to that key to receive meta-data, for example the room #.

## Vehicle Keys

Vehicles, and vehicle keys would be in your public profile.

## Hotel Keys

Hotel keys can be provided to your personal profile.

# Government Border & Animation

A secure, animated border would appear around certain items on a phone, originating from a personal profile, and visible only when shared publicly. This border and animation would be impossible to replicate using the phone itself.

These borders would apply to:
• Government IDs
• Tickets

Only licensed services would be authorized to update these documents.

# Personal Profile Licensing Service

A [personal profile licensing service](../personal-profile-licensing-agency/) would handle security to ensure only certain operating systems could only request certain information from the personal profile. For example Apple would be a license provider to handle authorization events from the personal profile. All licensed applications would be logged in the personal profile for foul play.
