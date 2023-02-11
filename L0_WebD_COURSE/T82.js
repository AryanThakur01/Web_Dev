// Searching for data in mongo db

//this query will return all the objects with rating equal to 3.5 this is filter
db.items.find({rating:5})


db.items.find({rating:{$gte : 4}})  //greater than or equal to 4

db.items.find({rating:{$gt : 4.5}})  //greater than to 4



//and OPERATOR
db.items.find({rating:{$gt : 4.5}, price:{$gt : 4000}})

// gte-- greater than or equal to
// gt-- greater than
// lte-- less than equal to
// lt-- less than
// ","-- and operator


//or Operator
db.items.find({
    $or:[{rating:{$gt : 4.5}, price:{$gt : 120000}}]
})


db.items.find({rating:{$gt : 4.5}}, {rating: 1, qty: 1})