import express from 'express'
import connectDB from './config/db.js'
import pesquisadorRouter from './routers/pesquisadorRouters.js'
import especieRouter from './routers/especieRouters.js'
import expedicaoRouter from './routers/expedicaoRouters.js'

connectDB()

const app= express()
app.use(express.json())

app.use('/pesquisador', pesquisadorRouter)
app.use ('/especie', especieRouter)
app.use ('/expedicao', expedicaoRouter)

app.listen (3000, ()=> console.log ('example app listening on port 3000'))