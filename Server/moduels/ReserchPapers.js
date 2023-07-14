import Paper from "../models/ReserchPaper.js";
export const createPaper = async (req, res) => {
  try {
    const { title, description, date, time, by, areaOfResearch, username } = req.body;

    const paper = new Paper({
      title,
      description,
      date,
      time,
      by,
      areaOfResearch,
      username
    });

    const createdPaper = await paper.save();
    res.status(201).json(createdPaper);
  } catch (error) {
    console.log(error, "here")
    res.status(500).json({ error: 'Failed to create the paper' });
  }
};

// Controller to get all research papers published in a given year
export const getPapersByYear = async (req, res) => {
  try {
    const { year } = req.params;

    const papers = await Paper.find({
      date: {
        $gte: new Date(`${year}-01-01`),
        $lte: new Date(`${year}-12-31`)
      }
    });

    res.json(papers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get the papers' });
  }
};

// Controller to get research papers by a particular username
export const getPapersByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const papers = await Paper.find({ username });

    res.json(papers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get the papers' });
  }
};
