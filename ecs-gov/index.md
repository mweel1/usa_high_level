---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "FCC"
  text: "Emergency Communication System"
  tagline: A channel of emergency communications to the publics operating systems
---

## Overview

The emergency communication system would allow government agencies the ability to send direct messages and actions to operating system much like what happens with TV and radio today based on the agencies permissions.

## Logins

Each government agency would need permission to use the emergency communication system. Some examples might be:

- Highway Patrol
- Police Department
- Fire Department
- Water District
- Energy Companies
- Local City
- Animal Control

Each user must have a .gov e-mail address, for example : us.mike@highwaypatrol.gov login. Each login must send a code to the e-mail address to verify they are still a valid user. All e-mail addresses must be verified via phone to the government agency.

Once approved the e-mail address would be assigned to the correct government agency that is participating in the system.

## Messaging

Before a message would be sent to the population it would have to be approved by a pre-assigned quorum of members of the agency, There can be many predefined messages for each government agency, or they can customize one.

## Devices

All physical communication devices/operating systems would be registered with the Emergency Communication System via the personal profile where they would be notified in case of emergencies also during the [operating system setup](/government-os-services/) process.

This would include drone owners.

## Location Based Emergency Messaging

In the case of location based messages a geo-fence can be provided to ECS where from various jurisdictions can send message to citizens. This information would include both residents physical address, and operating systems in the geo-located area.

Some uses for this technology would be:

- A car driving on the wrong side of the freeway
- Natural disaster notification and procedures (including charging devices, and have cell phone backup devices available).
- A serial killer on the loose in an area
- A lost dog
- Active shooter at school
- Emergency vehicles would emit its location and send messages to turn down the car radio and alert to pay attention for siren noises as it drives down the street.

## Dynamic Spheres

Police officers will have the ability to provide a sphere location and receive a list of vehicles and their facility by make, model, and license plate, and personal profile's driving in the vehicle.

For example, the highway patrol would be able to message everyone

## Operating System Commands

The CS would be able to provide commands to mobile phones to:

- Disable them incase a gathering are coordinating attacks in a crowd gathering.

The ECS would also be able to provide commands to vehicle operating system which would include:

- Turning down the radio
- Pull Vehicle Over

### Message Requirements

When the Emergency Communication System sends message it will send a message along with an optional command.

#### Commands

- Show Emergency Domain Zone Application

# Anonymous Mode

ECS will have an API for non-authenticated devices that will allow devices to operate when nobody is authenticated into the system. Once authenticated however, the operating system must use the authorization processes for a authenticated user. The operating system will be loaded with a key to access ECS services anonymously.
