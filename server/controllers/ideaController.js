import Idea from "../models/Idea.js";
import { generateReport } from "../services/aiService.js";
import asyncHandler from "../middleware/asyncHandler.js";
import mongoose from "mongoose";

// POST /api/ideas
export const createIdea = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400);
    throw new Error("Title and description are required");
  }

  const report = await generateReport(title, description);

  const idea = await Idea.create({
    title,
    description,
    report,
  });

  res.status(201).json(idea);
});

// GET /api/ideas
export const getIdeas = asyncHandler(async (req, res) => {
  const ideas = await Idea.find().sort({ createdAt: -1 });
  res.json(ideas);
});

// GET /api/ideas/:id
export const getIdeaById = asyncHandler(async (req, res) => {

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid Idea ID");
  }

  const idea = await Idea.findById(req.params.id);

  if (!idea) {
    res.status(404);
    throw new Error("Idea not found");
  }

  res.json(idea);
});

// DELETE /api/ideas/:id
export const deleteIdea = asyncHandler(async (req, res) => {

  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid Idea ID");
  }

  const idea = await Idea.findById(req.params.id);

  if (!idea) {
    res.status(404);
    throw new Error("Idea not found");
  }

  await idea.deleteOne();

  res.json({ message: "Idea deleted" });
});