import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
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
    time:{
        type : String,
        required : true,
    },
    location: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['workshop', 'seminar', 'extracurricularActivity'],
      required: true
    },
    speakers: [
      {
        name: {
          type: String,
          required: false // Make the name field optional
        },
        bio: {
          type: String,
          required: false // Make the bio field optional
        },
        email: {
          type: String,
          required: false // Make the email field optional
        }
      }
    ],
    
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

export default Event;
