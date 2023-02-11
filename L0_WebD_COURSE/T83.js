// Deleting items from the Mongo Database

db.items.deleteOne({price: 22000})
//deleteOne will delete the matching entry and and will delete the first entry in case of multi document match


db.items.deleteMany({price: 122000})    //this will delete all the items with the given property