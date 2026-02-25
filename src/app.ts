import express from 'express';
const app = express();
import cors from 'cors';
import { StationeryRoute } from './app/modules/stationery/stationery.route.js';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', StationeryRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
