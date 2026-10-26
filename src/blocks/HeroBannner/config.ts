import { describe } from 'vitest'
import type { Block } from 'payload'

export const Banner: Block = {
  slug: 'hero-banner',
  interfaceName: 'HeroBannerBlock',
  fields: [
    {
      name: 'smallDescription',
      type: 'text',
      label: 'Small description in top of title',
      admin: {
        placeholder: 'Hormone Replacement Therapy in Delray Beach, FL',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      admin: {
        placeholder: 'Balance Your Hormones and Feel Recharged and Revitalized',
      },
      required: true,
    },
    {
      name: 'showBlueTitle',
      type: 'checkbox',
      label: 'Has blue title',
      defaultValue: false,
    },
    {
      name: 'blueTitle',
      type: 'text',
      label: 'Blue title',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.showBlueTitle === true,
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'buttonLink',
      type: 'group',
      label: 'Button link',
      fields: [
        {
          name: 'hasButtonLink',
          type: 'checkbox',
          label: 'Has button link',
          defaultValue: true,
        },
        {
          name: 'titleButton',
          type: 'text',
          label: 'Title of Button',
          admin: {
            condition: (_, siblingData) => siblingData?.hasButtonLink === true,
          },
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link URL',
          admin: {
            condition: (_, siblingData) => siblingData?.hasButtonLink === true,
          },
        },
      ],
    },
    {
        name: 'image',
        type: 'relationship',
        relationTo: 'media',
        label: 'Image of right hero banner',
        required: true,
    }
  ],
}
