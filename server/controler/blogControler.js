// reposibl=ility=>1.connect to database 2.process with database for save data 3.รับrequest เเละ response  ติดต่อกะ ฐานข้อมูลเเละบันทึกข้อมูล
//โปรเจ็คที่ส่วนประมวลผลจะย้ายมาที่ controller ทั้งหมด 




// slug is  blank(when ีหำthai language in title) 
// look in database will generate slug 
// slug
//    ex // "a839acce-c0cc-4ee3-88a9-2bba5ff32c4b"

// save data  =>post method
// SaveData actully we will use data from react but now test from postman
const slugify = require("slugify");

// import model blogs  
const Blogs = require("../models/blogs");
const { default: mongoose } = require("mongoose");

exports.create = (req, res) => {
    const { title, content, author } = req.body //destructuring
    let slug = slugify(title)
        // validate ตรวจสอบความถูกต้องของข้อมูล=> about coreect and incorrect data before user get request
    switch (true) {
        case !title: // bank title
            return res.status(400).json({ error: "please fill your name of title" })
            break;
        case !content: // bank content
            return res.status(400).json({ error: "please fill your your content" })
            break;
    }

    // บันทึกข้อมูลลง database
    //  mongoose v6 up จะรีเทิน a promise// ใช้ callback ไม่ได้

    Blogs.create({ title, content, author, slug })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            res.status(400).json({ error: "มีข้อมูลซ้ำกัน" })
                // res.status(400).json({ error: err })
        })





    // test respone for postman before save to database
    // res.json({
    //     data: { title, content, author, slug }
    // })

}










// to test get method///////////////
// exports.create = (req, res) => {
//     res.json({
//         data: "Hello From Blog-Controller API 55555"
//     })
// }