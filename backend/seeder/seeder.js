import mongoose from 'mongoose'
import Product from '../models/product.js'
import products from './data.js'

const seedProducts = async () => {
    try {
        await mongoose.connect("mongodb+srv://sherss:dMy4ogQDOU56Zxf5@cluster0.erwqchr.mongodb.net/?retryWrites=true&w=majority")

        await Product.deleteMany()
        console.log("Products are deleted")

        await Product.insertMany(products)
        console.log("Products are added")

        process.exit()
    } catch (error) {
        console.log(error.message)
        process.exit()
    }
}

seedProducts()