import express from 'express';
import connectMongoose from './mongoose.js';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import orderRouter from './routers/orderRouter.js';

await connectMongoose();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.get('/api/config/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID_SB || 'sb');
});

// users route
app.use('/api/users', userRouter);

// products route
app.use('/api/products', productRouter);

// order route
app.use('/api/orders', orderRouter);

// catch error
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
