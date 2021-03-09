// To query our database, we can write as

db.items.find({rating: 3.5})

// The above code will give the list of those items having the rating as 3.5

**********************************************************************************************

//  we can also use some complex functions like greater than or less than to meet our query as follows

db.items.find({rating: {$gt: 3.5}})

// The above code will give the list of all those items having rating greater than 3.5

*********************************************************************************************************

// We can also use and operator to meet our query. The example is as follows-

db.items.find({rating: {$gt: 3.5}, price:{$gt: 4000}})

// This code will give the list of all those items having ratings greater than 3.5 and having prices more than 4000.

******************************************************************************************************

db.items.find({rating: {$lt: 3.5}, price:{$gt: 114000}})

// We will get the output as the list of those items whose ratings are less than 3.5 and price more than 114000.

****************************************************************************************************************

// it is not the same in the case of Or. While using OR operator, we will use a dollar ‘$’ symbol as follows-

db.items.find({ 
    $or:[{rating: {$lt: 3.5}}, {price:{$gt: 114000}}] 

})

*********************************************************************************************************************

