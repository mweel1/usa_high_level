# Personal Profile

When logging into the American Internet for the first time a citizen must create a personal profile from a licensed directory of personal profile providers.

A personal profile is a personal server thats allows citizens to store, receive and send information that is related to them. A personal profile can be used for many purposes including but not limited to:

1. Logging into operating systems.
2. Storing government issued documents.
3. Receiving and storing information from 3rd parties after a transaction.
4. Storing access keys to 3rd Party Services, for example an AI Assistant or Vehicle Services.
5. Authorizing and storing keys to government services to allow operating systems to interact with government services.
6. Storing keys to login into domains and native applications.

# Security

The personal profile will be encrypted with a passphrase and an e-mail address where it can be recovered or changed.

# Government Id

When adding a government Id. The front and back picture must be taken, where the government id will be used to verify the user with a video, and out of pocket questions.

When presenting the id in public, attendants have 2 options, the citizen can show their ID's image where an animated government seal will surround the ID, or the bar code can be scanned on the back of the ID for further verification.

Government seals can only be shown when presenting their respective document. Under no circumstances will the operating system allow this framed image to be shown, or created on the operating system unless it comes directly from a personal profile.

If this impacts Plaid's business enough we will acuire it.

# Passport

If a user is not a citizen of the United States they can upload a passport where its verified along with creating an [express visa account](/express-visa/).

# Government OS Services

Once the user is validated with a government Id, or Passport they will authenticate to [government OS services](./government-os-services/) where the keys of these government services will be stored in the personal profile which will allow operating systems to communicate with the government.

# Authorization Setup

Today its very difficult to log-in to websites. There many, many authorization applications which make it confusing and difficult for users. Since the authorization process is "flat", you have to fill out captchas and "are you a robot" forms. Using a personal profile for authorization will remove these issues.

As part of the binding process the operating system will ask the user what authorization the method the user would like to use for normal authorization requests, and critical authorization requests. For critical authorization requests it will be highly recommended to use a pin.

When the operating system receives a request for login it will use the JWT and send a login request with the domain name.

The operating system will then provide the authorization to the user based on their settings.

# Login to Websites and Applications using Pass Keys

- The OS will have your personal profile URL. Which will be in the URL form of SSN.profile.

- When using an application or browsing a website. These applications can use the personal profile to login via JavaScript SDKs, or Native application SDKs.

- The host operating system will have a channel to the personal profile. A website or application can use the operating system channel to request a one-time auth key which is passed to an application server where the authorization or authentication process can be proceed.

If a key for the domain is not found the authenticator applications will accept a key from the calling the domain, where the key and meta-data will be stored upon confirmation. The key must be 4096 bytes.

If a key for the domain is already found, it's returned to the calling application along with any meta-data associated with they key where the login process can proceed to various account services for the application (selecting a user, filling out user information, etc)

The following will be stored with login pass keys:

- General application
- Domain Name
- Operating Systems Id
- Device Id
- Cancellation Link

# Login to 3rd party key services

The personal profile can connect to 3rd party services, this will allow users 3rd party services to interact with each other.

For example, I could setup an AI Assistant.

When I setup my operating system it would request access to this 3rd party service where it can interact with it based on an common API.

# Legal Guardian

If a government id is uploaded of a person under the age of 18, at least 1 legal guardian must be associated to the personal profile or a legal guardian to the account to provide services for the child where needed. This is done by uploading the birth certificate where the birth certificate would ideally be verified by the issuing state.

Anytime an ID is checked with a parent and an adult (for example an airport), any children on a missing persons list will be flagged.

In the case of traveling by train, long haul bus, or air plane a guardian consent must be bound to the personal traveling with the child.

# Personal Profile Storage Types

## Public API

Public APIs require no authorization process. For example, if I were to visit a website they can receive my language code in order to present the correct language to the user.

- Language Code

## Credit Cards

Today we are riddled with Google Pay and Apple Pay if we allow these technologies to be the only solution to processing cards very difficult to untangle monopolies will be created.

Card companies will provide a directory of issuing banks based on the card number.

When adding a card, the wallet will contact the issuing bank where a authorization key will be provided for the card.

When processing a payment this authorization key will be used to receive a one-time credit card key that will be used for the transaction.

If the card is requested to be stored, a multi-use credit card key will be used. All stored card numbers that are issues will be stored in the personal profile with the domain for easy cancellation. A URL must be provided by the domain to send the cancellation to the domain.

All payment gateways must accept these cards when processing payments.

The personal profile will also provide callback URLs and header keys that will allow the debit system to update, change and delete cards.

