import express from "express"
import { getTaxis } from "./controllers/TaxiController"

const PORT = process.env.PORT || 3000;

const app = express()
app.use(express.json())

app.get("/taxis", getTaxis)

app.listen(PORT, () => {
	console.log(`Servidor corriendo en el puerto ${PORT}`)
	console.log(`http://localhost:${PORT}/`)
});
