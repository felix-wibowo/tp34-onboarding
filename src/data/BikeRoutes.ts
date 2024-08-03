import { logger } from "@/libs/Logger";
import { dataClient } from "@/utils/AmplifyData";

export const fetchBikeRoutes = async () => {
  const { data } = await dataClient.models.bike_routes.list({
    limit: 500,
  });

  logger.info("Data = ", await dataClient.models.bike_routes.list({
    limit: 500,
  }));

  const features = data.map((d) => {
    return {
      geometry: typeof d.geo_shape === "string" ? JSON.parse(d.geo_shape) : {},
      properties: {}
    }
  })
  
  const geoJSON = {
    type: "FeatureCollection",
    features: features
  }

  return geoJSON;
};
