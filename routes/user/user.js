const express = require('express');

const userRouter = express.Router();

userRouter.get('/', (rq, rs) => {
    rs.status(200).send('User page');
});

module.exports = userRouter;