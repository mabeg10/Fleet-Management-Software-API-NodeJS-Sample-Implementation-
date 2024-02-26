import { Handler } from "express";
import { queryTaxis } from "../repositories/TaxiRepository";

export const getTaxis: Handler = async (req, res) => {
    try {
        const page = req.query.page ?? "1";
        
        const limit = req.query.limit ?? "10";
        
        const startIndex = (+page - 1) * +limit;

        console.log(page, limit, startIndex)

        const plateIn = req.query.plate as string;
        if (+page < 0 || +limit < 0) {
            return res.status(400).json({ message: "The page number and limit cannot be less than 0" });
        }
        const taxis = await queryTaxis(startIndex, +limit, plateIn);
        return res.status(200).json(taxis);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'error al obtener los taxis' })
    }
}