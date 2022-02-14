# Localy
Welcome to my Full Stack School Solo Project. This is a proof of concept for an app that aims at making consumers and shopkeepers closer, in an age in which consumers too often buy their goodies online, and have them sent home from the other side of the world. Localy allows a consumer to find out about shops in their area, by searching for very specific products. It also allows shopkeepers to advertise themselves and be more visible to their neighbours.

![(/localymock.png)]

## How to use it?
Fork this repo and clone it on your local machine. Once in the folder, run `npm install` on the root folder, and also on `/server` and `/client`.
Once that is done, you can initialize the server by using `nodemon index.js` on `/server`, if you have it installed. To initialize the client, run `npm start` from the `/client` folder.
Once that is done and you see the app on your browser, go to the inspector and adjust the view to mobile view. Being a proof of concept, this app has been developed by following a mobile only approach.

### Generating data
You are ready to populate the database. To do that, you will use the app to register a new user. It will be the only shopkeeper user the app will contain so far, since it’s empty by the time you start it. You will need to provide with a first name, a last name, an e-mail and a password. All info can be, of course, fake.

Once this is done, you should be able to see an empty shopkeeper profile. Go now to `/server` on your terminal, and run `npx sequelize-cli db:seed:all`. This command will run the file you find on `server/seeders`, and will populate the database with 6 fake flower shops in a Barcelona neighbourhood. They will be automatically associated to the shopkeeper user you created. Once that is done, you are good to go.

## What can be improved?
So many things! This is a mobile-only addressed app so, for starters, it could be refactored into React Native. The bare minimum, though, would be to reconsider all the state management the app does at the moment, and improve it to make it more efficient and less bug-prone. Using context or Redux would reduce the bugs and increase maintainability and scalability.

Also, the app deserves plenty more functionality. This is only a proof of concept, but in real life the users and the shopkeepers should be able to chat. A review system should also be implemented. Not to mention that shopkeepers should be able to do more basic requests like modifying their profile details, their shop's details, or deleting shops.

Finally, the whole product-introduction system needs to be dramatically improved. At the moment, the database only accepts an array of comma separated words, without a space after the comma. This would lead to terrible malfunctioning in real live, where different cases, plurals and languages should be taken into account.

### Detected bugs
This is the list of the current bugs to be solved:
-	There is a current issue with the “see more / see less” button of the shops in the map. Sometimes it works, sometimes it doesn’t. Probably state-related.
-	If we delete all the products of a shop via the shop profile edit section, we will see the server crashing when we try to add a new product to the shop. It is related to the way the function for introducing products is written in the shop controller. That function needs to contemplate the option that the array is empty at the time of introducing products, which currently doesn’t.

### Details to work on
-	The pin of the map should change when we click on it, to a different pin. That feature has still not been implemented.
-	The whole CSS should be revisited to make it more adaptable to different mobile screens without losing proportions.

