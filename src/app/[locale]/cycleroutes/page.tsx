"use client";
import CycleRoutesComponent from "@/components/pages/CycleRoutesComponent";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

export default function Page() {
  const [bikeRoutes, setBikeRoutes] = useState([]);

  useEffect(() => {
    fetch('/api/bike-routes')
      .then((res) => res.json())
      .then((data) => {
        setBikeRoutes(data);
        console.log("Data = ", data)
      })
  }, [])

  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API || ""} region="AU">
        <CycleRoutesComponent bikeRoutes={bikeRoutes}/>
      </APIProvider>
    </>
  );
}