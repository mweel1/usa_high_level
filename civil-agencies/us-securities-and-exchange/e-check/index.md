---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "United States"
  text: "E-Check"
  tagline: Creating real-time frictionless transactions between US citizens
---

# Overview

Today is it extremely difficult to send money between two parties. Both parties must have the right application which is not only confusing but also very expensive.

ACH and other E-Check transactions take many days to process.

There are conflicting approaches to returning money when fraudulent transactions take place in the market making consumers confused on policies.

Furthermore, our current government has no safeguards to transaction business unless its with a 3rd party corporations. This is a security risk for our country. Visa and Mastercard could become an risk one day for business reasons the US could not control.

The United Stated E-check system provides the ability for both United States seller and buyers the ability to register their bank accounts and transfer money between each other in their operating systems.

## Payment Process

The following process would be applied to create a debit profile at the securities exchange:

E-check cards will be added by going oAuth with the federal reserve by approving the use of your social security number from your profile.

The oAuth handshake will create the ability for account/cards to automatically be added, removed and updated.

When bank/account cards are added they receive a unique card id from the issuing bank, and are processed via the federal reserve e-check processing.

## Application Requirements

- A link to transaction court at the federal reserve would allow a seller and buyer to dispute a transaction where applicable laws would applied withing their bank, for example:
  - A judgement to return money to buyer
  - A % of all future transactions will be provided to the winner of the case.
  - Loss of e-check access for a time period
- The following must be provided with each transaction:
  - A JSON file of the receipt
  - A copy of the the receipt
  - The domain in which the process took place

Its important to keep the jury process in the platform so data, and transaction capabilities remain after judgement.

## Transaction Court

Much like domain court, transaction court would allow people to submit a claim that disputes the transaction. A list of previous judgments would be available. A jury selection would take place, and the jury would vote on the outcome which would include:

- A judgement to return money to buyer immediately (if available).
- A debit tax to paid the plaintiff over a certain period of time.
- Loss of bank privileges.

## Funds

Any funds due will be levied against the debit account unless a jury to anonymously claims they are in a hardship where its reviewed every 30 days.

## API

The real-time e-check system will have an API must like merchant processing accounts do today. This would include the ability to :

- Pre-auth transaction
- Process transactions
- Refund transactions

## Processing Network

The processing network will be done at the federal reserve.

## Use Cases

### Buying Coffee at the counter

You would tap an RFID transponder that would have provide an RFID string with the following:

- Prefix that its a payment request
- The business domain name
- The amount of transaction
- Tippable

This would show a wallet, where the customer would select their card and receive a transaction card id.

The user would confirm the amount, and the transaction card id would be sent to the business using the /payment API.

The payment API would receive a call back URL to the personal profile if a tip attribute was in the RFID string where the tips would be available to review and pay at the citizens discretion.

The receipt would be shown on the screen with the business name, address and logo once the transaction was completed.

### Buying a coffee using an order application

The user would press their domain zone button where an app called order would show up.

The user would select the menu items in the application, derived from the Menu API of the restaurant.

The application would make a payment request via JS or Native SDK with the amount, and if a tip is requested.

Once the card is selected the card id would be sent to the /order API of the business along with the transaction card id.

A screen in the back, would be connected to the internal order API where orders would come up (3rd party services would use this also).

The processor for the business would process the transaction, and return to JS or Native SDK that it was approved where an approval message would be shown.

The receipt would be sent to the federal reserve, where it would end up in the receipts folder of personal profile.

Any receipt added to the personal profile would show up on completion of transactions. In person receipts would have priority.

SIDE NOTE: Menu API's could be used for all kinds of things for the business which includes:

- Digital Menu Signage
- Sharing menu's with the market place
- Sharing the menu with internal applications
- Attach pricing analysis applications that analyze pricing over time
- Attach analysis applications that compares your menu with others and pricing to stay competitive.
