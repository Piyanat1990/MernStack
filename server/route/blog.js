const express = require("express")
const router = express.Router()
const { create } = require("../controler/blogControler")




router.post('/create', create)

module.exports = router



// note to test
// router.get('/blog', create)

// module.exports = router

// test =http://localhost:5500/api/blog


//  note Move to controller
// router.get('/blog', (req, res) => {
//     res.json({
//         data: "Hello Route Blog"
//     })
// })

// module.exports = router