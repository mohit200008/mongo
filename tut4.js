// harrryKart here is a fictional ecommerce website made by us for an example
use harryKart

// to insert a single row or a collection
db.items.insertOne({name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98})

//In the above code, we have made a document collection whose name is Samsung 30s, price is 22000, rating is 4.5, and so on. However, we can include many documents inside it.

*******************************************************************************************

// Now we will see how we can insert multiple documents. For this, we will use the function known as insertMany. We can insert different arrays in this separated with comma.

db.items.insertMany([{name: "Samsung 30s", price: 22000, rating: 4.5, qty: 233, sold: 98}, {name: "Moto 30s", price: 29000, rating: 3.5, qty: 133, sold: 598}, {name: "Realme 80s", price: 129000, rating: 2.5, qty: 633, sold: 98, isBig: true}])
*****************************************************************************************************
// To see the whole list of documents written by us, we can write- db.items.find(). The data stored in the data directory will never get deleted until you do it manually. The process takes up the commands one by one and stores it in the data.
*************************************************************************************************
// The primary key here is ObjectId. MongoDb does not let any kind of schema enforcement on your data.