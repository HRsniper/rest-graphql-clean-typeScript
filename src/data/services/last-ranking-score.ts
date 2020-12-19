import { RankingScore } from "@/domain/entities";
import { LastRankingScore } from "@/domain/usecases";
import { LoadLastRankingRepository } from "@/data/contracts";
import { RankingUnavailableError } from "@/domain/errors";

export class LastRankingScoreService implements LastRankingScore {
  constructor(private readonly loadLastRankingRepository: LoadLastRankingRepository) {}

  async lastScore(): Promise<RankingScore[]> {
    if (new Date().getHours() > 21) {
      throw new RankingUnavailableError();
    }

    return this.loadLastRankingRepository.loadLastRanking();
  }
}
