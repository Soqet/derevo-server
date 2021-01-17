import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

let taskSchema = new mongoose.Schema({
  _id: ObjectId,
  creatorId: {
    ref: 'user',
    type: ObjectId,
    required: true
  },
  workerId: {
    ref: 'user',
    type: ObjectId
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
  comments: [{
    creatorId: {
      type: ObjectId,
      required: true,
      ref: 'user'
    },
    content: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }],
  status: {
    type: Number,
    required: true
  },
  creationDate: {
    type: String,
    required:true
  },
  deadlineDate: {
    type: String
  }
});


let TaskModel = mongoose.model('task', taskSchema);
export default TaskModel;