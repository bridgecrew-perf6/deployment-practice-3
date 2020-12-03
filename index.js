require('dotenv').config()

const express = require('express')
const port = process.env.PORT || 4000
// thats so it works on other peoples computers
const cors = require('cors')

console.log('hi Sterling!')
console.log(__dirname)
console.log(process.env.USER)
console.log(process.env.PORT)
console.log(process.env.STERLING)
console.log(process.env.GROCERIES)
console.log(process.env.FOO)

const app = express()
app.use(cors())
app.use(express.json())



// this is the whole api :)
app.use('/api/*', (_, res) => {
    res.json({ data: 'Hi Shayne!' })
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})