import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, notre projet wenze va maintenant debuté par ici!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
