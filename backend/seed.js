const { faker } = require('@faker-js/faker');
const { MongoClient } = require('mongodb');
const _ = require('lodash');
require('dotenv').config();


async function main() {
  const url =process.env.MONGO_URL;
  const client = new MongoClient(url);

 
  try {
    await client.connect();

    const productCollection = client.db('Food_Ordering_App').collection('products');
    const categorySchema = client.db('Food_Ordering_App').collection('categories');

    await productCollection.drop();

    let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => {
      return { name: category }; 
    });

    await categorySchema.insertMany(categories);
  
    let imageUrls = [
      "https://res.cloudinary.com/dqxhisedx/image/upload/v1688164957/cld-sample-4.jpg",
      "https://res.cloudinary.com/dqxhisedx/image/upload/v1688164954/samples/breakfast.jpg",
      "https://res.cloudinary.com/dqxhisedx/image/upload/v1688164941/samples/animals/kitten-playing.gif",
      "https://res.cloudinary.com/dqxhisedx/image/upload/v1688164931/samples/food/pot-mussels.jpg",
      "https://res.cloudinary.com/dqxhisedx/image/upload/v1688164929/samples/food/dessert.jpg",
    ]
 
    let products = [];
    for (let i = 0; i < 10; i += 1) {
      let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: _.sample(categories),
        imageUrl: _.sample(imageUrls),
      }
      products.push(newProduct);
      console.log('Product pushed:', newProduct);
    }

    await productCollection.insertMany(products);
    console.log('Products inserted successfully');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

main();
