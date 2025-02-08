export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-05'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
  process.env.NEXT_PUBLIC_SANITY_TOKEN,
  'skl01njMInSr9HysTXasxvSXGUW3g0D1DqHsuFDiUG2qyMhX2KuW1VORK3eIxxDy8rHsQ9qgmiRxerHGsUaNxIi75qo2uknE4yLwtXtnmLUHapzY2BqvfmKJljHicTXsHIr7OeA18TLhxsI1deg6OdV8vGOcwmwh3FHt0e4cK0Lsl0p59kSk'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
