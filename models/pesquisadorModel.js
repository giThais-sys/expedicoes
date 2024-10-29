import {Schema,model} from 'mongoose'

const pesquisadorSchema= new Schema ({
    nome: {
        type: String,
        required: true
    },
    campoDeEstudos: {
        type: String,
        required: true
    },
    expedicoesParticipadas: {
        type: Number,
        required: true
    }

})

export default model ('Pesquisador', pesquisadorSchema)