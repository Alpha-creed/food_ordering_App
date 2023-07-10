const { faker } =require('@faker-js/faker');
const MongoClient = require("mongodb").MongoClient;
const _ = require("lodash");

async function main(){
    const url = process.env.MONGO_URL
    const client = new MongoClient(url);

    try{
        await client.connect();

        const productCollection = client.db("Food_Ordering_App").collection("products");
        const categorySchema = client.db("Food_Ordering_App").collection("categories");

        productCollection.drop()
        let Categories =['breakfast','lunch','diner','drinks'].map((category)=>{return{name:category}});
        await categorySchema.insertMany(Categories);

        let imageUrls = [
            'https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063556_640.png',
            'https://artfiles.alphacoders.com/160/thumb-160452.jpeg',
            'https://artfiles.alphacoders.com/160/thumb-160461.png',
        ]

        let products = [];
        for(let i=0;i<10;i+=1){
            let newProduct ={
                name:faker.commerce.productName(),
                adjective:faker.commerce.productAdjective(),
                description:faker.commerce.productDescription(),
                price:faker.commerce.price(),
                category:_.sample(Categories),
                imageUrl:_.sample(imageUrls)
            };
            products.push(newProduct);
            console.log("its psuhed")
        }
        await productCollection.insertMany(products);
        console.log("its inserted")
    }catch(e){
        console.log(e);
    }finally{
        await client.close();
    }
}
main();