import mongoose from 'mongoose'
import Category from '../models/Category'
const CategoryResolver = {
    Query: {
        category: async(root, args) => {
            return await Category.findById(args._id)
        },
        categories: async() => {
            return await Category.find({})
        }
    },
    Mutation: {
        addCategory: async(root, args) => {
            let category = new Category()
            category.name = args.name
            await category.save()
            return category
        }
    }
}

export default CategoryResolver