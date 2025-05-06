# Content Moderation

## Summary

In today’s market, the responsibility for filtering illicit content falls on content providers. This creates challenges for both the government and the market in ensuring safe content for public consumption, including:

- The government having to collaborate with many content providers, each with their own technologies and enforcement policies. Managing a large number of providers is impractical.
- Even if rules are clearly defined, enforcement and monitoring across various content providers is difficult.
- Content providers face significant infrastructure and resource costs to comply with governmental regulations. This hinders startups and limits public access to diverse, innovative content.

The United States Content Filtering System offers a solution by providing services and applications to content providers, enabling them to moderate and ensure content is the safe for the public.

Phase one of this initiative will focus on providing infrastructure and services for a jukebox service. Once the system is operational for jukebox services, it will be expanded to cover all types of websites, including social media, video, news, and other content platforms on the United States Internet.

## Business Model

This organization would be ran as a grant with government enforcement capabilities to moderate content on the USA Internet.

This agency would charge a processing fee per uploaded based on the [content type](./content-type/). The processing fee would be based on the costs of the organization. The goal would be to make this a net-neutral cost for the government.

## Products

### Content Provider Portal

Content Provider Profile Sign Up

When a content provider signs up the following information will be required to register:

- Must provide [gov-id](/government-os-services/id-gov/).
- Provide [E-Check](/e-check/) or credit card.
- A $500.00 dollar setup a fee is required (configurable).
- Must define if they are going to be providing explicit content.
- A summary of the content service that they will be providing to the marketplace.
- Provide the domain in which the content will be served.
- Before the content provider is approved, they must agree to the following terms and conditions:

- All approved content must display the [content splash screen](./content-splah-screen/) for all long form videos. For short form content an indicator must be clickable to view the content [splash screen information](./content-splah-screen/).
- Each domain using the content filtering service must require a [gov-id](/government-os-services//id-gov) if it has age restrictions based on explicit content.
- Must provide filters in-order for content owners to filter out content they are not interested in based on content filtering categories.

If the user is over 18 and agree to the viewing of explicit content. the system must provide the [content categories for over 18](./content-categories-for-18-over/).

If the user is under 18 it must provide the [content categories for under 18](./content-categories-for-18-under/).

### Attach Media Server

Once a profile is setup the user can oAuth to a media server where media servers are attached to their account.

### Attach Live Media Servers

Once a profile is setup the user can oAuth to attach to live media servers where they are attached to the account for live streaming.

#### Media Content Profile

Once Content Provider Profile has been approved, and the media servers are attached they can upload content to the service. Where a media content profile is created.

The following requirements are needed when uploading content:

1. [Content Type Details](/USA-Internet/content-moderation/content-type/index.md)
2. Age Requirement
3. Early Childhood (0-5)
4. Kids (6-12)
5. Teens (13-18)
6. [Content Categories 18 and Over](/USA-Internet/content-moderation/content-categories-for-18-over/)
7. [Content Categories 18 and Under](/USA-Internet/content-moderation/content-categories-for-18-under/index.md)
8. AI/Computer Generated
9. Media Attribute - Influencer/Journalist
10. Humor Tag
11. Media Server(s) to store on

When content is uploaded a transaction fee is applied to the content provider based on the category pricing table.

Using artificial intelligence, content can be rejected if the owners content categories and age requirements does not match what the AI determined. The content owner can request a manual review by staff, or use the recommendations of AI and re-submit. Alternatively, they could also revise their content and re-submit if the assigned categories did not align with their initial intent.

AI will also scan the content for anything that is a national security risk. AI will be initially trained, and further trained as content is discovered to be found as a national security risk. For example: Manufacturing anthrax, developing bombs, and other illicit activities.

The content will also be checked at the [.copyright office](/copyright/) for copyright violations if the requesting user's personal profile is not registered as a copyright owner.

Content will be required to do noise level regulation.

Content provider profiles can be set to automatic approve if they have a good reputation, or go to the content filtering portal's Queue Management Module.

### Approved Content

Once content is approved it is watermarked with the generated [content id](./content-id), which can be decoded by media sites and reference any of the details about the content from content filtering services to meet the [media requirements](./media-requirements/) of displaying content.

Once content is approved the customer is notified with the [approved content information](./approved-content-information), and the content is sent to their [media server(s)](./media-servers/).

Anyone hosting content or distributing content without permission will be tried in [jury service](/jury-service/) where they can loose their ability to operate an United States Internet domain.

Copyright will be checked on the transfer of content between media servers, unless tested performance with AI can show otherwise.

There is a corner case where at rest content might be come into copyright play, the content would be to great to scan every day and I believe the best that could be done is to scan it on transfer, or when the content is requested in which it has been at rest for a long period of time.

### Denied Content

Any content that is denied will be logged with its reason. Anything to be seen as a national security risk will be sent to the FBI for review where they can log-in and view the profile of the uploader and the content in question.

## Government Agent Portal

The government agent portal provides all the functionality to allow government agents the ability to decline or approve content.

### Queue Management {#queue-management}

The content queue management system is designed to allow government agents to approve content where the content provider has requested review, or the content provider profile is on manual review.

Once content is approved the [approved content information](./approved-content-information) is sent to the content profile owner. If its declined the content provider is notified with the [decline information](./decline-content-information).

## Checksum Check

A checksum service will randomly check files on media servers to ensure the file hasn't been tampered with and disable if it has and alert the content provider and content filtering service agent. Any media servers found to be changing content that was not originally created by the content moderation service will be prosecuted in jury court.

## Content API

## Meta Data

The content API will allow any media service the ability to send a content-id and receive all media meta-data that is required along with the media to display the correct content splash screens.

## Content Complaints

All content can must have a complaint capability when showing it to the market place which will be sent to the content complaint API. If the agency finds the content to be in violation of its initial categories it can send a delete request to the [media server(s)](./media-servers/) in which its hosted on.

# Live Content

If a content provider is going to provide a live content stream they must meet all the requirements that static content does. However, instead of setting a media server to upload content to they will define a media streaming provider where they will stream to.

All content streamed through live media server must go through the content filtering process for each frame.

A delay will be provided in the content to allow it to be monitored based on performance metrics.

Live media servers will event the personal profile of each stream received, where a list of content and the amount views will be shown.

Agents must be able to go into content and view it and have a kill switch.

Any content that is found to not have meet the initial media content profile will be reviewed where violations or the lost of account can be levied against the account.

# Moving Content

The content moderation service will allow you to copy content from one server to another if it's needed.

# Streaming Content

When content is streamed it must be streamed from the domain in which the profiles are setup for. This is done by a handshaking process that includes the following:

1. The content client requests from the content provider the media Id.
2. The media server provides a signed URL.
3. The signed URL is use as a one use URL and it's provided back to the client.

# Content Providers

Content providers must enforce the ability for all content category selections to be selectable and filterable. This includes both content and ads.

These can be defined in your personal profile and are used by default.

All content providers must also provide a section where they can be overridden for people over 18.

Children's are defined and cannot be changed.

# Ad Definitions

Some category ad definitions will be marked on advertisements are:

- Unhealthy Foods
- Pharmaceutical
- Violence
- Alcohol
- Drugs
- Political Campaigns
- Financial Services
  .. and whatever other categories the AI is capable of recognizing.
