# Cider-Falls-MKS

look thru .filter & .find 


- What are the main resources (i.e. tables)? Design your ERD first.

Guests
ParkArea
Services

- What are the properties of each resource?

Each resource has an ID and a name. a joining table is created between park area and services to represent parkareaservices


- What is the relationship between the resources? If it's many-to-many, what additional data must you design in your ERD?



- Which modules should you create?

guests.js
parkarea.js
services.js

- What is the responsibility of each module? / What functions should be in which modules? / What is the responsibility of each function?

each module will append HTML to be invoked in main 

Guests - responsible for iterating thru all guests to see what park area they are in

parkarea - responsible for iterating thru each service to find which service is available in what park. also to iterate and see how many guests are in each park. Window alert for how many guest are in the area

services - responsible for iterating thru each service available in what park. click event for which services are in which parks 



- What should each function return?

html to main or window alert/click event 


- What is the specific algorithm for each function? Does the function need parameters? Should it return something?




