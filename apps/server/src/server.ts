import express from "express";
import http from "http";
import { Server } from "socket.io";
import config from "./config";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: config.corsOrigin,
  },
});

io.on("connection", () => {
  console.log("A user connected");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

server.listen(config.port, () => {
  console.log(`Server is running at http://localhost:${config.port}`);
});
