# Personal Profile

Before using the United States Internet citizen must create a personal profile from a licensed directory of personal profile providers derived from the Social Security Office.

A personal profile is a personal server thats allows citizens to store, receive and provide information that is related to them, the market place and the government. A personal profile can be used for many purposes including but not limited to:

1. Logging into operating systems.
2. Storing government issued documents.
3. Receiving and storing information from 3rd parties after a transaction.
4. Storing access keys to 3rd Party Services, for example an AI Assistant or Vehicle Services.
5. Authorizing and storing keys to government services to allow operating systems to interact with government services.
6. Storing keys to login into domains and native applications.

# Security

The personal profile will be encrypted with a passphrase and an e-mail address where it can be recovered or changed. These keys can be provided to loved ones if you forget a password.

# Personal Profile Storage Types

## Government Storage

### Government Id

When registering a government Id with the personal profile. The front and back picture must be taken, where the government id will be used to verify the user with a video, and out of pocket questions.

When presenting the id in public, attendants have 2 options, the citizen can show their ID's image where an animated government seal will surround the ID, or the bar code can be scanned on the back of the ID for further verification.

Government seals can only be shown when presenting their respective document. Under no circumstances will the operating system allow this framed image to be shown, or created on the operating system unless it comes directly from a personal profile.

### Passport

If a user is not a citizen of the United States they can upload a passport where its verified along with creating an [express visa account](/express-visa/). The passport Id will be sent to the passport agency where the picture of the passport, the person and the agency will be matched.

### Legal Guardian(s) / Children

If a Real ID is uploaded for a person under the age of 18, at least 1 legal guardian must be associated to the personal profile or a legal guardian to the account to provide services for the child where needed.

Anytime a child's personal profile is checked it will be matched with missing person database.

In the case of traveling by train, long haul bus, or air plane a guardian consent must be bound to the personal profile of the person traveling with the child.

Children personal profiles will have to authorization services. Once is what the child can approve, and the 2nd is what the parent must approve. These will be defined and analyzed as different services are brought on-line.

### Marriage Certificate

Marriage certificates will stored in your personal profile, and can only be added by authorized organizations.

### Death Certificate

Death Certificate will be stored in your personal profile. When a death certificate is received, people defined in your personal profile will have access to your personal profile based on your settings. For example, your e-mails might not be available, where your music collection might.

Social Security will provide services to keep the personal profile online. Any storage costs will have to be taken over by 3rd parties.

# Personal Profile Storage Types

## Address Information

Anytime a contract is signed to purchase a house, or rent one the residential information will be provided to the personal profile.

## Receipts

When receiving receipts from 3rd parties they must include all the receipt details along with a JSON file of the receipt contents. All receipts must include:

- Business Name, Address, Phone, Website, Email Address
- Item UPC, Description, Price
- Totals w/ Taxes
- Link to cancel services
- Link to notify FDA of a product issue

When 3rd party systems request the receipt for display to the user the FDA authorization will allow the user to generate a link for each UPC item that can be clicked to report product issues.

