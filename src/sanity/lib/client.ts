import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId ,token } from '../env'

export const client = createClient({
  projectId:"7kgi3ap2",
  dataset :"production",
  apiVersion: '2024-02-20',
  token: "skv6c78A4KDMKMr7M3aQiRxoXFxtFSIlmeepV2LMEpyVeeZbGbUpbwK82pCbMDqKTywvT1wtvW3vElwZb4AhCnJHSILzaKoIV3d6gHOMmt9ogAECEYkjsWQvKUTqSXfc2Ktjl5HbSsN0OZ8QqIZHE2VBhyp9a9sb1HTcssAmGizIKlCqP6LH",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
