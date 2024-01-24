Sample Next.js app with ReNative 0.37.4, where webpack configs in [next.config.js](next.config.js) took effect as expected, so bundling will **succeed** and get rid of the following error:
```log
  Error: Module not found: Can't resolve 'fs/promises'

  Import trace for requested module:
    ./node_modules/@sap-cloud-sdk/connectivity/dist/http-agent/index.js
    ./node_modules/@sap-cloud-sdk/connectivity/dist/index.js
    ./src/app/index.tsx
    ./src/pages/index.tsx

  https://nextjs.org/docs/messages/module-not-found
```

## Development
1. `nvm use` to use node 16
1. `yarn` with yarn@1 to install dependencies.
1. `yarn start` to run the app
1. Visit http://localhost:8090 in browser.
1. Building will success with index rendered welcome page, as well as `Destination name: foobar`.