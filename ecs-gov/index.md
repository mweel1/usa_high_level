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

## Message Prerequisites

Before a message would be sent to the population it would have to be approved by a pre-assigned quorum of members of the agency. There can be many predefined messages for each government agency, or they can customize one.

A list of citzens can be queried from the [citizen contact data warehouse](./citizen-contact-datawarehouse/) by jurisdiction.

## Devices

All physical communication devices would be registered with the Emergency Communication System where they would be notified in case of emergencies also.

Priorities would be set on devices in case agencies messages were overlapping.

## Location Based Emergency Messaging

In the case of location based messages a geo-fence can be provided to the [citizen contact data warehouse](./citizen-contact-datawarehouse/) from an agency where a list of all information would be returned including e-mail addresses, and mobile numbers.

Some uses for this technology would be:

- A car driving on the wrong side of the freeway
- Natural disaster notification and procedures (including charging devices, and have cell phone backup devices available).
- A serial killer on the loose in an area
- A lost dog
- Active shooter at school
- Emergency vehicles could will emit its location and send messages to turn down the car radio and alert to pay attention for siren noises.

### Message Requirements

When the Emergency Communication System sends message it must meeting the following requirements:

- Messaging requirements must provide JSON.
- Messaging requirements must provide a HTML page that can be rendered on multiple device formats.
- A turn down volume setting can be sent to turn down volume in vehicles if emergency vehicles are in the area.
