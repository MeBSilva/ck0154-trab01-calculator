const port = process.env.CLIENT_PORT
  ? parseInt(process.env.CLIENT_PORT, 10)
  : undefined;

export const client = {
  type: process.env.CLIENT_TYPE ?? "udpClient",
  port: port && Number.isNaN(port) ? port : 3334,
  host: process.env.CLIENT_HOST || "127.0.0.1",
};
