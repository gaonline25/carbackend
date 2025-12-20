import { CollectionConfig } from 'payload'

export const BlogListingBannerCollection: CollectionConfig = {
  slug: 'blog-listing-banner',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'isActive', 'updatedAt'],
    group: 'Components',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Our blogs',
      label: 'Banner Title',
    },
    {
      name: 'isActive',
      type: 'checkbox',
      label: 'Active',
      defaultValue: true,
      admin: {
        description: 'Only one banner should be active at a time',
      },
    },
    // Title Section
    {
      name: 'titleSection',
      type: 'group',
      label: 'Title Section',
      fields: [
        {
          name: 'dataWId',
          type: 'text',
          label: 'Data W-ID',
          defaultValue: 'b64457ba-bf40-2ef5-bc50-4bcb3313eb6e',
          admin: {
            description: 'Webflow animation ID',
          },
        },
        {
          name: 'className',
          type: 'text',
          label: 'Wrapper CSS Class',
          defaultValue: 'inner-title-wrap',
        },
        {
          name: 'titleClassName',
          type: 'text',
          label: 'Title CSS Class',
          defaultValue: 'inner-banner-title',
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
      ],
    },
    // Background Image Section
    {
      name: 'backgroundSection',
      type: 'group',
      label: 'Background Image Section',
      fields: [
        {
          name: 'clipPhotoClassName',
          type: 'text',
          label: 'Clip Photo CSS Class',
          defaultValue: 'inner-clip-photo-banner',
        },
        {
          name: 'bannerDataWId',
          type: 'text',
          label: 'Banner Data W-ID',
          defaultValue: 'b64457ba-bf40-2ef5-bc50-4bcb3313eb72',
          admin: {
            description: 'Webflow animation ID for background',
          },
        },
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image',
          required: true,
        },
        {
          name: 'backgroundImageUrl',
          type: 'text',
          label: 'Background Image URL (fallback)',
          defaultValue:
            'https://res.cloudinary.com/dkaxluu37/image/upload/v1766135829/payload-media/WhatsApp%20Image%202025-12-17%20at%207.32.06%20PM-1766135829412-zuzglo.jpg',
        },
        {
          name: 'imageAlt',
          type: 'text',
          label: 'Image Alt Text',
          defaultValue: 'Blog listing banner',
        },
        {
          name: 'bannerClassName',
          type: 'text',
          label: 'Banner CSS Class',
          defaultValue: 'inner-photo-banner news-banner',
        },
        {
          name: 'transform',
          type: 'group',
          label: 'Transform/Scale Settings',
          fields: [
            {
              name: 'scale',
              type: 'text',
              label: 'Scale Value',
              defaultValue: '1.15',
              admin: {
                description: 'Scale value for zoom effect (e.g., 1.15)',
              },
            },
            {
              name: 'translateX',
              type: 'text',
              label: 'Translate X',
              defaultValue: '0',
            },
            {
              name: 'translateY',
              type: 'text',
              label: 'Translate Y',
              defaultValue: '0',
            },
            {
              name: 'translateZ',
              type: 'text',
              label: 'Translate Z',
              defaultValue: '0',
            },
            {
              name: 'rotateX',
              type: 'text',
              label: 'Rotate X',
              defaultValue: '0',
            },
            {
              name: 'rotateY',
              type: 'text',
              label: 'Rotate Y',
              defaultValue: '0',
            },
            {
              name: 'rotateZ',
              type: 'text',
              label: 'Rotate Z',
              defaultValue: '0',
            },
            {
              name: 'skewX',
              type: 'text',
              label: 'Skew X',
              defaultValue: '0',
            },
            {
              name: 'skewY',
              type: 'text',
              label: 'Skew Y',
              defaultValue: '0',
            },
          ],
        },
      ],
    },
    // Overlay Section
    {
      name: 'overlaySection',
      type: 'group',
      label: 'Overlay Section',
      fields: [
        {
          name: 'showOverlay',
          type: 'checkbox',
          label: 'Show Overlay',
          defaultValue: true,
        },
        {
          name: 'overlayClassName',
          type: 'text',
          label: 'Overlay CSS Class',
          defaultValue: 'inner-banner-overlay with-bottom-light-gradient',
        },
        {
          name: 'gradientClassName',
          type: 'text',
          label: 'Gradient CSS Class',
          defaultValue: 'red-inner-grad-1',
        },
        {
          name: 'overlayColor',
          type: 'text',
          label: 'Overlay Color',
          admin: {
            description: 'CSS color with opacity (e.g., rgba(0,0,0,0.4))',
          },
        },
        {
          name: 'gradientColor',
          type: 'text',
          label: 'Gradient Color',
          admin: {
            description: 'Custom gradient color if needed',
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
          name: 'baseContainerClassName',
          type: 'text',
          label: 'Base Container CSS Class',
          defaultValue: 'base-container',
        },
        {
          name: 'outerClassName',
          type: 'text',
          label: 'Outer Section CSS Class',
          defaultValue: 'inner-small-banner',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'Background color for the entire section',
          },
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Section Padding',
          admin: {
            description: 'CSS padding value',
          },
        },
        {
          name: 'height',
          type: 'text',
          label: 'Section Height',
          admin: {
            description: 'CSS height value (e.g., 400px, 50vh)',
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
          name: 'animationDuration',
          type: 'text',
          label: 'Animation Duration',
          admin: {
            description: 'Duration in seconds or milliseconds',
          },
          defaultValue: '1s',
        },
        {
          name: 'animationDelay',
          type: 'text',
          label: 'Animation Delay',
          defaultValue: '0s',
        },
        {
          name: 'animationEasing',
          type: 'text',
          label: 'Animation Easing',
          defaultValue: 'ease-in-out',
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
          name: 'mobileBackgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Mobile Background Image',
          admin: {
            description: 'Optional separate image for mobile devices',
          },
        },
        {
          name: 'mobileTitleFontSize',
          type: 'text',
          label: 'Mobile Title Font Size',
          admin: {
            description: 'Font size for mobile devices',
          },
        },
        {
          name: 'mobileHeight',
          type: 'text',
          label: 'Mobile Section Height',
          admin: {
            description: 'Height for mobile devices',
          },
        },
        {
          name: 'mobileScale',
          type: 'text',
          label: 'Mobile Image Scale',
          defaultValue: '1.15',
        },
      ],
    },
  ],
  timestamps: true,
}
