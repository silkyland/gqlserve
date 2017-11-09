import mongoose from 'mongoose'
import User from '../models/User'

const UserResolver = {
    Query: {
        async users() {
            return await User.find()
        },
        async user(root, args) {
            return await User.findById(args._id)
        }
    },
    Mutation: {
        addUser: async (root, args) => {
            let user = new User()
            user.name = args.name
            user.username = args.username
            user.email = args.email
            user.password = user.generateHash(args.password)
            await user.save(err => {
                if (err) {
                    console.log(err)
                }
            })
            return user
        }
    }
}
mongoose.disconnect()
export default UserResolver