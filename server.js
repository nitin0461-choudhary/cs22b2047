const express = require('express');
const numbersRoute = require('./routes/numbers');

const app = express();
const PORT = 9876;

app.use(express.json());
app.use('/numbers', numbersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
