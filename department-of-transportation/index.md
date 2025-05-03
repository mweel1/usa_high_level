# Overview

The department of transportation would manage all the various aspects that are related to vehicle transportation, along with the grant management for local jurisdictions.

They would own the data assets for:

1. Map data of all the roadways
2. Digital signage for all roadways
3. Specifications for control systems for API's
4. Specifications for operating systems for vehicles
5. Laws around which vehicles can travel where.

They would provide grants to state and local organizations to manage:

1. Physical Street signs in local and state jurisdictions, and update digital signage on the DOT data store site.
2. Grants to handle road construction and maintenance.
3. Allow local spheres of influence to manage the street light control systems based on the API's.
4. Manage their portion of mapping data which would include:
   - Neighborhood Streets

## Vehicle Licensing

All vehicles must be licensed from the manufacturer with a unique identifier.

A website to enter a unique ID will be available to bring up all the details of the vehicle, including:

1. The business name, and contact information.
2. Type of vehicle
3. Licenses assigned to vehicle
4. Payload Attributes for querying the the market place

## Jury System

Provide a jury system for conflicts between shippers, transportation and receivers.

- Allow trading partners to submit claims.
- Allow a jury to issue infractions
- Allow a jury to revoke licenses and domain names

## Container Point System

Packaging is a huge waste in this country. A grant will be deployed in all cities to manage the process of using re-usable containers. This could be one or many container depots.

Anytime a container is left at a location, the location will receive a debit on their points based on the size of the container.

Anytime a container leaves a location a point will be credited based on the size of the container.

If a location has to many containers, a pick up request can be made where the containers are moved to a container depot. The grant money includes people to pickup empty containers.

Containers goto a container depot where businesses can pick them up and have their points deducted.

All shipping applications must support the capability as part fo the bill of lading signature process.

## .shipping Domain Names

.shipping domain names are licensed vehicle and operators.

- Public

- Provide DOT license ID
- Provide CDL License ID
- Provide MC License ID
- Accept Shipping Orders
- Publish Pricing Per Mile

Trading Partners - Provide GPS location information - Emit events when near destination - Emit events when left source - Receive Bill of Lading from shipper - Complete Bill of Lading on drop-off

Open Transit System - Publish Shipment Schedules

## Open Transit System

Open Transit System would manage a platform to ensure cargo trucks have the ability to find pickup and delivery locations in the most optimal way to reduce wasted cargo trips in vehicles.

The service would be an opt-in and will be managed under a grant under the DOT.

### Business Requirements

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
