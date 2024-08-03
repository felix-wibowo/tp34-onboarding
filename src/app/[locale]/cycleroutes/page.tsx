import CycleRoutesComponent from "@/components/pages/CycleRoutesComponent";
import { fetchBikeRoutes } from "@/data/BikeRoutes";

export default async function Page() {
  const bikeRoutes = await fetchBikeRoutes();

  return (
    <>
      <CycleRoutesComponent bikeRoutes={bikeRoutes}/>
    </>
  );
}