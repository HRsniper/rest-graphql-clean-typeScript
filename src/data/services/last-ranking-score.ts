import { RankingScore } from "@/domain/entities";
import { LastRankingScore } from "@/domain/usecases";

export class LastRankingScoreService implements LastRankingScore {

  async lastScore(): Promise<RankingScore[]> {
  }
}
