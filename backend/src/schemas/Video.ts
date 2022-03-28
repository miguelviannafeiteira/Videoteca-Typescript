import mongoose, { Document } from 'mongoose'

interface VideoInterface extends Document {
  _id:string,
  title:string,
  link:string,
  liked:boolean
}

const videoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  liked: {
    type: String,
    default: false
  }
}, {
  timestamps: true
})

export default mongoose.model<VideoInterface>('Video', videoSchema)
