import {Router} from 'express';
import orphanagesController from './controllers/orphanagesController'
import multer from 'multer'
import uploadsConfig from './config/upload'
const routes = Router()

// ####Configuração do multer######
const upload = multer(uploadsConfig)
// ### Methodos do Orphaneges ######
routes.get('/orphanages', orphanagesController.index)
routes.get('/orphanages/:id', orphanagesController.show)
routes.post('/orphanages',upload.array('images'), orphanagesController.create)





export default routes