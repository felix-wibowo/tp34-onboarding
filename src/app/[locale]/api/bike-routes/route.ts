import { db } from "@/libs/Db";
import { bikeRouteSchema } from "@/models/Schema";
import { NextResponse } from 'next/server';


export const GET = async () => {
  const data = await db.select().from(bikeRouteSchema);
  
  const features = data.map((d) => {
    return {
      geometry: d.geo_shape,
      properties: {}
    }
  })
  
  const geoJSON = {
    type: "FeatureCollection",
    features: features
  }

  return NextResponse.json({...geoJSON}, { status: 200 });
}