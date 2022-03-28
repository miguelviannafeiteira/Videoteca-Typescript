import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = () => {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }as ConnectOptions, () => {
    console.log('conectado com o banco de dados')
  })

  const db = mongoose.connection
  db.on('error', (error) => console.error(error))
}

export default connectToDatabase
