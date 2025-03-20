# Introduction

The objective of this is to allow a user the ability to login extremely easily.

There are four components to the project:

- Google Chrome: Plug-In that stores a profile Id.
- Personal Profile: That is a server that works as a gateway between a server and a client to login.
- Tray application: Is an application that runs on an operating system that communicates with the personal profile to take login commands.

# Google Chrome Plug-In

The Google Chrome Plug-In will allow a person to set their personal profile Id.

# Personal Profile

The personal profile will have the following capabilities:

- Login to the application, and generate a profile id. This profile Id will give the user a fully qualified URL for example.

marty-weel.personal-profile.com

The personal profile will have the following API:

## <personal-profile-url>/login.

The login API will hold open the login request for up to 2 minutes.

It will emit the domain in which is calling and logo from the domain that has been requested. Every domain must have an image in their header called login-domain that matches exactly.

## <personal-profile>/auth-callback

## <personal-profile>/claim-jwt

The /auth-callback will receive the ack/nak from the Tray Application and then return to the http request from the servers /login.

## Personal Profile Requirements

- Must be an API developed in C# and Razor for view pages.
- Must use Sql Server using a tenant filter id and EF Core.

# Tray Application

The tray application will oAuth with the personal profile where a web-socket connection will be made after oAuth confirmation.

The following requirements are for the tray application:

- Must work on all 3 platforms (Windows, Linux, Mac)
- On startup for the first time oAuth to the Personal Profile where the user will have to enter their e-mail and password to accept the connection.
- The acceptance will provide a code back to the tray application with a code, the code will retrieve a JWT and refresh token will be accepted for a socket connection. If the refresh token expires, another oAuth process will have to happen on future operating system start-ups.

- The tray application will accept the following commands :

  - Login :

    - The login command must provide a call back URL and domain name.
    - The login command will trigger a panel in the right hand corner display.
    - The panel will get the domain, and then pull the logo from the header of the website.
    - Once the user agrees to sign-on the callback URL will be called.
