console.log("Hello World")
const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require
const port = process.env.PORT || 5000('./middleware/errorMiddleware')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals',require('./routes/goalRoutes.js'))

app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`))
