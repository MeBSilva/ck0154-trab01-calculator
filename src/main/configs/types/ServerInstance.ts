export type ServerInstance = {
  startServer: ServerInstance.StartServer;
};

export namespace ServerInstance {
  export type StartServer = (port: number, host: string) => Promise<void>;
}
