const { faker } = require('@faker-js/faker');
const { MongoClient } = require('mongodb');
const _ = require('lodash');
require('dotenv').config();

async function main() {
  const url = process.env.MONGO_URL;
  const client = new MongoClient(url);
  
     if (!url) {
      throw new Error('MongoDB connection string is missing');
    }

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
      'https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063556_640.png',
      'https://artfiles.alphacoders.com/160/thumb-160452.jpeg',
      'https://artfiles.alphacoders.com/160/thumb-160461.png',
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
