
import mongoose from 'mongoose'
import Product from '../models/Product'
const ProductResolver = {
    Query: {
        product: async(root, args) => {
            return await Product.findById(args._id)
        },
        products: async() => {
            return await Product.find({})
        }
    },
    Mutation: {
        addProduct: async(root, args) => {
            let product = new Product()
            product.name = args.name
            await product.save()
            return product
        }
    }
}

export default ProductResolver