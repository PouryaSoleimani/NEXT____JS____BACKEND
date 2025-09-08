import mongoose from 'mongoose'

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect('mongodb://localhost:27017/NEXT__DB')
        .then(() => console.log('CONNECTED TO NEXT__DB DATABASE'))
    }
  } catch (error) {
    console.log("ERROR =>", error)
  }
}
export default connectToDB 