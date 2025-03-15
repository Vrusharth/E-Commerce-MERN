import express from 'express';
import dotenv from 'dotenv';
import { connectdb } from './config/db.js';
import productRoutes from './routes/product.routes.js';



dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON

app.use("/api/products", productRoutes); // Use the product routes

// Connect to MongoDB and start the server
connectdb().then(() => {
  app.listen(5000, () => {
    console.log('Server is started at http://localhost:5000');
  });
}).catch(error => {
  console.error("Failed to connect to MongoDB:", error);
  process.exit(1);
});

// Routes
// app.get('/home', (req, res) => {
//   res.send('Home page');
// });


// app.update('/api/products/:id',async(req,res)=>{
