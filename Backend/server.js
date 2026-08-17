const express = require("express")
const cors = require("cors")

const app = express();

app.use(cors())
app.use(express.json())


app.post('/api/sayhello',(req,res)=>{

    const {name}= req.body

    console.log('Received name :',name)

    res.json({
        message:`Hello ${name}! Nice to meet you`
    });
})

const port = 5000

app.listen(port,()=>{
    console.log(`server runnning on port ${port}`)
})