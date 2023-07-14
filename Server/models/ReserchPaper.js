import mongoose from 'mongoose';

const paperSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
   by :{
    type : String,
    required : true,
   },
    areaOfResearch: {
        type: String,
        required : true,
    },
    username :{
        type : String,
        required : true
    }
    
  },
  { timestamps: true }
);

const Paper = mongoose.model('Paper', paperSchema);

export default Paper;
