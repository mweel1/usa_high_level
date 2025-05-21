# Overview

## Social Security Objectives

Social Security will have a platform that will enact and vote on laws around social security. It will also provide social security services at the federal level, and the local level via social security districts.

Our country offers a variety of public assistance programs, such as food stamps and social security payments, aimed at supporting individuals in need.

To enhance the effectiveness of these programs, I propose consolidating them into a single Social Security platform. This would allow for better data collection, providing a clearer understanding of the public’s needs, and ensuring that support is delivered more efficiently and equitably to those who require it most.

Social Security will also be tasked with managing people in danger of becoming homeless, or homeless individuals.

Social Security will also be responsible for a [personal profile](./personal-profile/) server for citizens to manage all their government documents.

## Legislation

Social security will have a legislative function. For example, a person can be locked up or forced into treatment for mental illness and/or drug and/or alcohol addiction unless they pose a danger to self or others.

It's clear this law should re-evaluated as people that cannot take care of themselves should be admitted to mental institutions.

This is the power of legislating at the functional or organization level. We know where to go to set and get laws, and the boards approving them are educated in their domains.

## Social Services

### Retirement Funding

A law will have to be passed if social security is managed at the federal, or district level.

#### Federal Level

Social Security payments will be defined by the board each year and paid to people with a social security profile.

#### District Level

If payments were voted to be handled at the district level, social security districts will manage the social security payouts for their district. Citizens will be assigned to a social security district for payouts based on the city they were born in.

### Out of Money

Citizens would be able to apply for social security locally if they had no income before retirement due to job loss, injury or other causes.

Social security would provide enough funding for:

- Local shelter housing
- Food and groceries
- Storage costs
- Trade school (for 6 months)
- Medication
- Connectivity phone costs

Social Security would ensure participants were either attending school, or looking for jobs for a period of time set by the district law.

If they failed to enter the workforce or their schooling time expired (based on the district board laws), they would be directed to a mental health institution where they would receive:

- Shelter
- Eat at the house kitchen
- Storage costs
- Transitional services (2nd try)

### Jail

Licensed social security agents will be placed in jails, and provide the funding to citizens personal profile, and book rooms at transitional-housing-organizations provided on the American Internet domain registry.

If they do not choose transitional housing, they must have housing confirmed by the consoler.

## Federal Social Security Agent Licensing

Social security will provide licenses and education for:

### Public Social Security Officers

- Transitioning them to mental institutions based on federal and local laws with the help of DOJ.
- Use DOJ provided police applications to call the police.
- Provide funding for people in need.
- Create and manage social security profile for the social security system to document their interactions.
- Provide protection for Social Service agents based on a destressed individuals actions (bear spray permits, etc).

### On-Call Social Security Profile Setup Agents

- Goto peoples houses with portable equipment to manage the personal profile startup process.

### On-Line Social Security Officers

- Help with people that have been reported online by a citizens.

### 5 Step programs

- License managers that operate 5 step programs (e.g. AAA)

### Federal Domain Zone Application for Public

A domain zone application will be managed at federal level to allow people to report people in need where social workers would deployed and handle them based on their licenses and local laws. Each social worker will have a container deployed to them by Social Security to handle their workload, which will be reported federally.

### District Domain Zone Application for Licensed Social Security Agents

Each district must develop their own domain zone applications for social security agents to manage their business based on the laws, licenses and businesses in their district.

### American Internet On-Line Reporting

Furthermore, links would be available on social networks to report people that need help. Their login session id would be provided, where social security could receive from the FCC the actual person logging in.

## Single Sign On

Operating systems will have a web-socket connection to the personal profile when it authorized via fingerprint or camera.

A client side operation at the operating system and browser level would allow the application to receive a client side handshake key.

The client would send the client side handshake key to the server side processes.

The server side process would request a login to the personal profile.

This request would include:

- The domain name
- Server Side handshake key
- Client Side handshake key (Includes the FCC operating system Id)
- Identification Requirements (Identification ID, Anonymous, Handle, First Name, First Name/Last Name)
- [License ID](/civil-agencies/us-national-institute-of-standards-and-technology/personal-licenses/) (Required, or optional)

The server side would provide an API to accept the /validate-handshake where the server side and client side handshake key would be confirmed.

### Passkey Login (New Account)

If no passkey was available for the domain, the user would confirm the login to the domain based on the identification requirements.

The personal profile will provide back to the server via the /login API:

- Server Side Handshake Key
- Client Side Handshake Key
- Personal Profile SSN current logged in
- Identification Requirement
- Domain

All licenses must be validated before they are processed back to the server with their license ID, if they are not an end-point called /login-failed would be called with a code 01 - License not available

### Passkey Login (Existing Account)

The personal profile would check to see if there is a passkey valid for that domain after verifying the client and server handshake key and ask the user if they would like to login with it. The passkey will contain:

- Passkey

All licenses must be validated before they are processed back to the server with their license ID, if they are not an end-point called /login-failed would be called with a code 01 - License not available.

All native applications in operating must connect to a domain to login and have it a security definition file built into the executable to define their point to point domain for at the very least, logging in.

All steps of the authorization process must be logged to the personal profile, where with a warrant for a specific domain and a time frame the social security profile would provide:

1. I.P Address of the server side request
2. Client side handshake key which would include the operating system FCC device ID
3. Domain name
4. Social security number
5. Identification requirements requested
6. Identification requirements provided
7. License ID's Requested
8. License ID's Validated
9. Passkey created
10. Passkey provided

### Social Security Login Log Warrant Access

Social Security will provide an API to receive /login-logs via an API.

The API will accept:

- Domain name
- Time Frame
- Warrant Id
- Warrant Key

The information will be provided to the warrant's meta data at warrant.gov where with they provided access key where it can be accessed by the court or judge who issued it.

The warrant.gov must validate the domain name that is passed to the warrant based on the warrant details before accepting it.
