const express = require('express');
const { fetchNumbers } = require('../services/fetchNumbers');
const { calculateAverage } = require('../utils/calculateAverage');
const { validateNumberId } = require('../utils/validateNumberId');

const router = express.Router();
let window = []; // Fixed-size window.

router.get('/:numberid', async (req, res) => {
  const { numberid } = req.params;

  // Validate numberid
  if (!validateNumberId(numberid)) {
    return res.status(400).json({ error: 'Invalid numberid' });
  }

  try {
    // Fetch numbers from third-party server
    const newNumbers = await fetchNumbers(numberid);

    // Store the previous window state
    const windowPrevState = [...window];

    // Update the window with unique numbers
    window = [...new Set([...window, ...newNumbers])];
    if (window.length > 10) {
      window = window.slice(window.length - 10); // Maintain fixed-size window
    }

    // Calculate the average
    const avg = calculateAverage(window);

    // Respond with the required format
    res.json({
      windowPrevState,
      windowCurrState: window,
      numbers: newNumbers,
      avg,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch numbers' });
  }
});

module.exports = router;
