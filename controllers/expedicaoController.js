import Expedicao from '../models/expedicaoModel.js'

export const store = async (req, res)=> {
    try {
        const expedicao= await Expedicao.create(req.body)
        return res.status(201).json(expedicao)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const expedicao= await Expedicao.find().exec()
        return res.status(200).json(expedicao)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const show = async (req,res)=> {
    try {
        const expedicao= await Expedicao.findById(req.params.id).exec()
        return res.status(200).json(expedicao)
    }catch (error){
       return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const expedicao= await Expedicao.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(expedicao)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const expedicao= await Expedicao.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(expedicao)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}