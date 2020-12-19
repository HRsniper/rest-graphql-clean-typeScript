import express from "express";

import { setupRoutes } from "@/main/config/routes";

export const app = express();
setupRoutes(app);
