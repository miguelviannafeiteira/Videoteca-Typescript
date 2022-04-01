import { validate as isUuid } from 'uuid'
import Video from '../schemas/Video'
import { Request, Response, NextFunction } from 'express'

interface resVideo extends Response {
  video: {
    _id: string,
    title: string,
    link:string,
    liked: boolean
  }
}

class VideoMiddleware {
  async validateId (req:Request, res:resVideo, next:NextFunction):Promise<Response> {
    const { id } = req.params
    if (!isUuid(id)) {
      return res.status(400).json({ err: 'ID inválido' })
    }
    try {
      const video = await Video.findById(id)
      res.video = video
      if (!video) {
        return res.status(404).json({ error: 'Video não encontrado.' })
      }
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
    next()
  }
}

export default new VideoMiddleware()
