import winston, { format } from "winston";

const { combine, colorize, timestamp, printf } = format;

const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(colorize({}), timestamp(), logFormat),
  transports: [new winston.transports.Console()],
});

export default logger;
