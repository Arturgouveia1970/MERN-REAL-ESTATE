import express from 'express';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_DB)

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
}) //