import { CollectionConfig } from 'payload'

export const HeroPageComponent: CollectionConfig = {
  slug: 'hero-page-component',
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
      defaultValue: 'Hero Page Component',
    },
    // Banner Section
    {
      name: 'bannerSection',
      type: 'group',
      label: 'Banner/Hero Section',
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
          defaultValue: 'banner-002',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #000000, rgba(0,0,0,0.5))',
          },
        },
        {
          name: 'overlaySettings',
          type: 'group',
          label: 'Overlay Settings',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Overlay',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'Overlay Class',
              defaultValue: 'banner-overlay-home-2',
            },
            {
              name: 'gradientClassName',
              type: 'text',
              label: 'Gradient Class',
              defaultValue: 'red-grad-1',
            },
            {
              name: 'overlayColor',
              type: 'text',
              label: 'Overlay Color',
              admin: {
                description: 'CSS color for overlay',
              },
            },
            {
              name: 'overlayOpacity',
              type: 'text',
              label: 'Overlay Opacity',
              admin: {
                description: 'Value between 0 and 1 (e.g., 0.5)',
              },
            },
          ],
        },
        {
          name: 'videoBackground',
          type: 'group',
          label: 'Video Background',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable Video Background',
              defaultValue: true,
            },
            {
              name: 'mp4Url',
              type: 'text',
              label: 'MP4 Video URL',
              admin: {
                description: 'URL to MP4 video file',
              },
            },
            {
              name: 'webmUrl',
              type: 'text',
              label: 'WebM Video URL',
              admin: {
                description: 'URL to WebM video file',
              },
            },
            {
              name: 'posterImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Poster Image',
              admin: {
                description: 'Fallback image shown before video loads',
              },
            },
            {
              name: 'autoplay',
              type: 'checkbox',
              label: 'Autoplay',
              defaultValue: true,
            },
            {
              name: 'loop',
              type: 'checkbox',
              label: 'Loop Video',
              defaultValue: true,
            },
            {
              name: 'muted',
              type: 'checkbox',
              label: 'Muted',
              defaultValue: true,
            },
            {
              name: 'objectFit',
              type: 'select',
              label: 'Object Fit',
              options: [
                { label: 'Cover', value: 'cover' },
                { label: 'Contain', value: 'contain' },
                { label: 'Fill', value: 'fill' },
              ],
              defaultValue: 'cover',
            },
          ],
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
          defaultValue: 'Step into the Future of Automotive Care with Carsy',
        },
        {
          name: 'subtitleColor',
          type: 'text',
          label: 'Subtitle Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'subtitleClassName',
          type: 'text',
          label: 'Subtitle CSS Class',
          defaultValue: 'black-subtitle',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Main Title',
          required: true,
          defaultValue: 'Drive with Confidence, Drive Carsy Now',
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
          name: 'titleClassName',
          type: 'text',
          label: 'Title CSS Class',
          defaultValue: 'banner-2-title',
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
          name: 'description',
          type: 'textarea',
          label: 'Description',
          defaultValue:
            'Welcome to Carsy, your ultimate destination for all things automotive. At Carsy, we combine passion with precision to offer you top-notch car services and unbeatable pricing packages. Our mission is to keep your vehicle in peak condition with minimal hassle.',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Color',
        },
        {
          name: 'descriptionClassName',
          type: 'text',
          label: 'Description CSS Class',
          defaultValue: 'banner-small-description',
        },
        {
          name: 'ctaButtons',
          type: 'array',
          label: 'CTA Buttons',
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
              name: 'type',
              type: 'select',
              label: 'Button Type',
              options: [
                { label: 'Primary', value: 'primary' },
                { label: 'Secondary', value: 'secondary' },
                { label: 'Tertiary', value: 'tertiary' },
              ],
              defaultValue: 'primary',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Custom CSS Class',
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
            {
              name: 'hoverTextColor',
              type: 'text',
              label: 'Hover Text Color',
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
              text: 'Quick Repair',
              url: '/contact-us',
              type: 'primary',
              className: 'primary-button w-button',
            },
            {
              text: 'Smart Prices',
              url: '/pricing',
              type: 'secondary',
              className: 'secondary-red-button w-button',
            },
          ],
        },
        {
          name: 'contentAlignment',
          type: 'select',
          label: 'Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
      ],
    },
    // Gradient Wrapper Section
    {
      name: 'gradientWrapperSection',
      type: 'group',
      label: 'Gradient Wrapper Section',
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
          label: 'Wrapper Class',
          defaultValue: 'gradient-wrapper banner-grad-2',
        },
        {
          name: 'gradients',
          type: 'array',
          label: 'Gradient Elements',
          admin: {
            description: 'Individual gradient elements',
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
              label: 'Initial Opacity',
              defaultValue: '0',
            },
          ],
          defaultValue: [
            { className: 'red-grad-2', opacity: '0' },
            { className: 'red-grad-3', opacity: '0' },
            { className: 'red-grad-4', opacity: '0' },
          ],
        },
        {
          name: 'printWrapper',
          type: 'group',
          label: 'Print/Decorative Image',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Print Image',
              defaultValue: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Print Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL (Alternative)',
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a0ff2e6a489b9fa090eed0_Group.svg',
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
              label: 'Wrapper Class',
              defaultValue: 'print-wrapper-1',
            },
          ],
        },
      ],
    },
    // Logo Section
    {
      name: 'logoSection',
      type: 'group',
      label: 'Logo Section',
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
          defaultValue: 'section-logos',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle',
          defaultValue: "You've Chosen the Best",
        },
        {
          name: 'subtitleColor',
          type: 'text',
          label: 'Subtitle Color',
        },
        {
          name: 'subtitleClassName',
          type: 'text',
          label: 'Subtitle Class',
          defaultValue: 'logo-subtitle',
        },
        {
          name: 'printImage',
          type: 'group',
          label: 'Center Print Image',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Image',
              defaultValue: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL',
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a0ff2e6a489b9fa090eed0_Group.svg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Project photo',
            },
          ],
        },
        {
          name: 'leftLogos',
          type: 'array',
          label: 'Left Logo Strip',
          admin: {
            description: 'Logos for left scrolling strip',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Logo URL',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Project photo',
            },
          ],
          defaultValue: [
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a71f33000cc0c11fdad3_Logo-6.svg',
              alt: 'Project photo',
            },
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a71ee17df1463d4ba4ef_Logo-5.svg',
              alt: 'Project photo',
            },
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a72034bbc2ceaa9596a0_Logo.svg',
              alt: 'Project photo',
            },
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a71e21013b99edf135d8_Logo-4.svg',
              alt: 'Project photo',
            },
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a71d6b6dcecc2a5472d7_Logo-3.svg',
              alt: 'Project photo',
            },
          ],
        },
        {
          name: 'rightLogos',
          type: 'array',
          label: 'Right Logo Strip',
          admin: {
            description: 'Logos for right scrolling strip',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Logo Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Logo URL',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Project photo',
            },
          ],
          defaultValue: [
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a71f33000cc0c11fdad3_Logo-6.svg',
              alt: 'Project photo',
            },
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a71ee17df1463d4ba4ef_Logo-5.svg',
              alt: 'Project photo',
            },
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a72034bbc2ceaa9596a0_Logo.svg',
              alt: 'Project photo',
            },
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a71e21013b99edf135d8_Logo-4.svg',
              alt: 'Project photo',
            },
            {
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a7a71d6b6dcecc2a5472d7_Logo-3.svg',
              alt: 'Project photo',
            },
          ],
        },
        {
          name: 'animationSpeed',
          type: 'text',
          label: 'Animation Speed',
          admin: {
            description: 'Duration of scroll animation (e.g., 20s)',
          },
          defaultValue: '20s',
        },
      ],
    },
    // Statistics Section
    {
      name: 'statisticsSection',
      type: 'group',
      label: 'Statistics Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: false,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Section Class',
          defaultValue: 'section',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'statistics',
          type: 'array',
          label: 'Statistics Items',
          admin: {
            description: 'Drag to reorder statistics',
          },
          fields: [
            {
              name: 'number',
              type: 'text',
              label: 'Number/Value',
              required: true,
            },
            {
              name: 'numberColor',
              type: 'text',
              label: 'Number Color',
            },
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              required: true,
            },
            {
              name: 'labelColor',
              type: 'text',
              label: 'Label Color',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
          ],
          defaultValue: [
            {
              number: 'V8',
              label: 'Cylinder Configuration',
              description:
                'Cylinder Configuration: V8\nWelcome to Carsy, your trusted partner in car care and automotive services.',
            },
            {
              number: '30',
              label: 'Fuel Efficiency',
              description:
                'Fuel Efficiency: 30 mpg\nWelcome to Carsy, your trusted partner in car care and automotive services.',
            },
            {
              number: '7K',
              label: 'Max revolutions',
              description:
                'Max RPM: 7,000\nWelcome to Carsy, your trusted partner in car care and automotive services.',
            },
          ],
        },
        {
          name: 'showDividers',
          type: 'checkbox',
          label: 'Show Dividers Between Statistics',
          defaultValue: true,
        },
        {
          name: 'dividerColor',
          type: 'text',
          label: 'Divider Color',
        },
      ],
    },
    // Services Section
    {
      name: 'servicesSection',
      type: 'group',
      label: 'Services Section',
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
          defaultValue: 'carsy-services',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'heading',
          type: 'group',
          label: 'Section Heading',
          fields: [
            {
              name: 'subtitle',
              type: 'text',
              label: 'Subtitle',
              defaultValue: 'Discover the Passion and Expertise Behind Carsy',
            },
            {
              name: 'subtitleColor',
              type: 'text',
              label: 'Subtitle Color',
            },
            {
              name: 'subtitleClassName',
              type: 'text',
              label: 'Subtitle Class',
              defaultValue: 'black-subtitle',
            },
            {
              name: 'title',
              type: 'textarea',
              label: 'Main Title',
              defaultValue:
                "From Our Garage to Your Driveway: The Story of Carsy's Commitment to Superior Car Care and Customer Satisfaction",
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'titleClassName',
              type: 'text',
              label: 'Title Class',
              defaultValue: 'h2-black-title',
            },
          ],
        },
        {
          name: 'descriptionGrids',
          type: 'array',
          label: 'Description Grids',
          admin: {
            description: 'Drag to reorder description sections',
          },
          fields: [
            {
              name: 'subtitle',
              type: 'text',
              label: 'Subtitle',
              required: true,
            },
            {
              name: 'subtitleColor',
              type: 'text',
              label: 'Subtitle Color',
            },
            {
              name: 'content',
              type: 'textarea',
              label: 'Content',
              required: true,
            },
            {
              name: 'contentColor',
              type: 'text',
              label: 'Content Color',
            },
            {
              name: 'className',
              type: 'text',
              label: 'CSS Class',
              defaultValue: 'description-grid',
            },
          ],
          defaultValue: [
            {
              subtitle: 'Core Values',
              content:
                'At Carsy, our values are the bedrock of our company. We uphold integrity in all our actions, believing that honesty and transparency build the foundation of trust with our customers and partners. We strive for excellence, constantly seeking.',
              className: 'description-grid',
            },
            {
              subtitle: 'Get to Know',
              content:
                'Our goals at Carsy are designed to drive our continuous improvement and success. We aim to provide exceptional service that exceeds customer expectations, ensuring every interaction leaves a positive impression.',
              className: 'description-grid',
            },
          ],
        },
        {
          name: 'slider',
          type: 'group',
          label: 'Services Slider',
          fields: [
            {
              name: 'enabled',
              type: 'checkbox',
              label: 'Enable Slider',
              defaultValue: true,
            },
            {
              name: 'autoplay',
              type: 'checkbox',
              label: 'Autoplay',
              defaultValue: false,
            },
            {
              name: 'delay',
              type: 'text',
              label: 'Autoplay Delay (ms)',
              defaultValue: '4000',
            },
            {
              name: 'duration',
              type: 'text',
              label: 'Transition Duration (ms)',
              defaultValue: '500',
            },
            {
              name: 'infinite',
              type: 'checkbox',
              label: 'Infinite Loop',
              defaultValue: true,
            },
            {
              name: 'showArrows',
              type: 'checkbox',
              label: 'Show Navigation Arrows',
              defaultValue: true,
            },
            {
              name: 'showDots',
              type: 'checkbox',
              label: 'Show Navigation Dots',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'serviceCards',
          type: 'array',
          label: 'Service Cards',
          admin: {
            description: 'Drag to reorder service cards',
          },
          fields: [
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Service Icon',
            },
            {
              name: 'iconUrl',
              type: 'text',
              label: 'Icon URL (Alternative)',
            },
            {
              name: 'category',
              type: 'text',
              label: 'Service Category',
              required: true,
            },
            {
              name: 'categoryUrl',
              type: 'text',
              label: 'Category URL',
            },
            {
              name: 'categoryColor',
              type: 'text',
              label: 'Category Color',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Service Title',
              required: true,
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
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Service URL',
              required: true,
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              label: 'Service Image',
            },
            {
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL',
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
              defaultValue: 'Service image',
            },
            {
              name: 'hoverOverlayColor',
              type: 'text',
              label: 'Hover Overlay Color',
            },
            {
              name: 'cursorText',
              type: 'text',
              label: 'Cursor Text',
              defaultValue: 'Details',
            },
          ],
          defaultValue: [
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0abdb7f0df5ff7eff4c57_Icon%201.svg',
              category: 'Diagnostics',
              categoryUrl: '/services-categories/diagnostics',
              title: 'Brake Repair',
              description:
                'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
              url: '/services/brake-repair',
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ab889875482b2767f298_Services-1.jpg',
              imageAlt: 'Service image',
              cursorText: 'Details',
            },
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ac9e7baaf7a5204eca08_Icon%202.svg',
              category: 'Maintenance',
              categoryUrl: '/services-categories/maintenance',
              title: 'Engine Repair',
              description:
                'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
              url: '/services/engine-repair',
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0ac90b5a47945ab458f1b_Services-3.jpg',
              imageAlt: 'Service image',
              cursorText: 'Details',
            },
            {
              iconUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0c2b3299201590725cf38_Icon%203.svg',
              category: 'Repair',
              categoryUrl: '/services-categories/repair',
              title: 'Tire Repair',
              description:
                'At Carsy, we offer a comprehensive range of automotive services to keep your vehicle running smoothly. Trust Carsy for all your car care needs.',
              url: '/services/tire-repair',
              imageUrl:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0accf8e908b0a64e4848f_Services-6.jpg',
              imageAlt: 'Service image',
              cursorText: 'Details',
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
            { label: 'Banner/Hero Section', value: 'banner' },
            { label: 'Gradient Wrapper Section', value: 'gradientWrapper' },
            { label: 'Logo Section', value: 'logo' },
            { label: 'Statistics Section', value: 'statistics' },
            { label: 'Services Section', value: 'services' },
          ],
        },
      ],
      defaultValue: [
        { section: 'banner' },
        { section: 'gradientWrapper' },
        { section: 'logo' },
        { section: 'statistics' },
        { section: 'services' },
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
          admin: {
            description: 'e.g., 48px, 3rem',
          },
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
          admin: {
            description: 'e.g., 700, bold',
          },
        },
        {
          name: 'h1LineHeight',
          type: 'text',
          label: 'H1 Line Height',
        },
        {
          name: 'h2FontSize',
          type: 'text',
          label: 'H2 Font Size',
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
        },
        {
          name: 'h2LineHeight',
          type: 'text',
          label: 'H2 Line Height',
        },
        {
          name: 'h3FontSize',
          type: 'text',
          label: 'H3 Font Size',
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
          name: 'h5FontSize',
          type: 'text',
          label: 'H5 Font Size',
        },
        {
          name: 'h5Color',
          type: 'text',
          label: 'H5 Color',
        },
        {
          name: 'h5FontWeight',
          type: 'text',
          label: 'H5 Font Weight',
        },
        {
          name: 'h6FontSize',
          type: 'text',
          label: 'H6 Font Size',
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
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
          admin: {
            description: 'Margin between paragraphs',
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
          name: 'gridColumns',
          type: 'text',
          label: 'Grid Columns',
          admin: {
            description: 'Number of columns in grid layouts',
          },
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
          name: 'borderRadius',
          type: 'text',
          label: 'Default Border Radius',
          admin: {
            description: 'e.g., 8px, 0.5rem',
          },
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Default Box Shadow',
          admin: {
            description: 'CSS box-shadow value',
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
          name: 'slideInDuration',
          type: 'text',
          label: 'Slide In Duration',
          admin: {
            description: 'Duration for slide animations',
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
          admin: {
            description: 'Duration for hover effects',
          },
          defaultValue: '0.3s',
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
          defaultValue: 'Carsy - Drive with Confidence',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Welcome to Carsy, your ultimate destination for all things automotive. We combine passion with precision to offer you top-notch car services and unbeatable pricing packages.',
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
          name: 'mobileStackSections',
          type: 'checkbox',
          label: 'Stack Sections on Mobile',
          admin: {
            description: 'Automatically stack sections vertically on mobile devices',
          },
          defaultValue: true,
        },
        {
          name: 'hideVideoOnMobile',
          type: 'checkbox',
          label: 'Hide Video Background on Mobile',
          admin: {
            description: 'Use poster image instead of video on mobile',
          },
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
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Page Caching',
          defaultValue: true,
        },
        {
          name: 'preloadImages',
          type: 'checkbox',
          label: 'Preload Critical Images',
          admin: {
            description: 'Preload above-the-fold images for better performance',
          },
          defaultValue: true,
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          admin: {
            description: 'Add custom data attributes to page elements',
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
                { label: 'Logo Section', value: 'logo' },
                { label: 'Statistics Section', value: 'statistics' },
                { label: 'Services Section', value: 'services' },
              ],
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
          name: 'deferNonCriticalCSS',
          type: 'checkbox',
          label: 'Defer Non-Critical CSS',
          defaultValue: false,
        },
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
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
            description: 'GA tracking ID for this page',
          },
        },
        {
          name: 'facebookPixelId',
          type: 'text',
          label: 'Facebook Pixel ID',
        },
        {
          name: 'conversionTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Conversion Tracking',
          defaultValue: false,
        },
        {
          name: 'marketingAutomationTags',
          type: 'array',
          label: 'Marketing Automation Tags',
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              options: [
                { label: 'HubSpot', value: 'hubspot' },
                { label: 'Marketo', value: 'marketo' },
                { label: 'Pardot', value: 'pardot' },
                { label: 'ActiveCampaign', value: 'activecampaign' },
                { label: 'Other', value: 'other' },
              ],
            },
            {
              name: 'tagCode',
              type: 'textarea',
              label: 'Tag Code',
            },
          ],
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
