import { RankingScore } from "@/domain/entities";

export interface LastRankingScore {
  lastScore: () => Promise<RankingScore[]>;
}
