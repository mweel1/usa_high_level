# FCC Application Zone Overview

Application zones are designed to allow a user to press a button on an operating system where applications that are associated to a geo-fence will be shown on the device to launch.

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

#### Government Spheres (Cities, Counties, States, Federal)

Anyone with a .gov e-mail address can register to manage their jurisdictions sites in their government spheres. FCC administrators will review agency logins and develop the geo-fence and assigns administrators users to it where other users from that domain can be invited.

All geo-fences will be based on current jurisdictions.

#### Business Application Zones

In-order for a site to be added to a business sphere a business license must be uploaded and validated. The FCC will mandate all municipalities have an OAuth process to handshake between the application zones and business license to remove the need for human approval over time.

##### Direct User Application Zones

Managers of Application Zones can add specific profile URLs (or users) which would allow specific applications to launch when that user is specifically added to that zone. One example might be a waiter at a restaurant. There will be role capabilities with this also.

### Internal Zones

It might feel natural to want internal zones of a business. However, its a risk if there are two many micro-zones, as people would be wondering around trying to find applications in public places.

In this case the recommended way to do this will be the use of numbers. A couple of example of this is:

- Press a button to pay for parking and then entering a lot #.
- Press a button to pay for a meter, and entering a meter #.
- Pressing a button in a hotel room and retrieving the hotel room via a personal profile receipt.

## Approvals

All applications associated to an application zone must be approved by the FCC to ensure they meet all the to be determined FCC application approval guidelines. There will be categories for each business type, and when applications are out of context of those normal categories they will be scrutinized more.

## Network Zone

There will also be opportunities to register application zones based on a wireless network that is joined. For example:

- Launch an app store in a car vehicle to allow people to play music in the vehicle.
- Launch a route map while riding a bus.

Specific SSID can be registered with the FCC where the operating systems must provide the applications in a network zone when the application zone button is selected.

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

One of the big risks with this technology is that people will be wondering around always pressing a button to see what application service is available. The FCC will provide [public service announcements](/public-service-announcements/) to the public on the best way to use these applications easily and safely, and limit the applications to 6.
