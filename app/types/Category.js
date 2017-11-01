const Category = `
    type Category {
        _id: ID!,
        name: String,
        created_at: String,
        updated_at: String
    }
    type Query {
        category(_id: ID!) : Category,
        categories : [Category]
    }

    type Mutation {
        addCategory(
            name : String
        ) : Category
    }
`
export default Category