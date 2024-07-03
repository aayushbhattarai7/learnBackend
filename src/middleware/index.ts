import cors from 'cors'
import path from 'path'
import express, {NextFunction, Request, Response, type Application} from 'express'
import {DotenvConfig} from '../config/env.config'
import {morganMiddleware} from './morgan.middleware'
import { errorHandler } from './errorHandler.middleware'
import { StatusCodes } from '../constant/statusCodes'

const middleware = (app:Application) => {
    console.log('DotenvConfig.CORS_ORIGIN', DotenvConfig.CORS_ORIGIN)
   
    app.use(cors({
        origin:DotenvConfig.CORS_ORIGIN,
        methods:['GET', 'POST', 'PATCH','DELETE', 'PUT', 'OPTIONS'],
        allowedHeaders: ['Content-Type','Authorization'],
    }))

    app.use((req:Request, res:Response, next:NextFunction)=>{
        const userAgent = req.headers['user-agent']
        const apikey = req.headers['apikey']
        if(userAgent && userAgent.includes('Mozilla')) {
            next()
        }else{
            if(apikey === DotenvConfig.API_KEY) next()
            else res.status(StatusCodes.FORBIDDEN).send('Forbidden')
        }
    })
    app.use(express.json({
        limit:"10mb"
    }))
    app.use(morganMiddleware)
    app.use(errorHandler)
    app.use(express.static(path.join(__dirname, '..', '..', 'public')))
    app.use('/public/uploads', express.static(path.join(__dirname, '..', '..', 'public/uploads')))

}

export default middleware