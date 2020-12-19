import { RankingScore } from "@/domain/entities";
import { LastRankingScore } from "@/domain/usecases";
import { LoadLastRankingRepository } from "@/data/contracts";

export class LastRankingScoreService implements LastRankingScore {
  constructor(private readonly loadLastRankingRepository: LoadLastRankingRepository) {}

  async lastScore(): Promise<RankingScore[]> {
    if (new Date().getHours() > 22) {
      throw new Error("erro");
    }

    return this.loadLastRankingRepository.loadLastRanking();
  }
}
