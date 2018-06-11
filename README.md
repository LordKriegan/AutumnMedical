# AutumnMedical
This is a site I am building for a cousin who owns his own Medical practice. It is still a WIP, and there are definitely some things I do not like. For example I don't like how I am generating the direction list in the map, but trying to set a state kept causing repeated updates, which triggered multiple calls to Google Maps API until it would be denied; probably cus Google assumed it was a bot. 

TODO list:

Setup a MySQL/Sequelize database.

Add a news feed to the home page (utilizing above database).

Trackdown why a setState wasn't working as expected for map component, potential refactor.

Redesign layout... feels a little too basic at the moment.