const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 7000
const goalRouter = require('./routes/goalRoutes')
const userRouter = require('./routes/userRoutes')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', goalRouter)
app.use('/api/users', userRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))