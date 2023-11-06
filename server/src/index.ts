#!/usr/bin/env ts-node

import express, { Request, Response, Application } from 'express';
import effectMapping from './controllers/imageProcessingController';
import { urlToBlob } from './utilities/helpers';
import cors from 'cors';


const port = process.env.PORT || 5000

const app: Application = express()
app.use(cors())

app.get('/', (req: Request, res: Response) => {
    res.json({
        youareattherightplace: true
    })
})

app.post('/:payload', async (req: Request, res: Response) => {
    const effect: string = req.params.payload
    const imageURL = req.query.imageURL
    const imageBlob = await urlToBlob(`${imageURL}`)
    const modifiedImageBlob = await effectMapping[effect](imageBlob)
    res.json({
        newURL: URL.createObjectURL(modifiedImageBlob)
    })
})


app.listen(port, () => {
    console.log("Server is fire @" + port)
})