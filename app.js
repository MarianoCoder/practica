import express from 'express'

import indexRouter from "./routers/index.js"
import viewsRouter from "./routers/views/index.js"


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/static", express.static("./public"))

app.set("view engine", "hbs")
app.set("views", "./views")

app.use("/", viewsRouter)
app.use("/api", indexRouter)



export default app
