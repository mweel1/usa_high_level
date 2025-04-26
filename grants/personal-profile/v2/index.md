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

The personal profile will be encrypted with an e-mail address and password where it can be recovered or changed. These keys can be provided to loved ones if you forget a password.

A recover key is to to social security that will allow people to fill out a recovery form on social security where they will be e-mailed a link to set their password on their personal profile.

If the citizens looses their e-mail, a secondary process could be sent with an action to change the e-mail address also.

# Personal Profile Storage Types

## Government Document Storage

### Government Id

When registering a government Id with the personal profile. The front and back picture must be taken, where the government id will be used to verify the user with a video, and out of pocket questions.

When presenting the id in public, attendants have 2 options, the citizen can show their ID's image where an animated government seal surrounding the ID, or the bar code can be scanned on the back of the ID for further verification.

All governments that issue ID's must provide an API to validate an ID as valid, along with an age response.

Government seals can only be shown when presenting their respective document. Under no circumstances will the operating system allow this framed image to be shown, or created on the operating system unless it comes directly from a personal profile.

People asking for ID, can also [use public rfid specification](/public-rfid-specification/) to scan a phone while the ID is present on the screen.

### Legal Guardian(s) / Children

If a Real ID is uploaded for a person under the age of 18, at least 1 legal guardian must be associated to the personal profile or a legal guardian to the account to provide services for the child where needed.

Anytime a child's personal profile is checked it will be matched with missing person database.

In the case of traveling by train, long haul bus, or air plane a guardian consent must be bound to the personal profile of the person traveling with the child.

Children personal profiles will have to authorization services. Once is what the child can approve, and the 2nd is what the parent must approve. These will be defined and analyzed as different services are brought on-line.

### Marriage Certificate

Marriage certificates will stored in your personal profile, and can only be added by authorized organizations.

### Death Certificate

Death Certificate will be stored in your personal profile. When a death certificate is received, people defined in your personal profile will have access to your personal profile based on your settings. For example, your e-mails might not be available, where your music collection might.

Social Security will shut down the personal profile after 90 days of people defined in the on death permissions to remove everything they are capable of.

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

The FDA will have a copy of the receipt via the [government-os](/grants/personal-profile/government-os-services/) oAuth process.

When 3rd party systems request the receipt for display to the user the FDA authorization will allow the user to generate a link for each UPC item that can be clicked to report product issues.

