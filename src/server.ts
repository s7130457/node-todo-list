import express from "express"
import todoRouter from './route/todo'
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api', todoRouter);
app.use('/static', express.static(`${__dirname}/public`))

app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
