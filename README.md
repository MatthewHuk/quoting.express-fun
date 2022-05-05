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

3. We want to add a user to our system.  Create a new api route that adds a new user and returns it.
   This route will take a username as a parameter, and an age as a query
    
    -Note: Create an array with an object to hold a User (pre-populate this).  (This is done locally so that we can fake a db).
    * Add the user to our local object - make sure its unique.
    * If they don't supply an age then take the length of their username as their age
    * Remove spaces from the username and make sure it is lower case.
    * Handle case for an existing user
    * Return the user object as json with appropriate status code.
    * Handle errors
    * Add an email in the request, how best to do this?
    * send an optional message in the body
    * Any other validation considerations?

4. Just having users is boring!  Let's make a new route that returns an anime quote (from a public api)
    * public api - https://animechan.vercel.app/guide#default-quotes
    * add the "character" and quote to our User object

5. Create a function to add a missing quote to our users who don't have one yet
   
6. Filtering - Create an api route that returns some stats about our users
   -Note: we may need to create some pre-populated data to test this
   * The sum of the ages of all users
   * Order the users by age - ascending and desc
   * Remove users that have quotes that are over 10 characters
   * The first user whose age is even
   * Get two anime quotes in parallel and wait for both of them to complete
