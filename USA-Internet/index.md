---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "The USA Internet"
  tagline: "Making the internet safe and secure while providing ample opportunities for citizens."
---

# Preface

The world wide internet has become an untrustworthy service for the citizens of the United States. These issues range from:

- Financial fraud
- Misinformation
- Election interference from foreign actors
- Unregulated age restrictions
- Fraudulent email addresses
- Non-revokable domains

Additionally, we rely on corporations like Google to protect users from content. The original intent of the internet was exploration, productivity and innovation. The vision of the United States internet is to restore this.

# United States Internet

The United States Internet will run on top of the world wide internet.

A new domain system will be developed which would require a country code when resolving DNS called a domain prefix. For example https://usa:whitehouse.gov

If no country code is defined the world wide DNS system is used, otherwise the countries DNS system is used.

## Domain Protection

Safety of content will be paramount to the United States Internet where a [content moderation service](./content-moderation/) will be used to moderate content based on national security risks. Any content uploaded or posted must run through the content moderation service.

## DNS Requirements

- The DNS system will track all requests made for the directory service, and provide them as an open API.
- All DNS logs with the personal profile will be sent to the National Security Agency where jurisdictions can request details with proper approvals.
- No caching of DNS records is allowed on clients.
- No IP addresses can be entered using the prefix domain usa: operating system to navigate to websites unless they are on local networks.
- All IP Addresses that are added to the DNS must be physically present in the United States and not route through any other country.
- When registering certain domain names and valid license is required. For example a .hair-salon would have at least one barber license available to register this business type.

## Web Application Requirements

Applications that run on the internet will have requirements to them to make it a more integrated and open internet. The following are the requirements:

- All applications must provide an API interface that communicates with other trading partners.
- Must integrate with govt API's where applicable.
- Can provide oAuth Services for integration into 3rd party applications to exposed API's.
- Must always check content for safety using the [content moderation service](./content-moderation/).
- All governments must be on a .gov domain name.
- All client applications can only communicate with the domain in which its served from, any integration into 3rd parties must be done on the server side.

## Directory

The directory log of the United States Domain System will be available publicly to allow various services to use the data to present domains to people.

## Domain Zones

All domains that are registered on the United States Internet DNS system can be registered to an [FCC domain zone](./domain-zone/). Domain Zones gives domains context in which they are used. Some example of how application zones might be used are :

- You goto a concert and press the application zone on your phone and can purchase the concert.
- You go into a city and press the application zone and get a map of the city, trolly locations, taxi services and much more.
- You go on-line and select your housing community and select a used product marketplace site that allows the community to buy and sell products from each other.

The goal of domain zones is to bridge the gap between the physical world and virtual world with more context aware applications.

All domains that are registered on the United States Domain System will default to a federal application zone with the FCC as consumer facing if no domain zone is registered.

## Operating System Licensing

Validation of all operating system releases, browsers, and e-mails clients are required to ensure that all services meet applicable laws and regulations during the [OS and application certification process](/os-certificiation-process/).

## Domain Claims Court

The Domain Claims Court is a jury based system where complaints are processed and managed in regards to domain usage.

For example, the domains claims court would the authority to do the following for various domain infractions:

- Warn domain owners.
- Fine domain owners.
- Shut down domains.
- Revoke a citizens ability to operate domains in the future on the United States Internet.

The domain court would find jury selections using the Jury services/[/jury-services].

The domain claims court can be activated by citizens if the site:

- Violates terms of service
- Violates cancellation policy
- Display media content without an media content Id, media server and media categories & filters.
- Selling fraudulent products or services

## Crawling Websites

- All content will be crawled using the [content moderation service](./content-moderation/) where content is trending upwards.
- All content will verify the age restrictions of the website with the DNS system.
- All content will be moderated for National Security

## Starting Up

When first logging into the United States Internet, the user would be required to setup a [personal profile](/grants/personal-profile/).

If the user could not provide a United Stated government issued ID along with verification they would be considered a foreign user where they would have to apply for an [express-visa](/express-visa/) using a passport. Once approved they would have a [personal profile](/grants/personal-profile/) setup on the United States Internet.

