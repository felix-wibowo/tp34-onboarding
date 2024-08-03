import CycleRoutesComponent from "@/components/pages/CycleRoutesComponent";
import { fetchBikeRoutes } from "@/data/BikeRoutes";
import { Amplify } from "aws-amplify";

import outputs from "amplify_outputs.json";
Amplify.configure(outputs, { ssr: true });

export default async function Page() {
  const bikeRoutes = await fetchBikeRoutes();

  return (
    <>
      <CycleRoutesComponent bikeRoutes={bikeRoutes}/>
    </>
  );
}