Receipts will be sent to Department of [Health and Human Services (HHS)[(/hhs)] when received.

## Medical Events

Licensed medical systems would receive and send medical events to the personal profile.

Licensed 3rd Party Applications can receive medical records if the user opts into it.

All medial events will be sent to Department of Health and Human Services (HHS).

## Trackable Devices

All trackable devices that can be tracked must emit their locations to the persons trackable device locations with a discovery URL. These would include bluetooth enabled tracking devices and any other device that can emit its location. This would include:

- Laptop
- Location Tags or Air Tags
- Vehicle Operating Systems
- Phones

## Books

A list of your purchased books in PDF format. These can be shared based on rights when purchasing, or transferred.

## Bookmarks

- Bookmarks can have multiple categories.

- Bookmarks can be saved from the browser, and all native applications must have bookmarking functionality along along with optionally having deep linking capabilities.

## Contacts

When adding a contact you can add it in clear text, or you can send a request to link directly to another contact so when there information changes so does yours and visa versa.

## Job History

This will include all all job events that happen in your life including:

- Applying for a job
- Receiving a job
- Job denial
- Quitting a job

## Calendar

You can setup multiple calendars that can be shared and updated between between parties.

## Media

All music, videos and books consumed would have to be sent to your media log. The media log would include the media-id of the content, along with the URL in which you consumed it, and the % consumed. A filter can be set to how much of the media content would have to be consumed to log depending on the users preferences.

## Birth Certificate

Depending on the jurisdiction all birth certificates will be stored with them like they to do, this is typically the state. However, when they do create those birth certificates a copy will also be provided to your personal profile so you will have it for your records and it can be used in the market place.

## Sizing Information

Standards will be create to receive scans of the entire body, where the marketplace and can use it to manufacture and sell goods in custom manufacturing scenarios.

## Vehicle Keys

Keys would be added to the personal profile by oAuth with the manufacturer along any meta-data they required.

## Access Control Keys

Access control keys can be stored to provide access to buildings, hotels and other locations along with meta-data.

## Signed Documents

All signed documents would be stored in your signed documents profile via the [e sign agency](/grants/e-sign-agency/). Anytime these documents are displayed in the operating system they would include the USA seal frame.

## Vehicle Registration

When a vehicle is registered at the DMV, the DMV will update your registration. A link will be provided to go to the DMV, login and pay your bill with debit or credit.

## Ledger

This will be a ledger of all bank transactions with receipts and current balance due across all banks.

## Accounts Receivables

All accounts receivables in the market place will be stored here, a link to cancel subscriptions will be provided.

## Accounts Payable

All accounts payable in the market place will be stored here.

## Incoming Deliveries

Any deliveries designated to you will be stored along with the updated tracking information.

## College Degrees

All college degrees will be added to your personal profile by licensed .colleges.

# Technical Requirements

- All personal profile servers must protect from key attacks.
- When logging in they can only login from the device they are using.
- All applications that use personal servers must register their domain with the licensing service, where a public key will be provided to interact with personal servers.
- All tokens that access the personal profile must be stored securely in the operating system.
- All applications attached to your personal profile can be viewed were access can be revoked.
- We must define when a pin will be needed vs. just a normal acknowledgement for each request type.

# Untied States Post Office

The USPO would manage all the mail where all communications would be directed through a proxy server at the [National Security Agency](/national-security-agency/) where with warrants e-mails can be retrieved and viewed.

All mail must have to have a category when sent.

Any mail could have a flag for instant delivery, where a user can disable when received from a sender to normal.

There would be special govt in-box, and a public mail in-box.

Any mail readers that accessed the the in-boxes would have the following requirements for govt emails when received:

1. It would have to show the government agency associated with the e-mail along with a link to their domain.
2. A special inbox for govt communications only.
3. Provide an alert for critical e-mail(s) from the government.
4. Provide a confirmation status they received the e-mail when read, where a callback URL is called.

# Storage

A storage provider can be attached to a personal profile where folders and files can be managed. For example I-Cloud, DropBox, and more. All storage facilities must provide a transfer capability if people want to switch.

Storage will always have an export capability to various mediums and the entire data-store export will be available.

# Personal Profile Licensing Service

A [personal profile licensing service](../personal-profile-licensing-agency/) would handle security to ensure only certain operating systems and applications could only request or post certain information from the personal profile. For example Apple would be a license provider to handle authorization events from the personal profile. This will be done with a client ID as part of the oAuth process.

## Communication

[Communication lines](./communication/) can be setup between personal profile to make voice calls, backed by networks that can be sold.

## Real-Time Check Processing

The real-time check processing will be added by oAuth to the [The United States real-time check system](/real-time-check-system/), where a list of accounts and an authorization key for each bank account will be stored to the profile, along with images.

When processing a payment this authorization key will be used to receive a one-time debit card token that will be used for the transaction.

If the card is requested to be stored, a multi-use debit card token will be used, where the domain and and token will be stored for easy cancellation. A URL must be provided by the domain to send the cancellation to the domain.

The personal profile will also provide callback URLs and header keys that will allow the debit system to update, change and delete cards.

## Credit Cards

Today we are riddled with Google Pay and Apple Pay if we allow these technologies to be the only solution to processing cards very difficult to untangle monopolies will be created.

Card companies will provide a directory of issuing banks based on the card number.

When adding a card, the wallet will contact the issuing bank where a authorization key will be provided for the card.

When processing a payment this authorization key will be used to receive a one-time credit card key that will be used for the transaction. The MID must be provided to the issuing bank, and when the payment is processed the MID is checked.

If it is a reoccurring payment the amount of payments are requested and many tokens are created for each transaction. The reoccurring payments are stored, and transaction details can be cancelled.

All payment gateways must be licensed to accept these cards when processing payments and request confirmation from the user before processing.

The personal profile will also provide callback URLs and header keys that will allow the debit system to update, change and delete cards.

# Home Automation Devices

[Home automation hubs](/grants/home-automation/) can be added to your personal profile where their services can be shared.

# Public API

Public APIs require no authorization process. For example, if I were to visit a website they can receive my language code in order to present the correct language to the user.

- Language Code

# Government Integration Services

As part of the personal profile setup process the user must authenticate to [government OS services](./government-os-services/) where the keys of these government services will be stored in the personal profile which will allow operating systems to communicate with the government.

The following will occur to work with government services:

When the operating system boots up it will take the key from the personal profile and the government service and login, the government service will return a 3 next login keys which will be added to the personal profile for the next time.

# Initial Authorization Setup

Today its very difficult to log-in to websites. There many, many authorization applications which make it confusing and difficult for users. Since the authorization process is "flat", you have to fill out captchas and "are you a robot" forms. Using a personal profile for authorization will remove these issues.

As part of the binding process with the personal profile the operating system will ask the user what authorization the method the user would like to use for normal authorization requests. For example, a thumb print, face or a pin. There will be a login process for both simple logins and critical ones.

For example when exchanging money with someone you might want a secondary authorization process from your initial login.

The login bindings will be stored in the personal profile with whatever key the operating system will need to verify it.

# Login to Websites and Applications using Pass Keys (TODO DIAGRAM)

- The OS will have your personal profile URL stored in an environment setting.

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

# 3rd Party Services

A 3rd party service can have an API exposed. For example an AI assistant.

I could register with an AI assistant and it would provide an authorization key to my personal profile.

If I started up an operating system in the car, it could ask what AI assistant I would like to use for my personal profile.

It would then use that authorization key to get a session key where it an interact with its services from the predefined API.

This will essentially allow you to share API surfaces for various services with other services.

When setting up your AI Assistant it could for example request the API surface of your home automation hub and communicate with that, or visa versa.
