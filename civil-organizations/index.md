# Technology Plan: civil organizations

## 1. Executive Summary

The civil organizations are designed to foster coordinated governance across federal, state, and city levels, in the context of the mission of the organization.

The platform ensures transparency, accountability, and seamless interaction between jurisdictions, agencies, and citizens. It supports the management of technology, finances, legal processes, and licensing across different layers of government.

There are many advantages to [citizen organizations](/civic-organizations/advantages/).

The platform must meet the following business objectives:

# Finance Management

- Enable acceptance of ACH payments from the Federal Reserve to top-level .gov organizations based on:

- .gov budget, and all downstream jurisdictions

- All .gov downstream jurisdictions must be on the same budget cycle as the top level .gov domain.

- Support the allocation of funds across federal, state, and city jurisdictions based on budgetary requirements with integrated approval workflows for transferring money between jurisdictions.

- The management will have a budget section that will be solidified, or in-progress for the following 1 year cycle.

- Provide comprehensive budget management tools for agencies across all jurisdictional levels.

# Legislative Management

- Any top level organizations, or their children organizations can be setup for legislative capabilities which would allow people to vote on issues for board consideration.

- All jurisdictions would have to have 3-5 board members and officials within jurisdictions and agencies to propose, amend, or veto laws.

- Any jurisdiction board can vote to move the vote to a different jurisdiction.

- All budgets for jurisdictions would be open for the public as they are being worked and solidified by the board.

- If down stream jurisdictions vote on something that is causing issues, Any higher jurisdictions can override legislative decisions of lower organizations at any-time.

- Other citizen government organizations can weigh in on legislative decisions that are being discussed. For example the EPA, might weigh in if FEMA is building a new fleet of fire trucks. No other government agency organization can override another one except for the President.

# Board Management

## Starting Up

Board members are created based on applying from their parent jurisdiction. The parent must require the type of solution providers based on the type of role. For example, The UL might want to have an EPA based board member to help reduce emissions. In that case the President would appoint them.

## Data Sharing

All board members must share their financial to ensure they do not receive kickbacks from the market place to the government over site.

## Board Seat Restrictions

The only board restrictions are the roles in which they are designed, for example an EPA seat on DOT would have to have experience in the field.

## Terms

The terms are open ended. Once board members are appointed they can be removed by vote. A carrier solution provider is something special.

# Licensing and Certification

- Support the issuance of licenses to individual profiles based on successful education, adn testing.

- Support the issuance of certificates to individual profiles based on successful education, and testing.

- Each license would require :

  - Personal Profile
  - Educational Domain Name
  - Top level .gov Organization
  - Any meta-data around the certificate or license that would be used in the market place.

# Education Integration

- Each top level .gov organization will have educational directory for each certificate and/or license.

- When the education requirements have been completed, the education domain would send the certificate to the .gov domain where it would be added to the personal profile.

- Education domains would be provided keys associated with a domain name. When the .gov received a request with the key, it would also receive a handshake key the calling domain would have to implement and acknowledge.

- As part of the container approval, all keys must be stored in a secure file system.

- Education containers will oAuth to the .gov website with their client ID, and domain where they key will be given to them and stored in a secure place.

# Container Deployment

- All top level domains would manage a container registry where all containers would have be signed.

- All top level domains would have to have a number of approved hosting providers approved by the NIST that would be able to pull containers and run them, and roll back containers in case of issues.

- All top level domains would be responsible for ensuring there are test environments where the market could test the next releases of specs by the G2G standard committee at NIST. This would be prefixed by a test host. For example test.e-bike.dot.gov.

All containers must have data cleansing procedures, testing procedures approved by NITS when moving between production and test environments.

# Domain Names

Along with container deployments the top level .gov domain would have the ability to create host names for the containers and automatically provision them.

# 2.4 Cross Organizational Comparison

- Allow the evaluation of cross organization comparisons between jurisdictions and develop the metrics to analyze this. For example, for Police you might have a stat around ticket per police, and analyze across cities in the Justice Department Citizen Organization.

# Monolithic vs. Container Deployments

It might make sense at first glance to want to build a monolithic applications at the top level domain, and provide down stream services for jurisdictions.

This will be true of all the legislative, and financial systems of all top level agencies to ensure secure fund transfer, voting, etc.

However, in other cases containerization management is important at the top level agency and NIST for the following reasons:

- Its important to give the market autonomy to build products for various use cases in the government. For example, a mountain bike park run by the National Park Services. You could have many providers developing mountain bike applications based on the B2B requirements and API standards.

- Second its important to have a separation of concerns between the various jurisdictions where G2G requirements can be discussed, understood and implemented.
