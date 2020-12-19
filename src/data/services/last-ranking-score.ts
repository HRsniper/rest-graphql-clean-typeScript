import { RankingScore } from "@/domain/entities";
import { LastRankingScore } from "@/domain/usecases";

export class LastRankingScoreService implements LastRankingScore {
  constructor(private readonly loadLastRankingRepository: LoadLastRankingRepository) {}

  async lastScore(): Promise<RankingScore[]> {}
}
