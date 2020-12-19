import { LastRankingScore } from "@/domain/usecases";
import { Controller, HttpResponse, serverError, ok } from "@/presentation/contracts";
import { RankingScoreViewModel } from "@/presentation/view-models";

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingScore: LastRankingScore) {}

  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {}
}
