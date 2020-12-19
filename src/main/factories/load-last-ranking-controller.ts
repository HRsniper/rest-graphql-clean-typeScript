import { LastRankingScoreService } from "@/data/services";
import { FakeRankingRepository } from "@/infrastructure/repositories";
import { Controller } from "@/presentation/contracts";
import { LoadLastRankingController } from "@/presentation/controllers";

export const makeLoadLastRankingController = (): Controller => {
  const repository = new FakeRankingRepository();
  const loader = new LastRankingScoreService(repository);
  return new LoadLastRankingController(loader);
};
