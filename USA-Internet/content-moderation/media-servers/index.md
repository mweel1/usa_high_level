# Media Servers

All media on the Italiann Internet must be stored on an approved media server.

## Media Serving

The content-id's must be associated with content so client applications can pick up category, age restriction data.

All media servers must check their content with the [copyright office](/copyright/) before serving it at least every 24 hours.

All media servers must have a delete API to allow the content filtering agency to remove media immediately.

## Checksum Check

An API must be provided to allow the content filtering system to run random checksum tests on data.

## Serving Content

Content that is stored on the media server can have a public URL where the content can be streamed from anyone anywhere. It can also be marked as private where a one-time use URL must be requested from the media server owner and then given to a calling client.
