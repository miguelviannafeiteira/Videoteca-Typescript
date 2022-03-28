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

  async update (req:Request, res) {
    const { title, link } = req.body

    if (!title && !link) {
      return res.status(400).json({ error: 'Deve informar um novo titulo ou novo link' })
    }

    if (title) res.video.title = title
    if (link) res.video.link = link

    try {
      await res.video.save()
      return res.status(200).json({ message: 'Video atualizado com sucesso' })
    } catch (err) {
      res.status(500).json({ error: err.message })
    }
  }

  async delete (req:Request, res) {
    try {
      await res.video.remove()
      return res.status(200).json({ message: 'Video excluído com sucesso' })
    } catch (err) {
      return res.status(500).json({ err: err.message })
    }
  }

  async updateLike (req:Request, res) {
    res.video.liked = !res.video.liked

    try {
      await res.video.save()

      return res.status(200).json({
        message: `Você deu ${
          res.video.liked ? 'liked' : 'unliked'
        } no video`
      })
    } catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}

export default new VideoController()
