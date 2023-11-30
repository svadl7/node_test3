//https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database 
const {MongoClient} = require('mongodb');

 
async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri ="mongodb+srv://vadlamudisai1:Jaswanth3579@webtrail.o1tsui4.mongodb.net/?retryWrites=true&w=majority";
 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 

       // await findsomedata(client);


        // Find the listing named "Infinite Views" that we created in create.js
        await findOneListingByName(client, "Chips");
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


async function findsomedata(client ){
    const cursor = client.db("sample_airbnb").collection("listingsAndReviews").find({});
    const results = await cursor.toArray();
    console.log(results);

};

async function findOneListingByName( client, nameOfListing){
    const result = await client.db("webtrialdatabase").collection("db.json").findOne({ name: nameOfListing });
    if (result) {
        console.log(`Found a listing in the collection with the name '${nameOfListing}':`);
        console.log(result);
    } else {
        console.log(`No listings found with the name '${nameOfListing}'`);
    }
}
