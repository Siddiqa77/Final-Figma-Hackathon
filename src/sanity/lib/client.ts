import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, token } from '../env';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: process.env.NODE_ENV === "production", // Only use CDN in production
});
