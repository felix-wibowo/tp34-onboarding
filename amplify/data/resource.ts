import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  Accident: a.model({
        accident_no: a.string().required(),
        accident_date: a.date().required(),
        accident_time: a.time().required(),
        accident_type: a.string().required(),
        severity: a.string().required(),
        speed_zone: a.string().required(),
        road_name: a.string().required(),
        road_type: a.string().required(),
        lga_name: a.string().required(),
        latitude: a.float().required(),
        longitude: a.float().required(),
        vicgrid_x: a.float().required(),
        vicgrid_y: a.float().required(),
        bicyclist: a.integer().required(),
        serious_injury: a.integer().required(),
        other_injury: a.integer().required(),
        non_injured: a.integer().required(),
        fatality: a.integer().required()
    }).identifier([
        "accident_no"
    ]).authorization(allow => [allow.publicApiKey()])
});

// Used for code completion / highlighting when making requests from frontend
export type Schema = ClientSchema<typeof schema>;

// defines the data resource to be deployed
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  }
});