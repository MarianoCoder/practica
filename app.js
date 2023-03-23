import express from 'express'

import indexRouter from "./routers/index.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("static", express.static("./public"))

app.use("/api", indexRouter)


export default app
