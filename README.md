
# Angular2 people


### Prerequisites

1. Latest version of Node to be installed.
2. Install MongoDB and make sure it is running on default port 27017 (if not then please configure constants.ts and change the connection for mongoDB).

### Global packages
```
    npm install ts-node -g
    npm install typescript-node -g
```

### Steps to Run
```sh
    npm install          <= install all the npm Dependencies
    npm run build        <= build and compile the dest folder
    npm run deploy       <= start the Nodemon and watch for changes.
```
## End-2-End Testing (Protractor)
To run the end-2-end (e2e) tests against the application, we use [Protractor][protractor].

### Starting the Web Server

First, we need the application to be running via the web-server.
From the project's root directory run:

```
npm run deploy
```

The application should now be available at http://localhost:3000/index.html.

### Testing with Protractor
As a one-time setup, Install protractor
```
npm install -g protractor
```
As a one-time setup, download webdriver.

```
npm run update-webdriver
```

Start the Protractor test runner, using the e2e configuration:

```
npm run protractor
