const express = require("express");

const authRouter = express.Router();

authRouter.use(express.urlencoded({ extended: true }));

authRouter.get("/authenticate", (rq, rs) => {
	console.log(rq.headers);
    rs.send('GET: /auth/authenticate');
});

authRouter.post("/authenticate", (rq, rs) => {
	console.log(rq.headers);
    rs.send('POST: /auth/authenticate');
});

authRouter.get('/register', (rq, rs) => {
    console.log(rq.headers);
    rs.status(200).send('GET: /auth/register');
});

authRouter.post('/register', (rq, rs) => {
    console.log(rq.headers);
    rs.status(200).send('POST: /auth/register');
});

module.exports = authRouter;
