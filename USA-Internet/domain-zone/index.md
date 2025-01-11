# FCC Domain Zone Overview

Domain zones are designed to allow a user to press a button on an operating system where applications that are associated to a geo-fence will be shown on the device to launch.

Currently the world wide internet domain system is horizontal, Domain Zones makes the web vertical.

These are an alternative to QR Codes which can create a security risk for business and governments.

For example:

- Sitting in a restaurant and ordering food.
- Sitting in a restaurant and get a map of the location to find a restroom.
- Watching a musician playing music and purchase music from them.
- Watching a musician and providing a tip.
- Hiking in a national park and receiving all the services around the national park (maps, call park rangers, etc.)
- Pay for parking, where an application can get your license plate from a [personal profile](/grants/personal-profile/) and purchase a parking pass.
- Donating money while watching a play.

The opportunities are endless and this will usher in many new opportunities for citzens, operating system providers, governments and businesses.

## Setup

### Application Zones

#### Approval

Application approval will happen at the FCC as it relates to allowing various businesses and governments to use different applications.

#### Government Spheres (Cities, Counties, States, Federal)

Anyone with a .gov e-mail address can register to manage their jurisdictions sites in their government spheres. FCC administrators will review agency logins and develop the geo-fence and assigns administrators users to it where other users from that domain can be invited.

All geo-fences will be designed by their parent. For example, FCC will manage all federal jurisdictions, the federal jurisdiction will manage all the states, the states will manage all the counties, the counties will manage all the cities. The cities will manage all their businesses.

#### Business Application Zones

All municipalities that register permits must provide login to allow business owners to manage their domain zones. A link to the business license must be associated with the application zone.

#### Emergency Zones

Emergency Zones allow various jurisdictions to deploy preset applications stores to a sphere that is outlined. For example a disaster response team could highlight a location during a fire and deploy zone applications. All phone companies must provide a satellite connectivity for these emergency zones over a slow-ip connection.

The [emergency notification](/ecs-gov/) system will be used to notify the emergency zone has been deployed and launch it.

Emergency zones can provide a context key at the zone level or application level to provide different context for the API service in which the application can operate. For example, the command and control could be downtown LA even though the application zone was deployed to 4 different places. The domain API in which the applications talk to should always be a single domain, and then proxy with to services based on the context key. The context key can be any value.

##### Direct User Application Zones

Managers of Application Zones can add specific profile URLs (or users) which would allow specific applications to launch when that user is specifically added to that zone. One example might be a waiter at a restaurant. There will be role capabilities with this also.

### Internal Zones

It might feel natural to want internal zones of a business. However, its a risk if there are two many micro-zones, as people would be wondering around trying to find applications in public places.

In this case the recommended way to do this will be the use of numbers. A couple of example of this is:

- Press a button to pay for parking and then entering a lot #.
- Press a button to pay for a meter, and entering a meter #.
- Pressing a button in a hotel room and retrieving the hotel room via a personal profile receipt.

## Approvals

All applications associated to an application zone must be approved by their jurisdiction. There will be categories for each business type, and when applications are out of context of those normal categories they will be scrutinized more.

## Network Zone

There will also be opportunities to register application zones based on a wireless network that is joined. For example:

- Launch an app store in a car vehicle to allow people to play music in the vehicle.
- Launch a route map while riding a bus.

Specific SSID can be registered with in jurisdictions where the operating systems must provide the applications in a network zone when the application zone button is selected.

A new specification must be created to allow multiple wireless network access at the same to enable people to have connectivity to multiple wireless networks simultaionsuly.

## Operating System Control Events

Application Zones can trigger control commands in operating systems at certain times that might:

1. Turn off the ability to use a camera.
2. Redirect the contents of recordings to an API end point while in that zone.
3. Turn off a ring sound (for example in a movie theater), and switch all phones to vibrate.

## Signage

Anytime an application zone is defined the business must provide a QR code before entry where:

- A list of operating system restrictions are provided.
- A directory of applications in that zone your about to enter via QR Code along with the correct operations of using applications in the zone.
- This operation of application would also be shown once to the user the first time they launched the application zone applications (if they never scanned the QR Code and saw it previously).

## Why FCC?

Its important this is an FCC asset due to the fact if operating systems tried to deliver this type of solution to the users there would many different "application zones" for citizens which would make it very confusing for users. It's important users get a consistent experience no matter what operating system they are on from vehicle operating systems, to mobile handsets.

## Risks

One of the big risks with this technology is that people will be wondering around always pressing a button to see what application service is available. The FCC will provide [public service announcements](/public-service-announcements/) to the public on the best way to use these applications easily and safely. Each Application Zone will have a limit of 15 applications.

View a [demo](./demo) of a few application zones.
