import express from 'express'
import VideoController from './controllers/VideoController'

const routes = express.Router()

// routes.get('/', (req, res) => res.send('Hello World'))
routes.get('/videos', VideoController.index)
routes.post('/videos', VideoController.store)

export default routes
