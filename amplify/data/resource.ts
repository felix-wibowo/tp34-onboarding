import { a, defineData, type ClientSchema } from '@aws-amplify/backend';
import { schema as generatedSqlSchema } from './schema.sql';

const sqlSchema = generatedSqlSchema.authorization(allow => allow.publicApiKey().to(['read']))

const combinedSchema = a.combine([sqlSchema]);

export type Schema = ClientSchema<typeof combinedSchema>;

// defines the data resource to be deployed
export const data = defineData({
  schema: combinedSchema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 }
  } 
});