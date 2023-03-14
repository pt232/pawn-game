import { Socket } from "socket.io";
import logger from "./config/logger";

export function handleSocket(socket: Socket) {
  logger.info("a user connected");

  function onWelcome() {
    socket.emit("welcome", "Welcome to the server!");
  }

  function onDisconnect() {
    logger.info("a user disconnected");
  }

  socket.on("welcome", onWelcome);
  socket.on("disconnect", onDisconnect);
}
