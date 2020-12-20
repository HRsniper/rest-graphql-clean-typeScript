import express from "express";

import { setupRoutes } from "@/main/config/routes";
import { setupApolloServer } from "@/main/config/apollo-server";

export const app = express();
setupRoutes(app);
setupApolloServer(app);
