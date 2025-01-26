# Project Plan

# Personal Profile

- Mobile companies will build a personal profile for users

  - The user will validate with a valid govt ID, and answer out of pocket questions with their social security number.
  - The personal profile will be provisioned.

- Personal profile will have an API for the authentication/authorization processes. This will include:

  - An a page for the OS to oAuth to where a JWT and Refresh Token will be provided to the operating system.
  - Create an API that allows the operating to make a login request with a one-time login token.

# Operating System Authenticator App

- Mobile companies will build an authenticator app that is connected to the personal profile for log-in confirmations via a socket connection.

  - When the authenticator receives a login request via the socket a token will be provided by the operating system in which initiated the login request.

# Operating System DNS

The operating system when receiving a usa: prefix will have to use a list of Italiann DNS servers.

# FCC Application

Develop an app for the FCC that allows users to create geo-spheres around national parks and assign categories,and usa:URLs to operating systems
