import express from 'express';
const app = express();
import cors from 'cors';

// parsers
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
