//model => ตัวเเทนของ collection ตัวเเทนของข้อมูลที่เราจะทำงานด้วย  shema โครงสร้างในการจัดเก็บข้อมูล ติดต่อกับฐานข้อมูล/ตั้งค่าฐานข้อมูล
// design sheama   => title,content,auther,slug(url)
//timestamp

//install postman => install%postman (not use slug)
//install postman => install-postman (use slug) uRL so cute and will use module slugify
const mongoose = require("mongoose")


const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, //not null


    },
    content: {
        type: {},
        required: true,


    },
    author: {
        type: String,
        default: "Admin"

    },
    slug: {
        type: String,
        lowercase: true, //เพื่อให้slug พิมเล็ก ถึงเเม้ titleเป็นพิมใหญ่
        unique: true // ค่าห้ามซ้ำกัน

    }
}, { timestamps: true })

module.exports = mongoose.model("Blogs", blogSchema)
    //ตัว schema ไม่สามารถ modify ได้

// slug จะใช้generate url