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

3. Create a route to add a new user.  This route will take a username parameter and age as a query.
    Note: Create an array with an object to hold a User (pre-populate this).  (This is done locally so that we can fake a db).
    * Add the user to our local object - make sure the id is unique.
    * If they don't supply an age then take the length of their username
    * Remove spaces from the username and make sure it is lower case.
    * Handle case for an existing user
    * Return the user object as json with appropriate status code.
    * capture and return any errors

4. Just having users are boring!  Let's make a new route that returns an anime quote (from a public api)
    * public api - https://animechan.vercel.app/guide#default-quotes
    * add the "character" and quote to our User object

5. Create a function to add a missing quote to our users who don't have one yet
   
6. Filtering - Create an api route that returns some stats about our users
   * The sum the ages of all users
   * Order the users by age
   * Find all the users who are over the age of 18
   * Remove quotes that are over 1000 characters 
   









