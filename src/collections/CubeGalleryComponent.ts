import { CollectionConfig } from 'payload'

export const CubeGalleryComponent: CollectionConfig = {
  slug: 'cube-gallery-component',
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
      defaultValue: 'Cube Gallery Component',
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
          label: 'Main Wrapper CSS Classes',
          defaultValue: 'relative-page-wrapper',
        },
        {
          name: 'animationId',
          type: 'text',
          label: 'Animation ID',
          defaultValue: 'd4f7ae61-ea69-bfe6-eb6b-3395c014e551',
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
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
        },
      ],
    },
    // Wrapper Settings
    {
      name: 'wrapperSettings',
      type: 'group',
      label: 'Wrapper Settings',
      fields: [
        {
          name: 'mainWrapperClassName',
          type: 'text',
          label: 'Main Wrapper CSS Classes',
          defaultValue: 'main-wrapper',
        },
        {
          name: 'cubeWrapperClassName',
          type: 'text',
          label: 'Cube Wrapper CSS Classes',
          defaultValue: 'cube-wrapper',
        },
        {
          name: 'cubeWrapperAnimationId',
          type: 'text',
          label: 'Cube Wrapper Animation ID',
          defaultValue: 'c54a0890-70d9-86e9-634d-1428583b96a9',
        },
        {
          name: 'cubeWrapperDataWId',
          type: 'text',
          label: 'Cube Wrapper Data W-ID',
          defaultValue: 'c54a0890-70d9-86e9-634d-1428583b96a9',
        },
        {
          name: 'cubeWrapperContainerId',
          type: 'text',
          label: 'Cube Wrapper Container ID',
          defaultValue: 'w-node-c54a0890-70d9-86e9-634d-1428583b96a9-ab3f40e0',
        },
      ],
    },
    // Left Text Content Section
    {
      name: 'leftTextContent',
      type: 'group',
      label: 'Left Text Content',
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
          label: 'HTML ID',
          defaultValue: 'w-node-c54a0890-70d9-86e9-634d-1428583b96a4-ab3f40e0',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Container CSS Classes',
          defaultValue: 'text-content left',
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
        // Inner Content
        {
          name: 'innerContent',
          type: 'group',
          label: 'Inner Content',
          fields: [
            {
              name: 'animationId',
              type: 'text',
              label: 'Animation ID',
              defaultValue: 'b8fead14-6ce2-753b-30a0-90191b5c6310',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Content CSS Classes',
              defaultValue: 'cube-text-con left',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
              defaultValue: 'Speed Stories',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'titleClassName',
              type: 'text',
              label: 'Title CSS Classes',
              defaultValue: 'feature-title',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              required: true,
              defaultValue:
                'We offer competitive pricing, transparent quotes, and a seamless service process, making your experience with us stress-free and satisfying.',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
            {
              name: 'descriptionClassName',
              type: 'text',
              label: 'Description CSS Classes',
              defaultValue: 'feature-description',
            },
          ],
        },
        // CTA Button
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
              required: true,
              defaultValue: 'About us',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              required: true,
              defaultValue: '/about-us',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button CSS Classes',
              defaultValue: 'primary-white-button w-button',
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
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Button Wrapper CSS Classes',
              defaultValue: 'btn-wrapper',
            },
          ],
        },
      ],
    },
    // Cube Faces Array
    {
      name: 'cubeFaces',
      type: 'array',
      label: 'Cube Faces',
      admin: {
        description: 'Drag to reorder cube faces',
      },
      fields: [
        {
          name: 'id',
          type: 'text',
          label: 'Face ID',
          required: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Face CSS Classes',
          required: true,
          admin: {
            description: 'e.g., cube-face-1, cube-face-2',
          },
        },
        {
          name: 'image',
          type: 'group',
          label: 'Image',
          fields: [
            {
              name: 'upload',
              type: 'upload',
              relationTo: 'media',
              label: 'Image Upload',
            },
            {
              name: 'src',
              type: 'text',
              label: 'Image URL (Fallback)',
              admin: {
                description: 'Full image URL if not using upload',
              },
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Project photo',
            },
            {
              name: 'srcSet',
              type: 'textarea',
              label: 'SrcSet (Responsive Sizes)',
              admin: {
                description: 'Multiple image URLs for different sizes',
              },
            },
            {
              name: 'sizes',
              type: 'text',
              label: 'Sizes Attribute',
              admin: {
                description: 'e.g., (max-width: 479px) 60vw, (max-width: 767px) 80vw',
              },
              defaultValue:
                '(max-width: 479px) 60vw, (max-width: 767px) 80vw, (max-width: 991px) 8vw, 30vw',
            },
            {
              name: 'loadingStrategy',
              type: 'select',
              label: 'Loading Strategy',
              options: [
                { label: 'Lazy', value: 'lazy' },
                { label: 'Eager', value: 'eager' },
              ],
              defaultValue: 'lazy',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Image CSS Classes',
              defaultValue: 'full-image',
            },
          ],
        },
        {
          name: 'overlay',
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
              label: 'Overlay CSS Classes',
              defaultValue: 'overlay-gradient',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Overlay Color',
            },
            {
              name: 'opacity',
              type: 'text',
              label: 'Overlay Opacity',
              admin: {
                description: 'Value between 0 and 1',
              },
            },
          ],
        },
        {
          name: 'lightbox',
          type: 'group',
          label: 'Lightbox',
          fields: [
            {
              name: 'enable',
              type: 'checkbox',
              label: 'Enable Lightbox',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'Link CSS Classes',
              defaultValue: 'cube-lightbox w-inline-block w-lightbox',
            },
            {
              name: 'circleClassName',
              type: 'text',
              label: 'Circle CSS Classes',
              defaultValue: 'lightbox-circle',
            },
            {
              name: 'iconClassName',
              type: 'text',
              label: 'Icon CSS Classes',
              defaultValue: 'lightbox-icon',
            },
            {
              name: 'images',
              type: 'array',
              label: 'Lightbox Images',
              admin: {
                description: 'Images to display in lightbox gallery',
              },
              fields: [
                {
                  name: 'id',
                  type: 'text',
                  label: 'Image ID',
                },
                {
                  name: 'fileName',
                  type: 'text',
                  label: 'File Name',
                  required: true,
                },
                {
                  name: 'origFileName',
                  type: 'text',
                  label: 'Original File Name',
                },
                {
                  name: 'upload',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Image',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Image URL (Fallback)',
                },
                {
                  name: 'type',
                  type: 'select',
                  label: 'Media Type',
                  options: [
                    { label: 'Image', value: 'image' },
                    { label: 'Video', value: 'video' },
                  ],
                  defaultValue: 'image',
                },
                {
                  name: 'width',
                  type: 'number',
                  label: 'Width (px)',
                },
                {
                  name: 'height',
                  type: 'number',
                  label: 'Height (px)',
                },
                {
                  name: 'fileSize',
                  type: 'number',
                  label: 'File Size (bytes)',
                },
              ],
            },
            {
              name: 'galleryGroup',
              type: 'text',
              label: 'Gallery Group Name',
              defaultValue: 'Cube Gallery',
            },
          ],
        },
      ],
      defaultValue: [
        {
          id: 'cube-face-1',
          className: 'cube-face-1',
          image: {
            alt: 'Project photo',
            sizes: '(max-width: 479px) 60vw, (max-width: 767px) 80vw, (max-width: 991px) 8vw, 30vw',
            src: 'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f88692f9e274e070b0bc5_Small%20Img-4.avif',
            srcSet:
              'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f88692f9e274e070b0bc5_Small%20Img-4-p-500.avif 500w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f88692f9e274e070b0bc5_Small%20Img-4.avif 900w',
            className: 'full-image',
            loadingStrategy: 'lazy',
          },
          overlay: {
            show: true,
            className: 'overlay-gradient',
          },
          lightbox: {
            enable: true,
            className: 'cube-lightbox w-inline-block w-lightbox',
            circleClassName: 'lightbox-circle',
            iconClassName: 'lightbox-icon',
            galleryGroup: 'Cube Gallery',
            images: [
              {
                fileName: 'Insta 1.jpg',
                origFileName: 'Insta 1.jpg',
                url: 'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259c9af2b9b493b20814d_Insta%201.jpg',
                type: 'image',
                width: 900,
                height: 900,
              },
            ],
          },
        },
        {
          id: 'cube-face-2',
          className: 'cube-face-2',
          image: {
            alt: 'Project photo',
            sizes: '(max-width: 479px) 60vw, (max-width: 767px) 80vw, (max-width: 991px) 8vw, 30vw',
            src: 'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9.avif',
            srcSet:
              'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9-p-500.avif 500w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9-p-800.avif 800w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9-p-1080.avif 1080w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f885d8d213d48208ec0ee_Banner-9.avif 1920w',
            className: 'full-image',
            loadingStrategy: 'lazy',
          },
          overlay: {
            show: true,
            className: 'overlay-gradient',
          },
          lightbox: {
            enable: true,
            className: 'cube-lightbox w-inline-block w-lightbox',
            circleClassName: 'lightbox-circle',
            iconClassName: 'lightbox-icon',
            galleryGroup: 'Cube Gallery',
            images: [
              {
                fileName: 'Insta 2.jpg',
                origFileName: 'Insta 2.jpg',
                url: 'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259cacffda7d59976fb9f_Insta%202.jpg',
                type: 'image',
                width: 900,
                height: 900,
              },
            ],
          },
        },
        {
          id: 'cube-face-3',
          className: 'cube-face-3',
          image: {
            alt: 'Project photo',
            sizes: '(max-width: 479px) 60vw, (max-width: 767px) 80vw, (max-width: 991px) 8vw, 30vw',
            src: 'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8857b796214b5020f372_Banner-4.avif',
            srcSet:
              'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8857b796214b5020f372_Banner-4-p-500.avif 500w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8857b796214b5020f372_Banner-4-p-800.avif 800w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8857b796214b5020f372_Banner-4.avif 1920w',
            className: 'full-image',
            loadingStrategy: 'lazy',
          },
          overlay: {
            show: true,
            className: 'overlay-gradient',
          },
          lightbox: {
            enable: true,
            className: 'cube-lightbox w-inline-block w-lightbox',
            circleClassName: 'lightbox-circle',
            iconClassName: 'lightbox-icon',
            galleryGroup: 'Cube Gallery',
            images: [
              {
                fileName: 'Insta 4.jpg',
                origFileName: 'Insta 4.jpg',
                url: 'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259ca0318b12f67ab7203_Insta%204.jpg',
                type: 'image',
                width: 900,
                height: 900,
              },
            ],
          },
        },
        {
          id: 'cube-face-4',
          className: 'cube-face-4',
          image: {
            alt: 'Project photo',
            sizes: '(max-width: 479px) 60vw, (max-width: 767px) 80vw, (max-width: 991px) 8vw, 30vw',
            src: 'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8856d748777a8fee133a_Banner-10.avif',
            srcSet:
              'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8856d748777a8fee133a_Banner-10-p-500.avif 500w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8856d748777a8fee133a_Banner-10-p-800.avif 800w, https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669f8856d748777a8fee133a_Banner-10.avif 1920w',
            className: 'full-image',
            loadingStrategy: 'lazy',
          },
          overlay: {
            show: true,
            className: 'overlay-gradient',
          },
          lightbox: {
            enable: true,
            className: 'cube-lightbox w-inline-block w-lightbox',
            circleClassName: 'lightbox-circle',
            iconClassName: 'lightbox-icon',
            galleryGroup: 'Cube Gallery',
            images: [
              {
                fileName: 'Insta 3.jpg',
                origFileName: 'Insta 3.jpg',
                url: 'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a259cbded55ab00cc5a1db_Insta%203.jpg',
                type: 'image',
                width: 900,
                height: 900,
              },
            ],
          },
        },
      ],
    },
    // Right Text Content Section
    {
      name: 'rightTextContent',
      type: 'group',
      label: 'Right Text Content',
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
          label: 'HTML ID',
          defaultValue: 'w-node-c54a0890-70d9-86e9-634d-1428583b96b2-ab3f40e0',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Container CSS Classes',
          defaultValue: 'text-content right',
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
        // Inner Content
        {
          name: 'innerContent',
          type: 'group',
          label: 'Inner Content',
          fields: [
            {
              name: 'animationId',
              type: 'text',
              label: 'Animation ID',
              defaultValue: 'c621d4ce-8f5e-ca2f-28b9-1eb32f30d128',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Content CSS Classes',
              defaultValue: 'cube-text-con',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Title',
              required: true,
              defaultValue: 'Car Showcase',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'titleClassName',
              type: 'text',
              label: 'Title CSS Classes',
              defaultValue: 'feature-title',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              required: true,
              defaultValue:
                'We offer competitive pricing, transparent quotes, and a seamless service process, making your experience with us stress-free and satisfying.',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
            {
              name: 'descriptionClassName',
              type: 'text',
              label: 'Description CSS Classes',
              defaultValue: 'feature-description',
            },
          ],
        },
        // CTA Button
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
              required: true,
              defaultValue: 'Our Gallery',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Button URL',
              required: true,
              defaultValue: '/gallery',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button CSS Classes',
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
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Button Wrapper CSS Classes',
              defaultValue: 'btn-wrapper',
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
            { label: 'Left Text Content', value: 'leftText' },
            { label: 'Cube Gallery', value: 'cubeGallery' },
            { label: 'Right Text Content', value: 'rightText' },
          ],
        },
      ],
      defaultValue: [{ section: 'leftText' }, { section: 'cubeGallery' }, { section: 'rightText' }],
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
        },
        {
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
        },
        {
          name: 'featureTitleFontSize',
          type: 'text',
          label: 'Feature Title Font Size',
        },
        {
          name: 'featureTitleFontWeight',
          type: 'text',
          label: 'Feature Title Font Weight',
        },
        {
          name: 'featureDescriptionFontSize',
          type: 'text',
          label: 'Feature Description Font Size',
        },
        {
          name: 'featureDescriptionLineHeight',
          type: 'text',
          label: 'Feature Description Line Height',
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
          name: 'cubeGridGap',
          type: 'text',
          label: 'Cube Grid Gap',
          admin: {
            description: 'Gap between cube section items',
          },
        },
        {
          name: 'cubeGridTemplate',
          type: 'text',
          label: 'Cube Grid Template',
          admin: {
            description: 'CSS grid-template-columns value',
          },
        },
        {
          name: 'cubeGridAutoFlow',
          type: 'text',
          label: 'Cube Grid Auto Flow',
          admin: {
            description: 'e.g., row, column, dense',
          },
        },
        {
          name: 'textSectionWidth',
          type: 'text',
          label: 'Text Section Width',
          admin: {
            description: 'Width percentage for text sections',
          },
        },
        {
          name: 'cubeSectionWidth',
          type: 'text',
          label: 'Cube Section Width',
          admin: {
            description: 'Width percentage for cube section',
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
          name: 'cubeRotationDuration',
          type: 'text',
          label: 'Cube Rotation Duration',
          admin: {
            description: 'Duration for cube rotation animation',
          },
        },
        {
          name: 'hoverScaleEffect',
          type: 'checkbox',
          label: 'Enable Hover Scale Effect',
          defaultValue: false,
        },
        {
          name: 'hoverScale',
          type: 'text',
          label: 'Hover Scale Value',
          admin: {
            description: 'Scale value on hover (e.g., 1.05)',
          },
          defaultValue: '1.05',
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
          name: 'mobileStackLayout',
          type: 'checkbox',
          label: 'Stack Layout on Mobile',
          admin: {
            description: 'Stack sections vertically on mobile devices',
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
      ],
    },
    // Cube Settings
    {
      name: 'cubeSettings',
      type: 'group',
      label: 'Cube Settings',
      fields: [
        {
          name: 'cubeSize',
          type: 'text',
          label: 'Cube Size',
          admin: {
            description: 'Size of the cube (e.g., 300px, 50vw)',
          },
        },
        {
          name: 'cubeBackgroundColor',
          type: 'text',
          label: 'Cube Background Color',
        },
        {
          name: 'cubeRotationAngle',
          type: 'text',
          label: 'Cube Rotation Angle',
          admin: {
            description: 'Initial rotation angle in degrees',
          },
        },
        {
          name: 'cubePerspective',
          type: 'text',
          label: 'Cube Perspective',
          admin: {
            description: 'CSS perspective value (e.g., 1000px)',
          },
        },
        {
          name: 'enableCubeRotation',
          type: 'checkbox',
          label: 'Enable Cube Rotation',
          defaultValue: true,
        },
        {
          name: 'autoRotate',
          type: 'checkbox',
          label: 'Auto Rotate Cube',
          defaultValue: false,
        },
        {
          name: 'autoRotationSpeed',
          type: 'text',
          label: 'Auto Rotation Speed',
          admin: {
            description: 'Duration for full rotation (e.g., 20s)',
          },
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
          defaultValue: 'Cube Gallery - Showcase',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue: 'Interactive cube gallery showcasing our work and services.',
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
          defaultValue: 'gallery, cube, showcase, portfolio',
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
          name: 'cubeAriaLabel',
          type: 'text',
          label: 'Cube Gallery ARIA Label',
          defaultValue: 'Interactive cube gallery',
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
                { label: 'Cube Gallery', value: 'cubeGallery' },
                { label: 'Left Text', value: 'leftText' },
                { label: 'Right Text', value: 'rightText' },
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
    // Performance Settings
    {
      name: 'performanceSettings',
      type: 'group',
      label: 'Performance Settings',
      fields: [
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Component Caching',
          defaultValue: true,
        },
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Images',
          defaultValue: true,
        },
        {
          name: 'enableImageOptimization',
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
