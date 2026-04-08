import express from "express";
import { createIdea, getIdeas, getIdeaById, deleteIdea } from "../controllers/ideaController.js";

const router = express.Router();

router.post("/", createIdea);
router.get("/", getIdeas);
router.get("/:id", getIdeaById);
router.delete("/:id", deleteIdea);

export default router;