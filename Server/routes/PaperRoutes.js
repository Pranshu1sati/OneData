import express from 'express';
import { createPaper, getPapersByYear, getPapersByUsername } from '../moduels/ReserchPapers.js';

const paperRouter = express.Router();

// Route to create a new paper
paperRouter.post('/papers', createPaper);

// Route to get all research papers published in a given year
paperRouter.get('/papers/:year', getPapersByYear);

// Route to get research papers by a particular username
paperRouter.get('/papers/username/:username', getPapersByUsername);

export default paperRouter;
