import type { Block } from 'payload'

export const FormBlock: Block = {
  slug: 'formBlock',
  interfaceName: 'FormBlock',
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'Forms',
      required: true,
    },
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Eyebrow',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'contentLayout',
      type: 'select',
      label: 'Layout nội dung bên cạnh form',
      defaultValue: 'text',
      options: [
        { label: 'Text', value: 'text' },
        { label: 'Video', value: 'video' },
        { label: 'Danh sách lợi ích', value: 'benefits' },
      ],
    },
    {
      name: 'body',
      type: 'richText',
      label: 'Content',
      admin: {
        condition: (_, siblingData) => siblingData?.contentLayout === 'text',
      },
    },
    {
      name: 'video',
      type: 'relationship',
      relationTo: 'media',
      label: 'Video',
      admin: {
        condition: (_, siblingData) => siblingData?.contentLayout === 'video',
      },
    },
    {
      name: 'benefits',
      type: 'array',
      label: 'Danh sách lợi ích',
      admin: {
        condition: (_, siblingData) => siblingData?.contentLayout === 'benefits',
      },
      fields: [
        { name: 'icon', type: 'relationship', relationTo: 'media', required: true},
        { name: 'text', type: 'text', required: true },
    ],
    },
    {
      name: 'disclaimer',
      type: 'textarea',
      label: 'Ghi chú dưới form',
    },
  ],
}