Receipts will be sent to Department of [Health and Human Services (HHS)[(/hhs)] when received also.

## Medical Events

Licensed medical systems would receive and send medical events to the personal profile.

Licensed 3rd Party Applications can receive medical records if the user opts into it.

All medial events will be sent to Department of Health and Human Services (HHS) for analysis.

## Trackable Devices

All trackable devices that can be tracked must emit their locations to the persons trackable device locations with a discovery URL. These would include bluetooth enabled tracking devices and any other device that can emit its location. This would include:

- Laptop
- Location Tags or Air Tags
- Vehicle Operating Systems
- Phones
- Watches

## Books

A list of your purchased books will be in a open reader format. These can be shared based on rights when purchasing, or transferred. There can also be a transfer price.

## Bookmarks

- Bookmarks can have multiple categories.

- Bookmarks can be saved from the browser, and all native applications must have bookmarking functionality along along with optionally having deep linking capabilities.

- Bookmarks need to be shown easily based on the operating system they are being called from.

## Contacts

When adding a contact you can add it in clear text, or you can send a request to link directly to another contact so when there information changes so does yours and visa versa.

## Job History

This will include all all job events that happen in your life including:

- Applying for a job
- Receiving a job
- Job denial
- Quitting a job

All job history will be sent to the department of labor (DOL).

## Calendar

You can setup multiple calendars that can be shared and updated between between parties.

Calendars can be shared using the [public RFID specification](/public-rfid-specification/).

## Media Logs

All media logs will be sent to your media logs with their media ID.

All music, videos and books consumed would have to be sent to your media log. The media log would include the media-id of the content, along with the URL in which you consumed it, and the % consumed. A filter can be set to how much of the media content would have to be consumed to log depending on the users preferences.

## Media

You would have a various media categories of media that you purchased that you own which would include:

- Music
- Movies
- TV Shows
- Books
- Pod Casts

## Subscriptions

All your subscriptions would be available in a single place with a place to cancel them, and a place to link to them depending on the device your on.

## Birth Certificate

Birth certificates will be added to the personal profile via licensed hospital management systems.

## Sizing Information

Standards will be created to take scans of the entire body. Once this scan is in your personal profile the marketplace and can use it to manufacture and sell goods in custom manufacturing scenarios.

## Business Licenses

All businesses that hire a person must provide their business license as an employee, contractor or owner.

## Vehicle Keys

Keys would be added to the personal profile from the vehicle manufacturer along any meta-data they required.

When you purchase a car you would get an oAuth request which would allow you to authorize to the car manufacturer and receive your keys.

They keys would be close range bluetooth, which would have a handshake protocol between both entities.

The user would push the start button and it would provide a key to devices over [push bluetooth](/grants/push-bluetooth/) that would match the personal profile keys and start.

This standard would be managed by the market in a division of the FCC via a grant.

## Access Control Keys

Access control keys can be stored to provide access to buildings, hotels and other locations along with meta-data. Hotel management systems, and access control systems will have licenses to update these keys.

Using [rfid](/public-rfid-specification/) these keys can be requested by the header code that is used when storing them.

## Signed Documents

All signed documents would be stored in your signed documents profile via the licensed document signing companies. Anytime these documents are displayed in the operating system they would include the USA seal frame with the date, and all parties that signed the documents.

All electronic signature applications would have to be licensed on the American Domain System using the .signature domain extension.

## Vehicle Registration

When a vehicle is registered at the DMV, the DMV will update your registration in the vehicle section of your personal profile.

A link will be provided to go to the DMV, login and pay your bill with debit or credit when you license is due.

When you oAuth to the manufacturer a connection is made via the VIN # from the vehicle to allow the vehicle to use the DMV information as it sees fit.

## Ledger

This will be a ledger of all bank transactions with receipts and current balance due across all banks with their bank identifier and details that were part of the transaction.

## Bill

All your personal bills will be stored in your personal profile, with:

- Date Due
- Amount
- Link to make payments
- A flag set if auto-pay is on or off
- A link to setup auto pay on and off

## Accounts Payable

All accounts payable in the market place will be stored here.

## Incoming Deliveries

Any deliveries designated to you will be stored along with the updated tracking information. 

## College Degrees

All college degrees will be added to your personal profile by licensed .colleges

# Technical Requirements

- All personal profile servers must protect from key attacks, by handshaking with the domain.
- When logging in they can only login from the device they are using.
- All applications that use personal servers must register their domain with the licensing service, where a client ID  will be provided to interact with personal servers.
- All tokens that access the personal profile must be stored securely in the operating system.
- All applications attached to your personal profile can be viewed were access can be revoked (if applicable).
- Every request that is made to the personal profile for confirmation can define various authorization mechanism. 

# Untied States Post Office

The USPO would manage all the mail where all communications would be directed through a proxy server at the [National Security Agency](/national-security-agency/) where with warrants e-mails can be retrieved and viewed.

All mail must have to have a category when sent.

Any mail could have a flag for instant delivery, where a user can disable when received from a sender to normal.  These will operate like a text message.

There would be special govt in-box, and a public mail in-box.

Any mail readers that accessed the the in-boxes would have the following requirements for govt emails when received:

1. It would have to show the government agency associated with the e-mail along with a link to their domain.
2. A special inbox for govt communications only.
3. Provide an alert for critical e-mail(s) from the government, that must be confirmed.
4. Provide a confirmation status they received the e-mail when read, where a callback URL is called for government record keeping.
5. Provide a government seal around the e-mail.

# Storage

A storage provider can be attached to a personal profile where folders and files can be managed. For example I-Cloud, DropBox, and more. All storage facilities must provide a transfer capability if people want to switch.

Storage will always have an export capability to various mediums and the entire data-store export will be available.

# One-Time Message

Requests can be made for one-time message tokens. For example if a restaurant needs to send you a message that your food is ready after placing an order.

# Personal Profile Licensing Service

A [personal profile licensing service](/grants/personal-profile-licensing-agency/index.md) would handle security to ensure only certain operating systems and applications could request or post certain information from the personal profile. For example Apple would be a license provider to handle authorization events from the personal profile. This will be done with a client ID as part of the oAuth process with the personal profile.

## Communication

[Communication lines](./communication/) can be setup between personal profile to make voice calls, backed by networks that can be sold.

# Public API

Public APIs require no authorization process. For example, if I were to visit a website they can receive my language code in order to present the correct language to the user.

- Language Code

# Government Integration Services

As part of the personal profile setup process the user must authenticate to [government OS services](../government-os-services/) where the keys of these government services will be stored in the personal profile which will allow operating systems to communicate with the government.

The following will occur to work with government services:

The personal profile will have two area of data for government OS services:

- The Device Type
- The Active Devices

The device type will be auth keys for various device types.

When an operating system boots handshakes for the first time with a profile it will use the authorization key, and then set the JWT and refresh token in the actual device listed in the personal profile.

When receiving the JWT and Refresh token.  The initial device type keys will be refreshed by each govt organization.

With a warrant device login keys can be revoked.

# Login to Websites and Applications using Pass Keys (TODO DIAGRAM)

- The OS will have your personal profile URL stored in an environment setting.

- When using an application or browsing a website. These applications can use the personal profile to login via a JavaScript SDK, or native application SDK.

- The host operating system will have a channel to the personal profile. A website or application can use the operating system channel to request a one-time auth key which is passed to an application server where the authorization or authentication process can be proceed and stored on the server.

If a key for the domain is not found the authenticator applications will accept a key from the calling the domain, where the key and meta-data will be stored upon confirmation. The key must be 4096 bytes.

If a key for the domain is already found, it's returned to the calling application along with any meta-data associated with they key where the login process can proceed to various account services for the application (selecting a user, filling out user information, etc)

The following will be stored with login pass keys:

- General application
- Domain Name
- Device Id
- Cancellation Link

# 3rd Party Services

A 3rd party service can have an API exposed. For example an AI assistant.

I could register with an AI assistant and it would provide an authorization key to my personal profile.

If I started up an operating system in the car, it could ask what AI assistant I would like to use for my personal profile.

It would then use that authorization key to get a session key where it an interact with its services from the predefined API.

This will essentially allow you to share API surfaces for various services with other services.

When setting up your AI Assistant it could for example request the API surface of your home automation hub and communicate with that, or visa versa.
