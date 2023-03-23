import { Router } from "express"
import { uploader } from "../utils.js"

const router = Router()

const estudiantes = [
    {
        "nombre": "Patricio",
        "apellido": "Estrella",
        "edad": "25",
        "dni": "33258968",
        "curso": "Programacion",
        "nota": 10
    },
]

router
    .get("/", (_, res) =>{
    res.json(estudiantes)
})
    .post("/", uploader.single("avatar"), (req, res) =>{

        const { body } = req
        const estudiante = {
            ...body,
            avatar: `/static/imgs/${req.file.originalname}`,
        } 
        console.log("estudiante" , estudiante); 
        estudiantes.push(estudiante)
        res.status(201).json(estudiante)
    })
    .put("/:id", (_, res) =>{
        res.json({ok: true})})
    .delete("/:id", (_, res) =>{
        res.json({ok: true})})

export default router