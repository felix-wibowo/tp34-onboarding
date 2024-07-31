import { logger } from "@/libs/Logger";
import { dataClient } from "@/utils/AmplifyData";

export const fetchBikeRoutes = async () => {
  const { data, nextToken, errors } = await dataClient.models.bike_routes.list({
    limit: 10,
  });

  logger.info(
    `Fetch bike routes successful. Next token present: ${nextToken ? "yes" : "no"} ${errors}`,
  );

  return data;
};
