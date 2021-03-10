show dbs 
use harryKart
show collections

// The show collection command will give us all the collections which are known as tables in the relational database system. To make a new collection, we can write as

db.anotherCollection.insertData({a: 89})

********************************************************************************************
// From the above picture, suppose we want to update the price of “Moto 30s” from 29000 to 2. For doing this, we can write as follows-

db.items.updateOne({name: "Moto 30s"}, {$set: {price: 2}})

// The updateOne() function is used to update only 1 item
***************************************************************************************************

//  We have to change the rating of all the three mobiles to 1. To do this, we can write as follows-

db.items.updateMany({name: "Moto 30s"}, {$set: {price: 3, rating: 1}})

//The updateMany() function is used to update multiple items

**************************************************************************************************

