import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

let CategorySchema = new mongoose.Schema({
  _id: ObjectId,
  ownerId: {
    ref: 'user',
    type: ObjectId,
    required: true
  },
  description: {
    type: String, 
    required: true
  },
  name: {
    type: String, 
    required: true
  },
  color: {
    type: String,
    required: true
  },
  participants: [{
    prticipantId: {
      type: ObjectId,
      required: true,
      ref: 'user'
    },
    role: {
      type: Number,
      required: true
    }
  }],
  currentTasks: [{
    type: ObjectId,
    ref: 'task'
  }],
  completedTasks: [{
    type: ObjectId,
    ref: 'task',
  }]
});


let CategoryModel = mongoose.model('category', CategorySchema);
export default CategoryModel;