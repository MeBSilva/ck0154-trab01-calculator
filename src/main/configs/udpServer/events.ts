import { Socket } from "dgram";
import { readdirSync } from "fs";
import { join } from "path";

export const setupEvents = (app: Socket): void => {
  const eventsDir = join(__dirname, "..", "..", "./events");

  readdirSync(eventsDir).map(async (file) => {
    const fullPath = join(eventsDir, file);

    const importedRoute = await import(fullPath);

    // Calls default function if it exists on file
    if (
      Object.entries(importedRoute).map(
        (item) => !!(item[0] === "default" && item[1])
      ).length > 0
    ) {
      importedRoute.default(app);
    }
  });
};
