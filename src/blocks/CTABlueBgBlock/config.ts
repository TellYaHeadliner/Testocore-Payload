import type { Block } from 'payload'

export const CTABlueBlock: Block = {
    slug: 'Ctablueblock',
    interfaceName: 'CTABlueBlock',
    fields: [
        {
            name: 'imageLeft',
            type: 'relationship',
            relationTo: 'media',
            admin: {
                description: 'Image left of CTA'
            },
        },
        {
            name: 'eyebrow',
            type: 'text',
        },
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'hasBlueTitle',
            type: 'checkbox',
        },
        {
            name: 'blueTitle',
            type: 'text',
            admin: {
                condition: (_, siblingData) => siblingData?.hasBlueTitle === true,
            }
        },
        {
            name: 'content',
            type: 'richText'
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
    ]
}