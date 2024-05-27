const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()
const blogRoute = require('./route/blog')

const app = express()



//note
//conncet cloud database
//mongoose.connect(connecting string,option)
// connecting to database is finish and not finish =>connect is PROMISE type have to use then(if connect sucess go to then ) and catch(if have eror between connect database  go to catch)
mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        // useUnitfiedTopology: false
    })
    .then(() => console.log(("moogoose connected")))
    .catch((err) => console.log(err))





//middleware
app.use(express.json()) // to response json to client
app.use(cors())
app.use(morgan("dev")) // ดักตัว request


//route
app.use('/api', blogRoute)
    //=>http://localhost:5500/api/blog




// move to route folder
// app.get("*", (req, res) => { //"*" anypath..
//     res.json({
//         data: "message from server"
//     })
// })


const port = process.env.PORT || 8080

app.listen(port, () => console.log(`start server in port ${port}`))