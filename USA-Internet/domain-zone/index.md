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

Anyone with a .gov e-mail address can register for approval to manage their jurisdictions sites in their government spheres. FCC administrators will review agency logins and develop the geo-fence and assigns administrators users to it where other users from that domain can be invited.

The application will have lineage based roll based security where applications can be managed in their context.

#### Business Application Zones

All municipalities that register permits or business licenses must provide login to allow business owners to manage their domain zones. A URL to the state's business license where address and contact information must be associated with the application zone where name, address, and phone number can be found.

#### Emergency Zones

Application's are approved and categorized by FEMA. When an emergency operation is present, a geo-fence is placed around the zone and the applications are deployed to the citizens. For example a disaster response team could highlight a location during a fire and deploy zone applications. All phone companies must provide a satellite connectivity for these emergency zones over a slow-ip connection on handset companies.

The [emergency notification](/ecs-gov/) system will be used to notify the emergency zone has been deployed and launch it the applications.

All applications will be developed by FEMA.

Emergency Zone application can mark applications as leave behind which will remain sticky until deleted.

##### Direct User Application Zones

Managers of Application Zones can add specific profile URLs (or users) which would allow specific applications to launch when that user is specifically added to that zone. One example might be a waiter at a restaurant. There will be role capabilities with this also.

Roles and permissions can also be provided to allow various business functions in the context.

### Internal Zones

It might feel natural to want internal zones of a business. However, its a risk if there are two many micro-zones, as people would be wondering around trying to find applications in public places.

In this case the recommended way to do this will be the use of numbers. A couple of example of this is:

- Press a button to pay for parking and then entering a lot #.
- Press a button to pay for a meter, and entering a meter #.
- Pressing a button in a hotel room and retrieving the hotel room via a personal profile receipt.

At least to start, I could be proven otherwise once the technology is released but that my feeling to start for safety measures.

## Approvals

FCC will approval all links that are available for the market to use in their application zones. Much like Apple's approval process the government will go through the use case of the product and make sure its safe for the public, it will also be associated with a certain business type.

## Network Zone

There will also be opportunities to register application zones based on a wireless network that is joined. For example:

- Launch an app store in a car vehicle to allow people to play music in the vehicle.
- Launch a route map while riding a bus.

This will be done by providing a restricted SSID list where applications are approved, and then launched when that SSID is called.

There will be two parts to this service:

### Registration

Registration is when you register the applications you would like to use.

### SSID to Application Registration

This will allow you to register SSIDs in the market and then associate your applications to them.

## No Drive Zones

No drive zones can be deployed jurisdictions that will shut down a vehicle when driving in certain areas preventing people from running over crowds, driving in places they shouldn't, etc.

## Speed Zones

Enforced speed zones can be set by jurisdictions that force the limit of a vehicles speed when driving on certain roads, for example by a park, school, etc.

## Operating System Control Events

Application Zones can trigger control commands in operating systems at certain times that might:

1. Turn off the ability to use a camera.
2. Redirect the contents of recordings to an API end point while in that zone.
3. Turn off a ring sound (for example in a movie theater), and switch all phones to vibrate.
4. Turn age appropriate mode in facilities that dictate that.

## Signage

Anytime an application zone is defined the business must provide a QR code before entry where:

- A list of operating system restrictions are provided.
- A directory of applications in that zone. A bit will be set on the application if it should be shown from a QR Code or only by pressing the domain zone button on your device.

## Why FCC?

Its important this is an FCC asset due to the fact if operating systems tried to deliver this type of solution to the users there would many different "domain zones" for citizens which would make it very confusing for users. It's important users get a consistent experience no matter what operating system they are on from vehicle operating systems, to mobile handsets on the open American Internet.

## Risks

One of the big risks with this technology is that people will be wondering around always pressing a button to see what application service is available. The [public service announcement system](/public-service-announcements/) will broadcast the best way to use these applications easily and safely. Each Application Zone will have a limit of 15 applications.

Here is the [Project Plan](/project-plan) for the first version of the application.
