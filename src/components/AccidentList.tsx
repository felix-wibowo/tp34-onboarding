import { fetchAccidents } from "@/data/Accidents";
import { logger } from "@/libs/Logger";

const AccidentList = async () => {
  logger.info("Come here");

  const accidents = await fetchAccidents();

  logger.info(accidents);

  return (
    <div className="mt-5" data-testid="accident-list">
    </div>
  );
}

export { AccidentList }