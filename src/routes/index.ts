import { Router } from "express";
import { getCepInfo } from "../controllers/cepController";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).json(true);
});

router.get("/cep", getCepInfo);

export default router;
