import {Schema, model} from 'mongoose'

const especieSchema= new Schema ({
    nome: {
        type: String,
        required: true
    },
    localDescoberta: {
        type: String,
        required: true
    },
    raridade: {
        type: Number,
        required: true
    },
    documentado: {
        type: Boolean,
        required: true,
        default: false
    }
})

export default model ('Especie', especieSchema)