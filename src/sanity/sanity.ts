import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: '8tqp59xr', 
  dataset: 'production', 
  apiVersion: '2025-01-01', 
  useCdn: true, 
});
