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

# Login to Websites

- The browser and eventually the OS will have your personal profile URL. Which will be your SSN.profile.

- A web page can request the personal profile url, and device name.

- From the server, a request will be made to the personal profile for a login passkey with the device id.

If a key for the domain is not found the authenticator applications will request to sign-up, upon accepting sign-up the authenticator app will always launch that domain with at the /sign-up url after confirmation ensuring your are logging into the correct the domain.

If a key for the domain is already found, and you choose to login you always be directed to the domain with /logged-in.

# Login to 3rd party key services.

When you make an initial connection to a 3rd party API service they will provide a 3rd party application auth key that will:

1. Allow you to retrieve an application key for 3rd party applications.
2. Receive the scopes of a 3rd party application.

When a 3rd party application is installed against a 3rd party service:

1. The 3rd party application scopes are provided to the user.

2. The user will ack those scopes.

3. The 3rd party service will provide an authorization key to the 3rd party application.

# Government Id

We will use a government id validation service and add the image. All operating systems must provide a frame around the ID. Operating systems must now show this frame under any other circumstances.

In the future, users will be able to oauth to their department of motor vehicles to add their state ID. All DMV offices must have an e-mail on file for all licenses issued.

# Credit Cards

Card companies will provide a directory of issuing banks based on the card number.

When adding a card, the wallet will contact the issuing bank where a key will be provided for the card.

All payment gateways must accept these keys when processing payments.

# Debit Cards

Debit card would be added by oAuthing to your bank where the source account ids would be provided as a key along with the accounts.

When accounts are transacted it will use the [United Stated Debit System](/debit) to process transaction between two parties.


# Public API

- Language Code

# Protected Storage Categories

## Address Information

- A website will call your personal profile requesting your billing or shipping address.
- The OS will confirm that the website is requesting your address.

## Receipts

All receipts would have to include the JSON and UPC information.

## Date of Birth

## Homes

## Medical Events

Licensed POS systems would receive and send medical events to the personal profile.

### Home Automation Devices

Home automation hubs can be added to your personal profile where their settings can be configured.

## Bookmarks

A link to a store where a women wants her wedding ring.

## Contacts

When adding a contact you can add it in clear text, or you can have a direct API link to another contact so when there information so does yours.

## Communication

Communication lines can be setup between personal profile to make voice calls, and text messaging services.

# Application Store

An application store would be available to use your personal information.
The application can subscribe to events in your personal profile, or access personal profile information.

These are just "access" application services. They are not runnable application services.

# Vehicle Keys

Vehicles, and vehicle keys would be in your public profile.

# Personal Profile Licensing Service

A [personal profile licensing service](../personal-profile-licensing-agency/) would handle security to ensure various operating systems could only request certain information from the personal profile.
