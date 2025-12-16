import { CollectionConfig } from 'payload'

export const AboutHeroComponent: CollectionConfig = {
  slug: 'about-hero-component',
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
      defaultValue: 'About Hero Component',
    },
    // Gradient Wrapper Section
    {
      name: 'gradientWrapper',
      type: 'group',
      label: 'Gradient Wrapper',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Gradient Wrapper',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Gradient Wrapper Class',
          defaultValue: 'gradient-wrapper grad-about',
        },
        {
          name: 'gradients',
          type: 'array',
          label: 'Gradient Elements',
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'Gradient Class',
              required: true,
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
            {
              name: 'opacity',
              type: 'text',
              label: 'Opacity',
            },
          ],
          defaultValue: [
            { className: 'red-grad-2' },
            { className: 'red-grad-3' },
            { className: 'red-grad-4' },
          ],
        },
        {
          name: 'printImage',
          type: 'group',
          label: 'Print Image',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Print Image',
              defaultValue: true,
            },
            {
              name: 'url',
              type: 'upload',
              relationTo: 'media',
              label: 'Print Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Project photo',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Image Class',
              defaultValue: 'print-img-1',
            },
          ],
        },
      ],
    },
    // Hero Banner Section
    {
      name: 'heroBanner',
      type: 'group',
      label: 'Hero Banner Section',
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
          label: 'Banner Class',
          defaultValue: 'about-us-banner',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'base-container',
        },
        // Left Content
        {
          name: 'leftContent',
          type: 'group',
          label: 'Left Content',
          fields: [
            {
              name: 'subtitle',
              type: 'text',
              label: 'Subtitle',
              defaultValue: 'Commitment to Quality and Innovation in Every Service',
            },
            {
              name: 'subtitleClass',
              type: 'text',
              label: 'Subtitle Class',
              defaultValue: 'black-subtitle',
            },
            {
              name: 'subtitleColor',
              type: 'text',
              label: 'Subtitle Color',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Main Title',
              required: true,
              defaultValue: 'Discover Our Car Journey',
            },
            {
              name: 'titleClass',
              type: 'text',
              label: 'Title Class',
              defaultValue: 'about-us-title',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
          ],
        },
        // Right Content
        {
          name: 'rightContent',
          type: 'group',
          label: 'Right Content',
          fields: [
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              defaultValue:
                "Welcome to Carsy! Our values are rooted in trust, integrity, and a relentless pursuit of excellence. We are not just a service provider; we are your automotive partners, committed to ensuring your vehicle's performance and longevity.",
            },
            {
              name: 'descriptionClass',
              type: 'text',
              label: 'Description Class',
              defaultValue: 'about-us-description',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
          ],
        },
        // Buttons
        {
          name: 'buttons',
          type: 'array',
          label: 'Action Buttons',
          admin: {
            description: 'Drag to reorder buttons',
          },
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              required: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button Class',
              defaultValue: 'primary-button w-button',
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
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Hover Background Color',
            },
          ],
          defaultValue: [
            {
              text: 'Best services',
              url: '/services',
              className: 'primary-button w-button',
            },
            {
              text: 'Our customers',
              url: '/our-clients',
              className: 'secondary-red-button w-button',
            },
          ],
        },
        // Banner Image
        {
          name: 'bannerImage',
          type: 'group',
          label: 'Banner Background Image',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Background Image',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'Image Class',
              defaultValue: 'inner-photo-banner about-us-banner',
            },
            {
              name: 'overlayClass',
              type: 'text',
              label: 'Overlay Class',
              defaultValue: 'about-us-overlay',
            },
            {
              name: 'overlayGradientClass',
              type: 'text',
              label: 'Overlay Gradient Class',
              defaultValue: 'red-grad-1',
            },
          ],
        },
      ],
    },
    // Tabs Section
    {
      name: 'tabsSection',
      type: 'group',
      label: 'Tabs Section',
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
          label: 'Section Class',
          defaultValue: 'section tab-section',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'containerClass',
          type: 'text',
          label: 'Container Class',
          defaultValue: 'base-container',
        },
        {
          name: 'tabsWrapperClass',
          type: 'text',
          label: 'Tabs Wrapper Class',
          defaultValue: 'tabs-wrapper',
        },
        // Tab Menu Styling
        {
          name: 'tabMenuStyling',
          type: 'group',
          label: 'Tab Menu Styling',
          fields: [
            {
              name: 'tabMenuClass',
              type: 'text',
              label: 'Tab Menu Class',
              defaultValue: 'vacations-tab-menu w-tab-menu',
            },
            {
              name: 'tabLinkClass',
              type: 'text',
              label: 'Tab Link Class',
              defaultValue: 'vacations-tab-link w-inline-block w-tab-link',
            },
            {
              name: 'activeTabColor',
              type: 'text',
              label: 'Active Tab Color',
            },
            {
              name: 'inactiveTabColor',
              type: 'text',
              label: 'Inactive Tab Color',
            },
          ],
        },
        // Individual Tabs
        {
          name: 'tabs',
          type: 'array',
          label: 'Tabs',
          admin: {
            description: 'Drag to reorder tabs',
          },
          fields: [
            {
              name: 'tabId',
              type: 'text',
              label: 'Tab ID',
              required: true,
              admin: {
                description: 'Unique identifier for this tab (e.g., tab-1)',
              },
            },
            {
              name: 'tabName',
              type: 'text',
              label: 'Tab Name',
              required: true,
            },
            {
              name: 'circleClass',
              type: 'text',
              label: 'Circle Indicator Class',
              admin: {
                description: 'e.g., one, two, three, four',
              },
            },
            // Tab Content - Top Section
            {
              name: 'topSection',
              type: 'group',
              label: 'Top Section',
              fields: [
                // Left Content
                {
                  name: 'leftContent',
                  type: 'group',
                  label: 'Left Content',
                  fields: [
                    {
                      name: 'subtitle',
                      type: 'text',
                      label: 'Subtitle',
                    },
                    {
                      name: 'subtitleClass',
                      type: 'text',
                      label: 'Subtitle Class',
                      defaultValue: 'black-subtitle',
                    },
                    {
                      name: 'subtitleColor',
                      type: 'text',
                      label: 'Subtitle Color',
                    },
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Title',
                    },
                    {
                      name: 'titleClass',
                      type: 'text',
                      label: 'Title Class',
                      defaultValue: 'tab-hero-title',
                    },
                    {
                      name: 'titleColor',
                      type: 'text',
                      label: 'Title Color',
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
                          name: 'icon',
                          type: 'upload',
                          relationTo: 'media',
                          label: 'Icon',
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
                          defaultValue: 'Project photo',
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
                    },
                  ],
                },
                // Right Content
                {
                  name: 'rightContent',
                  type: 'group',
                  label: 'Right Content (Image/Video)',
                  fields: [
                    {
                      name: 'mediaType',
                      type: 'select',
                      label: 'Media Type',
                      options: [
                        { label: 'Video', value: 'video' },
                        { label: 'Image', value: 'image' },
                      ],
                      defaultValue: 'video',
                    },
                    {
                      name: 'videoUrl',
                      type: 'text',
                      label: 'Video URL (MP4)',
                      admin: {
                        condition: (data, siblingData) => siblingData?.mediaType === 'video',
                      },
                    },
                    {
                      name: 'videoWebmUrl',
                      type: 'text',
                      label: 'Video URL (WebM)',
                      admin: {
                        condition: (data, siblingData) => siblingData?.mediaType === 'video',
                      },
                    },
                    {
                      name: 'videoPosterUrl',
                      type: 'text',
                      label: 'Video Poster Image URL',
                      admin: {
                        condition: (data, siblingData) => siblingData?.mediaType === 'video',
                      },
                    },
                    {
                      name: 'autoplay',
                      type: 'checkbox',
                      label: 'Autoplay Video',
                      defaultValue: true,
                      admin: {
                        condition: (data, siblingData) => siblingData?.mediaType === 'video',
                      },
                    },
                    {
                      name: 'loop',
                      type: 'checkbox',
                      label: 'Loop Video',
                      defaultValue: true,
                      admin: {
                        condition: (data, siblingData) => siblingData?.mediaType === 'video',
                      },
                    },
                    {
                      name: 'muted',
                      type: 'checkbox',
                      label: 'Muted Video',
                      defaultValue: true,
                      admin: {
                        condition: (data, siblingData) => siblingData?.mediaType === 'video',
                      },
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: 'Image',
                      admin: {
                        condition: (data, siblingData) => siblingData?.mediaType === 'image',
                      },
                    },
                    {
                      name: 'imageAlt',
                      type: 'text',
                      label: 'Image Alt Text',
                      admin: {
                        condition: (data, siblingData) => siblingData?.mediaType === 'image',
                      },
                    },
                    {
                      name: 'className',
                      type: 'text',
                      label: 'Media Class',
                      defaultValue: 'top-tab-photo',
                    },
                    {
                      name: 'overlayClass',
                      type: 'text',
                      label: 'Overlay Class',
                      defaultValue: 'video-overlay',
                    },
                  ],
                },
              ],
            },
            // Tab Content - Bottom Section (Services Grid)
            {
              name: 'servicesGrid',
              type: 'group',
              label: 'Services Grid Section',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show Services Grid',
                  defaultValue: true,
                },
                {
                  name: 'gridClass',
                  type: 'text',
                  label: 'Grid Class',
                  defaultValue: 'carsy-grid-services',
                },
                {
                  name: 'services',
                  type: 'array',
                  label: 'Services',
                  admin: {
                    description: 'Drag to reorder services',
                  },
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      label: 'Service Title',
                      required: true,
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      label: 'Service Description',
                    },
                    {
                      name: 'url',
                      type: 'text',
                      label: 'Service URL',
                      required: true,
                    },
                    {
                      name: 'titleColor',
                      type: 'text',
                      label: 'Title Color',
                    },
                    {
                      name: 'titleHoverColor',
                      type: 'text',
                      label: 'Title Hover Color',
                    },
                    {
                      name: 'descriptionColor',
                      type: 'text',
                      label: 'Description Color',
                    },
                  ],
                },
              ],
            },
            // Tab Content - CTA Section
            {
              name: 'ctaSection',
              type: 'group',
              label: 'CTA Section',
              fields: [
                {
                  name: 'show',
                  type: 'checkbox',
                  label: 'Show CTA Section',
                  defaultValue: true,
                },
                {
                  name: 'backgroundColor',
                  type: 'text',
                  label: 'Background Color',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'CTA Title',
                },
                {
                  name: 'titleClass',
                  type: 'text',
                  label: 'Title Class',
                  defaultValue: 'service-cta-title',
                },
                {
                  name: 'titleColor',
                  type: 'text',
                  label: 'Title Color',
                },
                {
                  name: 'buttonText',
                  type: 'text',
                  label: 'Button Text',
                },
                {
                  name: 'buttonUrl',
                  type: 'text',
                  label: 'Button URL',
                },
                {
                  name: 'buttonClass',
                  type: 'text',
                  label: 'Button Class',
                  defaultValue: 'primary-button w-button',
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
              ],
            },
          ],
          defaultValue: [
            {
              tabId: 'tab-1',
              tabName: 'carsy services',
              circleClass: 'one',
              topSection: {
                leftContent: {
                  subtitle: 'Keeping Your Vehicle in Top Condition',
                  title: 'Tailored Automotive Services for Every Make and Model',
                  quickLinks: [
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390f09a1883d22986905_ride-hailing_16760271%201.svg',
                      iconAlt: 'Project photo',
                      text: '+1-800-123-4567',
                      url: 'tel:+1-800-123-4567',
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390e6aa74ba021b6884f_email_11344546%201.svg',
                      iconAlt: 'Project photo',
                      text: 'carsy@gmail.com',
                      url: 'mailto:carsy@gmail.com',
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a239b6d347142d5307fd9b_2.svg',
                      iconAlt: 'Project photo',
                      text: 'Telegram Chat',
                      url: 'https://web.telegram.org/a/',
                      openInNewTab: true,
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23910e9bce36ced9cc75e_location_4879312%201.svg',
                      iconAlt: 'Project photo',
                      text: 'Our location',
                      url: 'https://www.google.com/maps',
                      openInNewTab: true,
                    },
                  ],
                },
              },
              servicesGrid: {
                show: true,
                services: [
                  {
                    title: 'Brake Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/brake-repair',
                  },
                  {
                    title: 'Engine Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/engine-repair',
                  },
                  {
                    title: 'Tire Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/tire-repair',
                  },
                  {
                    title: 'Clutch Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/clutch-repair',
                  },
                  {
                    title: 'Battery Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/battery-repair',
                  },
                  {
                    title: 'Oil Change',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/oil-change',
                  },
                ],
              },
              ctaSection: {
                show: true,
                title: 'Discover the Full Spectrum of Our Exceptional Services',
                buttonText: 'All Car Services',
                buttonUrl: '/services',
              },
            },
            {
              tabId: 'tab-3',
              tabName: 'Maintenance',
              circleClass: 'two',
              topSection: {
                leftContent: {
                  subtitle: 'Full-Service Maintenance to Keep Your Car',
                  title: 'The Smart Choice for a Safe and Reliable car Maintenance',
                  quickLinks: [
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390f09a1883d22986905_ride-hailing_16760271%201.svg',
                      iconAlt: 'Project photo',
                      text: '+1-800-123-4567',
                      url: 'tel:+1-800-123-4567',
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390e6aa74ba021b6884f_email_11344546%201.svg',
                      iconAlt: 'Project photo',
                      text: 'carsy@gmail.com',
                      url: 'mailto:carsy@gmail.com',
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a239b6d347142d5307fd9b_2.svg',
                      iconAlt: 'Project photo',
                      text: 'Telegram Chat',
                      url: 'https://web.telegram.org/a/',
                      openInNewTab: true,
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23910e9bce36ced9cc75e_location_4879312%201.svg',
                      iconAlt: 'Project photo',
                      text: 'Our location',
                      url: 'https://www.google.com/maps',
                      openInNewTab: true,
                    },
                  ],
                },
              },
              servicesGrid: {
                show: true,
                services: [
                  {
                    title: 'Engine Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/engine-repair',
                  },
                  {
                    title: 'Battery Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/battery-repair',
                  },
                  {
                    title: 'Radiator Service',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/radiator-service',
                  },
                ],
              },
              ctaSection: {
                show: true,
                title: 'Discover the Full Spectrum of Our Exceptional Services',
                buttonText: 'All Car Services',
                buttonUrl: '/services',
              },
            },
            {
              tabId: 'tab-4',
              tabName: 'Repair',
              circleClass: 'three',
              topSection: {
                leftContent: {
                  subtitle: 'From Engine Troubles to Brake Repairs',
                  title: 'High-Quality Repair Solutions for a Safe & Smooth Drive',
                  quickLinks: [
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390f09a1883d22986905_ride-hailing_16760271%201.svg',
                      iconAlt: 'Project photo',
                      text: '+1-800-123-4567',
                      url: 'tel:+1-800-123-4567',
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390e6aa74ba021b6884f_email_11344546%201.svg',
                      iconAlt: 'Project photo',
                      text: 'carsy@gmail.com',
                      url: 'mailto:carsy@gmail.com',
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a239b6d347142d5307fd9b_2.svg',
                      iconAlt: 'Project photo',
                      text: 'Telegram Chat',
                      url: 'https://web.telegram.org/a/',
                      openInNewTab: true,
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23910e9bce36ced9cc75e_location_4879312%201.svg',
                      iconAlt: 'Project photo',
                      text: 'Our location',
                      url: 'https://www.google.com/maps',
                      openInNewTab: true,
                    },
                  ],
                },
              },
              servicesGrid: {
                show: true,
                services: [
                  {
                    title: 'Engine Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/engine-repair',
                  },
                  {
                    title: 'Tire Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/tire-repair',
                  },
                  {
                    title: 'Oil Change',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/oil-change',
                  },
                ],
              },
              ctaSection: {
                show: true,
                title: 'Discover the Full Spectrum of Our Exceptional Services',
                buttonText: 'All Car Services',
                buttonUrl: '/services',
              },
            },
            {
              tabId: 'tab-5',
              tabName: 'Diagnostics',
              circleClass: 'four',
              topSection: {
                leftContent: {
                  subtitle: 'Diagnostic Services to Pinpoint Every Issue',
                  title: 'Expert Diagnostics to Keep Your Car Running Smoothly',
                  quickLinks: [
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390f09a1883d22986905_ride-hailing_16760271%201.svg',
                      iconAlt: 'Project photo',
                      text: '+1-800-123-4567',
                      url: 'tel:+1-800-123-4567',
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a2390e6aa74ba021b6884f_email_11344546%201.svg',
                      iconAlt: 'Project photo',
                      text: 'carsy@gmail.com',
                      url: 'mailto:carsy@gmail.com',
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a239b6d347142d5307fd9b_2.svg',
                      iconAlt: 'Project photo',
                      text: 'Telegram Chat',
                      url: 'https://web.telegram.org/a/',
                      openInNewTab: true,
                    },
                    {
                      iconUrl:
                        'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a23910e9bce36ced9cc75e_location_4879312%201.svg',
                      iconAlt: 'Project photo',
                      text: 'Our location',
                      url: 'https://www.google.com/maps',
                      openInNewTab: true,
                    },
                  ],
                },
              },
              servicesGrid: {
                show: true,
                services: [
                  {
                    title: 'Brake Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/brake-repair',
                  },
                  {
                    title: 'Clutch Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/clutch-repair',
                  },
                  {
                    title: 'System Repair',
                    description:
                      'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
                    url: '/services/system-repair',
                  },
                ],
              },
              ctaSection: {
                show: true,
                title: 'Discover the Full Spectrum of Our Exceptional Services',
                buttonText: 'All Car Services',
                buttonUrl: '/services',
              },
            },
          ],
        },
        // Indicator Settings
        {
          name: 'indicator',
          type: 'group',
          label: 'Tab Indicator Settings',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Indicator',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'Indicator Class',
              defaultValue: 'events-indicator',
            },
            {
              name: 'fillClass',
              type: 'text',
              label: 'Indicator Fill Class',
              defaultValue: 'events-indicator-fill',
            },
            {
              name: 'fillColor',
              type: 'text',
              label: 'Fill Color',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
          ],
        },
      ],
    },
    // Team Section
    {
      name: 'teamSection',
      type: 'group',
      label: 'Team Section (Optional)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: false,
          admin: {
            description: 'Currently commented out in the component',
          },
        },
        {
          name: 'className',
          type: 'text',
          label: 'Section Class',
          defaultValue: 'section-team',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'teamMembers',
          type: 'array',
          label: 'Team Members',
          admin: {
            description: 'Drag to reorder team members',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Member Name',
              required: true,
            },
            {
              name: 'position',
              type: 'text',
              label: 'Position/Job Title',
              required: true,
            },
            {
              name: 'photo',
              type: 'upload',
              relationTo: 'media',
              label: 'Photo',
            },
            {
              name: 'photoClass',
              type: 'text',
              label: 'Photo Background Class',
              admin: {
                description: 'e.g., team-img-2, team-img-3, team-img-4',
              },
            },
            {
              name: 'socialLinks',
              type: 'array',
              label: 'Social Media Links',
              fields: [
                {
                  name: 'platform',
                  type: 'select',
                  label: 'Platform',
                  options: [
                    { label: 'Facebook', value: 'facebook' },
                    { label: 'Twitter', value: 'twitter' },
                    { label: 'Dribbble', value: 'dribbble' },
                    { label: 'LinkedIn', value: 'linkedin' },
                    { label: 'Instagram', value: 'instagram' },
                  ],
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Profile URL',
                  required: true,
                },
              ],
            },
          ],
          defaultValue: [
            {
              name: 'Jackson Cole',
              position: 'Lead Technician',
              socialLinks: [
                { platform: 'dribbble', url: 'https://dribbble.com/' },
                { platform: 'twitter', url: 'https://twitter.com/' },
                { platform: 'facebook', url: 'https://www.facebook.com/' },
              ],
            },
            {
              name: 'Evelyn Parker',
              position: 'Service Manager',
              photoClass: 'team-img-2',
              socialLinks: [
                { platform: 'dribbble', url: 'https://dribbble.com/' },
                { platform: 'twitter', url: 'https://twitter.com/' },
                { platform: 'facebook', url: 'https://www.facebook.com/' },
              ],
            },
            {
              name: 'Lucas Thompson',
              position: 'Diagnostic expert',
              photoClass: 'team-img-3',
              socialLinks: [
                { platform: 'dribbble', url: 'https://dribbble.com/' },
                { platform: 'twitter', url: 'https://twitter.com/' },
                { platform: 'facebook', url: 'https://www.facebook.com/' },
              ],
            },
            {
              name: 'Sophia Taylor',
              position: 'Control Inspector',
              photoClass: 'team-img-4',
              socialLinks: [
                { platform: 'dribbble', url: 'https://dribbble.com/' },
                { platform: 'twitter', url: 'https://twitter.com/' },
                { platform: 'facebook', url: 'https://www.facebook.com/' },
              ],
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
            { label: 'Gradient Wrapper', value: 'gradientWrapper' },
            { label: 'Hero Banner', value: 'heroBanner' },
            { label: 'Tabs Section', value: 'tabsSection' },
            { label: 'Team Section', value: 'teamSection' },
          ],
        },
      ],
      defaultValue: [
        { section: 'gradientWrapper' },
        { section: 'heroBanner' },
        { section: 'tabsSection' },
        { section: 'teamSection' },
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
          defaultValue: '600',
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
          name: 'h4FontSize',
          type: 'text',
          label: 'H4 Font Size',
          defaultValue: '24px',
        },
        {
          name: 'h4Color',
          type: 'text',
          label: 'H4 Color',
        },
        {
          name: 'h5FontSize',
          type: 'text',
          label: 'H5 Font Size',
          defaultValue: '20px',
        },
        {
          name: 'h5Color',
          type: 'text',
          label: 'H5 Color',
        },
        {
          name: 'h6FontSize',
          type: 'text',
          label: 'H6 Font Size',
          defaultValue: '16px',
        },
        {
          name: 'h6Color',
          type: 'text',
          label: 'H6 Color',
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
          defaultValue: '1rem',
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
          defaultValue: '1.5rem',
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
          name: 'gridGap',
          type: 'text',
          label: 'Grid Gap',
          admin: {
            description: 'Gap between grid items (e.g., 30px, 2rem)',
          },
          defaultValue: '30px',
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Gap between columns (e.g., 30px, 2rem)',
          },
          defaultValue: '30px',
        },
        {
          name: 'rowGap',
          type: 'text',
          label: 'Row Gap',
          admin: {
            description: 'Gap between rows (e.g., 20px, 1.5rem)',
          },
          defaultValue: '20px',
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
          name: 'borderRadius',
          type: 'text',
          label: 'Border Radius',
          admin: {
            description: 'Default border radius for elements',
          },
          defaultValue: '8px',
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
          name: 'slideInDuration',
          type: 'text',
          label: 'Slide In Duration',
          admin: {
            description: 'Duration for slide animations',
          },
          defaultValue: '1s',
        },
        {
          name: 'scaleInDuration',
          type: 'text',
          label: 'Scale In Duration',
          admin: {
            description: 'Duration for scale animations',
          },
          defaultValue: '1s',
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
          name: 'hoverTransitionDuration',
          type: 'text',
          label: 'Hover Transition Duration',
          defaultValue: '0.3s',
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
          defaultValue: '80%',
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
          name: 'hideTabsOnMobile',
          type: 'checkbox',
          label: 'Convert Tabs to Accordion on Mobile',
          admin: {
            description: 'Convert tab layout to accordion for mobile',
          },
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
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
          defaultValue: 'About Us - Car Service & Repair',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Discover our car journey. We provide comprehensive automotive services including maintenance, repair, and diagnostics for all makes and models.',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
          defaultValue: 'car service, auto repair, vehicle maintenance, car diagnostics',
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
            description: 'Add custom CSS styles for this page',
          },
        },
        {
          name: 'customJS',
          type: 'textarea',
          label: 'Custom JavaScript',
          admin: {
            description: 'Add custom JavaScript code for this page',
          },
        },
        {
          name: 'lazyLoadImages',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Images',
          defaultValue: true,
        },
        {
          name: 'preloadVideos',
          type: 'checkbox',
          label: 'Preload Videos',
          admin: {
            description: 'Preload video content for better performance',
          },
          defaultValue: false,
        },
        {
          name: 'enableSmoothScroll',
          type: 'checkbox',
          label: 'Enable Smooth Scroll',
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
          defaultValue: '#0066CC',
        },
        {
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
        },
      ],
    },
    // Contact Information
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Information',
      fields: [
        {
          name: 'phone',
          type: 'text',
          label: 'Phone Number',
          defaultValue: '+1-800-123-4567',
        },
        {
          name: 'email',
          type: 'text',
          label: 'Email Address',
          defaultValue: 'carsy@gmail.com',
        },
        {
          name: 'telegramUrl',
          type: 'text',
          label: 'Telegram URL',
          defaultValue: 'https://web.telegram.org/a/',
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
