# FCC Domain Zone Overview

Domain zones are designed to allow a user to press a button, or select a domain zone application on an operating system where applications that are associated to a geo-fence will be shown on the device to launch.

Currently the world wide internet domain system is horizontal, Domain zones makes the web vertical.

These are an alternative to QR Codes which can create a security risk for business and governments as they can be changed based on their original intent.

For example:

- Sitting in a restaurant and ordering food.
- Sitting in a restaurant and get a map of the location to find a restroom.
- Watching a musician playing music and purchase music from them.
- Watching a musician and providing a tip.
- Hiking in a national park and receiving all the services around the national park (maps, call park rangers, etc.)
- Pay for parking, where an application can get your license plate from a [personal profile](/grants/personal-profile/) and purchase a parking pass.
- Donating money while watching a play.

The opportunities are endless and this will usher in many new opportunities for citzens, operating system providers, governments and businesses. This combined with business to business API's at local levels will usher in an opportunity for technology markets we haven't seen since the internet.

## Why FCC?

Its important this is an FCC asset due to the fact if operating systems tried to deliver this type of solution to the users there would many different "domain zones" for citizens which would make it very confusing for users. It's important users get a consistent experience no matter what operating system they are on from vehicle operating systems to mobile handsets.

## Setup

### Application Providers

Any application provider can upload applications that interface with the [US Department of Commerce](/civil-agencies/us-dept-of-commerce/) business processes, or city processes.

The applications can be uploaded individually or as groups. For example, you could purchase a group of applications that belong to a coffee shop business process.

### Businesses

In order to associate a group of applications, or an application you must have a valid business license from [Business Administration](/civil-agencies/us-business-administration/) in your jurisdiction that defines the commerce department business process.

### Civil Organizations / Federal, Cities

In-order to add applications to a city, you must have a [General Administration](/civil-agencies/us-general-service-administration) certificate issued by Homeland Security.

### Civil Organizations / Parks

In-order to add applications to a park, you must have a [US National Park](/civil-agencies/us-national-parks/) certificate issued by Homeland Security.

### Homes

In-order to add applications to a [house](./homes/) you need to have a rental agreement, or mortgage issued by the [US Department of Housing and Urban Development](/civil-agencies/us-department-of-housing-urban-development/).

### Device Restriction Zones

Have you ever been to a concert and wished people could not take videos while watching? Device restriction zones will send commands to the phone when you enter that zone that will notify the user that certain functions of their phone have been disabled.

Device Restriction Zones include:

1. Turn off the ability to use a camera (for example at a concert)
2. Turn off a ring sound (for example in a movie theater), and switch all phones to vibrate.
3. Restrict age appropriate content
4. Turn off a vehicle if it drives on sidewalks, or other prohibited areas.
5. Ensure no illicit content is played in public places.

## Notification / Warnings

Whenever a ticket or service is provided within a domain zone, all restrictions for that zone must be made visible. The business operating in the domain zone must always display a list of these restrictions—either on the device or on signage—as part of the business permit or general administration requirements.

## Emergency Zones (FEMA)

Application's are approved and categorized by FEMA. When an emergency operation is present, a geo-fence is placed around the zone and the applications are deployed to the citizens.

For example a disaster response team could highlight a location during a fire and deploy their "fire" based zone applications. All phone companies must provide a satellite connectivity for these emergency zones over a slow-ip connection on handset companies so there can be communication to the operation centers.

The [FEMA emergency notification](/civil-agencies/us-federal-emergency-management-agency/emergency-communication-system/) system will be used to notify the emergency zone has been deployed and launch it the applications based on FEMA's application group types.

All applications will be developed by FEMA.

Emergency Zone application can mark applications as leave behind which will remain sticky until deleted by the user, for example if they evacuate to a hotel and need to file an insurance claims to ensure people get paid.

All operating systems must use the usa:// prefix when resolving DNS names for security purposes.

## Direct User Application Zones

Any manager of application zones can add specific profile URLs (or users) which would allow specific applications to launch when that user is specifically added to that zone. This is very powerful as it gives different functions for different roles. For example, a customer might get a juke box application to play music, where an employee with the role might get the ability to manage the jukebox.

A validation end-point must be provided to a business to ensure the role is active. For example, the role is only operational during their hours of work.

## Zones within Zones

It might feel natural to want internal zones of a business zone. However, its a risk if there are two many zones within zones, as people would be wondering around trying to find zones in public places.

In this case the recommended way to do this will be the use of numbers. A couple of example of this is:

- Press a button to pay for parking and then entering a lot #.
- Press a button to pay for a meter, and entering a meter #.
- Pressing a button in a hotel room and retrieving the hotel room via a personal profile receipt.

At least to start, I could be proven otherwise once the technology is released but thats my feeling at this time.

## Network Zone

Network zones allow applications to be launched based on SSID of the network.

Toyota setups a new SSID in a car and network.

Registers it with the FCC, and assigns it to an application group that they manage.

When the operating system receives the SSID prefixed by NZ: it will request the application by the FCC.

Device restrictions can also be sent via SSID handshakes for example:

- Restrict age appropriate content (i.e. don't allow people to play illicit content on an airplane)

## Virtual Zones

Cities can have virtual zones which would allow mobile business to operate. For example a Surf School that is all contained in a truck would assign their business to a virtual zone.

## Taxing

Implementing this system involves significant technical overhead, but it is worth considering.

The General Administration could provide a standardized daily tax rate, which would be published at a city level. When individuals enter a [General Administration](/civil-agencies/us-general-service-administration/) domain zone (such as a city), a tax bill could be issued to their personal profile.

If a citizen has an unpaid tax bill from a previous entry and re-enters a domain zone, their location could be shared by the FBI with local police for potential enforcement action, such as a traffic stop.

Daily tax billing would apply to individuals without a registered rental agreement or mortgage linked to their personal profile.

Adjustments to tax rates could be made based on whether individuals have verified family or friends residing within the domain zone, or if they are business owners with a registered presence in that area.

Enabling this system would require the General Administration to establish the appropriate legal framework and authority via legislation of their district.

## Risks

One of the big risks with this technology is that people will be wondering around always pressing a button to see what application service is available. The [public service announcement system](/public-service-announcements/) will broadcast the best way to use these applications easily and safely. Each Application Zone will have a limit of 7 applications to start.
