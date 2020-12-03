require('dotenv').config()

const express = require('express')
const port = process.env.PORT || 4000
// thats so it works on other peoples computers
const cors = require('cors')
const path = require('path')

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
app.use(express.static(path.join(__dirname, 'client/build')))



// this is the whole api :)
app.use('/api/*', (_, res) => {
    res.json({ data: 'Hi Shayne!' })
})

app.use('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})