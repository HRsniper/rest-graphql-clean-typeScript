import { LastRankingScore } from "@/domain/usecases";

export class LoadLastRankingController implements Controller {
  constructor(private readonly LastRankingScore: LastRankingScore) {}

  async handle(): Promise<[]> {}
}
