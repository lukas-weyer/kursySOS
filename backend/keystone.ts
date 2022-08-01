import { config } from "@keystone-6/core";

import { lists } from "./schema";

import { withAuth, session } from "./auth";
import "dotenv/config";

export default withAuth(
  config({
    server: {
      cors: {
        origin: "http://localhost:3001",
        credentials: true
      }
    },
    db: {
      provider: "sqlite",
      url: "file:./keystone.db"
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data
    },
    lists,
    session
  })
);
