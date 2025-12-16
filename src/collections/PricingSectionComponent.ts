import { CollectionConfig } from 'payload'

export const PricingSectionComponent: CollectionConfig = {
  slug: 'pricing-section-component',
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
      defaultValue: 'Pricing Section Component',
    },
    // Main Section Settings
    {
      name: 'mainSection',
      type: 'group',
      label: 'Main Section Settings',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., section, special-top-space',
          },
          defaultValue: 'section special-top-space',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
          },
        },
      ],
    },
    // Container Settings
    {
      name: 'containerSettings',
      type: 'group',
      label: 'Container Settings',
      fields: [
        {
          name: 'containerClass',
          type: 'text',
          label: 'Container CSS Class',
          defaultValue: 'base-container',
        },
        {
          name: 'gridClass',
          type: 'text',
          label: 'Grid CSS Class',
          defaultValue: 'two-column-grid',
        },
      ],
    },
    // Premium Package
    {
      name: 'premiumPackage',
      type: 'group',
      label: 'Premium Package',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Package',
          defaultValue: true,
        },
        {
          name: 'order',
          type: 'number',
          label: 'Display Order',
          defaultValue: 1,
          admin: {
            description: 'Order in which this package appears (1 = first)',
          },
        },
        {
          name: 'packageType',
          type: 'text',
          label: 'Package Type',
          required: true,
          defaultValue: 'Premium',
        },
        {
          name: 'packageTitle',
          type: 'text',
          label: 'Package Title',
          required: true,
          defaultValue: 'Care Package',
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price',
          required: true,
          defaultValue: '$199',
        },
        {
          name: 'priceLabel',
          type: 'text',
          label: 'Price Label',
          defaultValue: 'Price:',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Package Background Color',
        },
        {
          name: 'borderColor',
          type: 'text',
          label: 'Package Border Color',
        },
        {
          name: 'typeColor',
          type: 'text',
          label: 'Package Type Text Color',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Text Color',
        },
        {
          name: 'priceColor',
          type: 'text',
          label: 'Price Text Color',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features List',
          admin: {
            description: 'Drag to reorder features',
          },
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Feature Icon',
            },
            {
              name: 'iconUrl',
              type: 'text',
              label: 'Icon URL (Alternative)',
              admin: {
                description: 'Direct URL if not uploading',
              },
            },
            {
              name: 'iconAlt',
              type: 'text',
              label: 'Icon Alt Text',
              defaultValue: 'Feature icon',
            },
            {
              name: 'featureTitle',
              type: 'text',
              label: 'Feature Title',
              required: true,
            },
            {
              name: 'featureDescription',
              type: 'textarea',
              label: 'Feature Description',
              required: true,
            },
          ],
          defaultValue: [
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23ba3250000d9571d2613_rating_6543894%201.svg',
              iconAlt: 'Feature icon',
              featureTitle: 'Engine Diagnostic:',
              featureDescription: 'Advanced diagnostics to identify and address potential issues.',
            },
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23ba3250000d9571d2613_rating_6543894%201.svg',
              iconAlt: 'Feature icon',
              featureTitle: 'Alignment Check:',
              featureDescription: 'Ensure wheels are properly aligned for optimal handling.',
            },
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23ba3250000d9571d2613_rating_6543894%201.svg',
              iconAlt: 'Feature icon',
              featureTitle: 'Air Filter Replacement:',
              featureDescription: 'Replace engine air filter for improved performance.',
            },
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23ba3250000d9571d2613_rating_6543894%201.svg',
              iconAlt: 'Feature icon',
              featureTitle: 'AC System Check:',
              featureDescription:
                'Inspect and test the air conditioning system for optimal cooling.',
            },
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23ba3250000d9571d2613_rating_6543894%201.svg',
              iconAlt: 'Feature icon',
              featureTitle: 'Interior Vacuum:',
              featureDescription:
                'Thorough vacuuming of the interior to keep your car clean and fresh.',
            },
          ],
        },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Button',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Purchase a package now',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/contact-us',
            },
            {
              name: 'buttonClass',
              type: 'text',
              label: 'Button CSS Class',
              defaultValue: 'primary-button large-btn-height w-button',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Button Hover Background Color',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    // Basic Package
    {
      name: 'basicPackage',
      type: 'group',
      label: 'Basic Package',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Package',
          defaultValue: true,
        },
        {
          name: 'order',
          type: 'number',
          label: 'Display Order',
          defaultValue: 2,
          admin: {
            description: 'Order in which this package appears (2 = second)',
          },
        },
        {
          name: 'packageType',
          type: 'text',
          label: 'Package Type',
          required: true,
          defaultValue: 'Basic',
        },
        {
          name: 'packageTitle',
          type: 'text',
          label: 'Package Title',
          required: true,
          defaultValue: 'Care Package',
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price',
          required: true,
          defaultValue: '$99',
        },
        {
          name: 'priceLabel',
          type: 'text',
          label: 'Price Label',
          defaultValue: 'Price:',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Package Background Color',
        },
        {
          name: 'borderColor',
          type: 'text',
          label: 'Package Border Color',
        },
        {
          name: 'typeColor',
          type: 'text',
          label: 'Package Type Text Color',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Text Color',
        },
        {
          name: 'priceColor',
          type: 'text',
          label: 'Price Text Color',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features List',
          admin: {
            description: 'Drag to reorder features',
          },
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Feature Icon',
            },
            {
              name: 'iconUrl',
              type: 'text',
              label: 'Icon URL (Alternative)',
              admin: {
                description: 'Direct URL if not uploading',
              },
            },
            {
              name: 'iconAlt',
              type: 'text',
              label: 'Icon Alt Text',
              defaultValue: 'Feature icon',
            },
            {
              name: 'featureTitle',
              type: 'text',
              label: 'Feature Title',
              required: true,
            },
            {
              name: 'featureDescription',
              type: 'textarea',
              label: 'Feature Description',
              required: true,
            },
          ],
          defaultValue: [
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23f91e58bb244cd97e521_verify_6671484%201.svg',
              iconAlt: 'Feature icon',
              featureTitle: 'Oil Change:',
              featureDescription:
                'Replace old oil with high-quality synthetic oil to ensure your engine runs smoothly.',
            },
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23f91e58bb244cd97e521_verify_6671484%201.svg',
              iconAlt: 'Feature icon',
              featureTitle: 'Tire Rotation:',
              featureDescription: 'Rotate tires to promote even wear and extend tire life.',
            },
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23f91e58bb244cd97e521_verify_6671484%201.svg',
              iconAlt: 'Feature icon',
              featureTitle: 'Brake Inspection:',
              featureDescription:
                'Comprehensive check of brake pads, rotors, and fluid to ensure safety.',
            },
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23f91e58bb244cd97e521_verify_6671484%201.svg',
              iconAlt: 'Feature icon',
              featureTitle: 'Fluid Top-Off:',
              featureDescription:
                'Refill essential fluids, including windshield washer, brake, and coolant.',
            },
          ],
        },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Button',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Purchase a package now',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/contact-us',
            },
            {
              name: 'buttonClass',
              type: 'text',
              label: 'Button CSS Class',
              defaultValue: 'primary-button large-btn-height w-button',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Button Hover Background Color',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    // Additional Packages Array
    {
      name: 'additionalPackages',
      type: 'array',
      label: 'Additional Packages',
      admin: {
        description: 'Add more pricing packages as needed. Drag to reorder.',
      },
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Package',
          defaultValue: true,
        },
        {
          name: 'packageType',
          type: 'text',
          label: 'Package Type',
          required: true,
        },
        {
          name: 'packageTitle',
          type: 'text',
          label: 'Package Title',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          label: 'Price',
          required: true,
        },
        {
          name: 'priceLabel',
          type: 'text',
          label: 'Price Label',
          defaultValue: 'Price:',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Package Background Color',
        },
        {
          name: 'borderColor',
          type: 'text',
          label: 'Package Border Color',
        },
        {
          name: 'typeColor',
          type: 'text',
          label: 'Package Type Text Color',
        },
        {
          name: 'titleColor',
          type: 'text',
          label: 'Title Text Color',
        },
        {
          name: 'priceColor',
          type: 'text',
          label: 'Price Text Color',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Features List',
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Feature Icon',
            },
            {
              name: 'iconUrl',
              type: 'text',
              label: 'Icon URL (Alternative)',
            },
            {
              name: 'iconAlt',
              type: 'text',
              label: 'Icon Alt Text',
              defaultValue: 'Feature icon',
            },
            {
              name: 'featureTitle',
              type: 'text',
              label: 'Feature Title',
              required: true,
            },
            {
              name: 'featureDescription',
              type: 'textarea',
              label: 'Feature Description',
              required: true,
            },
          ],
        },
        {
          name: 'ctaButton',
          type: 'group',
          label: 'CTA Button',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Button',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              defaultValue: 'Purchase a package now',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              defaultValue: '/contact-us',
            },
            {
              name: 'buttonClass',
              type: 'text',
              label: 'Button CSS Class',
              defaultValue: 'primary-button large-btn-height w-button',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Button Hover Background Color',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
          ],
        },
      ],
    },
    // Info Section (Right Column)
    {
      name: 'infoSection',
      type: 'group',
      label: 'Info Section (Right Column)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'columnId',
          type: 'text',
          label: 'Column ID',
          defaultValue: 'w-node-_51c5e149-ca92-a1e3-e9df-ab0532bedceb-ab3f40e0',
        },
        {
          name: 'columnClass',
          type: 'text',
          label: 'Column CSS Class',
          defaultValue: 'grid-column-right',
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
          name: 'subtitle',
          type: 'group',
          label: 'Subtitle',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Subtitle',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Subtitle Text',
              defaultValue: 'Discover Our Complete Car Care',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Subtitle CSS Class',
              defaultValue: 'black-subtitle',
            },
            {
              name: 'color',
              type: 'text',
              label: 'Subtitle Color',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Font Size',
            },
          ],
        },
        {
          name: 'mainTitle',
          type: 'text',
          label: 'Main Title',
          required: true,
          defaultValue: 'Essential Service Package',
        },
        {
          name: 'mainTitleClass',
          type: 'text',
          label: 'Main Title CSS Class',
          defaultValue: 'main-title-h2',
        },
        {
          name: 'mainTitleColor',
          type: 'text',
          label: 'Main Title Color',
        },
        {
          name: 'mainTitleFontSize',
          type: 'text',
          label: 'Main Title Font Size',
        },
      ],
    },
    // Quick Links
    {
      name: 'quickLinks',
      type: 'array',
      label: 'Quick Links',
      admin: {
        description: 'Drag to reorder quick links',
      },
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Link',
          defaultValue: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon',
        },
        {
          name: 'iconUrl',
          type: 'text',
          label: 'Icon URL (Alternative)',
          admin: {
            description: 'Direct URL if not uploading',
          },
        },
        {
          name: 'iconAlt',
          type: 'text',
          label: 'Icon Alt Text',
          defaultValue: 'Icon',
        },
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
          name: 'linkType',
          type: 'select',
          label: 'Link Type',
          options: [
            { label: 'Phone', value: 'tel' },
            { label: 'Email', value: 'mailto' },
            { label: 'External Link', value: 'external' },
            { label: 'Internal Link', value: 'internal' },
          ],
          defaultValue: 'external',
        },
        {
          name: 'openInNewTab',
          type: 'checkbox',
          label: 'Open in New Tab',
          defaultValue: false,
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'hoverColor',
          type: 'text',
          label: 'Hover Color',
        },
      ],
      defaultValue: [
        {
          show: true,
          iconUrl:
            'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390f09a1883d22986905_ride-hailing_16760271%201.svg',
          iconAlt: 'Phone icon',
          text: '+1-800-123-4567',
          url: 'tel:+1-800-123-4567',
          linkType: 'tel',
          openInNewTab: false,
        },
        {
          show: true,
          iconUrl:
            'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390e6aa74ba021b6884f_email_11344546%201.svg',
          iconAlt: 'Email icon',
          text: 'carsy@gmail.com',
          url: 'mailto:carsy@gmail.com',
          linkType: 'mailto',
          openInNewTab: false,
        },
        {
          show: true,
          iconUrl:
            'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a239b6d347142d5307fd9b_2.svg',
          iconAlt: 'Telegram icon',
          text: 'Telegram Chat',
          url: 'https://web.telegram.org/a/',
          linkType: 'external',
          openInNewTab: true,
        },
        {
          show: true,
          iconUrl:
            'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23910e9bce36ced9cc75e_location_4879312%201.svg',
          iconAlt: 'Location icon',
          text: 'Our location',
          url: 'https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=18&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.54480440635318%2C-0.07627265702787378',
          linkType: 'external',
          openInNewTab: true,
        },
      ],
    },
    // Gradient Settings
    {
      name: 'gradientSettings',
      type: 'group',
      label: 'Gradient/Decorative Elements',
      fields: [
        {
          name: 'showGradients',
          type: 'checkbox',
          label: 'Show Gradient Elements',
          defaultValue: true,
        },
        {
          name: 'gradientWrapperClass',
          type: 'text',
          label: 'Gradient Wrapper Class',
          defaultValue: 'gradient-wrapper grad-wrapper-3',
        },
        {
          name: 'gradient1Class',
          type: 'text',
          label: 'Gradient 1 CSS Class',
          defaultValue: 'red-grad-9',
        },
        {
          name: 'gradient1Color',
          type: 'text',
          label: 'Gradient 1 Color',
          admin: {
            description: 'CSS gradient or background color',
          },
        },
        {
          name: 'gradient2Class',
          type: 'text',
          label: 'Gradient 2 CSS Class',
          defaultValue: 'red-grad-7',
        },
        {
          name: 'gradient2Color',
          type: 'text',
          label: 'Gradient 2 Color',
          admin: {
            description: 'CSS gradient or background color',
          },
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
          name: 'leftColumnId',
          type: 'text',
          label: 'Left Column ID',
          defaultValue: 'w-node-_51c5e149-ca92-a1e3-e9df-ab0532bedce4-ab3f40e0',
        },
        {
          name: 'leftColumnClass',
          type: 'text',
          label: 'Left Column CSS Class',
          defaultValue: 'grid-column-left',
        },
        {
          name: 'pricingGridClass',
          type: 'text',
          label: 'Pricing Grid CSS Class',
          defaultValue: 'pricing-left-grid',
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Gap between columns (e.g., 30px, 2rem)',
          },
        },
        {
          name: 'rowGap',
          type: 'text',
          label: 'Row Gap',
          admin: {
            description: 'Gap between rows (e.g., 20px, 1.5rem)',
          },
        },
        {
          name: 'pricingCardSpacing',
          type: 'text',
          label: 'Pricing Card Spacing',
          admin: {
            description: 'Space between pricing cards',
          },
        },
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
            description: 'CSS max-width value (e.g., 1200px, 100%)',
          },
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Padding',
          admin: {
            description: 'CSS padding value (e.g., 20px, 1rem 2rem)',
          },
        },
        {
          name: 'sectionSpacing',
          type: 'text',
          label: 'Section Spacing',
          admin: {
            description: 'Spacing for sections (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
          admin: {
            description: 'CSS font-family value',
          },
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
          admin: {
            description: 'Primary brand color',
          },
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
          admin: {
            description: 'Secondary brand color',
          },
        },
        {
          name: 'accentColor',
          type: 'text',
          label: 'Accent Color',
          admin: {
            description: 'Accent/highlight color',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
          admin: {
            description: 'Default text color for the component',
          },
        },
        {
          name: 'linkColor',
          type: 'text',
          label: 'Link Color',
          admin: {
            description: 'Default color for links',
          },
        },
        {
          name: 'linkHoverColor',
          type: 'text',
          label: 'Link Hover Color',
          admin: {
            description: 'Color for links on hover',
          },
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
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size (Main Title)',
          admin: {
            description: 'e.g., 48px, 3rem',
          },
        },
        {
          name: 'h2Color',
          type: 'text',
          label: 'H2 Color',
        },
        {
          name: 'h2FontWeight',
          type: 'text',
          label: 'H2 Font Weight',
          admin: {
            description: 'e.g., 700, bold',
          },
        },
        {
          name: 'h3FontSize',
          type: 'text',
          label: 'H3 Font Size (Price)',
          admin: {
            description: 'e.g., 36px, 2.25rem',
          },
        },
        {
          name: 'h3Color',
          type: 'text',
          label: 'H3 Color',
        },
        {
          name: 'h3FontWeight',
          type: 'text',
          label: 'H3 Font Weight',
        },
        {
          name: 'h6FontSize',
          type: 'text',
          label: 'H6 Font Size (Labels)',
          admin: {
            description: 'e.g., 16px, 1rem',
          },
        },
        {
          name: 'h6Color',
          type: 'text',
          label: 'H6 Color',
        },
        {
          name: 'h6FontWeight',
          type: 'text',
          label: 'H6 Font Weight',
        },
        {
          name: 'bodyFontSize',
          type: 'text',
          label: 'Body Font Size',
          admin: {
            description: 'e.g., 16px, 1rem',
          },
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
          admin: {
            description: 'e.g., 1.5, 150%',
          },
        },
        {
          name: 'smallTextFontSize',
          type: 'text',
          label: 'Small Text Font Size',
          admin: {
            description: 'For feature descriptions',
          },
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
          admin: {
            description: 'Duration for fade in animations (e.g., 1s, 2s)',
          },
          defaultValue: '1s',
        },
        {
          name: 'fadeInDelay',
          type: 'text',
          label: 'Fade In Delay',
          admin: {
            description: 'Delay before fade in starts (e.g., 0.2s)',
          },
          defaultValue: '0s',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          admin: {
            description: 'CSS easing function',
          },
          defaultValue: 'ease-in-out',
        },
        {
          name: 'hoverAnimationEnabled',
          type: 'checkbox',
          label: 'Enable Hover Animations',
          admin: {
            description: 'Enable hover effects on cards and buttons',
          },
          defaultValue: true,
        },
        {
          name: 'cardHoverScale',
          type: 'text',
          label: 'Card Hover Scale',
          admin: {
            description: 'Scale transform on hover (e.g., 1.02, 1.05)',
          },
          defaultValue: '1.02',
        },
      ],
    },
    // Card Styling
    {
      name: 'cardStyling',
      type: 'group',
      label: 'Pricing Card Styling',
      fields: [
        {
          name: 'cardBorderRadius',
          type: 'text',
          label: 'Card Border Radius',
          admin: {
            description: 'e.g., 8px, 1rem',
          },
        },
        {
          name: 'cardBoxShadow',
          type: 'text',
          label: 'Card Box Shadow',
          admin: {
            description: 'CSS box-shadow value',
          },
        },
        {
          name: 'cardPadding',
          type: 'text',
          label: 'Card Padding',
          admin: {
            description: 'e.g., 20px, 1.5rem',
          },
        },
        {
          name: 'cardHoverBoxShadow',
          type: 'text',
          label: 'Card Hover Box Shadow',
          admin: {
            description: 'Box shadow on hover',
          },
        },
        {
          name: 'featureIconSize',
          type: 'text',
          label: 'Feature Icon Size',
          admin: {
            description: 'Width/height of feature icons',
          },
        },
        {
          name: 'dividerColor',
          type: 'text',
          label: 'Divider Line Color',
          admin: {
            description: 'Color for divider lines in pricing cards',
          },
        },
        {
          name: 'dividerThickness',
          type: 'text',
          label: 'Divider Thickness',
          admin: {
            description: 'e.g., 1px, 2px',
          },
        },
      ],
    },
    // Button Global Settings
    {
      name: 'buttonGlobalSettings',
      type: 'group',
      label: 'Button Global Settings',
      fields: [
        {
          name: 'buttonBorderRadius',
          type: 'text',
          label: 'Button Border Radius',
          admin: {
            description: 'e.g., 4px, 0.5rem',
          },
        },
        {
          name: 'buttonPadding',
          type: 'text',
          label: 'Button Padding',
          admin: {
            description: 'e.g., 12px 24px',
          },
        },
        {
          name: 'buttonFontSize',
          type: 'text',
          label: 'Button Font Size',
        },
        {
          name: 'buttonFontWeight',
          type: 'text',
          label: 'Button Font Weight',
          admin: {
            description: 'e.g., 600, bold',
          },
        },
        {
          name: 'buttonTransition',
          type: 'text',
          label: 'Button Transition',
          admin: {
            description: 'CSS transition (e.g., all 0.3s ease)',
          },
          defaultValue: 'all 0.3s ease',
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
          admin: {
            description: 'Screen width for mobile (e.g., 768px)',
          },
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          admin: {
            description: 'Screen width for tablet (e.g., 1024px)',
          },
          defaultValue: '1024px',
        },
        {
          name: 'mobileStackCards',
          type: 'checkbox',
          label: 'Stack Cards on Mobile',
          admin: {
            description: 'Stack pricing cards vertically on mobile',
          },
          defaultValue: true,
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
          },
          defaultValue: '100%',
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile spacing',
          },
          defaultValue: '100%',
        },
        {
          name: 'mobileCardPadding',
          type: 'text',
          label: 'Mobile Card Padding',
          admin: {
            description: 'Padding for cards on mobile',
          },
        },
        {
          name: 'hideQuickLinksOnMobile',
          type: 'checkbox',
          label: 'Hide Quick Links on Mobile',
          defaultValue: false,
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
          name: 'focusVisibleColor',
          type: 'text',
          label: 'Focus Visible Color',
          admin: {
            description: 'Color for focus outlines (accessibility)',
          },
        },
        {
          name: 'focusVisibleWidth',
          type: 'text',
          label: 'Focus Outline Width',
          admin: {
            description: 'e.g., 2px, 3px',
          },
          defaultValue: '2px',
        },
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
        },
        {
          name: 'highContrastMode',
          type: 'checkbox',
          label: 'High Contrast Mode Support',
          admin: {
            description: 'Ensure sufficient color contrast',
          },
          defaultValue: true,
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
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          defaultValue: 'Essential Service Packages - Car Care',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Choose from our Premium or Basic car care packages. Professional maintenance services including oil changes, brake inspections, tire rotations, and more.',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
          defaultValue:
            'car maintenance, auto service packages, oil change, brake inspection, tire rotation',
        },
        {
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: {
            description: 'Add schema.org structured data for pricing',
          },
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
            description: 'Add custom CSS styles for this component',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JavaScript code for this component',
          },
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: {
            description: 'Add custom data attributes to component elements',
          },
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
              admin: {
                description: 'e.g., data-tracking-id',
              },
            },
            {
              name: 'value',
              type: 'text',
              label: 'Attribute Value',
            },
            {
              name: 'targetElement',
              type: 'select',
              label: 'Apply To Element',
              options: [
                { label: 'Main Section', value: 'mainSection' },
                { label: 'Premium Package', value: 'premiumPackage' },
                { label: 'Basic Package', value: 'basicPackage' },
                { label: 'Info Section', value: 'infoSection' },
                { label: 'Quick Links', value: 'quickLinks' },
              ],
            },
          ],
        },
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Images',
          defaultValue: true,
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
          name: 'googleAnalyticsId',
          type: 'text',
          label: 'Google Analytics ID',
          admin: {
            description: 'GA tracking ID for this component',
          },
        },
        {
          name: 'conversionTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Conversion Tracking',
          admin: {
            description: 'Track button clicks as conversions',
          },
          defaultValue: false,
        },
        {
          name: 'conversionEventName',
          type: 'text',
          label: 'Conversion Event Name',
          admin: {
            description: 'Event name for analytics (e.g., package_purchase_click)',
          },
          defaultValue: 'package_purchase_click',
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
          name: 'imageOptimization',
          type: 'checkbox',
          label: 'Enable Image Optimization',
          defaultValue: true,
        },
        {
          name: 'imageQuality',
          type: 'text',
          label: 'Image Quality',
          admin: {
            description: 'Compression quality (1-100)',
          },
          defaultValue: '85',
        },
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
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
    // Component State
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Toggle to enable/disable this component',
      },
    },
    {
      name: 'version',
      type: 'text',
      label: 'Component Version',
      defaultValue: '1.0.0',
      admin: {
        description: 'Track component version for updates',
      },
    },
  ],
  timestamps: true,
}
