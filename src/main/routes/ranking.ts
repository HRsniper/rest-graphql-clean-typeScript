import { Router } from "express";
import { makeLoadLastRankingController } from "@/main/factories";

export default (router: Router): void => {
  router.get("/rankings/last", (request, response) => {
    response.send(makeLoadLastRankingController());
  });
};
