import express from "express";
import http from "http";
import { Server } from "socket.io";
import config from "./config";
import logger from "./config/logger";
import { handleSocket } from "./socket";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: config.corsOrigin,
  },
});

io.on("connection", handleSocket);

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(config.port, () => {
  logger.info(`started server on http://localhost:${config.port}`);
});
