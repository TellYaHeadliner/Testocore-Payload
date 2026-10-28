import type { Block } from "payload"
import { array } from "payload/shared";

export const HWDHIBlock: Block = {
    slug: 'hwdhiblock',
    interfaceName: 'H4Block',
    fields: [
        {
            name: 'titleGroup',
            type: 'group',
            fields: [
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
                    name: 'description',
                    type: 'textarea'
                }
            ]
        },
        {
            name: 'steps',
            type: 'array',
            fields: [
                {
                    name: 'title',
                    type: 'text'
                },
                {
                    name: 'listOfContent',
                    type: 'array',
                    fields: [
                        {
                            name: 'content',
                            type: 'text'
                        }
                    ]
                }
            ]
        }
    ]
}