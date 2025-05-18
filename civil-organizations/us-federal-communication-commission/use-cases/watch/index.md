# Watch

The FCC will create a container for watches.

When booting up, it would allow you to choose from a .watch domains ordered by most installs, and other search criteria.

Once installed, the .watch domain would be loaded on start up where it would oAuth with your personal profile where you would either enter your e-mail and password, or an authorization request would show up on your other devices.

The watch would events for heart rate to the loaded web-application.

# Use Case

## Washer and Dryer

You would plug in your washer and dryer.

Using touch bluetooth over IP a web application would come up and send the UL device id to the manufacturer via a post statement.

The user would log-in to the manufactures site with the UL device id.

The device would be added to the the personal profile when its confirmed along with a passkey for the domain and UL device Id. The device name will come from UL.

- Having the passkey attributes in the personal profile is more secure than depending on software developers to have it in their databases where it can be hacked.

The manufacturer web page would oAuth to the FCC to add an application to control the washer and dryer for the same domain as the passkey domain, the manager role would have to confirm the addition of the application.

The user could select the application to manage their washer and dryer and view status.

Events could be created by sending direct e-mails to personal profiles setup by the manufacturer. For example when the dryer is done, as a device notification category.

## Executing the Washer and Dryer Application

You would be at your house and press the Domain Button, The application would come up.

You would be directed to the domain. Via the domain, a login request for the domain would be sent to the personal profile via the operating system JS API. The user would be prompted to login with their passkey that is valid for that domain.

The manufacturer would have a back channel to the machine to send commands and receive events via the oAuth handshake that took place.
