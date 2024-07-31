import { logger } from "@/libs/Logger";
import { dataClient } from "@/utils/AmplifyData";

export const fetchAccidents = async () => {
  const data = await dataClient.models.accidents.list();

  logger.info(data)
  
  return [];
}