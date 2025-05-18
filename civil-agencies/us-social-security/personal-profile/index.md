# Social Security Personal Profile

The social security personal profile will be the beginning of looking at a new way to issue social security cards and other govt documents and connect with the citizens in the internet age. It will be a new contract between the government and its citizens and the marketplace.

The social security office will store core data services that will serve the personal information of citizens from birth certificates, to death certificates and anything in-between.

We will start with just the social security card, drivers licenses, and payment cards. Level set with what Google Pay and Apple Pay have today in their wallets. We will then move to other government documents that are sent to citizens as the market and government adopts the technology.

## New Born

Hospitals will have access to create a personal profile for newborn babies by licensed hospital management systems to social security. They must post the JSON birth certificate with the personal profile when it's created.

Social Security will return a social security number with S-XXX-XXX-XXXX

Parents will also have their newly created children added to their personal profile.

## Setting up a personal profile at a live scan office

If they don't have a profile, the citizen:

- They must goto a live scan provider.

- They will be instructed to bring all government documentation with them including:

  - Government-issued photo ID (e.g., driver’s license, passport). At least one photo ID.
  - Birth certificate and/or Social Security card

Once the person goes to the facility, the facility will goto the social security office with their login, where:

- Upload all documents to the personal profile including ID's, and certificates.
- Take 3 profile pictures
- Finger printed

The office will also ensure all the organization around family members are set correctly based on the documentation, and personal profiles are setup for family members also.

It's highly recommend family members come into the office together. If a personal profile hasn't been setup for family members, they cannot be associated after the fact. The association of families is a critical fact for department of eduction, social security and many other organizations.

Once the livescan has completed each profile they will be sent a link where they will set their e-mail and password. If they do not have a phone, they will be required to double check all information is correct.

Once this is completed, they can go back to their computer. Enter their social security number, and login with their e-mail and password where the operating system is authenticated with the personal profile.

If the live scan is suspicious of the documentation, the availability of out of pocket questions will be available to use as a validation tool.

A Sworn affidavit or declaration under penalty of perjury may be signed.

Once the personal profile has been setup by a licensed live scan office, they user will enter an e-mail and password for it.

The live scan agent will watch a citizen approve and make a connection to all required services all items added to their personal profile will be verified including:

### Treasury

To ensure they have ownership of the cards added to the personal profile, and receive one time transaction IDs for cards.

### E-Check

Verify all bank accounts that come from the treasury are valid. An amount for each account will come up along with the bank name, where the live scan associate will have to see a bank login with the bank account and amount.

### Social Security

To receive their social security card, with a social security number on it, and social security to receive address and contact information in case of a social security emergency from the FCC.

## Logging In - First Time

When a user logs into an operating system for the first time, they will enter their social security number.

If they currently have a personal profile already setup at social security the operating system will oAuth to the personal profile at social security. The user will then enter their e-mail and password where the contact information, government ID, payment cards, and tickets of the logged in user will be available for the operating system with a JWT and refresh token.

## Logging In - Second Time

If a personal profile has been provisioned with the operating system, and the operating system has a connection to the personal profile. The personal profile will have a standard fingerprint provided by NITS to allow the user to authenticate to to the personal profile and receive a new session key. The operating system must store the key in memory.

# Storage

## Credit Cards

The personal profile will have a direct connection to the treasury where:

1. A list of cards can be retrieved on setup based on the drivers license in the personal profile.
2. A one time transaction ID can be requested from the treasury that is used to process the card through the processing networks. Optionally, a domain can be sent to ensure domains process the payments, via a callback to the domain with a key.

When setting up, the live scan will verify each card as its added to the profile.

## Real Time E-Check System

The real time e-check system will allow people to process transactions between citizens both on-line and in-person by touching phones together at no charge.

E-check cards will be added by going oAuth with the federal reserve by approving the use of your social security number from your profile.

The oAuth handshake will create the ability for account/cards to automatically be added, removed and updated.

1. A list of back account/cards can be retrieved on setup based on drivers license.
2. A one time transaction ID (that is cycled) can be requested from the federal reserve that is used to process the card through the processing networks to receive transaction Ids for each transaction that is processed.

For more information on the e-check system can be found at the [treasury](/civic-organizations/us-securities-and-exchange/).

## Tickets

The personal profile will accept tickets from any business that has a license to issue them.

These businesses must also accept the ticket's via an NITS approved ticket point. Only NITS approved ticket points will be able to receive the ticket based on the domain, and event Id.

The customer and the ticket point will use touch point to request the ticket via [touch stream](/civil-organizations/us-national-institute-of-standards-and-technology/touch-stream/).

# Processing Networks

The following processing networks will be available in the market place to receive one-time transaction Ids.

- MasterCard
- Visa
- Discover
- AmericanExpress
- Treasury-ECheck

Each card must manage its own processing network, this is a requirement because of the transaction safety implementing that must be tightly controlled.

### Foreign Citizens

If a person is not an American Citizen they have to receive a VISA from U.S. Citizenship and Immigration Services. In order to receive a VISA you must bring a letter that you are currently working from your employer, along with a phone number where they can be contacted.

Foreign citizens must go through the same process as citizens, but through the Immigration system instead of the social security.

Non citizen personal profiles will have a V prefix for example I-123-322-1222, where social security numbers will have a S Prefix. This will allow systems to use the correct DNS system when resolving personal profile domains.

The personal profile API surface, hosting, and all other details must be identical.

Further roadmap and technical details for future versions can be found [personal profile](./v2/).
