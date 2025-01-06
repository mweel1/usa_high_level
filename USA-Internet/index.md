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

A new domain system will be developed which would require a country code when resolving DNS. For example usa:whitehouse.gov

If no country code is defined the world wide DNS system is used, otherwise the countries DNS system is used.

## Domain Protection

Safety of content will be paramount to the American Internet where a [content moderation service](./content-moderation/) will be used to moderate content.

## DNS Requirements

- The DNS will track all requests made for the directory service.
- No caching of DNS records is allowed on clients.
- No IP addresses can be entered into operating system to navigate to websites unless they are on local networks.
- All IP Addresses that are added to the DNS must be physically present in the United States and not route through any country.
- Domain names can be idle for 20 days or they must be returned the naming system. The naming system will be on a first come first serve basis.

## Web Application Requirements

- Must provide an interface that interacts with the API.
- Must provide a customer facing API.
- Must integrate with govt API's where applicable.
- Must provide oAuth Services for integration into 3rd party applications to use the API.
- Anyone selling products must provide a supplier list by domain, where it will married up with business licenses to show the length of travel. A retail sustainable score will be derived from this.
- Must always check content for safety using the [content moderation service](./content-moderation/), a list of domains hit counts, and content protection agency queries will be available to determine that all content providers are using the service.
- Must provide a business name and address of the domain for directory services.
- Can optionally provide an application zone.

## Directory

The directory of the American Domain System would be publicly available along with query counts for the domain with various filter types (today, last year, etc.). Any domain name registered can choose not to be part of the public directory if they so choose.

## Domain Zones

All domains that are registered on the American Internet DNS system can be registered to an [FCC domain zone](/domain-zone/). Application Zones gives domains context in which they are used. Some example of how application zones might be used are :

- You goto a concert and press the application zone on your phone and can purchase the concert.
- You go into a city and press the application zone and get a map of the city, trolly locations, taxi services and much more.
- You go on-line and select your housing community and select a used product marketplace site that allows the community to buy and sell products from each other.

The goal of application zones is to bridge the gap between the physical world and virtual world with more context aware sites.

All domains that are registered on the American Domain System will default to a federal application zone with the FCC as consumer facing.

If the user would like to make their domain specific to an domain zones they must register with the [FCC](/domain-zone/) to make those definitions. FCC domain zone will oAuth to the DNS system and can only add domain zones they are authorized to use. If not domain zone would be set federally and only come up in a directory search.

## Operating System Licensing

Validation of all operating system releases, browsers, and e-mails clients are required to ensure that all services meet applicable laws and regulations during the [OS and application certification process](/os-certificiation-process/).

## Domain Claims Court

The Domain Claims Court is a jury based system where complaints are processed and managed.

For example, the domains claims court would the authority to do the following:

- Warn domain owners.
- Fine domain owners.
- Shut down domains.
- Revoke a government ID holder's ability to operate domains in the future on the United States internet.

The domain court would find jury selections using the Jury services/[/jury-services].

The domain claims court can be activated by citizens if the site:

- Violates terms of service
- Violates cancellation policy
- Display media content without an media content Id and media server.

## Crawling Websites

- All content will be crawled using the [content moderation service](./content-moderation/).
- All content will verify the age restrictions of the website with the DNS system.
- All content will be moderated for national security

## Starting Up

When first logging into the American Internet, the user would be required to setup a [personal profile](/grants/personal-profile/).

If the user could not provide a United Stated government issued ID along with verification they would be considered a foreign user where they would have to apply for an [express-visa](/express-visa/) using a passport. Once approved they would have a [personal profile](/grants/personal-profile/) setup on the America Internet. If users break laws or violates any other laws of the American Internet there express visa could be revoked for a period of time, or indefinitely.

## Start Page

The start page would provide the following domain directory services. This would also be available as an API for operating system companies.

- Drop down that would include any Application Zone [Any, Federal, State, County, City, Business Location].
- Domain Type (Music Networks, TV Networks, Movie Networks, Artist, etc..)
- Domain Type tags based on the domain type. For example I would might want to show all music networks, or music artists based on electronic music genre.
- Search Field which will search domain tags, description, and keywords
- Customer Facing, or Internal Zone Specific.
- Device Type, Vehicle OS, personal computing device, etc.

Once the search is execute the results will provide the following from the DNS information:

- Logo
- Name
- Description
- Domain Type
- Domain Tags
- Link to Website

## Operating System Requirements

Operating systems that operate on the USA Internet must provide the following during DNS resolution:

- Ensure a [personal profile](/grants/personal-profile/) is setup for the country in which they are connected to before navigating to any domain.
- Enforce age requirements using [gov.id authorization](/government-os-services/id-gov/) when access domains that requires age verification.
- Each domain type will have a terms of service template that must be met at least once, or when changed.
- Link to cancellation policies for the domain stored at the DNS server.
- Link to file complaints in domain claims court to resolve dispute with domain owners.
- Provide domain claims court case resolutions that have occurred in the past.
- Provide a list of review sites chosen by the domain owner (at least 3) from the site review directory.
- Show a special icon when a domain or e-mail is from a .gov agency in e-mail clients and browsers.
- Must provide their device type when making DNS requests to receive the correct application IDs to launch applications.

## System to System Standards

The main goals of the American Internet would be to ensure that open [system to system standards](/grants/system-to-system-standards/) are created to allow:

- business to business (b2b)
- business to consumer (b2c)
- government to consumer (g2c)
- government to business (g2b)
- government to government (g2g)

To begin to develop these standards we will start with the following use case:

1. Allow an artist to post their music on .artist domain name and submit content to the moderation service and media server.
2. Allow the artist to publish their music for discovery to various networks that they choose to allow preview of content.
3. Allow a hotel to purchase their music from the artist via a network.
4. Allow users to press the application zone button and purchase music from a live artists that is playing, or provide a tip.
5. Order food from a local restaurant where its delivered via food delivery services.
6. Order food at the restaurant
7. Purchase tickets to a show
