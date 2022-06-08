const express = require('express');

// Initializing the Router for path: `/`
const router = express.Router();


router.get('/', (rq, rs) => {
    
    rs.status(200).json({
        message_1: "This is the homepage of the Dashboard",
        message_2: "Here the user cannot see much.",
        message_3: "A sign-in/sign-up button should be available."
    })

});

module.exports = router;