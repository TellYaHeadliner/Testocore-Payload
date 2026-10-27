import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { searchPlugin } from '@payloadcms/plugin-search'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { searchFields } from '@/search/fieldOverrides'
import { beforeSyncWithSearch } from '@/search/beforeSync'

import { Page } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'
import { authenticated } from '@/access/authenticated'
import {
  defaultValue,
  hidden,
  label,
  name,
  placeholder,
  required,
  width,
} from '@/blocks/Form/fieldConfig'

const generateTitle: GenerateTitle<Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Payload Website Template` : 'Payload Website Template'
}

const generateURL: GenerateURL<Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages'],
    overrides: {
      // @ts-expect-error - This is a valid override, mapped fields don't resolve to the same type
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories'],
    generateURL: (docs) => docs.reduce((url, doc) => `${url}/${doc.slug}`, ''),
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),
  formBuilderPlugin({
    fields: {
      payment: false,
      text: {
        labels: {
          singular: 'Single-line Text',
          plural: 'Single-line Text',
        },
        fields: [
          {
            type: 'row',
            fields: [name, label],
          },
          {
            type: 'row',
            fields: [placeholder, defaultValue],
          },
          {
            type: 'row',
            fields: [width],
          },
          {
            type: 'row',
            fields: [required, hidden],
          },
        ],
      },
      textarea: {
        fields: [
          { type: 'row', fields: [name, label] },
          { type: 'row', fields: [placeholder] },
          { type: 'row', fields: [required, hidden] },
        ],
      },
      select: {
        fields: [
          { type: 'row', fields: [name, label] },
          { type: 'row', fields: [placeholder, defaultValue] },
          { type: 'row', fields: [width] },
          {
            name: 'options',
            type: 'array',
            label: 'Options',
            fields: [
              {
                type: 'row',
                fields: [
                  { name: 'label', type: 'text', label: 'Label', required: true },
                  { name: 'value', type: 'text', label: 'Value', required: true },
                ],
              },
            ],
          },
          { type: 'row', fields: [required, hidden] },
        ],
      },
      email: {
        fields: [
          { type: 'row', fields: [name, label] },
          { type: 'row', fields: [placeholder] },
          { type: 'row', fields: [required, hidden] },
        ],
      },
      message: true,
      number: {
        fields: [
          { type: 'row', fields: [name, label] },
          {
            type: 'row',
            fields: [
              width,
              { name: 'defaultValue', type: 'number', label: 'Default Value' },
            ],
          },
          { type: 'row', fields: [required, hidden] },
          { type: 'row', fields: [placeholder]}
        ],
      },
    },
    redirectRelationships: ['pages'],
    formOverrides: {
      slug: 'Forms',
      admin: {
        group: 'Forms',
      },
      access: {
        update: authenticated,
      },
      fields: ({ defaultFields }) => [
        ...defaultFields,
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'hubspotID',
          type: 'text',
          label: 'HubSpot ID',
        },
        {
          name: 'requireRecapcha',
          label: 'Require reCAPCHA',
          type: 'checkbox',
        },
      ],
    },
  }),
  searchPlugin({
    collections: ['pages'],
    beforeSync: beforeSyncWithSearch,
    searchOverrides: {
      fields: ({ defaultFields }) => {
        return [...defaultFields, ...searchFields]
      },
    },
  }),
]
