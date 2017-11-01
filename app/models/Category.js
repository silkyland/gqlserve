import mongoose from 'mongoose'
import timestamps from 'mongoose-timestamp'

const schema = mongoose.Schema({name: String})
schema.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

const Category = mongoose.model('categories', schema)
export default Category