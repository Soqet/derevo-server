import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

let FolderSchema = new mongoose.Schema({
  _id: ObjectId,
  ownerId: {
    type: ObjectId,
    required: true,
    ref: 'user'
  },
  categories: [{
    type: ObjectId,
    ref: 'category'
  }],
  color: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  },
  description: {
    type: String,
    required: true
  }
});


let FolderModel = mongoose.model('folder', FolderSchema);
export default FolderModel;