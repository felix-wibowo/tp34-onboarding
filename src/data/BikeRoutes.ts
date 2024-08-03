import { db } from "@/libs/Db";
import { logger } from "@/libs/Logger";
import { bikeRouteSchema } from "@/models/Schema";

export const fetchBikeRoutes = async () => {
  const data = db.select().from(bikeRouteSchema);
  logger.info(data);
  
  // const { data } = await dataClient.models.bike_routes.list({
  //   limit: 500,
  // });

  // logger.info("Data = ", await dataClient.models.bike_routes.list({
  //   limit: 500,
  // }));

  // const features = data.map((d) => {
  //   return {
  //     geometry: typeof d.geo_shape === "string" ? JSON.parse(d.geo_shape) : {},
  //     properties: {}
  //   }
  // })
  
  // const geoJSON = {
  //   type: "FeatureCollection",
  //   features: features
  // }

  const geoJSON = {
    type: "FeatureCollection",
    features: []
  }

  return geoJSON;
};
