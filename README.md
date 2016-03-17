# Dependency Injection Examples

## Getting Started

After cloning the repo:

`npm install`

`npm start`

Browse to http://localhost:3000/explorer to get REST API documentation.

## Environment Variables

Use the following environment variables to maximize your development experience:

    PORT=3000

    DEBUG=plugins:*,error

    DEBUG_COLORS=1

    DEBUG_FD=1

    NODE_ENV=development


## Developing the App Server

The app server follows standard loopback conventions for directory structure
(server, client, common, etc).
See https://docs.strongloop.com/display/public/LB/LoopBack for more information.

To start the app server (without sockets):

`npm run app`

Browse to http://localhost:3000.

## Developing Plugins

Plugins are packages of server and/or client functionality that can be loaded
into the server through configuration. You add the plugin package path and
options in `plugins/index.js`. The configuration is used by the
`server/boot/plugin-loader.js` to add the functionality to the server. Plugins
packages can be located anywhere but by convention they should be put in the
`plugins` or `node_modules` directory.

## During Development

To restart the server when code changes, start the server with
`npm run develop`.

To run the entire test suite (lint and server unit tests), use `npm run test`.

## Generating User Names

As players register for the game, the onboarding process will select and reserve
a name for the user from the Player table. This process depends on the Player
table containing a pool of pre-populated and randomized user names. The
usernameGenerator service provides the ability to generate this pool of names.

### Generate New User Names

To generate new user names and populate the Player table:

1. In `plugins/index.js`, in the options for the util-username-generator
package, set the `saveToDatabase` option to `true`.
2. Set the `generateOnStart` to `100000` or less. Setting it above 100000 may
cause the process to fail.
3. Set the `prefixes` option to an array of prefixes. At least one prefix must be
set, but that prefix can be `''`. For each prefix, the system will generate the
number of records as defined in the `generateOnStart` option. For example, if
you set `generateOnStart` to `100000` and you set the `prefixes` option to
`['','','','','']`, the system will generate a total of 500000 records.
4. Set the `NODE_ENV` variable to `development`. The usernameGenerator will only
run in a development environment.
5. In `server/datasources.json`, ensure that the `db` datasource is connecting
to the database you want to populate.
6. Start the application server. On startup the usernameGenerator service will
use the options you set to generate a pool of unique, random usernames.