## Real-Time Check Processing

The real-time check processing will be added by oAuth to the [The American real-time check system](/real-time-check-system/), where a list of accounts and an authorization key for each bank account will be stored to the profile, along with images.

When processing a payment this authorization key will be used to receive a one-time debit card token that will be used for the transaction.

If the card is requested to be stored, a multi-use debit card token will be used, where the domain and and token will be stored for easy cancellation. A URL must be provided by the domain to send the cancellation to the domain.

The personal profile will also provide callback URLs and header keys that will allow the debit system to update, change and delete cards.

## Address Information

Address information will be stored that will list all your residencies. A default can be set which defines your default residence.

## Receipts

When receiving receipts from 3rd parties they must include all the receipt details along with a JSON file of the receipt contents. All receipts must include:

- Business Name, Address, Phone, Website, Email Address
- Item UPC, Description, Price
- Totals w/ Taxes
- Link to cancel services

When 3rd party systems request the receipt for display to the user the FDA authorization will allow the user to generate a link for each UPC item that can be clicked to report product issues.

Receipts will be sent to Department of Health and Human Services (HHS) when received.

## Owned Homes

As the market adapts to the technology, all title transfer companies must accept a personal profile URL to set details about a users home that can be requested by the 3rd parties.

## Rented Homes

As the market adapts to the technology,  
All rental agreements must use the personal profile URL to set rental information.

## Medical Events

Licensed medical systems would receive and send medical events to the personal profile.

Licensed 3rd Party Applications can receive medical records if the user opts into it.

All medial events will be sent to Department of Health and Human Services (HHS).

### Home Automation Devices

[Home automation hubs](/grants/home-automation/) can be added to your personal profile where their services can be shared.

### Trackable Devices

All trackable devices that can be tracked must emit their locations to the persons trackable device locations with a discovery URL. These would include bluetooth enabled tracking devices and any other device that can emit its location.

## Books

A list of your purchased books in PDF format. These can be shared based on rights when purchasing, or transferred.

## Bookmarks

- Bookmarks can have multiple categories.

- Bookmarks can be saved from the browser, and all native applications must have bookmarking functionality along along with optionally having deep linking capabilities.

## Contacts

When adding a contact you can add it in clear text, or you can send a request to link directly to another contact so when there information changes so does yours or visa versa.

## Job History

This will include all all job events that happen in your life including:

- Applying for a job
- Receiving a job
- Job denial
- Quitting a job

## Calendar

You can setup multiple calendars that can be shared and updated between between parties.

## Communication

[Communication lines](./communication/) can be setup between personal profile to make voice calls.

# Untied States Post Office

The USPO would manage all the mail where all communications would be directed through a proxy server at the [National Security Agency](/national-security-agency/) where with warrants e-mails can be retrieved.

All mail must have to have a category when sent.

Any mail could have a flag for instant delivery, where a user can disable when received from a sender to normal.

There would be special govt in-box, and a public in-box.

Any mail readers that accessed the the in-boxes would have the following requirements for govt emails when received:

1. It would have to show the government agency associated with the e-mail along with a link.
2. A special inbox for govt communications only.
3. Provide an alert for critical e-mail(s).
4. Provide a confirmation status they received the e-mail when read, where a callback URL is called.

# Storage

A storage provider can be attached to a personal profile where folders and files can be managed. For example I-Cloud, DropBox, and more. All storage facilities must provide a transfer capability if people want to switch.

# Keys

All keys can have meta-data associated with them along with the key. For example, a hotel room might have meta data around the room #.

## Vehicle Keys

Keys would be added to the personal profile by oAuth with the manufacturer along with meta-data.

## Access Control Keys

Access control keys can be stored to provide access to buildings, hotels and other locations along with meta-data.

# Signed Documents

All signed documents would be stored in your signed documents profile via the [e sign agency](/grants/e-sign-agency/). Anytime these documents are displayed in the operating system they would include the USA seal frame.

# Personal Profile Licensing Service

A [personal profile licensing service](../personal-profile-licensing-agency/) would handle security to ensure only certain operating systems and applications could only request or post certain information from the personal profile. For example Apple would be a license provider to handle authorization events from the personal profile.

# Technical Requirements

- All personal profile servers must protect from key attacks.
- When logging in they can only login from the device they are using.
- All applications that use personal servers must register their domain with the licensing service, where a public key will be provided to interact with personal servers.
- All tokens that access the personal profile must be stored securely in the operating system.
- All applications attached to your personal profile can be viewed were access can be revoked.
