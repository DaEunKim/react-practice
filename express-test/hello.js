const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.listen(3000, ()=>{
    console.log('서버실행완료- http://localhost:3000')
})

app.get('/', (req, res) => {
    res.send('<form method="post">' 
    + '<textarea name="memo"> 테스트 </textarea>' 
    + '<br /><input type="submit" value="전송">' 
    + '</form>')
})

app.post('/', (req, res) => {
    const s = JSON.stringify(req.body)
    res.send('POST : ' + s)
})
