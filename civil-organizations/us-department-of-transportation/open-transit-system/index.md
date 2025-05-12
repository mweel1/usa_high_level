## Open Transit System

Open Cargo System would be a grant to manage a platform to ensure cargo trucks have the ability to find pickup and delivery locations in the most optimal way to reduce wasted cargo trips in vehicles.

The service would be an opt-in and will be managed under a grant under the DOT.

## Business Requirements

- Publish their start and end locations and dates and times via their .shipping domain

  = OTS would receive shipping schedule events via .shipping domain names where it would call the schedule via their domain name when received for the next 30 days.

- Confirm pickup from market requests

  - When .shipping domains dropped their delivery off they would event that their schedule has been updated.

- Aggregate all the .shipping domain pricing per mile based on freight capabilities.

  - When .shipping pricing changes it would event, and the shipping price per mile would be updated.

### Use Case

## T-Shirts and Coffee

A truck drives from Silverado to Laguna Beach is scheduled with T-Shirts, and drops it off for tomorrow.

This trip is published to Open Transit with the domain name, vehicle capabilities (from DOT License).

A Coffee retail store in Silverado is out of Coffee Beans and would like to purchase some bags from Laguna Beach and needs them delivered. They would pull up all the vehicles dropping off the payload in Laguna for the following day, and via their .shipping domain place a shipping order.

## Process for Coffee Bean Transfer

Coffee Shop with an internal system, I would receive an order for 3 bag of beans with would include:

1. Order, Expected Date of Delivery, Business Domain
2. Payment
   - The payment would be made by sending a single use transaction card Id.
   - Laguna Beach Coffee would process the card, along with a domain verification key, and handle the callback.
3. A receipt would be sent back to Silverado.
4. The order would be pulled as waiting for pick up
5. Laguna would send a shipping order to the carrier
6. The shipper would have Laguna sign the bill of lading based on the shipping order, where Silverado would be notified.
7. On drop-off the Silverado would sign the bill of lading, any conflicts would be noted and sent to a jury system with evidence.
