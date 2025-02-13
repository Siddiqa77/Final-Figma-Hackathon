
import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from '../env';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Ensure projectId and dataset exist
if (!projectId || !dataset) {
  throw new Error("Missing Sanity projectId or dataset in env.ts");
}

// Create the URL builder
const builder = createImageUrlBuilder({ projectId, dataset });

// Function to get image URL
export const urlFor = (source: SanityImageSource) => builder.image(source);

