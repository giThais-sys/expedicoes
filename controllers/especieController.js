import Especie from '../models/especieModel.js'

export const store = async (req, res)=> {
    try {
        const especie= await Especie.create(req.body)
        return res.status(201).json(especie)
    }catch (error) {
        return res.status(500).json({erro:error})
    }
}
export const index = async (req,res)=> {
    try {
        const especie= await Especie.find().exec()
        return res.status(200).json(especie)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}

export const show = async (req,res)=> {
    try {
        const especie= await Especie.findById(req.params.id).exec()
        return res.status(200).json(especie)
    }catch (error){
       return res.status(500).json({erro:error})
    }
}

export const update= async (req,res)=> {
    try {
        const especie= await Especie.findByIdAndUpdate(req.params.id, req.body).exec()
        return res.status(200).json(especie)
    }catch (error){
        return res.status(500).json({erro:error})
    }

}

export const destroy= async (req,res)=> {
    try {
        const especie= await Especie.findByIdAndDelete(req.params.id).exec()
        return res.status(204).json(especie)
    }catch (error){
        return res.status(500).json({erro:error})
    }
}