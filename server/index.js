import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import ideaRoutes from "./routes/ideaRoutes.js";
import errorHandler from "./utils/errorHandler.js";

dotenv.config();

const app = express();

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));

app.options("*", cors());

app.use(express.json());

app.use("/api/ideas", ideaRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use(errorHandler);

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});