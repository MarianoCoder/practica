import { Router } from "express"


const router = Router()

router.get("/", (req, res)=>{
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
res.render("estudiantes", { estudiantes })

})

export default router