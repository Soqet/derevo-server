import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

let userSchema = new mongoose.Schema({
  _id: ObjectId,
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  },
  registrationDate: {
    type: String,
    required: true
  }
});


let UserModel = mongoose.model('user', userSchema);
export default UserModel;