import type { Field } from 'payload'

export const name: Field = { name: 'name', type: 'text', label: 'Name', required: true }
export const label: Field = { name: 'label', type: 'text', label: 'Label' }
export const required: Field = { name: 'required', type: 'checkbox', label: 'Required' }
export const placeholder: Field = { name: 'placeholder', type: 'text', label: 'Placeholder' }
export const defaultValue: Field = { name: 'defaultValue', type: 'text', label: 'Default Value' }
export const hidden: Field = { name: 'hidden', type: 'checkbox', label: 'Hidden field?' }

export const width: Field = {
  name: 'width',
  type: 'select',
  label: 'Width',
  options: [
    { label: '100%', value: 'full' },
    { label: '50%', value: '1/2' },
    { label: '25%', value: '1/4' },
  ],
}
