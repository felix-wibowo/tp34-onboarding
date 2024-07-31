import { fetchAccidentsLatLong } from "@/data/Accidents";
import { fetchBikeRoutes } from "@/data/BikeRoutes";

const AccidentList = async () => {
  const accidents = await fetchAccidentsLatLong();
  const bikeRoutes = await fetchBikeRoutes();

  return (
    <div className="mt-5" data-testid="accident-list">
      {JSON.stringify(accidents)}
      <br/>
      {JSON.stringify(bikeRoutes)}
    </div>
  );
}

export { AccidentList }