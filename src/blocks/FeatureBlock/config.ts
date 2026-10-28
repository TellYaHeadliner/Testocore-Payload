import type { Block } from 'payload'

export const FeatureBlock: Block = {
  slug: 'feature-block',
  interfaceName: 'FeatureBlock',
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      admin: {
        description: 'Eyebrow in head title',
        placeholder: 'How treatment helps',
      },
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      admin: {
        description: 'Title of section',
        placeholder: 'Title',
      },
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'benefit',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'hasCTA',
      type: 'checkbox',
      label: 'Has CTA for this section ?',
    },
    {
      name: 'CTABlock',
      type: 'group',
      label: 'CTA Block',
      admin: {
        condition: (_, siblingData) => siblingData?.hasCTA === true,
      },
      fields: [
        {
          name: 'eyebrow',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'hasButton',
          type: 'checkbox',
        },
        {
          name: 'buttonLink',
          type: 'group',
          admin: {
            condition: (_, siblingData) => siblingData?.hasButton === true,
          },
          fields: [
            {
                name: 'title',
                type: 'text',
                required: true,
            },
            {
                name: 'link',
                type: 'text',
                required: true
            }
          ],
        },
      ],
    },
  ],
}
