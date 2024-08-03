import { fetchBikeRoutes } from "@/data/BikeRoutes";

const AccidentList = async () => {
  const bikeRoutes = await fetchBikeRoutes();

  return (
    <div className="mt-5" data-testid="accident-list">
      {JSON.stringify(bikeRoutes)}
    </div>
  );
}

export { AccidentList }