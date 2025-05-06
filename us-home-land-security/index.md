---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "The USA Internet - Homeland Security"
  tagline: "Making the internet safe and secure, standards driven while providing ample opportunities for citizens."
---

# Preface

The world wide internet has become an untrustworthy service for the citizens of the United States. These issues range from:

- Financial fraud
- Misinformation
- Election interference from foreign actors
- Unregulated age restrictions
- Governments using various .org and other domain names for government businesses instead of .gov.
- Non-revokable domains

Additionally, we rely on corporations like Google, who is currently under an anti-trust lawsuit to protect users from content and to make it safe by gate keeping the internet. The original intent of the internet was exploration, productivity and innovation. The vision of the United States internet is to restore this, while making it safe.

# United States Internet

The United States Internet will run on top of the world wide internet.

A new domain system will be developed which would require a country code when resolving DNS called a domain prefix. For example https://usa:whitehouse.gov

If no country code is defined the world wide DNS system is used in the operating systems, otherwise the countries DNS system is used directly.

## Domain Protection

Safety of content will be paramount to the United States Internet where a [content moderation service](./content-moderation/) will be used to moderate content based on national security risks. Any content uploaded or posted must run through the content moderation service.

## DNS Requirements

- The DNS system will track all requests made for the directory service, and provide them as an open API as logs in anonymous format if the domain owner chooses. Otherwise their domain name can be provided.
- All DNS logs with the personal profile URL will be sent to the National Security Agency where jurisdictions can request details with proper approvals.
- No caching of DNS records is allowed on clients when using the usa: prefix.
- No IP addresses can be entered using the prefix domain usa: operating system.
- When registering certain domain names a valid license is required for users in certain cases. For example a .hair-salon would have at least one barber license available to register the business type.
- All domains registered would have to be in a domain zone location. This could be at any jurisdiction. For example, duckduckgo.com might be registered at a federal level, where a coffee shop would be associated locally to a city.
- Any non USA prefix URL's will provide a warning message.
- FUTURE : All operating systems must have a visa selection process to move the operating systems DNS servers to that country with their own onboarding process at the social security office. Until then, we will use the prefix.

## Web Application Requirements

Applications that run on the internet will have requirements to them to make it a more integrated and open internet. The following are the requirements:

- All domains must provide an API interface that communicates with other trading partners where a business license is required.
- Must integrate with govt API's where applicable.
- Can provide oAuth Services for integration into other 3rd party applications that want to integrate into that business.
- Must always check content for safety using the [content moderation service](./content-moderation/).
- All governments must be on a .gov domain name.
- All client applications can only communicate with the domain in which its served from, any integration into 3rd parties must be done on the server side.

## Directory

The directory log of the United States Domain System will be available publicly to allow various services to use the data for whatever purposes they would like. This directory data will be available based on various time frequencies, domain zone identifications, or business license type.

## Domain Zones

All domains that are registered on the United States Internet DNS system can be registered to an [FCC domain zone](./domain-zone/). Domain Zones gives domains context in which they are used. Some example of how application zones might be used are :

- You goto a concert and press the application zone on your phone and can purchase the concert's video & audio.
- You go into a city and press the application zone and get a map of the city, trolly locations, taxi services and much more.

The goal of domain zones is to bridge the gap between the physical world and virtual world with more context aware applications.

All domains that are registered on the United States Domain System will default to a federal application zone.

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

## Starting Up

When first logging into the United States Internet, the user would be required to setup a [personal profile](/grants/personal-profile/).

Foreign users would have to apply for an [express-visa](/evisa/) using a passport. Once approved they would have a [personal profile](/grants/personal-profile/) setup on the United States Internet.

### E-Visa Violations

If users break laws or violates any other laws of the United States Internet there express visa could be revoked for a period of time, or indefinitely.

The following actions by a jury could be taken:

- Not allow the personal profile to be passed through all operating systems in the United States.
- You could de-bank their debit account so they cannot process any transactions

## Domain Meta-Data API

The United States Internet would provide the following to the market place via an API for each domain:

- Logs for the domain
- The business address and license of any domain (if applicable)
- Business license history (if applicable)
- Open and closed jury cases for the businesses
- Cancellation link to cancel services
- Terms of service
- Privacy policy
- List of review sites chosen by the administrator from the .domain-review domains.

- If a domain is registered it can also set if it supports, if you have login credentials to these domains they can show up when clicking media IDs or UPC information.
  - Media IDs
  - UPC Information

## Operating System Requirements

Operating systems that operate on the USA Internet must provide the following during DNS resolution:

- Ensure a [personal profile](/grants/personal-profile/) is setup for the country in which they are connected to before navigating to any domain.
- Enforce age requirements using govt ID in personal profile.
- Each domain type will have a terms of service template that must be met at least once, or when changed.
- Link to cancellation policies for the domain at the DNS server.
- Link to file complaints in domain claims court to resolve dispute with domain owners.
- Provide domain claims court case resolutions that have occurred in the past, or are in-progress.
- Provide a list of review sites chosen by the domain owner from the site review directory.
- Show a special icon when displaying government communications from the personal profile in mail programs.

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

### Government Agencies (.gov)

All government agencies that use a .gov address and have personnel, must provide a QR Code that links to the .gov website and shows their picture and badge number.

### Use Cases

The following are [use cases](./use-cases/index.md) for the American Internet

Homeland Security will also issue government certificates to all governments and provide a social network for government communication.
