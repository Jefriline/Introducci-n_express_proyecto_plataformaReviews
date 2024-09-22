import express from "express";
import bodyParser from 'body-parser';

import reviewRoutes from './routes/ReviewRoutes/reviewRoutes';
import productRoutes from './routes/ProductRoutes/productRoutes';
import userRoutes from './routes/UserRoutes/userRoutes';

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());


app.use('/reviews', reviewRoutes);
app.use('/products', productRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});