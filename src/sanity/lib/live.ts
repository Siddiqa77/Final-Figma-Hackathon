// // Querying with "sanityFetch" will keep content automatically updated
// // Before using it, import and render "<SanityLive />" in your layout, see
// // https://github.com/sanity-io/next-sanity#live-content-api for more information.
// import { defineLive } from "next-sanity";


// export const { sanityFetch, SanityLive } = defineLive({ 
//   client: client.withConfig({ 
//     // Live content is currently only available on the experimental API
//     // https://www.sanity.io/docs/api-versioning
//     apiVersion: 'vX' 
//   }) 
// });
import { defineLive } from "next-sanity";
import { createClient } from "next-sanity";

const client = createClient({
  projectId: "your_project_id",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-10-21", // Use the latest API version
});

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({
    apiVersion: "2021-10-21",
  }),
});
