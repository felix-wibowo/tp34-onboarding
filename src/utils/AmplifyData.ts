import { generateClient } from 'aws-amplify/data';
import type { Schema } from '../../amplify/data/resource'; // Path to your backend resource definition

export const client = generateClient<Schema>();