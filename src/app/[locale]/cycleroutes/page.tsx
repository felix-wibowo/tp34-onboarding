"use client";
import CycleRoutesComponent from "@/components/pages/CycleRoutesComponent";
import { useEffect, useState } from "react";

export default function Page() {
  const [bikeRoutes, setBikeRoutes] = useState([]);

  useEffect(() => {
    fetch('/api/bike-routes')
      .then((res) => res.json())
      .then((data) => {
        setBikeRoutes(data);
      })
  }, [])

  return (
    <>
      <CycleRoutesComponent bikeRoutes={bikeRoutes}/>
    </>
  );
}