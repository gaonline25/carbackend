import { CollectionConfig } from 'payload'

export const ServiceDetailsComponent: CollectionConfig = {
  slug: 'service-details-component',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'title', 'category', 'updatedAt'],
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
      defaultValue: 'Service Details Component',
    },

    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Used in URL: /services/your-slug-here',
      },
      // Auto-generate from title if empty
      hooks: {
        beforeValidate: [
          ({ data, originalDoc }) => {
            if (!data.slug && data.bannerSection?.title) {
              return data.bannerSection.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            return data.slug
          },
        ],
      },
    },
    // Banner Section
    {
      name: 'bannerSection',
      type: 'group',
      label: 'Banner Section',
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
            description: 'e.g., services-details-banner',
          },
          defaultValue: 'services-details-banner',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
          },
        },
        {
          name: 'overlayEnabled',
          type: 'checkbox',
          label: 'Enable Overlay',
          defaultValue: true,
        },
        {
          name: 'overlayOpacity',
          type: 'text',
          label: 'Overlay Opacity',
          admin: {
            description: 'Value between 0 and 1 (e.g., 0.5)',
          },
          defaultValue: '0.6',
        },
        {
          name: 'backgroundImage',
          type: 'group',
          label: 'Background Image',
          fields: [
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image (≤420px)',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image (≤800px)',
            },
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image (≤1400px)',
            },
            {
              name: 'large',
              type: 'upload',
              relationTo: 'media',
              label: 'Large Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Service Banner Background',
            },
            {
              name: 'defaultUrl',
              type: 'text',
              label: 'Default Image URL',
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66ac86cca33630d075de6445_66aba316f0a6b839e8c5930e_Banner-12.jpeg',
            },
          ],
        },
        {
          name: 'category',
          type: 'group',
          label: 'Category',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Category',
              defaultValue: true,
            },
            {
              name: 'label',
              type: 'text',
              label: 'Category Label',
              required: true,
              defaultValue: 'Auto Repair',
            },
            {
              name: 'slug',
              type: 'text',
              label: 'Category Slug',
              required: true,
              defaultValue: 'auto-repair',
            },
            {
              name: 'baseUrl',
              type: 'text',
              label: 'Category Base URL',
              defaultValue: '/services-categories',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Category Text Color',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Category Background Color',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Category Font Size',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Category Padding',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Category Border Radius',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          label: 'Service Title',
          required: true,
          defaultValue: 'Quality Service, Unmatched Expertise',
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
            description: 'CSS font-size value (e.g., 48px, 3rem)',
          },
        },
        {
          name: 'titleFontWeight',
          type: 'text',
          label: 'Title Font Weight',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Service Description',
          required: true,
          defaultValue:
            "At Carsy, we understand that your vehicle is more than just a mode of transportation; it's an essential part of your daily life. That's why we are committed to providing top-notch automotive services that ensure your car remains reliable, safe, and efficient.",
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
        },
        {
          name: 'descriptionFontSize',
          type: 'text',
          label: 'Description Font Size',
        },
        {
          name: 'descriptionLineHeight',
          type: 'text',
          label: 'Description Line Height',
        },
      ],
    },
    // Quick Links Section
    {
      name: 'quickLinksSection',
      type: 'group',
      label: 'Quick Links Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Quick Links',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          defaultValue: 'quick-service-links-container',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Padding',
        },
        {
          name: 'marginTop',
          type: 'text',
          label: 'Margin Top',
        },
        {
          name: 'quickLinks',
          type: 'array',
          label: 'Quick Links',
          admin: {
            description: 'Drag to reorder quick links',
          },
          fields: [
            {
              name: 'type',
              type: 'select',
              label: 'Link Type',
              required: true,
              options: [
                { label: 'Phone', value: 'phone' },
                { label: 'Email', value: 'email' },
                { label: 'Telegram', value: 'telegram' },
                { label: 'Location', value: 'location' },
                { label: 'Custom', value: 'custom' },
              ],
              defaultValue: 'phone',
            },
            {
              name: 'label',
              type: 'text',
              label: 'Link Label',
              required: true,
            },
            {
              name: 'value',
              type: 'text',
              label: 'Link Value/URL',
              required: true,
              admin: {
                description: 'Phone number, email, URL, etc.',
              },
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
              label: 'Icon URL (Fallback)',
            },
            {
              name: 'iconAlt',
              type: 'text',
              label: 'Icon Alt Text',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in New Tab',
              defaultValue: false,
            },
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Link',
              defaultValue: true,
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
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
          ],
          defaultValue: [
            {
              type: 'phone',
              label: '+1 (555) 123-4567',
              value: '+15551234567',
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390f09a1883d22986905_ride-hailing_16760271%201.svg',
              iconAlt: 'Phone Icon',
              show: true,
            },
            {
              type: 'email',
              label: 'info@carsy.com',
              value: 'info@carsy.com',
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390e6aa74ba021b6884f_email_11344546%201.svg',
              iconAlt: 'Email Icon',
              show: true,
            },
            {
              type: 'telegram',
              label: 'Telegram Chat',
              value: 'https://t.me/carsyservices',
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a239b6d347142d5307fd9b_2.svg',
              iconAlt: 'Telegram Icon',
              show: true,
            },
            {
              type: 'location',
              label: 'Our location',
              value: 'https://www.google.com/maps',
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23910e9bce36ced9cc75e_location_4879312%201.svg',
              iconAlt: 'Location Icon',
              openInNewTab: true,
              show: true,
            },
          ],
        },
        {
          name: 'scrollButton',
          type: 'group',
          label: 'Scroll Below Button',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Scroll Button',
              defaultValue: true,
            },
            {
              name: 'targetId',
              type: 'text',
              label: 'Target Section ID',
              defaultValue: '#Service-details',
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Arrow Icon',
            },
            {
              name: 'iconUrl',
              type: 'text',
              label: 'Arrow Icon URL (Fallback)',
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669fcff281897ab23a323451_Arrow%20White.svg',
            },
            {
              name: 'iconAlt',
              type: 'text',
              label: 'Icon Alt Text',
              defaultValue: 'Scroll Down Arrow',
            },
            {
              name: 'ariaLabel',
              type: 'text',
              label: 'ARIA Label',
              defaultValue: 'Scroll to service details',
            },
          ],
        },
      ],
    },
    // Content Section
    {
      name: 'contentSection',
      type: 'group',
      label: 'Content Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'id',
          type: 'text',
          label: 'Section ID',
          defaultValue: 'Service-details',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Additional CSS Classes',
          admin: {
            description: 'e.g., section-gray, padding-bottom',
          },
          defaultValue: 'section-gray padding-bottom',
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
          name: 'padding',
          type: 'group',
          label: 'Padding',
          fields: [
            {
              name: 'top',
              type: 'text',
              label: 'Padding Top',
            },
            {
              name: 'bottom',
              type: 'text',
              label: 'Padding Bottom',
            },
            {
              name: 'left',
              type: 'text',
              label: 'Padding Left',
            },
            {
              name: 'right',
              type: 'text',
              label: 'Padding Right',
            },
          ],
        },
        {
          name: 'innerBackgroundColor',
          type: 'text',
          label: 'Inner Background Color',
          admin: {
            description: 'Background color for soft-black-bg wrapper',
          },
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
              defaultValue: 'Commitment to Quality and Innovation in Every Service',
            },
            {
              name: 'color',
              type: 'text',
              label: 'Subtitle Color',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Subtitle Font Size',
            },
            {
              name: 'fontWeight',
              type: 'text',
              label: 'Subtitle Font Weight',
            },
            {
              name: 'textAlign',
              type: 'select',
              label: 'Text Alignment',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
                { label: 'Right', value: 'right' },
              ],
              defaultValue: 'left',
            },
            {
              name: 'marginBottom',
              type: 'text',
              label: 'Margin Bottom',
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Main Content',
          required: true,
        },
      ],
    },
    // Gradient Background Section
    {
      name: 'gradientSection',
      type: 'group',
      label: 'Gradient Background',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Gradient',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Gradient Wrapper Class',
          defaultValue: 'gradient-wrapper grad-wrapper-3',
        },
        {
          name: 'gradients',
          type: 'array',
          label: 'Gradient Elements',
          admin: {
            description: 'Add multiple gradient elements',
          },
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'Gradient Class',
              required: true,
            },
            {
              name: 'color',
              type: 'text',
              label: 'Gradient Color',
            },
            {
              name: 'opacity',
              type: 'text',
              label: 'Opacity',
            },
            {
              name: 'position',
              type: 'group',
              label: 'Position',
              fields: [
                {
                  name: 'top',
                  type: 'text',
                  label: 'Top',
                },
                {
                  name: 'bottom',
                  type: 'text',
                  label: 'Bottom',
                },
                {
                  name: 'left',
                  type: 'text',
                  label: 'Left',
                },
                {
                  name: 'right',
                  type: 'text',
                  label: 'Right',
                },
              ],
            },
          ],
          defaultValue: [
            {
              className: 'red-grad-9',
            },
            {
              className: 'red-grad-7',
            },
          ],
        },
      ],
    },
    // Section Order
    {
      name: 'sectionOrder',
      type: 'array',
      label: 'Section Order',
      admin: {
        description: 'Drag to reorder sections on the page',
      },
      fields: [
        {
          name: 'section',
          type: 'select',
          label: 'Section',
          required: true,
          options: [
            { label: 'Banner Section', value: 'banner' },
            { label: 'Quick Links Section', value: 'quickLinks' },
            { label: 'Content Section', value: 'content' },
            { label: 'Gradient Background', value: 'gradient' },
          ],
        },
      ],
      defaultValue: [
        { section: 'banner' },
        { section: 'quickLinks' },
        { section: 'content' },
        { section: 'gradient' },
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
            description: 'Spacing between sections (e.g., 60px, 4rem)',
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
            description: 'Accent color for highlights',
          },
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
          admin: {
            description: 'Default text color for the page',
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
        {
          name: 'borderRadius',
          type: 'text',
          label: 'Default Border Radius',
          admin: {
            description: 'Default border radius for elements',
          },
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Default Box Shadow',
          admin: {
            description: 'Default box shadow for elements',
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
          name: 'h1FontSize',
          type: 'text',
          label: 'H1 Font Size',
          defaultValue: '48px',
        },
        {
          name: 'h1Color',
          type: 'text',
          label: 'H1 Color',
        },
        {
          name: 'h1FontWeight',
          type: 'text',
          label: 'H1 Font Weight',
          defaultValue: '700',
        },
        {
          name: 'h1LineHeight',
          type: 'text',
          label: 'H1 Line Height',
          defaultValue: '1.2',
        },
        {
          name: 'h1MarginBottom',
          type: 'text',
          label: 'H1 Margin Bottom',
        },
        {
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
          defaultValue: '36px',
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
          defaultValue: '700',
        },
        {
          name: 'h2LineHeight',
          type: 'text',
          label: 'H2 Line Height',
          defaultValue: '1.3',
        },
        {
          name: 'h2MarginBottom',
          type: 'text',
          label: 'H2 Margin Bottom',
        },
        {
          name: 'h3FontSize',
          type: 'text',
          label: 'H3 Font Size',
          defaultValue: '28px',
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
          defaultValue: '600',
        },
        {
          name: 'h3LineHeight',
          type: 'text',
          label: 'H3 Line Height',
          defaultValue: '1.4',
        },
        {
          name: 'h3MarginBottom',
          type: 'text',
          label: 'H3 Margin Bottom',
        },
        {
          name: 'h4FontSize',
          type: 'text',
          label: 'H4 Font Size',
          defaultValue: '22px',
        },
        {
          name: 'h4Color',
          type: 'text',
          label: 'H4 Color',
        },
        {
          name: 'h4FontWeight',
          type: 'text',
          label: 'H4 Font Weight',
          defaultValue: '600',
        },
        {
          name: 'bodyFontSize',
          type: 'text',
          label: 'Body Font Size',
          defaultValue: '16px',
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
          defaultValue: '1.6',
        },
        {
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
          defaultValue: '1.5rem',
        },
        {
          name: 'listStyleType',
          type: 'text',
          label: 'List Style Type',
          admin: {
            description: 'CSS list-style-type (e.g., disc, circle, square)',
          },
          defaultValue: 'disc',
        },
        {
          name: 'listMarginLeft',
          type: 'text',
          label: 'List Margin Left',
          defaultValue: '2rem',
        },
        {
          name: 'listItemSpacing',
          type: 'text',
          label: 'List Item Spacing',
          defaultValue: '0.5rem',
        },
        {
          name: 'strongFontWeight',
          type: 'text',
          label: 'Strong/Bold Font Weight',
          defaultValue: '700',
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
          name: 'bannerGridColumns',
          type: 'text',
          label: 'Banner Grid Columns',
          admin: {
            description: 'CSS grid columns for banner (e.g., 1fr 1fr)',
          },
        },
        {
          name: 'bannerGridGap',
          type: 'text',
          label: 'Banner Grid Gap',
          defaultValue: '2rem',
        },
        {
          name: 'bannerHeight',
          type: 'text',
          label: 'Banner Min Height',
          admin: {
            description: 'Minimum height for banner section',
          },
        },
        {
          name: 'contentMaxWidth',
          type: 'text',
          label: 'Content Max Width',
          admin: {
            description: 'Max width for content section',
          },
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Gap between columns (e.g., 30px, 2rem)',
          },
          defaultValue: '2rem',
        },
        {
          name: 'rowGap',
          type: 'text',
          label: 'Row Gap',
          admin: {
            description: 'Gap between rows (e.g., 20px, 1.5rem)',
          },
          defaultValue: '1.5rem',
        },
        {
          name: 'imageObjectFit',
          type: 'select',
          label: 'Image Object Fit',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Fill', value: 'fill' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'cover',
        },
        {
          name: 'imagePosition',
          type: 'text',
          label: 'Image Position',
          admin: {
            description: 'CSS background-position value',
          },
          defaultValue: 'center',
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
          name: 'bannerImageScale',
          type: 'text',
          label: 'Banner Image Scale',
          admin: {
            description: 'Initial scale for banner image (e.g., 1.15)',
          },
          defaultValue: '1.15',
        },
        {
          name: 'fadeInDuration',
          type: 'text',
          label: 'Fade In Duration',
          admin: {
            description: 'Duration for fade in animations (e.g., 1s, 2s)',
          },
          defaultValue: '0.8s',
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
          name: 'slideInDuration',
          type: 'text',
          label: 'Slide In Duration',
          admin: {
            description: 'Duration for slide animations',
          },
          defaultValue: '1s',
        },
        {
          name: 'hoverTransitionDuration',
          type: 'text',
          label: 'Hover Transition Duration',
          admin: {
            description: 'Duration for hover effects',
          },
          defaultValue: '0.3s',
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
          name: 'enableScrollAnimations',
          type: 'checkbox',
          label: 'Enable Scroll Animations',
          admin: {
            description: 'Enable scroll-triggered animations',
          },
          defaultValue: true,
        },
        {
          name: 'scrollOffset',
          type: 'text',
          label: 'Scroll Animation Offset',
          admin: {
            description: 'Distance from viewport to trigger animation (px)',
          },
          defaultValue: '100',
        },
      ],
    },
    // Quick Links Styling
    {
      name: 'quickLinksStyles',
      type: 'group',
      label: 'Quick Links Styling',
      fields: [
        {
          name: 'linkSpacing',
          type: 'text',
          label: 'Link Spacing',
          admin: {
            description: 'Space between quick links',
          },
        },
        {
          name: 'linkPadding',
          type: 'text',
          label: 'Link Padding',
        },
        {
          name: 'linkBorderRadius',
          type: 'text',
          label: 'Link Border Radius',
        },
        {
          name: 'iconSize',
          type: 'text',
          label: 'Icon Size',
          admin: {
            description: 'Size of link icons',
          },
        },
        {
          name: 'iconMarginRight',
          type: 'text',
          label: 'Icon Margin Right',
          admin: {
            description: 'Space between icon and text',
          },
        },
        {
          name: 'linkTextColor',
          type: 'text',
          label: 'Link Text Color',
        },
        {
          name: 'linkHoverTextColor',
          type: 'text',
          label: 'Link Hover Text Color',
        },
        {
          name: 'linkBackgroundColor',
          type: 'text',
          label: 'Link Background Color',
        },
        {
          name: 'linkHoverBackgroundColor',
          type: 'text',
          label: 'Link Hover Background Color',
        },
        {
          name: 'linkBorderColor',
          type: 'text',
          label: 'Link Border Color',
        },
        {
          name: 'linkBorderWidth',
          type: 'text',
          label: 'Link Border Width',
        },
        {
          name: 'underlineColor',
          type: 'text',
          label: 'Underline Color',
          admin: {
            description: 'Color of the animated underline',
          },
        },
        {
          name: 'underlineHeight',
          type: 'text',
          label: 'Underline Height',
        },
      ],
    },
    // Rich Text Styling
    {
      name: 'richTextStyles',
      type: 'group',
      label: 'Rich Text Content Styling',
      fields: [
        {
          name: 'figureMaxWidth',
          type: 'text',
          label: 'Figure Max Width',
          defaultValue: '1920px',
        },
        {
          name: 'figureMargin',
          type: 'text',
          label: 'Figure Margin',
          defaultValue: '2rem 0',
        },
        {
          name: 'imageMargin',
          type: 'text',
          label: 'Image Margin',
          defaultValue: '1rem 0',
        },
        {
          name: 'imageBorderRadius',
          type: 'text',
          label: 'Image Border Radius',
        },
        {
          name: 'videoAspectRatio',
          type: 'text',
          label: 'Video Aspect Ratio',
          admin: {
            description: 'Padding-bottom percentage for video containers',
          },
          defaultValue: '75%',
        },
        {
          name: 'blockquoteStyle',
          type: 'group',
          label: 'Blockquote Styling',
          fields: [
            {
              name: 'borderLeft',
              type: 'text',
              label: 'Border Left',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Padding',
            },
            {
              name: 'fontStyle',
              type: 'text',
              label: 'Font Style',
              defaultValue: 'italic',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
          ],
        },
        {
          name: 'codeBlockStyle',
          type: 'group',
          label: 'Code Block Styling',
          fields: [
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
            {
              name: 'padding',
              type: 'text',
              label: 'Padding',
            },
            {
              name: 'borderRadius',
              type: 'text',
              label: 'Border Radius',
            },
            {
              name: 'fontFamily',
              type: 'text',
              label: 'Font Family',
              defaultValue: 'monospace',
            },
          ],
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
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'ogImageUrl',
          type: 'text',
          label: 'OG Image URL (Fallback)',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
        {
          name: 'robots',
          type: 'select',
          label: 'Robots Meta Tag',
          options: [
            { label: 'Index, Follow', value: 'index,follow' },
            { label: 'No Index, Follow', value: 'noindex,follow' },
            { label: 'Index, No Follow', value: 'index,nofollow' },
            { label: 'No Index, No Follow', value: 'noindex,nofollow' },
          ],
          defaultValue: 'index,follow',
        },
        {
          name: 'structuredData',
          type: 'textarea',
          label: 'Structured Data (JSON-LD)',
          admin: {
            description: 'Add schema.org structured data in JSON-LD format',
          },
        },
        {
          name: 'breadcrumbsEnabled',
          type: 'checkbox',
          label: 'Enable Breadcrumbs Schema',
          defaultValue: true,
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
          name: 'skipToContent',
          type: 'checkbox',
          label: 'Include Skip to Content Link',
          defaultValue: true,
        },
        {
          name: 'skipToContentTarget',
          type: 'text',
          label: 'Skip to Content Target ID',
          defaultValue: '#Service-details',
        },
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
          admin: {
            description: 'Color for focus outlines (accessibility)',
          },
        },
        {
          name: 'focusVisibleWidth',
          type: 'text',
          label: 'Focus Visible Width',
          defaultValue: '2px',
        },
        {
          name: 'focusVisibleStyle',
          type: 'select',
          label: 'Focus Visible Style',
          options: [
            { label: 'Solid', value: 'solid' },
            { label: 'Dashed', value: 'dashed' },
            { label: 'Dotted', value: 'dotted' },
          ],
          defaultValue: 'solid',
        },
        {
          name: 'contrastMode',
          type: 'select',
          label: 'Contrast Mode',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'High Contrast', value: 'high' },
            { label: 'Very High Contrast', value: 'very-high' },
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
          name: 'screenReaderText',
          type: 'group',
          label: 'Screen Reader Text',
          fields: [
            {
              name: 'categoryPrefix',
              type: 'text',
              label: 'Category Prefix',
              defaultValue: 'Service category:',
            },
            {
              name: 'phonePrefix',
              type: 'text',
              label: 'Phone Prefix',
              defaultValue: 'Call us at:',
            },
            {
              name: 'emailPrefix',
              type: 'text',
              label: 'Email Prefix',
              defaultValue: 'Email us at:',
            },
            {
              name: 'locationPrefix',
              type: 'text',
              label: 'Location Prefix',
              defaultValue: 'View our location:',
            },
          ],
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
          name: 'mobileTitleFontSize',
          type: 'text',
          label: 'Mobile Title Font Size',
          admin: {
            description: 'Font size adjustment for titles on mobile',
          },
        },
        {
          name: 'mobileDescriptionFontSize',
          type: 'text',
          label: 'Mobile Description Font Size',
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
          },
          defaultValue: '90%',
        },
        {
          name: 'mobileSpacingAdjustment',
          type: 'text',
          label: 'Mobile Spacing Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile spacing',
          },
          defaultValue: '75%',
        },
        {
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections on Mobile',
          admin: {
            description: 'Automatically stack sections vertically on mobile devices',
          },
          defaultValue: true,
        },
        {
          name: 'mobileBannerHeight',
          type: 'text',
          label: 'Mobile Banner Height',
          admin: {
            description: 'Min height for banner on mobile',
          },
        },
        {
          name: 'mobileGridColumns',
          type: 'text',
          label: 'Mobile Grid Columns',
          admin: {
            description: 'Grid layout for mobile (e.g., 1fr)',
          },
          defaultValue: '1fr',
        },
        {
          name: 'mobileQuickLinksLayout',
          type: 'select',
          label: 'Mobile Quick Links Layout',
          options: [
            { label: 'Stack Vertically', value: 'stack' },
            { label: 'Grid 2 Columns', value: 'grid-2' },
            { label: 'Horizontal Scroll', value: 'scroll' },
          ],
          defaultValue: 'stack',
        },
        {
          name: 'mobileHideElements',
          type: 'array',
          label: 'Hide Elements on Mobile',
          admin: {
            description: 'List of element classes to hide on mobile',
          },
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'CSS Class Name',
            },
          ],
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
          label: 'Enable Lazy Loading for Images',
          defaultValue: true,
        },
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
          name: 'imageFormat',
          type: 'select',
          label: 'Preferred Image Format',
          options: [
            { label: 'Auto (WebP with fallback)', value: 'auto' },
            { label: 'WebP', value: 'webp' },
            { label: 'AVIF', value: 'avif' },
            { label: 'JPEG', value: 'jpeg' },
            { label: 'PNG', value: 'png' },
          ],
          defaultValue: 'auto',
        },
        {
          name: 'responsiveImageSizes',
          type: 'text',
          label: 'Responsive Image Sizes',
          admin: {
            description: 'Comma-separated widths for responsive images (e.g., 420,800,1400)',
          },
          defaultValue: '420,768,1024,1400,1920',
        },
        {
          name: 'preloadCriticalImages',
          type: 'checkbox',
          label: 'Preload Critical Images',
          admin: {
            description: 'Preload banner and above-the-fold images',
          },
          defaultValue: true,
        },
        {
          name: 'minifyCSS',
          type: 'checkbox',
          label: 'Minify CSS',
          defaultValue: true,
        },
        {
          name: 'minifyJS',
          type: 'checkbox',
          label: 'Minify JavaScript',
          defaultValue: true,
        },
        {
          name: 'enableCDN',
          type: 'checkbox',
          label: 'Use CDN for Assets',
          defaultValue: true,
        },
        {
          name: 'cdnUrl',
          type: 'text',
          label: 'CDN Base URL',
          admin: {
            description: 'Base URL for CDN (e.g., https://cdn.example.com)',
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
            description: 'Add custom data attributes to sections',
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
              name: 'targetSection',
              type: 'select',
              label: 'Apply To Section',
              options: [
                { label: 'Banner Section', value: 'banner' },
                { label: 'Quick Links Section', value: 'quickLinks' },
                { label: 'Content Section', value: 'content' },
                { label: 'Gradient Section', value: 'gradient' },
              ],
            },
          ],
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Component Caching',
          defaultValue: true,
        },
        {
          name: 'cacheTimeout',
          type: 'text',
          label: 'Cache Timeout (seconds)',
          defaultValue: '3600',
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
          name: 'facebookPixelId',
          type: 'text',
          label: 'Facebook Pixel ID',
        },
        {
          name: 'trackingEnabled',
          type: 'checkbox',
          label: 'Enable Tracking',
          defaultValue: false,
        },
        {
          name: 'trackingEvents',
          type: 'array',
          label: 'Tracking Events',
          admin: {
            description: 'Define custom tracking events',
          },
          fields: [
            {
              name: 'eventName',
              type: 'text',
              label: 'Event Name',
              required: true,
            },
            {
              name: 'trigger',
              type: 'select',
              label: 'Trigger',
              options: [
                { label: 'Page Load', value: 'load' },
                { label: 'Link Click', value: 'click' },
                { label: 'Scroll to Section', value: 'scroll' },
                { label: 'Form Submit', value: 'submit' },
              ],
            },
            {
              name: 'targetElement',
              type: 'text',
              label: 'Target Element',
              admin: {
                description: 'CSS selector for the target element',
              },
            },
          ],
        },
        {
          name: 'conversionTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Conversion Tracking',
          defaultValue: false,
        },
      ],
    },
    // Contact Information
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Default Contact Information',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '+15551234567',
        },
        {
          name: 'phoneFormatted',
          type: 'text',
          label: 'Phone Number (Formatted)',
          defaultValue: '+1 (555) 123-4567',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email Address',
          defaultValue: 'info@carsy.com',
        },
        {
          name: 'telegramUrl',
          type: 'text',
          label: 'Telegram URL',
          defaultValue: 'https://t.me/carsyservices',
        },
        {
          name: 'locationUrl',
          type: 'text',
          label: 'Location URL (Google Maps)',
          defaultValue: 'https://www.google.com/maps',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Physical Address',
        },
        {
          name: 'businessHours',
          type: 'textarea',
          label: 'Business Hours',
          defaultValue:
            'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed',
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
