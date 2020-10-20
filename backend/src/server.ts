import express from 'express';
import './database/connection';
import { getRepository } from 'typeorm'
import Orphanages from './models/Ophanages'
const app = express()
app.use(express.json())

app.post('/orphanages', async (req, res) => {

    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        open_hours,
        open_on_weekends
    } = req.body
    const orphanagesRepository = getRepository(Orphanages)
    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        open_hours,
        open_on_weekends
    })
  const orphanageSave = await orphanagesRepository.save(orphanage)

    return res.status(201).json(orphanageSave)
})
app.listen(3333, () => { console.log('rodando') })