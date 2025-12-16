import { CollectionConfig } from 'payload'

export const GalleryPageComponent: CollectionConfig = {
  slug: 'gallery-page-component',
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
      defaultValue: 'Gallery Page Component',
    },
    // Inner Banner Section
    {
      name: 'innerBannerSection',
      type: 'group',
      label: 'Inner Banner Section',
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
            description: 'e.g., inner-banner, custom-class',
          },
          defaultValue: 'inner-banner',
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
          name: 'title',
          type: 'text',
          label: 'Banner Title',
          required: true,
          defaultValue: 'Our Gallery',
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
          name: 'titleClassName',
          type: 'text',
          label: 'Title CSS Classes',
          defaultValue: 'inner-banner-title',
        },
        {
          name: 'titleWrapperClassName',
          type: 'text',
          label: 'Title Wrapper CSS Classes',
          defaultValue: 'inner-title-wrap',
        },
        {
          name: 'containerClassName',
          type: 'text',
          label: 'Container CSS Classes',
          defaultValue: 'base-container',
        },
        {
          name: 'bannerImage',
          type: 'group',
          label: 'Banner Background Image',
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'Image CSS Classes',
              defaultValue: 'inner-photo-banner our-gallery-banner',
            },
            {
              name: 'mobile',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Image',
            },
            {
              name: 'tablet',
              type: 'upload',
              relationTo: 'media',
              label: 'Tablet Image',
            },
            {
              name: 'desktop',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Image',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Gallery Banner',
            },
            {
              name: 'initialScale',
              type: 'text',
              label: 'Initial Scale',
              admin: {
                description: 'Initial transform scale (e.g., 1.15)',
              },
              defaultValue: '1.15',
            },
          ],
        },
        {
          name: 'overlay',
          type: 'group',
          label: 'Banner Overlay',
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
              label: 'Overlay CSS Classes',
              defaultValue: 'inner-banner-overlay our-clients-overlay',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Overlay Background Color',
              admin: {
                description: 'CSS color value for overlay',
              },
            },
            {
              name: 'opacity',
              type: 'text',
              label: 'Overlay Opacity',
              admin: {
                description: 'Value between 0 and 1',
              },
            },
            {
              name: 'showGradient',
              type: 'checkbox',
              label: 'Show Gradient',
              defaultValue: true,
            },
            {
              name: 'gradientClassName',
              type: 'text',
              label: 'Gradient CSS Classes',
              defaultValue: 'red-inner-grad-1',
            },
          ],
        },
        {
          name: 'clipPhotoClassName',
          type: 'text',
          label: 'Clip Photo Container CSS Classes',
          defaultValue: 'inner-clip-photo-banner',
        },
        {
          name: 'animationId',
          type: 'text',
          label: 'Animation Data ID',
          admin: {
            description: 'ID for animation triggers',
          },
          defaultValue: '6d36c7d5-e819-f15a-600c-248180f6e8d4',
        },
      ],
    },
    // Gallery Grid Section
    {
      name: 'galleryGridSection',
      type: 'group',
      label: 'Gallery Grid Section',
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
            description: 'e.g., section-gray, custom-section',
          },
          defaultValue: 'section-gray',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'innerBackgroundClassName',
          type: 'text',
          label: 'Inner Background CSS Classes',
          defaultValue: 'soft-black-bg',
        },
        {
          name: 'innerBackgroundColor',
          type: 'text',
          label: 'Inner Background Color',
          admin: {
            description: 'CSS color value for inner container',
          },
        },
        {
          name: 'containerClassName',
          type: 'text',
          label: 'Container CSS Classes',
          defaultValue: 'base-container',
        },
        {
          name: 'gridClassName',
          type: 'text',
          label: 'Grid CSS Classes',
          defaultValue: 'our-gallery-grid',
        },
        {
          name: 'gridGap',
          type: 'text',
          label: 'Grid Gap',
          admin: {
            description: 'CSS gap value (e.g., 20px, 1rem)',
          },
        },
        {
          name: 'gridColumns',
          type: 'text',
          label: 'Grid Columns (Desktop)',
          admin: {
            description: 'Number of columns or CSS grid-template-columns value',
          },
        },
        {
          name: 'gridColumnsMobile',
          type: 'text',
          label: 'Grid Columns (Mobile)',
          admin: {
            description: 'Number of columns for mobile devices',
          },
        },
      ],
    },
    // Gallery Items
    {
      name: 'galleryItems',
      type: 'array',
      label: 'Gallery Items',
      admin: {
        description: 'Drag to reorder gallery items',
      },
      fields: [
        {
          name: 'id',
          type: 'text',
          label: 'Item ID',
          required: true,
          admin: {
            description: 'Unique identifier for this gallery item',
          },
        },
        {
          name: 'nodeId',
          type: 'text',
          label: 'Node ID',
          admin: {
            description: 'Webflow node ID (e.g., w-node-xxx)',
          },
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL',
          admin: {
            description: 'URL when gallery item is clicked',
          },
          defaultValue: '#',
        },
        {
          name: 'linkTarget',
          type: 'select',
          label: 'Link Target',
          options: [
            { label: 'Same Window', value: '_self' },
            { label: 'New Window', value: '_blank' },
          ],
          defaultValue: '_self',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Item CSS Classes',
          defaultValue: 'instagram-link w-inline-block w-lightbox',
        },
        {
          name: 'coverClassName',
          type: 'text',
          label: 'Image Cover CSS Classes',
          admin: {
            description: 'e.g., image-cover, image-cover-02',
          },
          defaultValue: 'image-cover',
        },
        {
          name: 'lightboxClassName',
          type: 'text',
          label: 'Lightbox Photo CSS Classes',
          defaultValue: 'lightbox-photo',
        },
        {
          name: 'image',
          type: 'group',
          label: 'Gallery Image',
          fields: [
            {
              name: 'upload',
              type: 'upload',
              relationTo: 'media',
              label: 'Image File',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              label: 'Image URL',
              admin: {
                description: 'CDN or external URL for the image',
              },
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              required: true,
              defaultValue: 'Gallery image',
            },
            {
              name: 'width',
              type: 'number',
              label: 'Image Width',
              admin: {
                description: 'Original image width in pixels',
              },
            },
            {
              name: 'height',
              type: 'number',
              label: 'Image Height',
              admin: {
                description: 'Original image height in pixels',
              },
            },
            {
              name: 'fileSize',
              type: 'number',
              label: 'File Size',
              admin: {
                description: 'File size in bytes',
              },
            },
            {
              name: 'origFileName',
              type: 'text',
              label: 'Original File Name',
            },
          ],
        },
        {
          name: 'hoverCircle',
          type: 'group',
          label: 'Hover Circle Settings',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Hover Circle',
              defaultValue: true,
            },
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Wrapper CSS Classes',
              defaultValue: 'hover-circle-wrapper',
            },
            {
              name: 'circleClassName',
              type: 'text',
              label: 'Circle CSS Classes',
              defaultValue: 'hover-circle',
            },
            {
              name: 'outlineClassName',
              type: 'text',
              label: 'Outline CSS Classes',
              defaultValue: 'outline-hover-circle-2',
            },
            {
              name: 'iconClassName',
              type: 'text',
              label: 'Icon CSS Classes',
              defaultValue: 'insragram-icon-2',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Circle Background Color',
              admin: {
                description: 'CSS color value',
              },
            },
            {
              name: 'iconColor',
              type: 'text',
              label: 'Icon Color',
              admin: {
                description: 'CSS color value',
              },
            },
          ],
        },
        {
          name: 'overlay',
          type: 'group',
          label: 'Image Overlay',
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
              label: 'Overlay CSS Classes',
              defaultValue: 'gall-overlay',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Overlay Background Color',
              admin: {
                description: 'CSS color value',
              },
            },
            {
              name: 'opacity',
              type: 'text',
              label: 'Overlay Opacity',
              admin: {
                description: 'Value between 0 and 1',
              },
            },
            {
              name: 'hoverOpacity',
              type: 'text',
              label: 'Hover Opacity',
              admin: {
                description: 'Opacity on hover (0 to 1)',
              },
            },
          ],
        },
        {
          name: 'lightboxData',
          type: 'group',
          label: 'Lightbox Data',
          fields: [
            {
              name: 'group',
              type: 'text',
              label: 'Lightbox Group',
              admin: {
                description: 'Group name for related gallery items',
              },
              defaultValue: 'Carsy Gall',
            },
          ],
        },
      ],
      defaultValue: [
        {
          id: 'gallery-item-1',
          nodeId: 'w-node-_190c8118-6cd4-c034-a538-bdd4d9edebd2-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Small Blog image 3',
            width: 1000,
            height: 1100,
            origFileName: 'Small Blog-3.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
        },
        {
          id: 'gallery-item-2',
          nodeId: 'w-node-fd7f3597-086f-b2a4-002a-8b280d973d0b-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover image-cover-02',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Small Blog image 2',
            width: 1000,
            height: 1100,
            origFileName: 'Small Blog-2.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
        },
        {
          id: 'gallery-item-3',
          nodeId: 'w-node-e30dc5ed-fa6a-038f-a392-fcdad0eb750a-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover image-cover-03',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Small Blog image 5',
            width: 1000,
            height: 1100,
            origFileName: 'Small Blog-5.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
        },
        {
          id: 'gallery-item-4',
          nodeId: 'w-node-cd47f80c-14c9-b1d0-df67-7b811c328b63-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover image-cover-04',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Instagram post 1',
            width: 900,
            height: 900,
            origFileName: 'Insta 1.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
        },
        {
          id: 'gallery-item-5',
          nodeId: 'w-node-_3e387766-82f0-ab20-f1e0-277b16f86f75-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover image-cover-05',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Small image 5',
            width: 900,
            height: 1200,
            origFileName: 'Small Img-5.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
        },
        {
          id: 'gallery-item-6',
          nodeId: 'w-node-deafd5a5-24a0-5b2a-1a0f-3eae423eff83-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover image-cover-10',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Small Blog image 4',
            width: 1000,
            height: 1100,
            origFileName: 'Small Blog-4.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
        },
        {
          id: 'gallery-item-7',
          nodeId: 'w-node-_16684519-95e3-96ad-c0f5-b964d8354c9b-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover image-cover-06',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Small image 2',
            width: 1000,
            height: 1100,
            origFileName: 'Small Img-2.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
        },
        {
          id: 'gallery-item-8',
          nodeId: 'w-node-_1eb88278-38d2-8bef-b9ee-bae956932474-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover image-cover-07',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Small image 1',
            width: 900,
            height: 1200,
            origFileName: 'Small Img-1.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
        },
        {
          id: 'gallery-item-9',
          nodeId: 'w-node-e650abd1-bd7c-10db-e883-d928238147b8-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover image-cover-08',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Instagram post 3',
            width: 900,
            height: 900,
            origFileName: 'Insta 3.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
        },
        {
          id: 'gallery-item-10',
          nodeId: 'w-node-_4ab7d2c8-9d26-b04c-0ceb-91382bd3ef28-fbbea224',
          linkUrl: '#',
          linkTarget: '_self',
          className: 'instagram-link w-inline-block w-lightbox',
          coverClassName: 'image-cover image-cover-09',
          lightboxClassName: 'lightbox-photo',
          image: {
            alt: 'Team member 1',
            width: 900,
            height: 1000,
            origFileName: 'Team 1.jpg',
          },
          hoverCircle: {
            show: true,
            wrapperClassName: 'hover-circle-wrapper',
            circleClassName: 'hover-circle',
            outlineClassName: 'outline-hover-circle-2',
            iconClassName: 'insragram-icon-2',
          },
          overlay: {
            show: true,
            className: 'gall-overlay',
          },
          lightboxData: {
            group: 'Carsy Gall',
          },
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
            { label: 'Inner Banner Section', value: 'innerBanner' },
            { label: 'Gallery Grid Section', value: 'galleryGrid' },
          ],
        },
      ],
      defaultValue: [{ section: 'innerBanner' }, { section: 'galleryGrid' }],
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
            description: 'Accent/highlight color',
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
          name: 'backgroundColor',
          type: 'text',
          label: 'Page Background Color',
          admin: {
            description: 'Overall page background color',
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
            description: 'Font size for H1 headings',
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
            description: 'e.g., 400, 600, bold',
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
          name: 'bodyFontSize',
          type: 'text',
          label: 'Body Font Size',
        },
        {
          name: 'bodyLineHeight',
          type: 'text',
          label: 'Body Line Height',
          defaultValue: '1.6',
        },
        {
          name: 'bodyFontWeight',
          type: 'text',
          label: 'Body Font Weight',
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
          name: 'pageWrapperClassName',
          type: 'text',
          label: 'Page Wrapper CSS Classes',
          defaultValue: 'relative-page-wrapper',
        },
        {
          name: 'gridLayout',
          type: 'select',
          label: 'Gallery Grid Layout',
          options: [
            { label: 'CSS Grid', value: 'grid' },
            { label: 'Flexbox', value: 'flex' },
            { label: 'Masonry', value: 'masonry' },
          ],
          defaultValue: 'grid',
        },
        {
          name: 'galleryAspectRatio',
          type: 'text',
          label: 'Gallery Item Aspect Ratio',
          admin: {
            description: 'e.g., 1/1, 4/3, 16/9',
          },
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
            { label: 'Scale Down', value: 'scale-down' },
          ],
          defaultValue: 'cover',
        },
        {
          name: 'imageObjectPosition',
          type: 'text',
          label: 'Image Object Position',
          admin: {
            description: 'e.g., center, top, bottom left',
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
          name: 'bannerAnimationDuration',
          type: 'text',
          label: 'Banner Animation Duration',
          admin: {
            description: 'Duration for banner animations (e.g., 1s, 1000ms)',
          },
          defaultValue: '1s',
        },
        {
          name: 'bannerAnimationEasing',
          type: 'text',
          label: 'Banner Animation Easing',
          admin: {
            description: 'CSS easing function',
          },
          defaultValue: 'ease-out',
        },
        {
          name: 'galleryItemHoverTransition',
          type: 'text',
          label: 'Gallery Item Hover Transition',
          admin: {
            description: 'Transition duration for hover effects',
          },
          defaultValue: '0.3s',
        },
        {
          name: 'hoverScaleAmount',
          type: 'text',
          label: 'Hover Scale Amount',
          admin: {
            description: 'Scale transform on hover (e.g., 1.05, 1.1)',
          },
          defaultValue: '1.05',
        },
        {
          name: 'fadeInDuration',
          type: 'text',
          label: 'Fade In Duration',
          admin: {
            description: 'Duration for fade in animations',
          },
          defaultValue: '0.8s',
        },
        {
          name: 'staggerDelay',
          type: 'text',
          label: 'Stagger Delay',
          admin: {
            description: 'Delay between animating each gallery item (e.g., 0.1s)',
          },
          defaultValue: '0.05s',
        },
        {
          name: 'enableScrollAnimations',
          type: 'checkbox',
          label: 'Enable Scroll Animations',
          admin: {
            description: 'Animate items when they come into view',
          },
          defaultValue: true,
        },
        {
          name: 'scrollAnimationOffset',
          type: 'text',
          label: 'Scroll Animation Offset',
          admin: {
            description: 'Distance from viewport to trigger animation (px)',
          },
          defaultValue: '100',
        },
      ],
    },
    // Hover Effects Settings
    {
      name: 'hoverEffectsSettings',
      type: 'group',
      label: 'Hover Effects Settings',
      fields: [
        {
          name: 'enableHoverEffects',
          type: 'checkbox',
          label: 'Enable Hover Effects',
          defaultValue: true,
        },
        {
          name: 'hoverCircleSize',
          type: 'text',
          label: 'Hover Circle Size',
          admin: {
            description: 'Size of the hover circle (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'hoverCircleBackgroundColor',
          type: 'text',
          label: 'Hover Circle Background Color',
          admin: {
            description: 'Background color of hover circle',
          },
        },
        {
          name: 'hoverCircleIconColor',
          type: 'text',
          label: 'Hover Circle Icon Color',
        },
        {
          name: 'overlayOpacityDefault',
          type: 'text',
          label: 'Overlay Opacity (Default)',
          admin: {
            description: 'Opacity when not hovering (0 to 1)',
          },
          defaultValue: '0',
        },
        {
          name: 'overlayOpacityHover',
          type: 'text',
          label: 'Overlay Opacity (Hover)',
          admin: {
            description: 'Opacity on hover (0 to 1)',
          },
          defaultValue: '0.8',
        },
        {
          name: 'overlayColor',
          type: 'text',
          label: 'Overlay Color',
          admin: {
            description: 'Color of the image overlay on hover',
          },
        },
        {
          name: 'hoverTransform',
          type: 'text',
          label: 'Hover Transform',
          admin: {
            description: 'CSS transform on hover (e.g., scale(1.05))',
          },
        },
      ],
    },
    // Lightbox Settings
    {
      name: 'lightboxSettings',
      type: 'group',
      label: 'Lightbox Settings',
      fields: [
        {
          name: 'enableLightbox',
          type: 'checkbox',
          label: 'Enable Lightbox',
          admin: {
            description: 'Enable lightbox/modal view for gallery images',
          },
          defaultValue: true,
        },
        {
          name: 'lightboxBackgroundColor',
          type: 'text',
          label: 'Lightbox Background Color',
          admin: {
            description: 'Background color of lightbox overlay',
          },
          defaultValue: 'rgba(0, 0, 0, 0.9)',
        },
        {
          name: 'lightboxShowCounter',
          type: 'checkbox',
          label: 'Show Image Counter',
          admin: {
            description: 'Show current image number in lightbox',
          },
          defaultValue: true,
        },
        {
          name: 'lightboxShowThumbnails',
          type: 'checkbox',
          label: 'Show Thumbnails',
          admin: {
            description: 'Show thumbnail navigation in lightbox',
          },
          defaultValue: false,
        },
        {
          name: 'lightboxShowCaptions',
          type: 'checkbox',
          label: 'Show Captions',
          admin: {
            description: 'Show image captions in lightbox',
          },
          defaultValue: true,
        },
        {
          name: 'lightboxAnimationSpeed',
          type: 'text',
          label: 'Lightbox Animation Speed',
          admin: {
            description: 'Speed of lightbox transitions (ms)',
          },
          defaultValue: '300',
        },
        {
          name: 'lightboxCloseOnOutsideClick',
          type: 'checkbox',
          label: 'Close on Outside Click',
          admin: {
            description: 'Close lightbox when clicking outside image',
          },
          defaultValue: true,
        },
        {
          name: 'lightboxKeyboardNav',
          type: 'checkbox',
          label: 'Keyboard Navigation',
          admin: {
            description: 'Enable arrow key navigation in lightbox',
          },
          defaultValue: true,
        },
      ],
    },
    // Responsive Settings
    {
      name: 'responsiveSettings',
      type: 'group',
      label: 'Responsive Settings',
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
          name: 'desktopBreakpoint',
          type: 'text',
          label: 'Desktop Breakpoint',
          admin: {
            description: 'Screen width for desktop (e.g., 1440px)',
          },
          defaultValue: '1440px',
        },
        {
          name: 'gridColumnsMobile',
          type: 'text',
          label: 'Grid Columns (Mobile)',
          admin: {
            description: 'Number of columns on mobile',
          },
          defaultValue: '1',
        },
        {
          name: 'gridColumnsTablet',
          type: 'text',
          label: 'Grid Columns (Tablet)',
          admin: {
            description: 'Number of columns on tablet',
          },
          defaultValue: '2',
        },
        {
          name: 'gridColumnsDesktop',
          type: 'text',
          label: 'Grid Columns (Desktop)',
          admin: {
            description: 'Number of columns on desktop',
          },
          defaultValue: '3',
        },
        {
          name: 'gridColumnsLargeDesktop',
          type: 'text',
          label: 'Grid Columns (Large Desktop)',
          admin: {
            description: 'Number of columns on large desktop',
          },
          defaultValue: '4',
        },
        {
          name: 'mobileTitleFontSize',
          type: 'text',
          label: 'Mobile Title Font Size',
          admin: {
            description: 'Banner title size on mobile devices',
          },
        },
        {
          name: 'mobileSpacing',
          type: 'text',
          label: 'Mobile Spacing',
          admin: {
            description: 'Reduced spacing for mobile devices',
          },
        },
        {
          name: 'hideHoverEffectsMobile',
          type: 'checkbox',
          label: 'Hide Hover Effects on Mobile',
          admin: {
            description: 'Disable hover effects on touch devices',
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
          defaultValue: 'Our Gallery - Goldfingers Aesthetics',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Browse our gallery showcasing our work and results at Goldfingers Aesthetics.',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
          admin: {
            description: 'Image for social media sharing',
          },
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
          name: 'keyboardNavigationEnabled',
          type: 'checkbox',
          label: 'Enhanced Keyboard Navigation',
          defaultValue: true,
        },
        {
          name: 'reducedMotionSupport',
          type: 'checkbox',
          label: 'Respect Reduced Motion Preference',
          admin: {
            description: 'Disable animations for users who prefer reduced motion',
          },
          defaultValue: true,
        },
        {
          name: 'highContrastMode',
          type: 'checkbox',
          label: 'High Contrast Mode Support',
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
          label: 'Enable Lazy Loading for Images',
          defaultValue: true,
        },
        {
          name: 'lazyLoadThreshold',
          type: 'text',
          label: 'Lazy Load Threshold',
          admin: {
            description: 'Distance from viewport to start loading (px)',
          },
          defaultValue: '300',
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
            description: 'Comma-separated widths for responsive images (e.g., 400,800,1200)',
          },
          defaultValue: '400,600,800,1000,1200,1600',
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
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Page Caching',
          defaultValue: true,
        },
        {
          name: 'cacheMaxAge',
          type: 'text',
          label: 'Cache Max Age',
          admin: {
            description: 'Cache duration in seconds',
          },
          defaultValue: '3600',
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
                { label: 'Inner Banner', value: 'innerBanner' },
                { label: 'Gallery Grid', value: 'galleryGrid' },
                { label: 'Specific Gallery Item', value: 'galleryItem' },
              ],
            },
            {
              name: 'targetItemId',
              type: 'text',
              label: 'Target Item ID',
              admin: {
                description: 'If applying to specific gallery item, enter its ID',
              },
            },
          ],
        },
        {
          name: 'enableInfiniteScroll',
          type: 'checkbox',
          label: 'Enable Infinite Scroll',
          admin: {
            description: 'Load more items as user scrolls',
          },
          defaultValue: false,
        },
        {
          name: 'itemsPerPage',
          type: 'number',
          label: 'Items Per Page',
          admin: {
            description: 'Number of items to load at once (for pagination or infinite scroll)',
          },
          defaultValue: 10,
        },
        {
          name: 'enableFiltering',
          type: 'checkbox',
          label: 'Enable Gallery Filtering',
          admin: {
            description: 'Allow users to filter gallery items by category',
          },
          defaultValue: false,
        },
        {
          name: 'filterCategories',
          type: 'array',
          label: 'Filter Categories',
          admin: {
            description: 'Categories for filtering gallery items',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Category Name',
              required: true,
            },
            {
              name: 'slug',
              type: 'text',
              label: 'Category Slug',
              required: true,
            },
          ],
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
          name: 'instagramFeedIntegration',
          type: 'checkbox',
          label: 'Enable Instagram Feed Integration',
          admin: {
            description: 'Pull images directly from Instagram',
          },
          defaultValue: false,
        },
        {
          name: 'instagramAccessToken',
          type: 'text',
          label: 'Instagram Access Token',
          admin: {
            description: 'Access token for Instagram API',
          },
        },
        {
          name: 'instagramHashtag',
          type: 'text',
          label: 'Instagram Hashtag',
          admin: {
            description: 'Hashtag to filter Instagram posts',
          },
        },
        {
          name: 'socialSharingEnabled',
          type: 'checkbox',
          label: 'Enable Social Sharing',
          admin: {
            description: 'Allow users to share individual gallery items',
          },
          defaultValue: false,
        },
        {
          name: 'socialPlatforms',
          type: 'array',
          label: 'Social Platforms',
          admin: {
            description: 'Select which platforms to enable for sharing',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Twitter', value: 'twitter' },
                { label: 'Pinterest', value: 'pinterest' },
                { label: 'Instagram', value: 'instagram' },
                { label: 'LinkedIn', value: 'linkedin' },
              ],
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
