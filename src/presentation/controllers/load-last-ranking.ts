import { LastRankingScore } from "@/domain/usecases";
import { Controller, HttpResponse } from "@/presentation/contracts";

export class LoadLastRankingController implements Controller {
  constructor(private readonly LastRankingScore: LastRankingScore) {}

  async handle(): Promise<HttpResponse> {}
}
