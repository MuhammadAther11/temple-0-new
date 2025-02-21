export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-06'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)


export const token = assertValue(
 "skv6c78A4KDMKMr7M3aQiRxoXFxtFSIlmeepV2LMEpyVeeZbGbUpbwK82pCbMDqKTywvT1wtvW3vElwZb4AhCnJHSILzaKoIV3d6gHOMmt9ogAECEYkjsWQvKUTqSXfc2Ktjl5HbSsN0OZ8QqIZHE2VBhyp9a9sb1HTcssAmGizIKlCqP6LH",
  'Missing environment variable:SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
