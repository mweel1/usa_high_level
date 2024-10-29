# Content Filtering and National Security Services

## Summary

In today’s market, the responsibility for filtering illicit content falls on content providers, and finding those providers is largely driven by platforms like Google. This creates challenges for both the government and the market in ensuring safe content for public consumption, including:

- The government having to collaborate with many content providers, each with their own technologies and enforcement policies. Managing a large number of providers is impractical.
- Even if rules are clearly defined, enforcement and monitoring across various content providers is difficult.
- Content providers face significant infrastructure and resource costs to comply with governmental regulations. This hinders startups and limits public access to diverse, innovative content.

The United States Content Filtering System offers a solution by providing services and applications to content providers, enabling them to approve content both while hosting a site and during the content posting process.

Phase one of this initiative will focus on providing infrastructure and services for a music video platform. Once the system is operational for music videos, it will be expanded to cover all types of websites, including social media, video, news, and other content platforms on the American Internet.

## Business Model

This organization would be ran as an organization within the American Internet.

This agency would charge a processing fee per uploaded based on the [content type](./content-type/). The processing fee would be based on the costs of the organization. The goal would be to make this a net-neutral cost for the government.

## Products

### Content Provider Portal

Content Provider Profile Sign Up

When a content provider signs up the following information will be required to register:

- Must provide [gov-id](/government-os-services/id-gov/).
- Provide [debit](/micro-debit/) or credit card.
- A $500.00 dollar setup a fee is required (configurable).
- Select city and state from the city/state table.
- Must define if they are going to be providing explicit content.
- A summary of the content service that they will be providing to the marketplace.
- Enter domain in which the content filtering will be taking place for. This will be verified by e-mail address.
- Register any e-mail addresses that have copyright(s) to be verified while submitting content.

Before the content provider is approved, they must agree to the following terms and conditions:

- All approved content must display the [content splash screen](./content-splah-screen/) for all long form videos. For short form content an indicator must be clickable to view the content [splash screen information](./content-splah-screen/).
- Each domain using the content filtering service must require a [gov-id](/government-os-services//id-gov) if it has age restrictions based on explicit content.
- Must provide filters in-order for content owners to filter out content they are not interested in.

If the user is over 18 and agree to the viewing of explicit content. the system must provide the [content categories for over 18](./content-categories-for-18-over/).

If the user is under 18 it must provide the [content categories for under 18](./content-categories-for-18-under/).

#### Content Provider Content Uploading

Once Content Provider Profile has been approved, they can upload content to the service.

The following requirements are needed:

1. Content Type Details
2. Age Requirement
3. Content Categories
4. AI/Computer Generated (shown for at frame level)

When content is uploaded a transaction fee is applied to the content provider based on the category pricing table.

Using artificial intelligence, content can be rejected if the owners content categories and age requirements does not match what the AI determined. The content owner can request a manual review by staff, or use the recommendations of AI and re-submit. Alternatively, they could also revise their content and re-submit if the assigned categories did not align with their initial intent.

AI will also scan the content for anything that is a national security risk. AI will be initially trained, and further trained as content is discovered to be found as a national security risk. Manufacturing anthrax, Developing bombs, and other illicit activities.

The content will also be checked at the [.copyright office](/copyright/) for copyright violations if the requesting user's e-mail address is not registered.

Content provider profiles can be set to automatic approve, or go to the content filtering portal's Queue Management Module.

### Approved Content

Once content is approved it is watermarked with a provided [content id](./content-id/), which can be decoded by media sites and reference any of the details about the content from content filtering services to meet the [media requirements](./media-requirements/) of displaying content.

Once content is approved the customer is notified with the [approved content information](./approved-content-information).

## Government Agent Portal

The government agent portal provides all the functionality to allow government agents the ability to decline or approve content.

### Queue Management {#queue-management}

The content queue management system is designed to allow government agents to approve content where the content provider has requested review, or the content provider profile is on manual review.

Once content is approved the [approved content information](./approved-content-information) is sent to the content profile owner. If its declined the content provider is notified with the [decline information](./decline-content-information).

## Content API

The content API will allow any media service the ability to send a content-id and receive all media meta-data that is required along with the media to display the correct content splash screens.
