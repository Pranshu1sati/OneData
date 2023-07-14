import express from 'express'
import {createEvent, getExtracurricularActivities,getSeminars,getWorkshops} from '../moduels/Events.js';

const eventRouter = express.Router();

eventRouter.get('/workshops', getWorkshops);
eventRouter.get('/seminars', getSeminars);
eventRouter.get('/extracurricularActivities', getExtracurricularActivities);

eventRouter.post('/createEvent', async (req, res) => {
    try {
      await createEvent(req, res);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to create event' });
    }
  });
  
  export default eventRouter;