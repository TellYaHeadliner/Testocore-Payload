import type { Block } from 'payload'

export const ReviewBlock: Block = {
    slug: 'review-block',
    interfaceName: 'ReviewBlock',
    fields: [
        {
            name: 'listVideo',
            type: 'array',
            fields: [
                {
                    name: 'video',
                    type: 'relationship',
                    relationTo: 'media'
                }
            ]
        },
        {
            name: 'description',
            type: 'textarea'
        }
    ]
}