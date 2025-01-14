# Project Plan

# Personal Profile

- Mobile companies will build a personal profile for users

  - The user will validate with a valid govt ID, and answer out of pocket questions with their social security number.
  - Each operating system company will have a key to add a login-key to the personal profile to login into DNS.
  - The personal profile will be provisioned.
  - An oAuth will go to the DNS system where the personal profile will be created with their social security number, and the profile will be registered.

- Personal profile will have an API for the authentication process. This will include:

  - An a page for the OS to oAuth to where a JWT and Refresh Token will be provided.
  - Create an API that allows the operating to make a login request with a ont-time login token.

# Operating System Authenticator App

- Mobile companies will build an authenticator that is connected to the personal profile for log-in confirmations via a socket connection.

  - When the authenticator receives a login request via the socket a token will be provided by the operating system in which initiated the login request.

- Develop a DNS server that the mobile operating systems will use when resolving profile domains.
  - A user will login via their personal profile

# Operating System DNS

The operating system when receiving a usa: prefix will have to use a list of American DNS servers.

# FCC Application

Develop an app for the FCC that allows users to create geo-spheres around national parks and assign categories and usa:URLs to them.
