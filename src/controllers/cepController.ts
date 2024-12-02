import { Request, Response, NextFunction } from "express";
import { fetchCep } from "../services/viaCepService";

export const getCepInfo = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const { cep } = req.query;

        if (!cep || typeof cep !== "string") {
            res.status(400).json({ error: "CEP is required and must be a string" });
            return;
        }

        const address = await fetchCep(cep);
        res.status(200).json(address);
    } catch (error) {
        next(error);
    }
};
