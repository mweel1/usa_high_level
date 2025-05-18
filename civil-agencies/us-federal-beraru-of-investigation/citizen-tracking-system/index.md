# Citizen Tracking Database

The entity tracking database will store information about devices and who is logged into them.

The objective of the entity tracking database to allow various jurisdiction to request information about the location of devices and who was logged into them.

The entity tracking database will track:

- Personal Profile
- Device Id
- Device Type
- GPS Location
- Personal Profile URL Logged In, Business URL Logged In

## API

- Jurisdictions can send a GPS location and a geo-fence and receive all the personal profile Ids of people in the area in real-time and communicate to personal profiles based on the permissions that were granted during provisioning.

- Jurisdictions also receive publications of geo-fence data for items that are not time sensitive.

- Jurisdiction can send a personal profile and receive GPS Locations.

All jurisdictions must communicate with citizens using their authorized service with the personal profile.

For example, the FBI would request information about a child molester and ensure they never went around public schools and alert police departments accordingly when they did.

Laguna Beach Traffic management system would receive all vehicle device IDs and personal IDs of people moving through the city to understand population flows, and traffic flows.

## Security

Jurisdictions would be granted access by providing a url profile and are an employee at a .gov domain, and they have been properly authorized during the authorization process.

A key would be provided for various offices each time an election was processed where they would be re-cycled. All keys must be stored encrypted at rest in various jurisdictions.

## GPS Data

All handset providers must provide the device identification that would bind the GPS location data to device and owner via a government issued identification received when setting up the device.

## Service

The following services would have access to the citizen database:

[Emergency Communication Services](/ecs-gov/).
[Census](/e-census/)

The following agency would have to have court orders or warrants to access data about individuals:

[FBI](/fbi)
[National Security Agency](/national-security-agency/)
