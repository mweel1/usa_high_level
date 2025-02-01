# Content Moderation

## Summary

In today’s market, the responsibility for filtering illicit content falls on content providers, and searching for those services is largely driven by platforms like Google. This creates challenges for both the government and the market in ensuring safe content for public consumption, including:

- The government having to collaborate with many content providers, each with their own technologies and enforcement policies. Managing a large number of providers is impractical.
- Even if rules are clearly defined, enforcement and monitoring across various content providers is difficult.
- Content providers face significant infrastructure and resource costs to comply with governmental regulations. This hinders startups and limits public access to diverse, innovative content.

The United States Content Filtering System offers a solution by providing services and applications to content providers, enabling them to approve content both while hosting a site and during the content posting process.

Phase one of this initiative will focus on providing infrastructure and services for a music video platform. Once the system is operational for music videos, it will be expanded to cover all types of websites, including social media, video, news, and other content platforms on the United States Internet.

## Business Model

This organization would be ran as an organization within the United States Internet.

This agency would charge a processing fee per uploaded based on the [content type](./content-type/). The processing fee would be based on the costs of the organization. The goal would be to make this a net-neutral cost for the government.

## Products

### Content Provider Portal

Content Provider Profile Sign Up

When a content provider signs up the following information will be required to register:

- Must provide [gov-id](/government-os-services/id-gov/).
- Provide [debit](/micro-debit/) or credit card.
- A $500.00 dollar setup a fee is required (configurable).
- Must define if they are going to be providing explicit content.
- A summary of the content service that they will be providing to the marketplace.
- Enter domain in which the content filtering will be taking place for. This will be verified by oAuth to the United States DNS System for verification.
- Register any personal profiles that have copyright(s) to be verified while submitting content.

Before the content provider is approved, they must agree to the following terms and conditions:

- All approved content must display the [content splash screen](./content-splah-screen/) for all long form videos. For short form content an indicator must be clickable to view the content [splash screen information](./content-splah-screen/).
- Each domain using the content filtering service must require a [gov-id](/government-os-services//id-gov) if it has age restrictions based on explicit content.
- Must provide filters in-order for content owners to filter out content they are not interested in.

If the user is over 18 and agree to the viewing of explicit content. the system must provide the [content categories for over 18](./content-categories-for-18-over/).

If the user is under 18 it must provide the [content categories for under 18](./content-categories-for-18-under/).

### Attach Media Server

Once a profile is setup the user can oAuth to a media server where media servers are attached to their account.

### Attach Live Media Servers

Once a profile is setup the user can oAuth to attach to live media servers where they are attached to the account.

#### Media Content Profile

Once Content Provider Profile has been approved, and the media servers are attached they can upload content to the service. Where a media content profile is created.

The following requirements are needed when uploading content:

1. Content Type Details
2. Age Requirement
3. Content Categories
4. AI/Computer Generated (shown for at frame level)
5. Media Server(s) to store on
6. Public or Secure Content

When content is uploaded a transaction fee is applied to the content provider based on the category pricing table.

Using artificial intelligence, content can be rejected if the owners content categories and age requirements does not match what the AI determined. The content owner can request a manual review by staff, or use the recommendations of AI and re-submit. Alternatively, they could also revise their content and re-submit if the assigned categories did not align with their initial intent.

AI will also scan the content for anything that is a national security risk. AI will be initially trained, and further trained as content is discovered to be found as a national security risk. Manufacturing anthrax, Developing bombs, and other illicit activities.

The content will also be checked at the [.copyright office](/copyright/) for copyright violations if the requesting user's e-mail address is not registered.

Content provider profiles can be set to automatic approve, or go to the content filtering portal's Queue Management Module.

### Approved Content

Once content is approved it is watermarked with a provided [content id](./content-id/), which can be decoded by media sites and reference any of the details about the content from content filtering services to meet the [media requirements](./media-requirements/) of displaying content.

Once content is approved the customer is notified with the [approved content information](./approved-content-information), and the content is sent to their [media server(s)](./media-servers/).

Anyone hosting content or distributing content without permission will be tried in [jury service](/jury-service/) where they can loose their ability to operate an United States Internet domain.

Copyright will be checked on the transfer of content between media servers, unless tested performance with AI can show otherwise.

### Denied Content

Any content that is denied will be logged with its reason. Anything to be seen as a national security risk will be sent to the FBI for review where they can log-in and view the profile of the uploader and the content in question.

## Government Agent Portal

The government agent portal provides all the functionality to allow government agents the ability to decline or approve content.

### Queue Management {#queue-management}

The content queue management system is designed to allow government agents to approve content where the content provider has requested review, or the content provider profile is on manual review.

Once content is approved the [approved content information](./approved-content-information) is sent to the content profile owner. If its declined the content provider is notified with the [decline information](./decline-content-information).

## Checksum Check

A checksum service will randomly check files on media servers to ensure the file hasn't been tampered with and disable if it has and alert the content provider and content filtering service agent.

## Content API

## Meta Data

The content API will allow any media service the ability to send a content-id and receive all media meta-data that is required along with the media to display the correct content splash screens.

## Content Complaints

All content can must have a complaint capability when showing it to the market place which will be sent to the content complaint API. If the agency finds the content to be in violation of its initial categories it can send a delete request to the [media server(s)](./media-servers/) in which its hosted on.

# Live Content

If a content provider is going to provide a live content stream they must meet all the requirements that static content does. However, instead of setting a media server to upload content to they will define a media streaming provider where they will stream to.

All content streamed through live media server must go through the content filtering process for each frame.

A one minute delay will be provided in the content to allow it to be monitored.

Live media servers will event the personal profile of each stream received, where a list of content and the amount views will be shown.

Agents must be able to go into content and view it and have a kill switch.

Any content that is found to not have meet the initial media content profile will be reviewed where violations or the lost of account can be levied against the account.
