# Social Security Personal Profile

The social security personal profile will be the beginning of looking at a new way to issue social security cards and connect with the citizens in the internet age. It will be a new contract between the government and its citizens.

The social security office will store core data services that will serve the personal information of citizens from birth certificates, to death certificates and anything in-between.

We will start with just the social security card, drivers licenses, and payment cards. Level set what the market has today. We will then move to other government documents that are sent to citizens as the market and government adopts the technology.

## How it Works

### Personal Profile

#### New Citizens

Hospitals will have access to create a personal profile for newborn babies by licensed hospital management systems. They must upload the birth certificate once the profile is created.

#### Existing Citizens

When a user logs into an operating system for the first time, they will enter their social security number.

If they currently have a personal profile already setup the operating system will connect to it via e-mail and password where the contact information, government ID, and payment cards of the logged in user will be available for the operating system.

If they don't have a profile, the citizen:

- They are redirected to the social security office.
- A profile is created
- A QR Code is created and e-mailed to them, or they can print it.
- They must take the QR Code to their local post office.
- They will be instructed to bring all government documentation with them including:
  - Government-issued photo ID (e.g., driver’s license, passport). At least one photo ID.
  - Birth certificate and/or Social Security card

Once the person goes to the facility, the facility will scan the QR Code and:

- Upload all documents to the personal profile including ID's, and certificates.
- Take 3 profile pictures
- Take a voice recording
- Finger printed

The office will also ensure all the organization around family members are set correctly based on the documentation.

It's highly recommend anyone legal-guardians in which the parents are taking come in with the child and provide proof of:

- Legal guardianship documentation (e.g., court order, custody papers)
- Identification for both the guardian and the child
- Any supporting documents that clarify the guardian’s authority (e.g., power of attorney, adoption records, school or medical consent forms)
- Parent contact information or relinquishment paperwork, if applicable.”
- Court Orders

Once this is completed, they can go back to their computer. Enter their social security number, and login with their e-mail and password where the operating system is authenticated with the personal profile.

If the post office inspector is suspicious of the documentation, the availability of out of pocket questions will be available to use as a validation tool.

A Sworn affidavit or declaration under penalty of perjury may be signed.

## Credit Cards

Today we are riddled with Google Pay and Apple Pay if we allow these technologies to be the only solution to processing cards we will continue to see monopolies in the market place.

The personal profile will have a direct connection to the securities exchange where:

1. A list of cards can be retrieved on setup based on drivers license.
2. A one time transaction ID can be requested from the federal reserve that is used to process the card through the processing networks. Optionally, a domain can be sent to ensure domains process the payments.

This would be done with an oAuth process to securities and exchange. Securities and exchange would handshake with the personal profile to ensure the domain is correct.

## Real Time E-Check System

E-check cards will be added by going oAuth with the federal reserve by approving the use of your social security number from your profile.

The oAuth handshake will create the ability for account/cards to automatically be added, removed and updated.

1. A list of back account/cards can be retrieved on setup based on drivers license.
2. A one time transaction ID can be requested from the federal reserve that is used to process the card through the processing networks. Optionally, a domain can be sent to ensure domains process the payments.

See E-Check System for more information.

## Tickets

Domains could provide a ticket to a personal profile, where handshake key would be provided to verify the domain. All domains must have a usa:// prefix.

The ticket would include an RFID where it would be available via [touch RFID](/civil-organizations/us-national-institute-of-standards-and-technology/public-rfid-url-specification/) on request from a client.

Anytime a ticket is requested it must be approved to provided the requestor.

Anyone placing tickets into the personal profile without the permission of the user would be reported and prosecuted.

Once the ticket was provided it would be removed from the personal profile.

Only .ticketed-venue containers could access the ticket storage where callback handshake would be made.

### Processing Network Distinctions

When card Ids are passed to a payment API, they have a prefix defined by the federal reserve which will include:

-Credit Card
-ECheck

# Security

## Outgoing Domain Security

One would want to share their location information. The user would goto a family location application. The family location application would oAuth to the location where events would be published.

oAuth must include publishable events to end points, and data access.

## Incoming Personal Profile Security

### Social Security Card

The end point would be protected with a whitelist of domains that are allowed to add a social security card to the profile.

In this case it would be socialsecurity.gov. When social security ads the card, it must provided a handshake key. The personal profile will call back the socialsecurity.gov domain with the handshake key and verify the source.

Any domains that used information improperly would be reported to a jury for prosecution.

Further roadmap and technical details for future versions can be found [personal profile](./v2/).
