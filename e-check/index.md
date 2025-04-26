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

Furthermore, our current government has no safeguards to transaction business unless its with a 3rd party corporations. This is a security risk for our company. Visa and Mastercard could become an risk one day for business reasons the US could not control.

The United Stated E-check system provides the ability for both United States seller and buyers the ability to register their bank accounts and transfer money between each other in their operating systems.

## Payment Process

The following process would be applied to create a debit profile at the Federal Reserve:

- Once the citizen setup their personal profile. The citizen would go to their bank via an oAuth process. This would attach all their bank accounts to their personal profile by bank.
- A merchant Id would be provided for each account to be set when processing transactions on the e-check service architecture at the federal reserve.
- When a citizen was browsing a website or using an application and wanted to pay, a list of their bank account cards would be provided from the personal profile via the operating system.
- The user would then select the bank account and the money would be transferred to the seller instantly.
- The e-check system would collect all correct local, state and federal taxes and give them to the appropriate jurisdictions.
- There will be a holding fund at the federal reserve to ensure transactions are real-time and have funds available in case one party gets away with money.

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