### E-Visa Violations

If users break laws or violates any other laws of the United States Internet there express visa could be revoked for a period of time, or indefinitely.

The following actions could be taken if people broke the law:

- Not allow the personal profile to be passed through all operating systems that have been upgraded in the United States.

- You could de-bank their debit account so they cannot process any transactions

## Domain Associated Data

Each operating system would have an application zone section on the phone. This would be initiated by pressing a domain zone button on the device.

The United States Internet would provide the following to the market place via an API for each domain:

- Domain logs
- The native applications, domains in the zone based on the GPS
- The business address and license of any domain
- Open jury cases, and closed cases of the business
- Business license and address information history
- Cancellation link
- Terms of service
- Privacy policy
- List of review sites chosen from the .domain-review domains.

## Operating System Requirements

Operating systems that operate on the USA Internet must provide the following during DNS resolution:

- Ensure a [personal profile](/grants/personal-profile/) is setup for the country in which they are connected to before navigating to any domain.
- Enforce age requirements using [gov.id authorization](/government-os-services/id-gov/) when access domains that requires age verification.
- Each domain type will have a terms of service template that must be met at least once, or when changed.
- Link to cancellation policies for the domain stored at the DNS server.
- Link to file complaints in domain claims court to resolve dispute with domain owners.
- Provide domain claims court case resolutions that have occurred in the past, or are in-progress.
- Provide a list of review sites chosen by the domain owner (at least 3) from the site review directory.
- Show a special icon when displaying government communications from the personal profile.
- Must provide their device type when making DNS requests to receive the correct application IDs to launch applications if available. If native applications are provided they must be provided for all devices on the market.

## System to System Standards

The main goals of the United States Internet would be to ensure that open [system to system standards](/grants/system-to-system-standards/) are created to allow:

- business to business (b2b)
- business to personal-profile (b2pp)
- government to consumer (g2c)
- government to business (g2b)
- government to government (g2g)

### B2B

All products tracked on the b2b network will be done with RFID chips ensuring the supply chain is secure from point to point.
All RFID tags will have a recyclable price that can be redeemed at any location that sells products, if stores cannot use them they can be sold to a business that sells RFID tags.

### Government Agencies

All government agencies must provide a web page when their badge's QR Code is scanned with a phone it will goto the .gov website and verify the person with their picture and employee Id.

### Startup Use Case

To begin to develop these standards we will start with the following use case:

1. Allow the city to search businesses, and get directions to them.
2. Allow an artist to post their music on .artist domain name and submit content to the moderation service and media server.
3. Allow the artist to publish their music for discovery to various networks that they choose to allow preview of content.
4. Allow a restaurant to purchase their music from the artist via a network.
5. Allow users to press the application zone button and purchase music from a live artists that is playing, or provide a tip.
6. Order food from a local restaurant where its delivered via food delivery services.
7. Order food at the restaurant
8. Purchase tickets to a show
9. We will then get into supply chain solutions.
10. All public/govt data is an API so it can be shared with upstream data points.
11. Allow shops to setup wholesale relationships with Sysco, Us Foods, Best Buy, Amazon.com, and Shell Gas.
12. Shop at all local stores, and integrate into major internet providers for retail purchasing.

### Business Requirements

Each employee can be assigned to the storage account(s) of the business with their personal profile URL.

A business URL and personal Profile URL can be provided from the operating system.

Business URL’s can be assigned in an operating system as part of the permissions along with a personal profile when setting up.

Anytime a file is prepared to save on a storage account (business or personal) its confirmed from the personal profile via the socket connection to the profile.

### Transportation

All local transportation will have a .transportation domain name. They will set a rate for their service per mile, terms along with what cargo they can transport.

A transportation hub will be provided to allow people to request and pay for delivery.

All deliveries must provide a QR code for complaints to the transportation domain when dropping off products.

### Special Domain Requirements

All .donation domains will have to:

- Provide a list of donation fund names.
- Provide a social feed of what they do with the money, by fund name.
- Provide the amount of money they have received by fund name.
- Must have a .fundraiser license to run .donation domain names.
