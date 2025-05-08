# Social Security Personal Profile

The social security personal profile will be the beginning of looking at a new way to issue social security cards and other govt documents and connect with the citizens in the internet age. It will be a new contract between the government and its citizens.

The social security office will store core data services that will serve the personal information of citizens from birth certificates, to death certificates and anything in-between.

We will start with just the social security card, drivers licenses, and payment cards. Level set what the market has today. We will then move to other government documents that are sent to citizens as the market and government adopts the technology.

## New Citizens

Hospitals will have access to create a personal profile for newborn babies by licensed hospital management systems to social security. They must post the JSON birth certificate with the personal profile when it's created.

Social Security will return a social security number with S-XXX-XXX-XXXX

Parents will also have their newly created family members associated to them in their family personal profile.

## Existing Citizens

When a user logs into an operating system for the first time, they will enter their social security number.

If they currently have a personal profile already setup at social security the operating system will oAuth to social security. The user will then enter their e-mail and password where the contact information, government ID, and payment cards of the logged in user will be available for the operating system with a JWT and refresh token.

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

It's highly recommend family members come into the office together. If a personal profile hasn't been setup for family members, they cannot be associated after the fact. The association of families is a critical fact for department of eduction, and many other organizations.

Once the livescan has completed each profile they will be sent a link where they will set their e-mail and password. If they do not have a phone, they will be required to double check all information is correct.

Once this is completed, they can go back to their computer. Enter their social security number, and login with their e-mail and password where the operating system is authenticated with the personal profile.

If the live scan is suspicious of the documentation, the availability of out of pocket questions will be available to use as a validation tool.

A Sworn affidavit or declaration under penalty of perjury may be signed.

## Credit Cards

Today we are riddled with Google Pay and Apple Pay if we allow these technologies to be the only solution to processing cards we will continue to see monopolies in the market place.

The personal profile will have a direct connection to the federal reserve where:

1. A list of cards can be retrieved on setup based on drivers license.
2. A one time transaction ID can be requested from the federal reserve that is used to process the card through the processing networks. Optionally, a domain can be sent to ensure domains process the payments.

When setting up, the live scan will verify each card as its added to the profile.

## Real Time E-Check System

E-check cards will be added by going oAuth with the federal reserve by approving the use of your social security number from your profile.

The oAuth handshake will create the ability for account/cards to automatically be added, removed and updated.

1. A list of back account/cards can be retrieved on setup based on drivers license.
2. A one time transaction ID (that is cycled) can be requested from the federal reserve that is used to process the card through the processing networks to receive transaction Ids for each transaction that is processed.

For more information on the e-check system can be found at the [securities and exchange](/civic-organizations/us-securities-and-exchange/).

### Processing Network Distinctions

When card Ids are passed to a payment API, they have a prefix defined by the federal reserve which will include:

-Credit Card
-ECheck

### Business Profile

Users can connect to business profiles of businesses by selecting them from their business license of the business they work at.

All business licenses must have:

- The employees personal profile
- Name of business and location
- Phone number

### Foreign Citizens

If a person is not an American Citizen they have to receive a VISA from U.S. Citizenship and Immigration Services. In order to receive a VISA you must bring a letter that you are currently working from your employer, along with a phone number where they can be contacted.

Foreign citizens must go through the same process as citizens, but through the Immigration system instead of the social security.

Non citizen personal profiles will have a V prefix for example I-123-322-1222, where social security numbers will have a S Prefix. This will allow systems to use the correct DNS system when resolving personal profile domains.

The personal profile API surface, hosting, and all other details must be identical.

One example of an opportunity, is to give a grant and an e-visa to builders and dubai and start training, and building state of the art buildings in our towns and then have them return to their country.

Further roadmap and technical details for future versions can be found [personal profile](./v2/).
