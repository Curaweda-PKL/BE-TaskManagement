const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./endpoints/User/userController');

const app = express();
app.use(express.json());
app.use(bodyParser.json())

app.use('/user', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`~> Backend running on port : ${PORT}`);
});
