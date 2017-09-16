const User = `
    type User {
        _id: ID!,
        name: String,
        username: String,
        email: String,
        password: String,
        created_at: String,
        updated_at: String
    }
    
    type Query {
        users: [User],
        user(_id: ID!): User
    }

    type Mutation {
        addUser(
            name : String,
            username:String,
            email:String,
            password:String
        ) : User
    }
`
export default User