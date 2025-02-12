import { createClient } from 'next-sanity';


// Sanity client configuration
export const sanityClient = createClient({
  projectId: "",
  dataset: "", 
  useCdn: false, // Disable CDN
  apiVersion: "2025-01-01", // API version
  token:""
});