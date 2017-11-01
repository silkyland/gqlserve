const plural = require('plural')

function modelPrototype(txt) {
    return `import mongoose from 'mongoose'
import timestamps from 'mongoose-timestamp'

const schema = mongoose.Schema({ 
    name: String 
})

schema.plugin(timestamps, { 
    createdAt: 'created_at',
    updatedAt: 'updated_at' 
})

export default mongoose.model('${plural(txt, 2).toLowerCase()}', schema)`
}

module.exports = modelPrototype