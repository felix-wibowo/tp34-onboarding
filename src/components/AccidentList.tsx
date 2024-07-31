import { fetchAccidentsLatLong } from "@/data/Accidents";
import { logger } from "@/libs/Logger";

const AccidentList = async () => {
  const accidents = await fetchAccidentsLatLong();

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