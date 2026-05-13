const express = require("express");
const os = require("os");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

app.get("/", (req, res) => {
  res.json({
    message: "🚀 Node.js App running on AWS ECS (Dockerized)",
    hostname: os.hostname(),
    timestamp: new Date(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    uptime: process.uptime(),
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    app: "Containerized Node App",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});