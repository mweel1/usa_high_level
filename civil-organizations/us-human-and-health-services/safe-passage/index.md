# Safe Passage

A platform for seamless transition from jail to transitional housing that will be available to communities.

## Project Overview

When inmates are released from jail the transition from jail to transitional housing is not seamless. Inmates get released and must find transitional housing on their own. This gap in service creates friction as the inmate doesn’t have resources when leaving jail and very quickly turn to crime and end back up into jail, or not find housing at all and live on the streets.

The Safe Passage software platform’s goal is to provide an integrated collaborative platform between the jails, transitional housing facilities and inmates to provide the jail’s consolers the ability to apply for housing on an inmate’s behalf, reserve beds, and have safe transport to transitional housing facilities.

Safe Passage also allows inmates to be placed by crime, allowing transitional housing services the ability to provide services in different locations based on criminal backgrounds. This will help improve finding facilities in a wide range of locals.

## Stakeholders

The following stakeholders would participate in this platform.

### Orange County Social Services

Orange County Social Services would be given the platform under their direction and discretion. Which would be including managing logins for transitional housing organizations, and jail facilities.

### Orange County Jails

Orange County Jails consolers would be users of the product to place inmates in transitional housing.

### Transitional Housing Organizations

Transitional housing organizations would approve inmate applications and manage their bed inventory.

### Business Requirements

#### Social Services

Allow social services to manage transitional housing organizations.

• Create/edit a transitional housing organizations based on the transitional housing form.
• Search, Filter, and view transitional housing organizations.

Allow Orange County Social Services manage jail facilities

• Create/edit jail facilities based on the jail form.
• Search, Filter, and view jails organizations.

#### Jails

Allow consolers at jail to find bed availability based on the preferences of the inmate’s location, crimes, and special needs status and official release date.

• Sign the consent to share information form.
• Complete Inmate Application
• Enter the inmates release date.
• Select the facilities available based on the crimes that have beds available and submit application.

Allow a jail operator to notify the transitional housing organization the inmate is assigned to that they will be released at a certain time.

• Search the inmate by Id, or name
• Select the inmate will be released in and enter the time.
• Send a notification to the transitional housing organization with the date, time picture, and place the inmate will be picked up.

### Transitional Housing Organizations

Allow admin at transitional housing organizations to approved inmates into their location.

• Review a list of inmates looking to be approved into transitional housing.
• Set inmates to an accepted status and put the bed on pending status.

Allow admin at transitional housing organizations to have an inmate pickup list.

• Review a list of inmates that will need to be pickup from the jail when they are released, and if a time is set the time.

Allow admin at transitional housing organizations to transfer patients to other transitional housing organizations

• Search a resident by name
• Select the facilities available based on the scheduled exit date and the current facility, crimes that have beds available and submit application.

### Non-Functional Requirements

• The system must use a 3rd party authentication and authorization system.
• Response time should be less than 2 seconds.
• The application must comply with GDPR and data privacy standards.
• Inmate information can only be viewed by the consolers.
• All inmate contacts information and IDs must be encrypted at rest.
• System admins must be invited to view any module.
Risks

• There are not laws passed to enforce jails and transition housing organizations to use the platform. If this occurs, find other counties to participate.
• Need a company to manage this project and see it through on an ongoing basis after initial implementation.  
Acceptance Criteria

Detail the criteria that must be met for the project to be considered successful.

    - All functional requirements have been completed and tested.
    - The system passes security and performance testing.
    - User acceptance testing (UAT) is completed with no critical issues.

### Appendices

Address

1. Address
2. City
3. State
4. Zip Code

Contact

1. First Name
2. Last Name
3. Phone Number
4. Extension
   Jail Form
5. Facility Name
6. Contact
7. Address
   Transitional Housing Organization Form
8. Is Active
9. Name
10. Address
11. Contact
12. Many facilities which include:
    a. Contact
    b. Address
    c. Number of beds
    d. Acceptable crimes

Inmate Application

The inmate application includes:

1. Inmate ID
2. First and Last Name
3. Overview of the inmate’s mental health status
4. Medications
5. Selection of crimes ever committed.
6. Selection of crimes currently incarcerated for.
7. Release Date
8. Needs Transportation
9. Picture

Crimes

1. Crimes Against Persons

   - Homicide (Murder, Manslaughter)
   - Assault (Aggravated, Simple)
   - Kidnapping
   - Sexual Assault
   - Domestic Violence
   - Child Abuse

2. Crimes Against Property

   - Theft (Larceny, Shoplifting)
   - Burglary
   - Robbery
   - Arson
   - Vandalism
   - Motor Vehicle Theft

3. Crimes Against Public Order

   - Disorderly Conduct
   - Public Intoxication
   - Riot
   - Loitering
   - Trespassing

4. White Collar Crimes

   - Fraud (Identity Theft, Insurance Fraud)
   - Embezzlement
   - Money Laundering
   - Bribery
   - Insider Trading
   - Cybercrime (Hacking, Phishing)

5. Drug-Related Crimes

   - Possession of Controlled Substances
   - Drug Trafficking
   - Drug Manufacturing
   - Distribution of Drugs

6. Crimes Against the State

   - Treason
   - Espionage
   - Terrorism
   - Sedition

7. Traffic-Related Offenses

   - Driving Under the Influence (DUI)
   - Reckless Driving
   - Hit and Run
   - Driving Without a License

Include additional relevant documents (e.g., diagrams, flowcharts, or mockups).

This template can be customized to fit the specific needs and complexity of your project, but it provides a clear structure for capturing business requirements in software development.

## Phase 2

Phase 2 of the project will allow anyone unable to operate in society, and need assistance entering society to be booked at a transitional housing in their community where they can be evaluated. This includes:

- An interaction with a police officer, where no laws have been broken.
- Exiting a hospital
- Loosing a job

Anyone unable to handle a transitional housing unit will be directed to a judge where a sentence into a mental health institution will be applied and the person will be transitioned.
