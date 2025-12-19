// import { CollectionConfig } from 'payload'

// export const FormSubmissions: CollectionConfig = {
//   slug: 'form-submissions',
//   admin: {
//     useAsTitle: 'name',
//     defaultColumns: ['name', 'email', 'phone', 'formType', 'createdAt'],
//     group: 'Forms',
//     description: 'Contact form submissions from the website',
//   },
//   access: {
//     // Only admins can read form submissions
//     read: ({ req: { user } }) => {
//       if (user) return true
//       return false
//     },
//     // Allow public creation (from the frontend)
//     create: () => true,
//     // Only admins can update/delete
//     update: ({ req: { user } }) => {
//       if (user) return true
//       return false
//     },
//     delete: ({ req: { user } }) => {
//       if (user) return true
//       return false
//     },
//   },
//   fields: [
//     {
//       name: 'formType',
//       type: 'select',
//       required: true,
//       defaultValue: 'contact',
//       options: [
//         { label: 'Contact Form', value: 'contact' },
//         { label: 'Newsletter', value: 'newsletter' },
//         { label: 'Quote Request', value: 'quote' },
//         { label: 'Service Booking', value: 'service' },
//       ],
//       admin: {
//         description: 'Type of form submission',
//       },
//     },
//     {
//       name: 'name',
//       type: 'text',
//       required: true,
//       index: true,
//     },
//     {
//       name: 'email',
//       type: 'email',
//       required: true,
//       index: true,
//     },
//     {
//       name: 'phone',
//       type: 'text',
//       required: false,
//       admin: {
//         description: 'Contact phone number',
//       },
//     },
//     {
//       name: 'subject',
//       type: 'text',
//       required: false,
//       admin: {
//         description: 'Subject or reason for contact',
//       },
//     },
//     {
//       name: 'message',
//       type: 'textarea',
//       required: false,
//       admin: {
//         description: 'Message content',
//       },
//     },
//     {
//       name: 'additionalFields',
//       type: 'json',
//       admin: {
//         description: 'Store any additional custom form fields as JSON',
//       },
//     },
//     {
//       name: 'status',
//       type: 'select',
//       required: true,
//       defaultValue: 'new',
//       options: [
//         { label: 'New', value: 'new' },
//         { label: 'Read', value: 'read' },
//         { label: 'In Progress', value: 'in-progress' },
//         { label: 'Resolved', value: 'resolved' },
//         { label: 'Spam', value: 'spam' },
//       ],
//       admin: {
//         description: 'Status of the submission',
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'notes',
//       type: 'textarea',
//       admin: {
//         description: 'Internal notes about this submission',
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'assignedTo',
//       type: 'relationship',
//       relationTo: 'users',
//       admin: {
//         description: 'Team member assigned to handle this submission',
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'ipAddress',
//       type: 'text',
//       admin: {
//         description: 'IP address of the submitter',
//         readOnly: true,
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'userAgent',
//       type: 'text',
//       admin: {
//         description: 'Browser/device information',
//         readOnly: true,
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'referrer',
//       type: 'text',
//       admin: {
//         description: 'Page referrer',
//         readOnly: true,
//         position: 'sidebar',
//       },
//     },
//   ],
//   timestamps: true,
//   hooks: {
//     // Optional: Send email notification on new submission
//     afterChange: [
//       async ({ doc, operation }) => {
//         if (operation === 'create') {
//           // TODO: Add email notification logic here
//           console.log('New form submission received:', doc.name, doc.email)
//         }
//       },
//     ],
//   },
// }

import { CollectionConfig } from 'payload'

export const FormSubmissions: CollectionConfig = {
  slug: 'form-submissions',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'phone', 'formType', 'createdAt'],
    group: 'Forms',
    description: 'Contact form submissions from the website',
  },
  access: {
    // Only admins can read form submissions
    read: ({ req: { user } }) => {
      if (user) return true
      return false
    },
    // Allow public creation (from the frontend)
    create: () => true,
    // Only admins can update/delete
    update: ({ req: { user } }) => {
      if (user) return true
      return false
    },
    delete: ({ req: { user } }) => {
      if (user) return true
      return false
    },
  },
  fields: [
    {
      name: 'formType',
      type: 'select',
      required: true,
      defaultValue: 'contact',
      options: [
        { label: 'Contact Form', value: 'contact' },
        { label: 'Newsletter', value: 'newsletter' },
        { label: 'Quote Request', value: 'quote' },
        { label: 'Service Booking', value: 'service' },
      ],
      admin: {
        description: 'Type of form submission',
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      index: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: false,
      admin: {
        description: 'Contact phone number',
      },
    },
    {
      name: 'subject',
      type: 'text',
      required: false,
      admin: {
        description: 'Subject or reason for contact',
      },
    },
    {
      name: 'message',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Message content',
      },
    },
    {
      name: 'additionalFields',
      type: 'json',
      admin: {
        description: 'Store any additional custom form fields as JSON',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Read', value: 'read' },
        { label: 'In Progress', value: 'in-progress' },
        { label: 'Resolved', value: 'resolved' },
        { label: 'Spam', value: 'spam' },
      ],
      admin: {
        description: 'Status of the submission',
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      admin: {
        description: 'Internal notes about this submission',
        position: 'sidebar',
      },
    },
    {
      name: 'assignedTo',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        description: 'Team member assigned to handle this submission',
        position: 'sidebar',
      },
    },
    {
      name: 'ipAddress',
      type: 'text',
      admin: {
        description: 'IP address of the submitter',
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'userAgent',
      type: 'text',
      admin: {
        description: 'Browser/device information',
        readOnly: true,
        position: 'sidebar',
      },
    },
    {
      name: 'referrer',
      type: 'text',
      admin: {
        description: 'Page referrer',
        readOnly: true,
        position: 'sidebar',
      },
    },
  ],
  timestamps: true,
  hooks: {
    // Optional: Send email notification on new submission
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          // TODO: Add email notification logic here
          console.log('New form submission received:', doc.name, doc.email)
        }
      },
    ],
  },
}