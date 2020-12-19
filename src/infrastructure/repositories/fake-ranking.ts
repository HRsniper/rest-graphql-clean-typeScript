import { LoadLastRankingRepository } from "@/data/contracts";
import { RankingScoreModel } from "@/data/models";

import { ranking } from "@/infrastructure/data-sources";

export class FakeRankingRepository implements LoadLastRankingRepository {
  async loadLastRanking(): Promise<RankingScoreModel[]> {
    return ranking.map((item) => ({
      player: item.user,
      score: item.score,
      matchDate: new Date(item.date),
      heroes: item.heroes,
    }));
  }
}
