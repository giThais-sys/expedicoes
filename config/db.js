import mongoose from 'mongoose'

const connectDB = async () => {
    mongoose

    .connect ('mongodb://localhost:27017/expedicoes')
    .then(()=> console.log ('conectado ao MongoDB'))
    .catch ((error)=> console.log(error))
}

export default connectDB