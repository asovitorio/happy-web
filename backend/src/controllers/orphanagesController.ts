import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import Orphanages from '../models/Ophanages'
import orphanages_view from '../views/orphanages_view';

export default {
    async index(req: Request, res: Response) {
        try {
            const orphanges = getRepository(Orphanages)
            const orphanagesList = await orphanges.find({
                relations:['images']
            })
            return res.status(200).json(orphanages_view.renderMany(orphanagesList))
        } catch (error) {
            return res.status(400).json(error)

        }
    },
    async show(req: Request, res: Response) {
        try {
            const orphanges = getRepository(Orphanages)
            const { id } = req.params
            const orphanage = await orphanges.findOneOrFail(id,{
                relations:['images']
            })
            return res.status(200).json(orphanages_view.render(orphanage))
        } catch (error) {
            return res.status(400).json(error)
        }
    },
    async create(req: Request, res: Response) {
        const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            open_hours,
            open_on_weekends
        } = req.body
        const requestImages = req.files as Express.Multer.File[]
        const images = requestImages.map(image =>{
            return {path:image.filename}
        })
        try {

            const orphanagesRepository = getRepository(Orphanages)
            const orphanage = orphanagesRepository.create({
                name,
                latitude,
                longitude,
                about,
                instructions,
                open_hours,
                open_on_weekends,
                images

            })
            const orphanageSave = await orphanagesRepository.save(orphanage)
            return res.status(201).json(orphanageSave)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
};
