require('dotenv').config();
const express = require('express');
const goalRouter = require('./routes/goalRouter');
const { errorHandler } = require('./middlewares/errorMiddleware');
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', goalRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Serves has been started on port ${port}...`));