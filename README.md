# Express Fun

Fun & Games

## Getting Started


Clone this repo.

`git clone https://github.com/MatthewHuk/quoting.express-fun.git`


Run npm install.

```
npm install
```

Start the service with npm. 
```
npm start
```

Browse to `http://localhost:3000`

You will need to ensure the port 3000 is free.

Run npm test.
```
npm test
```

## Steps

1. Move the "normalizePort" function located in the app.js file, into a separate helper module.

2. There is a failing test - lets fix it!

3. Create a route to add a new user.  This route will take a username parameter.
    Note: Create an array with an object to hold a User (pre-populate this).  (This is done locally so that we can fake a db).
    * Add the user to our local object - make sure the id is unique.
    * Remove spaces from the username and make sure it is lower case.
    * Handle case for an existing user
    * Return the user object as json with appropriate status code.
    * capture and return any errors








