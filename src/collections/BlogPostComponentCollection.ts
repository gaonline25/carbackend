import { CollectionConfig } from 'payload'

export const BlogPostComponentCollection: CollectionConfig = {
  slug: 'blog-post-component',
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
      defaultValue: 'Blog Post Detail Component',
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Slug',
      unique: true,
      required: true,
      admin: {
        position: 'sidebar',
        description: 'Used in URL: /blog/your-slug-here',
      },
      // Auto-generate from title if empty
      hooks: {
        beforeValidate: [
          ({ data, originalDoc }) => {
            if (!data.slug && data.heroSection?.title) {
              return data.heroSection.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')
            }
            return data.slug
          },
        ],
      },
    },
    // Hero/Banner Section
    {
      name: 'heroSection',
      type: 'group',
      label: 'Hero/Banner Section',
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
            description: 'e.g., blog-template-wrap, banner',
          },
          defaultValue: 'blog-template-wrap banner',
        },
        {
          name: 'containerClassName',
          type: 'text',
          label: 'Container CSS Classes',
          defaultValue: 'base-container-5',
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
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
        },
        {
          name: 'padding',
          type: 'text',
          label: 'Padding',
          admin: {
            description: 'CSS padding value (e.g., 60px 0, 4rem 2rem)',
          },
        },
        {
          name: 'categoryTag',
          type: 'group',
          label: 'Category Tag',
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
              defaultValue: 'Guides',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Category URL',
              defaultValue: '/posts-categories/guides',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Category CSS Class',
              defaultValue: 'carsy-blog-category',
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
          ],
        },
        {
          name: 'dateDisplay',
          type: 'group',
          label: 'Date Display',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Date',
              defaultValue: true,
            },
            {
              name: 'date',
              type: 'text',
              label: 'Date Text',
              defaultValue: 'July 14, 2024',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Date CSS Class',
              defaultValue: 'subtitle-data',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Date Text Color',
            },
            {
              name: 'showDivider',
              type: 'checkbox',
              label: 'Show Divider Line',
              defaultValue: true,
            },
            {
              name: 'dividerColor',
              type: 'text',
              label: 'Divider Color',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: "Benefits of Regular Oil Changes: Why It's Essential",
        },
        {
          name: 'titleClassName',
          type: 'text',
          label: 'Title CSS Class',
          defaultValue: 'blog-details-title',
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
          name: 'introText',
          type: 'textarea',
          label: 'Introduction Paragraph',
          defaultValue:
            "Maintaining your car in peak condition is crucial for its longevity and performance. At Carsy, we believe in offering top-notch services that cater to every aspect of your vehicle's needs. Our comprehensive car services ensure that your car remains safe, reliable, and efficient.",
        },
        {
          name: 'introClassName',
          type: 'text',
          label: 'Intro Paragraph CSS Class',
          defaultValue: 'banner-paragraph',
        },
        {
          name: 'introTextColor',
          type: 'text',
          label: 'Intro Text Color',
        },
        {
          name: 'introFontSize',
          type: 'text',
          label: 'Intro Font Size',
        },
        {
          name: 'scrollLink',
          type: 'group',
          label: 'Scroll Link',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Scroll Link',
              defaultValue: true,
            },
            {
              name: 'targetId',
              type: 'text',
              label: 'Target Section ID',
              defaultValue: 'Blog-Content',
            },
            {
              name: 'arrowIcon',
              type: 'upload',
              relationTo: 'media',
              label: 'Arrow Icon',
            },
            {
              name: 'arrowIconUrl',
              type: 'text',
              label: 'Arrow Icon URL (fallback)',
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66ab3d5fbf81bfba50d9bbd5_arrow-right(48x48)%402x.svg',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Circle Background Color',
            },
            {
              name: 'hoverColor',
              type: 'text',
              label: 'Circle Hover Color',
            },
          ],
        },
      ],
    },
    // Background Image Section
    {
      name: 'backgroundImageSection',
      type: 'group',
      label: 'Background Image Section',
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
          label: 'Section CSS Classes',
          defaultValue: 'section-blog-details',
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
              name: 'imageUrl',
              type: 'text',
              label: 'Image URL (fallback)',
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea18b/66a0eb12acfdc13c06e12f85_Blog-1.jpg',
            },
            {
              name: 'alt',
              type: 'text',
              label: 'Alt Text',
              defaultValue: 'Blog featured image',
            },
          ],
        },
        {
          name: 'imageScale',
          type: 'text',
          label: 'Image Scale',
          admin: {
            description: 'Scale value for zoom effect (e.g., 1.3)',
          },
          defaultValue: '1.3',
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
              name: 'overlayColor',
              type: 'text',
              label: 'Overlay Color',
              admin: {
                description: 'CSS color with opacity (e.g., rgba(0,0,0,0.4))',
              },
            },
            {
              name: 'overlayClassName',
              type: 'text',
              label: 'Overlay CSS Class',
              defaultValue: 'news-detail-overlay',
            },
          ],
        },
        {
          name: 'height',
          type: 'text',
          label: 'Section Height',
          admin: {
            description: 'CSS height value (e.g., 500px, 60vh)',
          },
        },
        {
          name: 'objectFit',
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
      ],
    },
    // Main Content Section
    {
      name: 'contentSection',
      type: 'group',
      label: 'Main Content Section',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Section',
          defaultValue: true,
        },
        {
          name: 'sectionId',
          type: 'text',
          label: 'Section ID',
          defaultValue: 'Blog-Content',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Section CSS Classes',
          defaultValue: 'section-gray',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'innerBackgroundColor',
          type: 'text',
          label: 'Inner Background Color',
          admin: {
            description: 'Background for soft-black-bg div',
          },
        },
        {
          name: 'containerClassName',
          type: 'text',
          label: 'Container CSS Class',
          defaultValue: 'base-container',
        },
        {
          name: 'wrapClassName',
          type: 'text',
          label: 'Content Wrap CSS Class',
          defaultValue: 'blog-template-wrap',
        },
        {
          name: 'richTextClassName',
          type: 'text',
          label: 'Rich Text CSS Class',
          defaultValue: 'hero-rich-text-style w-richtext',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Text Color',
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
          name: 'maxWidth',
          type: 'text',
          label: 'Content Max Width',
          admin: {
            description: 'Max width for content area (e.g., 1200px, 100%)',
          },
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Blog Content',
          required: true,
          admin: {
            description: 'Main blog post content - leave empty to customize later',
          },
        },
      ],
    },
    // Pagination Section
    {
      name: 'paginationSection',
      type: 'group',
      label: 'Pagination Section (Previous/Next Posts)',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Pagination',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Pagination CSS Class',
          defaultValue: 'blog-template-pagination-2',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'spacing',
          type: 'text',
          label: 'Spacing Between Items',
          admin: {
            description: 'Gap or margin between prev/next items',
          },
        },
        {
          name: 'previousPost',
          type: 'group',
          label: 'Previous Post',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Previous Post Link',
              defaultValue: true,
            },
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              defaultValue: 'Previous post',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Post Title',
              defaultValue: 'How to Choose the Right Tires for Your Vehicle',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Post URL',
              defaultValue: '/blog-posts/how-to-choose-the-right-tires-for-your-vehicle',
            },
            {
              name: 'arrowIcon',
              type: 'upload',
              relationTo: 'media',
              label: 'Arrow Icon',
            },
            {
              name: 'arrowIconUrl',
              type: 'text',
              label: 'Arrow Icon URL (fallback)',
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669fcff153cd4bffc62cb773_Arrow%20White%20L.svg',
            },
            {
              name: 'labelColor',
              type: 'text',
              label: 'Label Color',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'hoverColor',
              type: 'text',
              label: 'Hover Color',
            },
          ],
        },
        {
          name: 'nextPost',
          type: 'group',
          label: 'Next Post',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Next Post Link',
              defaultValue: true,
            },
            {
              name: 'label',
              type: 'text',
              label: 'Label',
              defaultValue: 'Next post',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Post Title',
              defaultValue: 'DIY Car Care: Simple Fixes You Can Do at Home',
            },
            {
              name: 'url',
              type: 'text',
              label: 'Post URL',
              defaultValue: '/blog-posts/diy-car-care-simple-fixes-you-can-do-at-home',
            },
            {
              name: 'arrowIcon',
              type: 'upload',
              relationTo: 'media',
              label: 'Arrow Icon',
            },
            {
              name: 'arrowIconUrl',
              type: 'text',
              label: 'Arrow Icon URL (fallback)',
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/669fcff281897ab23a323451_Arrow%20White.svg',
            },
            {
              name: 'labelColor',
              type: 'text',
              label: 'Label Color',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
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
            { label: 'Hero/Banner Section', value: 'hero' },
            { label: 'Background Image Section', value: 'backgroundImage' },
            { label: 'Main Content Section', value: 'content' },
            { label: 'Pagination Section', value: 'pagination' },
          ],
        },
      ],
      defaultValue: [
        { section: 'hero' },
        { section: 'backgroundImage' },
        { section: 'content' },
        { section: 'pagination' },
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
            description: 'Border radius for elements (e.g., 8px, 0.5rem)',
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
        },
        {
          name: 'h1LineHeight',
          type: 'text',
          label: 'H1 Line Height',
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
          name: 'h2MarginBottom',
          type: 'text',
          label: 'H2 Margin Bottom',
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
          name: 'h3LineHeight',
          type: 'text',
          label: 'H3 Line Height',
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
          name: 'blockquoteFontSize',
          type: 'text',
          label: 'Blockquote Font Size',
        },
        {
          name: 'blockquoteColor',
          type: 'text',
          label: 'Blockquote Text Color',
        },
        {
          name: 'blockquoteBackground',
          type: 'text',
          label: 'Blockquote Background Color',
        },
        {
          name: 'blockquoteBorderColor',
          type: 'text',
          label: 'Blockquote Border Color',
        },
        {
          name: 'blockquotePadding',
          type: 'text',
          label: 'Blockquote Padding',
        },
        {
          name: 'blockquoteFontStyle',
          type: 'select',
          label: 'Blockquote Font Style',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Italic', value: 'italic' },
          ],
          defaultValue: 'italic',
        },
        {
          name: 'listStyleType',
          type: 'text',
          label: 'List Style Type',
          admin: {
            description: 'CSS list-style-type (e.g., disc, circle, square)',
          },
        },
        {
          name: 'listMarginLeft',
          type: 'text',
          label: 'List Margin Left',
        },
        {
          name: 'listItemSpacing',
          type: 'text',
          label: 'List Item Spacing',
        },
        {
          name: 'listItemColor',
          type: 'text',
          label: 'List Item Text Color',
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
          name: 'contentMaxWidth',
          type: 'text',
          label: 'Content Max Width',
          admin: {
            description: 'Max width for main content (e.g., 800px)',
          },
        },
        {
          name: 'contentAlignment',
          type: 'select',
          label: 'Content Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Justify', value: 'justify' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'imageMaxWidth',
          type: 'text',
          label: 'Content Image Max Width',
          admin: {
            description: 'Max width for images within content',
          },
        },
        {
          name: 'imageAlignment',
          type: 'select',
          label: 'Image Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
            { label: 'Full Width', value: 'full' },
          ],
          defaultValue: 'center',
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
          name: 'imageBorderRadius',
          type: 'text',
          label: 'Image Border Radius',
        },
        {
          name: 'figureMargin',
          type: 'text',
          label: 'Figure Element Margin',
          admin: {
            description: 'Margin for figure elements containing images',
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
          name: 'imageZoomOnHover',
          type: 'checkbox',
          label: 'Enable Image Zoom on Hover',
          defaultValue: false,
        },
        {
          name: 'imageZoomScale',
          type: 'text',
          label: 'Image Zoom Scale',
          defaultValue: '1.1',
        },
        {
          name: 'linkTransitionDuration',
          type: 'text',
          label: 'Link Transition Duration',
          defaultValue: '0.3s',
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
          defaultValue: "Benefits of Regular Oil Changes: Why It's Essential - Carsy Blog",
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            "Learn why regular oil changes are crucial for your vehicle's longevity and performance. Expert tips and insights from Carsy's automotive specialists.",
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
          label: 'OG Image URL (fallback)',
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords for SEO',
          },
          defaultValue: 'oil change, car maintenance, vehicle service, automotive care',
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
          name: 'author',
          type: 'text',
          label: 'Article Author',
          defaultValue: 'Carsy Team',
        },
        {
          name: 'publishDate',
          type: 'text',
          label: 'Publish Date',
          defaultValue: '2024-07-14',
        },
        {
          name: 'modifiedDate',
          type: 'text',
          label: 'Modified Date',
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
        {
          name: 'headingStructure',
          type: 'checkbox',
          label: 'Enforce Proper Heading Hierarchy',
          admin: {
            description: 'Ensure headings follow proper H1 > H2 > H3 structure',
          },
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
          name: 'mobileImageHeight',
          type: 'text',
          label: 'Mobile Image Height',
          admin: {
            description: 'Max height for images on mobile (e.g., 300px)',
          },
        },
        {
          name: 'mobileHideElements',
          type: 'text',
          label: 'Mobile Hidden Elements',
          admin: {
            description: 'Comma-separated list of element classes to hide on mobile',
          },
        },
        {
          name: 'mobilePaginationLayout',
          type: 'select',
          label: 'Mobile Pagination Layout',
          options: [
            { label: 'Stacked', value: 'stacked' },
            { label: 'Side by Side', value: 'side-by-side' },
          ],
          defaultValue: 'stacked',
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
                { label: 'Hero Section', value: 'hero' },
                { label: 'Background Image Section', value: 'backgroundImage' },
                { label: 'Content Section', value: 'content' },
                { label: 'Pagination Section', value: 'pagination' },
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
          name: 'smoothScrolling',
          type: 'checkbox',
          label: 'Enable Smooth Scrolling',
          defaultValue: true,
        },
        {
          name: 'scrollOffset',
          type: 'text',
          label: 'Scroll Offset',
          admin: {
            description: 'Offset for scroll-to links (e.g., 80px for fixed header)',
          },
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
          name: 'responsiveImageSizes',
          type: 'text',
          label: 'Responsive Image Sizes',
          admin: {
            description: 'Comma-separated widths for responsive images (e.g., 420,800,1400)',
          },
          defaultValue: '420,768,1024,1400,1920',
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
          defaultValue: 'https://cdn.prod.website-files.com',
        },
      ],
    },
    // Social Sharing Settings
    {
      name: 'socialSharingSettings',
      type: 'group',
      label: 'Social Sharing Settings',
      fields: [
        {
          name: 'enableSharing',
          type: 'checkbox',
          label: 'Enable Social Sharing',
          defaultValue: false,
        },
        {
          name: 'shareButtonPosition',
          type: 'select',
          label: 'Share Buttons Position',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Bottom', value: 'bottom' },
            { label: 'Both', value: 'both' },
            { label: 'Floating Sidebar', value: 'sidebar' },
          ],
          defaultValue: 'bottom',
        },
        {
          name: 'platforms',
          type: 'array',
          label: 'Enabled Platforms',
          admin: {
            description: 'Select which social platforms to enable',
          },
          fields: [
            {
              name: 'platform',
              type: 'select',
              label: 'Platform',
              options: [
                { label: 'Facebook', value: 'facebook' },
                { label: 'Twitter/X', value: 'twitter' },
                { label: 'LinkedIn', value: 'linkedin' },
                { label: 'Pinterest', value: 'pinterest' },
                { label: 'Email', value: 'email' },
                { label: 'Copy Link', value: 'copy' },
              ],
            },
            {
              name: 'icon',
              type: 'upload',
              relationTo: 'media',
              label: 'Custom Icon',
            },
          ],
          defaultValue: [
            { platform: 'facebook' },
            { platform: 'twitter' },
            { platform: 'linkedin' },
          ],
        },
      ],
    },
    // Reading Progress Settings
    {
      name: 'readingProgressSettings',
      type: 'group',
      label: 'Reading Progress Settings',
      fields: [
        {
          name: 'enableProgressBar',
          type: 'checkbox',
          label: 'Enable Reading Progress Bar',
          defaultValue: false,
        },
        {
          name: 'progressBarPosition',
          type: 'select',
          label: 'Progress Bar Position',
          options: [
            { label: 'Top', value: 'top' },
            { label: 'Bottom', value: 'bottom' },
          ],
          defaultValue: 'top',
        },
        {
          name: 'progressBarColor',
          type: 'text',
          label: 'Progress Bar Color',
        },
        {
          name: 'progressBarHeight',
          type: 'text',
          label: 'Progress Bar Height',
          defaultValue: '4px',
        },
        {
          name: 'showReadingTime',
          type: 'checkbox',
          label: 'Show Estimated Reading Time',
          defaultValue: false,
        },
        {
          name: 'readingTimeLocation',
          type: 'select',
          label: 'Reading Time Location',
          options: [
            { label: 'Near Title', value: 'title' },
            { label: 'Near Date', value: 'date' },
          ],
          defaultValue: 'date',
        },
      ],
    },
    // Comments Settings
    {
      name: 'commentsSettings',
      type: 'group',
      label: 'Comments Settings',
      fields: [
        {
          name: 'enableComments',
          type: 'checkbox',
          label: 'Enable Comments',
          defaultValue: false,
        },
        {
          name: 'commentsProvider',
          type: 'select',
          label: 'Comments Provider',
          options: [
            { label: 'Disqus', value: 'disqus' },
            { label: 'Facebook Comments', value: 'facebook' },
            { label: 'Custom', value: 'custom' },
          ],
        },
        {
          name: 'disqusShortname',
          type: 'text',
          label: 'Disqus Shortname',
        },
        {
          name: 'commentsPosition',
          type: 'select',
          label: 'Comments Position',
          options: [
            { label: 'Before Pagination', value: 'before-pagination' },
            { label: 'After Pagination', value: 'after-pagination' },
          ],
          defaultValue: 'after-pagination',
        },
      ],
    },
    // Related Posts Settings
    {
      name: 'relatedPostsSettings',
      type: 'group',
      label: 'Related Posts Settings',
      fields: [
        {
          name: 'showRelatedPosts',
          type: 'checkbox',
          label: 'Show Related Posts',
          defaultValue: false,
        },
        {
          name: 'relatedPostsTitle',
          type: 'text',
          label: 'Section Title',
          defaultValue: 'Related Articles',
        },
        {
          name: 'numberOfPosts',
          type: 'text',
          label: 'Number of Related Posts',
          defaultValue: '3',
        },
        {
          name: 'relatedPostsLayout',
          type: 'select',
          label: 'Layout',
          options: [
            { label: 'Grid', value: 'grid' },
            { label: 'Carousel', value: 'carousel' },
            { label: 'List', value: 'list' },
          ],
          defaultValue: 'grid',
        },
        {
          name: 'relatedPostsPosition',
          type: 'select',
          label: 'Position',
          options: [
            { label: 'Before Pagination', value: 'before-pagination' },
            { label: 'After Pagination', value: 'after-pagination' },
            { label: 'After Content', value: 'after-content' },
          ],
          defaultValue: 'after-content',
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
