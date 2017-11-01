const plural = require('plural')
function resolverPrototype(name) {
    return `import mongoose from 'mongoose'
import ${name} from '../models/${name}'
const ${name}Resolver = {
    Query: {
        ${name.toLowerCase()}: async(root, args) => {
            return await ${name}.findById(args._id)
        },
        ${plural(name).toLowerCase()}: async() => {
            return await ${name}.find({})
        }
    },
    Mutation: {
        add${name}: async(root, args) => {
            let ${name.toLowerCase()} = new ${name}()
            ${name.toLowerCase()}.name = args.name
            await ${name.toLowerCase()}.save()
            return ${name.toLowerCase()}
        }
    }
}

export default ${name}Resolver`
}

module.exports = resolverPrototype