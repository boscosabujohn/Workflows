import express from "express";
import mongoose from "mongoose";
import documentRoutes from "./routes/documentRoutes.js";
import versionControlRoutes from "./routes/versionControlRoutes.js";
import aiInsightRoutes from "./routes/aiInsightRoutes.js";
import workflowTemplateRoutes from "./routes/workflowTemplateRoutes.js";
import timeTrackingRoutes from "./routes/timeTrackingRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const MONGO_URI =
  "mongodb+srv://BackendUser:rUOIpCKLc0oVpmtw@clusterkreupai.imb19.mongodb.net/test?retryWrites=true&w=majority&appName=ClusterKreupAI";
//const MONGO_URI = "mongodb://localhost:27017/Workflow";
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
app.use("/api/documents", documentRoutes);
app.use("/api/version-control", versionControlRoutes);
app.use("/api/ai-insights", aiInsightRoutes);
app.use("/api/workflow-templates", workflowTemplateRoutes);
app.use("/api/time-tracking", timeTrackingRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
