---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "United States"
  text: "id.gov"
  tagline: Providing authentication and authorization of government issued IDs to the market place.
---

# Preface

Having a reliable Government ID system on the internet will enable websites to validate age, ban users, and process small claims.

# Government ID Services

If a user is using an operating system for the first time and have not received a government ID. The user would register at id.gov by:

- Create a login with their e-mail address and password.
- Receive a code and go-to a local post office provided in a directory.
- Once the post office verified the ID they would goto id.gov and enter the code where the operating system would be notified the ID was valid.

If they are already registered, they would go to gov.id and enter their e-mail address and password and provide permission to the operating system.

## On-Line Operating System Requirements

Anytime a government ID was requested by an application or website the operating system must:

- Verify the requested ID is valid via gov.id.
- Provide a screen with includes the [public domain page](/internet-protection-agency) and the system preferred authorization methodology (fingerprint, face recognition, password, etc...)

## Off-Line Operating System Requirements

- A picture of the ID must be shown with a special frame around the ID.
- The operating system will not allow this picture to be replicated and shown under any circumstances.

### Validating Government ID's on-line

A website or application can request a validation of an Id type from the operating system. The system would take its current ID if available and validate it with id.gov. If it was a success the operating system would provide all the details of the ID to the calling service.
