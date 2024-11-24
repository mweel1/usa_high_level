# Touch Bluetooth Service

An ID is sent to the bluetooth service with a JSON payload.

The sender ID has an S at the front for a screen, or D for Dual Display.

Touch Blue Tooth stack can be bound with receiver or sender mode.

## Dual Phone

Trail Capitan touches mtn bikers phone as receiver and requests mountain bike pass from wallet.

Mountain Biker acknowledges request from wallet.

Trail Capitan receives an ID from mountain biker wallet of type mountain bike pass.

Trail Capitan application calls the touch bluetooth service and receives JSON with a ticket ID.

Trail Capital application receives JSON and checks [ticketing system](/tickets/) for a valid ticket.

# Single Receiver with RFID coin.

Trail Capitan touches mtn bikers coin as receiver with dual display identification.

The receiver shows the wallet request login id.

The user logs in with their 4 digit code, the wallet request for mtn bike pass from wallet where its checked in the [ticket system](/tickets).
