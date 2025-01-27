// sanity/sanity.js
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'your-project-id',  // Replace with your Sanity project ID
  dataset: 'production',         // Replace with your dataset name
  useCdn: true                   // Optional: true for faster response (use cached data)
});
