import Pesquisador from '../models/pesquisadorModel.js'

export const store = async (req, res)=> {
    try {
        const pesquisador= await Pesquisador.create(req.body)
        return res.status(201).json(pesquisador)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const pesquisador= await Pesquisador.find().exec()
        return res.status(200).json(pesquisador)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const show = async (req,res)=> {
    try {
        const pesquisador= await Pesquisador.findById(req.params.id).exec()
        return res.status(200).json(combate)
    }catch (error){
       return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const pesquisador= await Pesquisador.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(pesquisador)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const pesquisador= await Pesquisador.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(pesquisador)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}