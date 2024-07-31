import { fetchAccidents } from "@/data/Accidents";
import { logger } from "@/libs/Logger";

const AccidentList = async () => {
  logger.info("Come here");

  const accidents = await fetchAccidents();

  logger.info(accidents);

  return (
    <div className="mt-5" data-testid="accident-list">
      {accidents.map((acc) => (
        <div key={acc.accident_no} className="mb-1 flex items-center gap-x-1">
          {acc.accident_no}
        </div>
      ))}
    </div>
  );
}

export { AccidentList }