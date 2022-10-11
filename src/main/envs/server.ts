const port = process.env.PORT ? parseInt(process.env.PORT, 10) : undefined;

export const server = {
  environment:
    process.env.NODE_ENV === "production" ? "production" : "development",
  type: process.env.SERVER_TYPE ?? "udpServer",
  port: port && Number.isNaN(port) ? port : 3333,
  host: process.env.HOST || "127.0.0.1",
};
