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

If they currently have a personal profile already setup the operating system will connect to it via e-mail and password where the contact information, government ID, and payment cards of the logged in user will be available.

If they don't have a profile, the citizen:

- They are redirected to the social security office.
- A profile is created
- A QR Code is created and e-mailed to them, or they can print it.
- They must take the QR Code to a facility they can find by searching based on their location.
- They will be instructed to bring all government documentation with them including ID's, certificates, and credit cards.

Once the person goes to the facility, the facility will scan the QR Code and:

- Upload all documents to the personal profile including ID's, and certificates.
- Take 3 profile pictures
- Take a voice recording
- Finger printed

The office will also ensure all the organization around family members are set correctly based on the documentation.

If a personal profile hasn't been setup by a personal profile for family members they must come back

Once this is completed, they can go back to their computer. Enter their social security number, and login with their e-mail and password where the operating system is authenticated with the personal profile.

## Credit Cards

Today we are riddled with Google Pay and Apple Pay if we allow these technologies to be the only solution to processing cards very difficult to untangle monopolies will be created.

Card companies will provide a directory of issuing banks based on the card number at the federal reserve.

When adding a card, the wallet will contact the issuing bank where a authorization key will be provided for the card.

When processing a payment this authorization key will be used to receive a one-time credit card key that will be used for the transaction. The MID must be provided to the issuing bank, and when the payment is processed the MID is checked.

If it is a reoccurring payment the amount of payments are requested and many tokens are created for each transaction. The reoccurring payments are stored, and transaction details can be cancelled.

All payment gateways must be licensed to accept these cards when processing payments and request confirmation from the user before processing.

The personal profile will also provide callback URLs and header keys that will allow the debit system to update, change and delete cards.

## Real Time E-Check System

E-check cards will be added by going oAuth with the federal reserve by approving the use of your social security number from your profile.

The oAuth handshake will create the ability for cards to automatically be added, removed and updated.

When bank card transactions are processed they must receive a card transaction id from the issuing bank, and are processed via a e-check processor.

All e-check processors must confirm they received the transaction along with their contact information which includes:

Business Picture & Name (if applicable)
Avatar & First and Middle Initial.

There is a dual transaction confirmation that has to happen between the two parties before the transaction is processed.

Processing networks can ignore the handshake if they are trusted parties.

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

Further roadmap and technical details for future versions can be found [personal profile](./v2/).
