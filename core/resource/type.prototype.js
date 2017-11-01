const plural = require('plural')
function typePrototype(name) {
    return `const ${name} = \`
    type ${name} {
        _id: ID!,
        name: String,
        created_at: String,
        updated_at: String
    }
    type Query {
        ${name.toLowerCase()}(_id: ID!) : ${name},
        ${plural(name).toLowerCase()} : [${name}]
    }

    type Mutation {
        add${name}(
            name : String
        ) : ${name}
    }
\`
export default ${name}`
}

module.exports = typePrototype