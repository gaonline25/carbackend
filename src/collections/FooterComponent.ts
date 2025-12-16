import { CollectionConfig } from 'payload'

export const FooterComponent: CollectionConfig = {
  slug: 'footer-component',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'updatedAt'],
    group: 'Components',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'componentName',
      type: 'text',
      required: true,
      defaultValue: 'Footer Component',
    },
    // Quick Links Section (Left Column)
    {
      name: 'quickLinksSection',
      type: 'group',
      label: 'Quick Links Section (Left Column)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
          defaultValue: 'Explore Our Full Range of Offerings',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'titleFontSize',
          type: 'text',
          label: 'Title Font Size',
          admin: {
            description: 'CSS font-size value',
          },
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Quick Links',
          admin: {
            description: 'Drag to reorder links',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Link Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Link URL',
              required: true,
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Icon',
              required: true,
            },
            {
              name: 'iconAlt',
              type: 'text',
              label: 'Icon Alt Text',
              defaultValue: 'Icon',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              label: 'Discover Carsy',
              url: '/about-us',
              iconAlt: 'Discover icon',
            },
            {
              label: 'Our Services',
              url: '/services',
              iconAlt: 'Services icon',
            },
            {
              label: 'Pricing Plans',
              url: '/pricing',
              iconAlt: 'Pricing icon',
            },
            {
              label: 'Join Our Team',
              url: '/career',
              iconAlt: 'Career icon',
            },
            {
              label: 'Latest News',
              url: '/blog',
              iconAlt: 'Blog icon',
            },
          ],
        },
      ],
    },
    // Contact Links Section (Right Column)
    {
      name: 'contactLinksSection',
      type: 'group',
      label: 'Contact Links Section (Right Column)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
          defaultValue: 'Connect & Locate Us',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'titleFontSize',
          type: 'text',
          label: 'Title Font Size',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'links',
          type: 'array',
          label: 'Contact Links',
          admin: {
            description: 'Drag to reorder contact links',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Link Label',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Link URL',
              required: true,
            },
            {
              name: 'type',
              type: 'select',
              label: 'Link Type',
              options: [
                { label: 'Phone', value: 'phone' },
                { label: 'Email', value: 'email' },
                { label: 'Social Media', value: 'social' },
                { label: 'Other', value: 'other' },
              ],
              defaultValue: 'other',
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Icon',
              required: true,
            },
            {
              name: 'iconAlt',
              type: 'text',
              label: 'Icon Alt Text',
              defaultValue: 'Contact icon',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              label: '+1-800-123-4567',
              url: 'tel:+1-800-123-4567',
              type: 'phone',
              iconAlt: 'Phone icon',
            },
            {
              label: '+1-630-753-8513',
              url: 'tel:+1-630-753-8513',
              type: 'phone',
              iconAlt: 'Phone icon',
            },
            {
              label: 'Tweet Us @CarSupport',
              url: 'https://web.telegram.org/a/',
              type: 'social',
              iconAlt: 'Twitter icon',
              openInNewTab: true,
            },
            {
              label: 'support@carsy.com',
              url: 'mailto:support@carsy.com',
              type: 'email',
              iconAlt: 'Email icon',
            },
            {
              label: 'contact@carsy.com',
              url: 'mailto:contact@carsy.com',
              type: 'email',
              iconAlt: 'Email icon',
            },
          ],
        },
      ],
    },
    // Map/Location Section
    {
      name: 'mapSection',
      type: 'group',
      label: 'Map/Location Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'mapBackgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Map Background Image',
          admin: {
            description: 'Background image for the map area',
          },
        },
        {
          name: 'enableLottieAnimation',
          type: 'checkbox',
          label: 'Enable Lottie Animation',
          defaultValue: true,
        },
        {
          name: 'lottieAnimationUrl',
          type: 'text',
          label: 'Lottie Animation URL',
          admin: {
            description: 'URL to the Lottie JSON file',
          },
          defaultValue:
            'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a34fc26a1b25fdbe1fd653_45j7oB7Vju%20(1).json',
        },
        {
          name: 'location',
          type: 'group',
          label: 'Location Details',
          fields: [
            {
              name: 'mapUrl',
              type: 'text',
              label: 'Google Maps URL',
              required: true,
              defaultValue:
                'https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=18&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=34.14380289999999%2C-116.9834122',
            },
            {
              name: 'officeImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Office Photo',
            },
            {
              name: 'officeImageAlt',
              type: 'text',
              label: 'Office Photo Alt Text',
              defaultValue: 'Office photo',
            },
            {
              name: 'rating',
              type: 'select',
              label: 'Rating (Stars)',
              options: [
                { label: '1 Star', value: '1' },
                { label: '2 Stars', value: '2' },
                { label: '3 Stars', value: '3' },
                { label: '4 Stars', value: '4' },
                { label: '5 Stars', value: '5' },
              ],
              defaultValue: '5',
            },
            {
              name: 'locationText',
              type: 'text',
              label: 'Location Text',
              required: true,
              defaultValue: 'Head Office: 1234 Main StreetAnytown, USA',
            },
            {
              name: 'locationTextColor',
              type: 'text',
              label: 'Location Text Color',
            },
          ],
        },
        {
          name: 'hoverCardBackgroundColor',
          type: 'text',
          label: 'Hover Card Background Color',
        },
        {
          name: 'hoverCardTextColor',
          type: 'text',
          label: 'Hover Card Text Color',
        },
      ],
    },
    // Social Networks Section
    {
      name: 'socialNetworksSection',
      type: 'group',
      label: 'Social Networks Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'iconColor',
          type: 'text',
          label: 'Icon Color',
          admin: {
            description: 'Color for social media icons',
          },
        },
        {
          name: 'iconHoverColor',
          type: 'text',
          label: 'Icon Hover Color',
        },
        {
          name: 'iconSize',
          type: 'text',
          label: 'Icon Size',
          admin: {
            description: 'CSS size value (e.g., 24px, 2rem)',
          },
        },
        {
          name: 'socialLinks',
          type: 'array',
          label: 'Social Media Links',
          admin: {
            description: 'Drag to reorder social media links',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              required: true,
              options: [
                { label: 'Instagram', value: 'instagram' },
                { label: 'Facebook', value: 'facebook' },
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'YouTube', value: 'youtube' },
                { label: 'TikTok', value: 'tiktok' },
                { label: 'Pinterest', value: 'pinterest' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Custom Icon (Optional)',
              admin: {
                description: 'Upload custom icon or leave empty for default',
              },
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
            },
          ],
          defaultValue: [
            {
              platform: 'instagram',
              url: 'https://www.instagram.com/',
              ariaLabel: 'Visit our Instagram',
            },
            {
              platform: 'facebook',
              url: 'https://www.facebook.com/',
              ariaLabel: 'Visit our Facebook',
            },
            {
              platform: 'twitter',
              url: 'https://x.com/',
              ariaLabel: 'Visit our Twitter',
            },
            {
              platform: 'linkedin',
              url: 'https://www.linkedin.com/',
              ariaLabel: 'Visit our LinkedIn',
            },
          ],
        },
      ],
    },
    // Newsletter Section (Bottom Left)
    {
      name: 'newsletterSection',
      type: 'group',
      label: 'Newsletter Section (Bottom Left)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Stay Updated with Carsy!',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
          defaultValue:
            'Subscribe to our newsletter for the latest news, exclusive offers, and expert tips on car care. Join our community of car enthusiasts and never miss out on important updates. Enter your email below to stay connected with Carsy!',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
        },
        {
          name: 'formSettings',
          type: 'group',
          label: 'Form Settings',
          fields: [
            {
              name: 'placeholderText',
              type: 'text',
              label: 'Placeholder Text',
              defaultValue: 'Enter your mail',
            },
            {
              name: 'buttonText',
              type: 'text',
              label: 'Submit Button Text',
              defaultValue: 'Subscribe',
            },
            {
              name: 'buttonBackgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'buttonTextColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'buttonHoverBackgroundColor',
              type: 'text',
              label: 'Button Hover Background Color',
            },
            {
              name: 'inputBackgroundColor',
              type: 'text',
              label: 'Input Background Color',
            },
            {
              name: 'inputTextColor',
              type: 'text',
              label: 'Input Text Color',
            },
            {
              name: 'inputBorderColor',
              type: 'text',
              label: 'Input Border Color',
            },
            {
              name: 'successMessage',
              type: 'text',
              label: 'Success Message',
              defaultValue: 'Thank you! Your submission has been received!',
            },
            {
              name: 'errorMessage',
              type: 'text',
              label: 'Error Message',
              defaultValue: 'Oops! Something went wrong while submitting the form.',
            },
          ],
        },
      ],
    },
    // Office Address Section (Bottom Right)
    {
      name: 'officeAddressSection',
      type: 'group',
      label: 'Office Address Section (Bottom Right)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
          defaultValue: 'Office Address',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Color',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue:
            'Subscribe to our newsletter for the latest news, exclusive offers, and expert tips on car care.',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
        },
        {
          name: 'addresses',
          type: 'array',
          label: 'Office Addresses',
          admin: {
            description: 'Drag to reorder addresses',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              label: 'Address Label',
              required: true,
            },
            {
              name: 'address',
              type: 'text',
              label: 'Address',
              required: true,
            },
            {
              name: 'mapUrl',
              type: 'text',
              label: 'Google Maps URL',
            },
            {
              name: 'isLink',
              type: 'checkbox',
              label: 'Make Address Clickable',
              defaultValue: true,
            },
          ],
          defaultValue: [
            {
              label: 'Visit Us:',
              address: '1234 Main St, Los Angeles, USA',
              mapUrl:
                'https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=34.03662000000001%2C-118.2599327',
              isLink: true,
            },
            {
              label: 'Our Office:',
              address: '7 Elm St, San Bernardino, USA',
              mapUrl:
                'https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=13&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=34.10566666852272%2C-117.2463111',
              isLink: true,
            },
            {
              label: 'Headquarters:',
              address: '1 Tree Ave, New Jersey, USA',
              mapUrl:
                'https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=18&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=34.14380289999999%2C-116.9834122',
              isLink: true,
            },
          ],
        },
        {
          name: 'workingHours',
          type: 'array',
          label: 'Working Hours',
          admin: {
            description: 'Add working hours entries',
          },
          fields: [
            {
              name: 'days',
              type: 'text',
              label: 'Days',
              required: true,
            },
            {
              name: 'hours',
              type: 'text',
              label: 'Hours',
              required: true,
            },
          ],
          defaultValue: [
            {
              days: 'Monday to Friday:',
              hours: '8:00 AM - 6:00 PM',
            },
            {
              days: 'Saturday/Sunday:',
              hours: '9:00 AM - 4:00 PM',
            },
          ],
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
        },
      ],
    },
    // Footer Bottom Section
    {
      name: 'footerBottomSection',
      type: 'group',
      label: 'Footer Bottom Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'borderTopColor',
          type: 'text',
          label: 'Border Top Color',
        },
        {
          name: 'borderTopWidth',
          type: 'text',
          label: 'Border Top Width',
          admin: {
            description: 'CSS border width (e.g., 1px, 2px)',
          },
        },
        {
          name: 'copyrightText',
          type: 'text',
          label: 'Copyright Text',
          required: true,
          defaultValue: '© Sourav. All Rights Reserved.',
        },
        {
          name: 'showLicensingLink',
          type: 'checkbox',
          label: 'Show Licensing Link',
          defaultValue: true,
        },
        {
          name: 'licensingLinkText',
          type: 'text',
          label: 'Licensing Link Text',
          defaultValue: 'Licensing',
        },
        {
          name: 'licensingLinkUrl',
          type: 'text',
          label: 'Licensing Link URL',
          defaultValue: '/templates/licensing',
        },
        {
          name: 'additionalLinks',
          type: 'array',
          label: 'Additional Footer Links',
          admin: {
            description: 'Add additional links like Terms, Privacy, etc.',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Link Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Link URL',
              required: true,
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
        },
      ],
    },
    // Section Order
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder sections in the footer',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Quick Links Section', value: 'quickLinks' },
            { label: 'Contact Links Section', value: 'contactLinks' },
            { label: 'Map/Location Section', value: 'map' },
            { label: 'Social Networks Section', value: 'socialNetworks' },
            { label: 'Newsletter Section', value: 'newsletter' },
            { label: 'Office Address Section', value: 'officeAddress' },
            { label: 'Footer Bottom Section', value: 'footerBottom' },
          ],
        },
      ],
      defaultValue: [
        { section: 'quickLinks' },
        { section: 'contactLinks' },
        { section: 'map' },
        { section: 'socialNetworks' },
        { section: 'newsletter' },
        { section: 'officeAddress' },
        { section: 'footerBottom' },
      ],
    },
    // Global Styles
    {
      name: 'globalStyles',
      type: 'group',
      label: 'Global Styles',
      fields: [
        {
          name: 'containerMaxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width value',
          },
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Padding',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Footer Background Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color',
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Default Link Color',
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Default Link Hover Color',
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Footer Padding Top',
          admin: {
            description: 'CSS padding value',
          },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Footer Padding Bottom',
        },
      ],
    },
    // Typography Settings
    {
      name: 'typographySettings',
      type: 'group',
      label: 'Typography Settings',
      fields: [
        {
          name: 'titleFontSize',
          type: 'text',
          label: 'Section Title Font Size',
        },
        {
          name: 'titleFontWeight',
          type: 'text',
          label: 'Section Title Font Weight',
        },
        {
          name: 'titleLineHeight',
          type: 'text',
          label: 'Section Title Line Height',
        },
        {
          name: 'titleMarginBottom',
          type: 'text',
          label: 'Section Title Margin Bottom',
        },
        {
          name: 'bodyFontSize',
          type: 'text',
          label: 'Body Font Size',
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
        },
        {
          name: 'linkFontSize',
          type: 'text',
          label: 'Link Font Size',
        },
        {
          name: 'linkFontWeight',
          type: 'text',
          label: 'Link Font Weight',
        },
        {
          name: 'linkTextDecoration',
          type: 'select',
          label: 'Link Text Decoration',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Underline', value: 'underline' },
            { label: 'Overline', value: 'overline' },
            { label: 'Line Through', value: 'line-through' },
          ],
          defaultValue: 'none',
        },
        {
          name: 'linkHoverTextDecoration',
          type: 'select',
          label: 'Link Hover Text Decoration',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Underline', value: 'underline' },
            { label: 'Overline', value: 'overline' },
            { label: 'Line Through', value: 'line-through' },
          ],
          defaultValue: 'underline',
        },
      ],
    },
    // Layout Settings
    {
      name: 'layoutSettings',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'gridColumns',
          type: 'text',
          label: 'Grid Columns',
          admin: {
            description: 'CSS grid-template-columns value',
          },
        },
        {
          name: 'gridGap',
          type: 'text',
          label: 'Grid Gap',
          admin: {
            description: 'Gap between grid items',
          },
        },
        {
          name: 'sectionSpacing',
          type: 'text',
          label: 'Section Spacing',
          admin: {
            description: 'Vertical spacing between sections',
          },
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
        },
        {
          name: 'rowGap',
          type: 'text',
          label: 'Row Gap',
        },
        {
          name: 'alignItems',
          type: 'select',
          label: 'Align Items',
          options: [
            { label: 'Start', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'End', value: 'end' },
            { label: 'Stretch', value: 'stretch' },
          ],
          defaultValue: 'start',
        },
        {
          name: 'justifyContent',
          type: 'select',
          label: 'Justify Content',
          options: [
            { label: 'Start', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'End', value: 'end' },
            { label: 'Space Between', value: 'space-between' },
            { label: 'Space Around', value: 'space-around' },
            { label: 'Space Evenly', value: 'space-evenly' },
          ],
          defaultValue: 'start',
        },
      ],
    },
    // Animation Settings
    {
      name: 'animationSettings',
      type: 'group',
      label: 'Animation Settings',
      fields: [
        {
          name: 'enableAnimations',
          type: 'checkbox',
          label: 'Enable Animations',
          defaultValue: true,
        },
        {
          name: 'fadeInDuration',
          type: 'text',
          label: 'Fade In Duration',
          defaultValue: '1s',
        },
        {
          name: 'fadeInDelay',
          type: 'text',
          label: 'Fade In Delay',
          defaultValue: '0s',
        },
        {
          name: 'hoverTransitionDuration',
          type: 'text',
          label: 'Hover Transition Duration',
          defaultValue: '0.3s',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          defaultValue: 'ease-in-out',
        },
        {
          name: 'linkHoverEffect',
          type: 'select',
          label: 'Link Hover Effect',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Underline', value: 'underline' },
            { label: 'Color Change', value: 'color' },
            { label: 'Scale', value: 'scale' },
            { label: 'Slide', value: 'slide' },
          ],
          defaultValue: 'color',
        },
        {
          name: 'iconHoverEffect',
          type: 'select',
          label: 'Icon Hover Effect',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Scale', value: 'scale' },
            { label: 'Rotate', value: 'rotate' },
            { label: 'Bounce', value: 'bounce' },
          ],
          defaultValue: 'scale',
        },
      ],
    },
    // Gradient/Background Effects
    {
      name: 'backgroundEffects',
      type: 'group',
      label: 'Background Effects',
      fields: [
        {
          name: 'enableGradients',
          type: 'checkbox',
          label: 'Enable Gradient Effects',
          defaultValue: true,
        },
        {
          name: 'gradient1Color',
          type: 'text',
          label: 'Gradient 1 Color',
          admin: {
            description: 'Color for first gradient element',
          },
        },
        {
          name: 'gradient1Opacity',
          type: 'text',
          label: 'Gradient 1 Opacity',
          defaultValue: '0.5',
        },
        {
          name: 'gradient2Color',
          type: 'text',
          label: 'Gradient 2 Color',
        },
        {
          name: 'gradient2Opacity',
          type: 'text',
          label: 'Gradient 2 Opacity',
          defaultValue: '0.5',
        },
        {
          name: 'enablePrintPattern',
          type: 'checkbox',
          label: 'Enable Print Pattern',
          defaultValue: true,
        },
        {
          name: 'printPatternImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Print Pattern Image',
        },
        {
          name: 'printPatternOpacity',
          type: 'text',
          label: 'Print Pattern Opacity',
          defaultValue: '0.3',
        },
      ],
    },
    // Mobile Settings
    {
      name: 'mobileSettings',
      type: 'group',
      label: 'Mobile Settings',
      fields: [
        {
          name: 'mobileBreakpoint',
          type: 'text',
          label: 'Mobile Breakpoint',
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          defaultValue: '1024px',
        },
        {
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections on Mobile',
          defaultValue: true,
        },
        {
          name: 'mobileGridColumns',
          type: 'text',
          label: 'Mobile Grid Columns',
          defaultValue: '1',
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          defaultValue: '90%',
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          defaultValue: '80%',
        },
        {
          name: 'mobilePadding',
          type: 'text',
          label: 'Mobile Padding',
        },
        {
          name: 'hideOnMobile',
          type: 'array',
          label: 'Hide Sections on Mobile',
          admin: {
            description: 'Select sections to hide on mobile devices',
          },
          fields: [
            {
              name: 'section',
              type: 'select',
              options: [
                { label: 'Map Section', value: 'map' },
                { label: 'Social Networks', value: 'socialNetworks' },
                { label: 'Newsletter Section', value: 'newsletter' },
              ],
            },
          ],
        },
      ],
    },
    // Accessibility Settings
    {
      name: 'accessibilitySettings',
      type: 'group',
      label: 'Accessibility Settings',
      fields: [
        {
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'altTextRequired',
          type: 'checkbox',
          label: 'Require Alt Text for Images',
          defaultValue: true,
        },
        {
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
        },
        {
          name: 'focusVisibleWidth',
          type: 'text',
          label: 'Focus Visible Width',
          defaultValue: '2px',
        },
        {
          name: 'contrastMode',
          type: 'select',
          label: 'Contrast Mode',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'High Contrast', value: 'high' },
          ],
          defaultValue: 'normal',
        },
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
        },
        {
          name: 'skipToMainContent',
          type: 'checkbox',
          label: 'Include Skip to Main Content Link',
          defaultValue: false,
        },
      ],
    },
    // SEO Settings
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: {
            description: 'Schema.org structured data for organization info',
          },
        },
        {
          name: 'includeBusinessSchema',
          type: 'checkbox',
          label: 'Include Local Business Schema',
          defaultValue: true,
        },
        {
          name: 'businessName',
          type: 'text',
          label: 'Business Name',
          defaultValue: 'Carsy',
        },
        {
          name: 'businessType',
          type: 'text',
          label: 'Business Type',
          admin: {
            description: 'Schema.org business type (e.g., AutomotiveBusiness)',
          },
          defaultValue: 'AutomotiveBusiness',
        },
      ],
    },
    // Integration Settings
    {
      name: 'integrationSettings',
      type: 'group',
      label: 'Integration Settings',
      fields: [
        {
          name: 'googleMapsApiKey',
          type: 'text',
          label: 'Google Maps API Key',
          admin: {
            description: 'API key for Google Maps integration',
          },
        },
        {
          name: 'newsletterProvider',
          type: 'select',
          label: 'Newsletter Provider',
          options: [
            { label: 'Mailchimp', value: 'mailchimp' },
            { label: 'ConvertKit', value: 'convertkit' },
            { label: 'SendGrid', value: 'sendgrid' },
            { label: 'Custom', value: 'custom' },
          ],
          defaultValue: 'custom',
        },
        {
          name: 'newsletterApiEndpoint',
          type: 'text',
          label: 'Newsletter API Endpoint',
          admin: {
            description: 'API endpoint for newsletter submissions',
          },
        },
        {
          name: 'enableAnalytics',
          type: 'checkbox',
          label: 'Enable Analytics Tracking',
          defaultValue: false,
        },
        {
          name: 'trackSocialClicks',
          type: 'checkbox',
          label: 'Track Social Media Clicks',
          defaultValue: false,
        },
        {
          name: 'trackNewsletterSignups',
          type: 'checkbox',
          label: 'Track Newsletter Signups',
          defaultValue: false,
        },
      ],
    },
    // Performance Settings
    {
      name: 'performanceSettings',
      type: 'group',
      label: 'Performance Settings',
      fields: [
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Lazy Load Images',
          defaultValue: true,
        },
        {
          name: 'optimizeIcons',
          type: 'checkbox',
          label: 'Optimize Icons',
          defaultValue: true,
        },
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
          defaultValue: true,
        },
        {
          name: 'minifyInlineStyles',
          type: 'checkbox',
          label: 'Minify Inline Styles',
          defaultValue: true,
        },
        {
          name: 'deferNonCriticalCSS',
          type: 'checkbox',
          label: 'Defer Non-Critical CSS',
          defaultValue: false,
        },
      ],
    },
    // Advanced Settings
    {
      name: 'advancedSettings',
      type: 'group',
      label: 'Advanced Settings',
      fields: [
        {
          name: 'customCSS',
          type: 'textarea',
          label: 'Custom CSS',
          admin: {
            description: 'Add custom CSS styles for the footer',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JavaScript code for the footer',
          },
        },
        {
          name: 'customClasses',
          type: 'text',
          label: 'Custom CSS Classes',
          admin: {
            description: 'Space-separated custom classes for footer container',
          },
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
            {
              name: 'targetSection',
              type: 'select',
              label: 'Apply To Section',
              options: [
                { label: 'Entire Footer', value: 'footer' },
                { label: 'Quick Links', value: 'quickLinks' },
                { label: 'Contact Links', value: 'contactLinks' },
                { label: 'Map Section', value: 'map' },
                { label: 'Social Networks', value: 'socialNetworks' },
                { label: 'Newsletter', value: 'newsletter' },
                { label: 'Office Address', value: 'officeAddress' },
                { label: 'Footer Bottom', value: 'footerBottom' },
              ],
            },
          ],
        },
        {
          name: 'enableStickyFooter',
          type: 'checkbox',
          label: 'Enable Sticky Footer',
          admin: {
            description: 'Make footer stick to bottom of viewport',
          },
          defaultValue: false,
        },
        {
          name: 'enableSmoothScroll',
          type: 'checkbox',
          label: 'Enable Smooth Scroll for Links',
          defaultValue: true,
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this component',
      },
    },
  ],
  timestamps: true,
}
