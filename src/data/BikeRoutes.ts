import { db } from "@/libs/Db";
import { bikeRouteSchema } from "@/models/Schema";

export const fetchBikeRoutes = async () => {
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

  return geoJSON;
};
