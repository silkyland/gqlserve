import mongoose from 'mongoose'
import { database as db } from './config'


mongoose.connect(`mongodb://${db.host}:${db.port}/${db.name}`)