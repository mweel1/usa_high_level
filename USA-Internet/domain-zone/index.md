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

## Setup

### Application Zones

Application deployment will be provided by the FCC as it relates to allowing various businesses and governments to use the zoning application, this will be integrated with a [business licensing system](./business-license/index-md).

### Federal

The FCC will approve federal organizations spheres of influence based on their .gov e-mail address and government documents that must be uploaded.

State logins will be provided on proof of their .gov e-mail address and state documents.

### States

The state will have a login to set and approve cities spheres of influence based on their documentation and .gov e-mail address.

They will also provide logins for cities to manage their domain zones.

### Cities

Cities will approve business zones, where a business permit must be uploaded and occupancy documents. Federal business license requirements will be enforced with local amendments based on the business type.

## Business Zones

## Signage

Anytime an application zone is defined the business must provide a QR code before entry where:

- A list of operating system restrictions are provided.
- A directory of applications in that zone. A bit will be set on the application if it should be shown from a QR Code or only by pressing the domain zone button on your device.

#### Emergency Zones

Application's are approved and categorized by FEMA. When an emergency operation is present, a geo-fence is placed around the zone and the applications are deployed to the citizens. For example a disaster response team could highlight a location during a fire and deploy zone applications. All phone companies must provide a satellite connectivity for these emergency zones over a slow-ip connection on handset companies so there can be communication to the operation centers.

The [emergency notification](/ecs-gov/) system will be used to notify the emergency zone has been deployed and launch it the applications based on FEMA's application group types.

All applications will be developed by FEMA.

Emergency Zone application can mark applications as leave behind which will remain sticky until deleted by the user, for example if they evacuate to a hotel and need to file an insurance claim.

All operating systems must use the usa:// prefix when resolving DNS names for security purposes.

##### Direct User Application Zones

Any manager of application zones can add specific profile URLs (or users) which would allow specific applications to launch when that user is specifically added to that zone. One example a specific waiter at a restaurant. There will be role capabilities with this also which will allow you to assign many users to a role also.

### Internal Zones

It might feel natural to want internal zones of a business. However, its a risk if there are two many micro-zones, as people would be wondering around trying to find applications in public places.

In this case the recommended way to do this will be the use of numbers. A couple of example of this is:

- Press a button to pay for parking and then entering a lot #.
- Press a button to pay for a meter, and entering a meter #.
- Pressing a button in a hotel room and retrieving the hotel room via a personal profile receipt.

At least to start, I could be proven otherwise once the technology is released but that my feeling to start for safety measures.

## Network Zone

Network zones allow applications to be launched based on SSID of the network.

Toyota setups a new SSID in a car and network.

Registers it with the FCC, and assigns it to an application group that they manage.

When the operating system receives the SSID prefixed by NZ: it will request the application by the FCC.

Operating system triggers can also be sent via SSID handshakes for example:

- Restrict age appropriate content (i.e. don't allow people to play illicit content on an airplane)

## Virtual Zones

Cities can have virtual zones which would allow mobile business to operate. For example a Surf School that is all contained in a truck would assign their business to a virtual zone.

## Wi-Fi Zones

Wi-Fi Zones would applications to be available when a certain SSID was joined.

You can reserve and SSID and the applications at the FCC. All wireless routers must validate their SSID name with the FCC.

## Taxi Pickup

Cities will define domain zones where it's safe to pick up passengers.

## Department of Transportation

Anyone with a transportation authority can upload proof of their authority, along with their street zone.

With the street zone they can:

- Set the speed of vehicles
- Create warning messages
- No Drive Zone

## Mobile Handset Domain Zone Triggers

Application Zones can trigger control commands in operating systems at certain times that might:

1. Turn off the ability to use a camera (for example at a concert)
2. Turn off a ring sound (for example in a movie theater), and switch all phones to vibrate.
3. Restrict age appropriate content

## Why FCC?

Its important this is an FCC asset due to the fact if operating systems tried to deliver this type of solution to the users there would many different "domain zones" for citizens which would make it very confusing for users. It's important users get a consistent experience no matter what operating system they are on from vehicle operating systems, to mobile handsets.

## Risks

One of the big risks with this technology is that people will be wondering around always pressing a button to see what application service is available. The [public service announcement system](/public-service-announcements/) will broadcast the best way to use these applications easily and safely. Each Application Zone will have a limit of 15 applications.

## Project Plan

Our first version of the application will be done deployed federally at national parks in partnership with Intel's new phone.
