import mongoose from 'mongoose'
import bcrypt from 'bcrypt-nodejs'
import timestamps from 'mongoose-timestamp'

const SALT_WORK_FACTOR = 8

const schema = mongoose.Schema({
    name: String,
    username: {
        type: String, required: true, index: {
            unique: true
        }
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    }
})

schema.plugin(timestamps, {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})

schema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(SALT_WORK_FACTOR), null)
}

schema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.local.password);
}

const User = mongoose.model('users', schema)
export default User