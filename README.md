# Dependency Injection Examples

This project uses architect.js to provide dependency injection (DI) on both the
client and server. For more information about DI see the pdf in the
`presentation` directory.

## Getting Started

Use the following environment variables to maximize your development experience:

    PORT=3000

    DEBUG=plugins:*,error

    DEBUG_COLORS=1

    DEBUG_FD=1

    NODE_ENV=development

After cloning the repo:

`npm install`

`npm start`


## Developing the App Server

The app server follows standard loopback conventions for directory structure
(server, client, common, etc).
See https://docs.strongloop.com/display/public/LB/LoopBack for more information.

Browse to http://localhost:3000 after starting the server.

## Developing Plugins

Plugins are packages of server and/or client functionality that can be loaded
into the server through configuration. You add the plugin package path and
options in `plugins/index.js`. The configuration is used by the
`server/boot/plugin-loader.js` to add the functionality to the server. Plugins
packages can be located anywhere but by convention they should be put in the
`plugins` or `node_modules` directory.


## Use DI on the Server to Generate Names

The server example allows you to generate a set of random names and save those
names to the database or a csv file.

### Generate New User Names

To generate new user names and populate the Person table:

1. In `plugins/index.js`, in the options for the `name-generator`
package, set the `saveToDatabase` and `saveToFile` options to `true`.
2. Set the `generateOnStart` to `100000` or less. Setting it above 100000 may
cause the process to fail (due to the default limitations in node).
3. Start the application server. On startup the nameGenerator service will
use the options you set to generate a pool of unique, random names.
4. View the csv file and the file version of the in-memory data store in the
`data` directory.
5. Explore the plugins directory to learn more about how the server-side plugins
work together.

## Use DI on the Client to Answer Math Problems

The client example uses math plugins to solve problems.

### View Client Examples

To view an example with a basic math plugin:

1. `npm start` the server.
2. Browse to http://localhost:3000. You should see a simple math problem solved.

To view an example with a more advanced plugin:

1. After starting the server, browse to http://localhost:3000/advanced.html.
2. Explore the client directory to learn more about how the client-side plugins
work together.





