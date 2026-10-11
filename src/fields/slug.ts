// fields/slug.ts
import type { Field } from 'payload'
import { formatSlug } from '@/utilities/formatSlug'

type SlugFieldFactory = (fallbackField?: string) => Field

export const slugField: SlugFieldFactory = (fallbackField = 'title') => ({
  name: 'slug',
  type: 'text',
  label: "Slug",
  required: true,
  unique: true, // Ensures DB indexing and optimization
  index: true, // Speeds up lookups
  admin: {
    description: 'Auto-generated from the title if left blank.',
    components: {
      Field: "@/components/SlugFieldWithButton/",
    }
  },
  hooks: {
    beforeChange: [formatSlug(fallbackField)],
  },
})