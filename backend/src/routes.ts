import express from 'express'
import VideoController from './controllers/VideoController'
import VideoMiddleware from './middlewares/VideoMiddleware'

const routes = express.Router()

// routes.get('/', (req, res) => res.send('Hello World'))
routes.get('/videos', VideoController.index)
routes.post('/videos', VideoController.store)
routes.put('/videos/:id', VideoMiddleware.validateId, VideoController.update)
routes.delete('/videos/:id', VideoMiddleware.validateId, VideoController.delete)
routes.patch('/videos/:id', VideoMiddleware.validateId, VideoController.updateLike)

export default routes
