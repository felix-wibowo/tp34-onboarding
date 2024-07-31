import { logger } from "@/libs/Logger";
import { dataClient } from "@/utils/AmplifyData";

export const fetchAccidents = async () => {
  const { data, nextToken, errors } = await dataClient.models.accidents.list({
    limit: 10,
  });

  logger.info(
    `Fetch accidents successful. Next token present: ${nextToken ? "yes" : "no"}`,
  );

  logger.info(errors);

  return data;
};
