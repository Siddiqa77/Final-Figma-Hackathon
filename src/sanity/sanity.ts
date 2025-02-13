import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // ✅ Use env variable
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", // ✅ Default to "production"
  apiVersion: "v2023-05-07", // ✅ Use a stable version
  useCdn: true, // ✅ Set to true for faster performance, false for real-time data
  token: process.env.SANITY_API_TOKEN, // ✅ Secure API token (only required for write operations)
});
