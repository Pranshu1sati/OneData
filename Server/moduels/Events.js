import Event from "../models/Events.js";

const createEvent = async (req, res) => {
    try {
      const eventData = req.body; // Assuming the event data is passed in the request body
  
      // Create a new event using the Event model
      const newEvent = await Event.create(eventData);
  
      // Return the created event as the response
      return res.status(201).json(newEvent);
    } catch (error) {
      // Handle any errors that occur during event creation
      console.log(error)
      return res.status(500).json({ error: `${res} Failed to create event` });
    }
  };
  // controllers/eventController.js


const getWorkshops = async (req, res) => {
  try {
    const workshops = await Event.find({ type: 'workshop' });
    res.status(200).json(workshops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSeminars = async (req, res) => {
  try {
    const seminars = await Event.find({ type: 'seminar' });
    res.status(200).json(seminars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getExtracurricularActivities = async (req, res) => {
  try {
    const activities = await Event.find({ type: 'extracurricularActivity' });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

  export {createEvent,
    getWorkshops,
    getSeminars,
    getExtracurricularActivities} ;