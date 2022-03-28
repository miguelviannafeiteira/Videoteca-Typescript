import Video from '../schemas/Video'
import { Request, Response } from 'express'
import { v4 as uuid } from 'uuid'

class VideoController {
  async index (req:Request, res:Response):Promise<Response> {
    try {
      const videos = await Video.find()
      return res.status(200).json({ videos })
    } catch (err) {
      res.status(500).json({ err: err.message })
    }
  }

  async store (req:Request, res:Response):Promise<Response> {
    const { title, link } = req.body
    if (!title || !link) {
      return res.status(400).json({ error: 'Preencha o titulo e o link' })
    }

    const video = new Video({
      _id: uuid(),
      title,
      link,
      liked: false
    })

    try {
      await video.save()
      return res.status(201).json(video)
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}

export default new VideoController()
