// Inserting data in mongo db
// we do not need to follow a specific schema like that in mySQL
// mongod
// mongo



show dbs

use aryanKart

show collections

db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty:233, sold:98})

db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4, qty:233, sold:98},{name: "Poco M3", price: 12000, rating: 4.5, qty:233, sold:98},{name: "Iphone13", price: 122000, rating: 5, qty:233, sold:98, isbig: true}])

db.items.find()
