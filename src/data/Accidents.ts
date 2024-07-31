import { logger } from "@/libs/Logger";
import { dataClient } from "@/utils/AmplifyData";

export const fetchAccidentsLatLong = async () => {
  const { data, nextToken, errors } = await dataClient.models.accidents.list({
    selectionSet: ["accident_no", "latitude", "longitude"],
  });

  logger.info(
    `Fetch accidents successful. Next token present: ${nextToken ? "yes" : "no"}`,
  );

  logger.info(errors);

  return data;
};
