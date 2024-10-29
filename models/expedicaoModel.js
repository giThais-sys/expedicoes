import {Schema, model} from 'mongoose'

const expedicaoSchema= new Schema ({
    localidade: {
        type: String,
        required: true
    },
    data: {
        type: Date,
        required: true
    },
    participantes: {
        type: [Schema.Types.ObjectId],
        ref: 'Pesquisador',
        required: 0
    },
    especiesEncontradas: {
        type: [Schema.Types.ObjectId],
        ref: 'Especie',
        required: 0
    }
})

export default model ('Expedicao', expedicaoSchema)