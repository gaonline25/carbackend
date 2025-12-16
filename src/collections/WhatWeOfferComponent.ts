import { CollectionConfig } from 'payload'

export const WhatWeOfferComponent: CollectionConfig = {
  slug: 'what-we-offer-component',
  admin: {
    useAsTitle: 'componentName',
    defaultColumns: ['componentName', 'bannerTitle', 'updatedAt'],
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
      defaultValue: 'What We Offer Component',
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
          label: 'Show Banner',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Banner Container CSS Classes',
          admin: {
            description: 'e.g., inner-small-banner',
          },
          defaultValue: 'inner-small-banner',
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
          name: 'minHeight',
          type: 'text',
          label: 'Minimum Height',
          admin: {
            description: 'CSS height value (e.g., 400px, 50vh)',
          },
        },
        {
          name: 'maxHeight',
          type: 'text',
          label: 'Maximum Height',
          admin: {
            description: 'CSS height value',
          },
        },
      ],
    },
    // Title Wrap Section
    {
      name: 'titleWrap',
      type: 'group',
      label: 'Title Wrap',
      fields: [
        {
          name: 'show',
          type: 'checkbox',
          label: 'Show Title',
          defaultValue: true,
        },
        {
          name: 'className',
          type: 'text',
          label: 'Title Wrap CSS Classes',
          admin: {
            description: 'e.g., inner-title-wrap',
          },
          defaultValue: 'inner-title-wrap',
        },
        {
          name: 'containerClassName',
          type: 'text',
          label: 'Inner Container CSS Classes',
          defaultValue: 'base-container',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Banner Title',
          required: true,
          defaultValue: 'What We Offer',
        },
        {
          name: 'titleTag',
          type: 'select',
          label: 'Title HTML Tag',
          options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
          ],
          defaultValue: 'h1',
        },
        {
          name: 'titleClassName',
          type: 'text',
          label: 'Title CSS Classes',
          admin: {
            description: 'e.g., inner-banner-title',
          },
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
            description: 'CSS font-size value (e.g., 48px, 3rem)',
          },
        },
        {
          name: 'titleFontWeight',
          type: 'text',
          label: 'Title Font Weight',
          admin: {
            description: 'CSS font-weight value (e.g., 700, bold)',
          },
        },
        {
          name: 'titleLineHeight',
          type: 'text',
          label: 'Title Line Height',
          defaultValue: '1.2',
        },
        {
          name: 'titleTextAlign',
          type: 'select',
          label: 'Title Text Alignment',
          options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'left',
        },
        {
          name: 'titleMargin',
          type: 'text',
          label: 'Title Margin',
          admin: {
            description: 'CSS margin value (e.g., 0, 1rem 0)',
          },
        },
        {
          name: 'titlePadding',
          type: 'text',
          label: 'Title Padding',
          admin: {
            description: 'CSS padding value',
          },
        },
        {
          name: 'titleLetterSpacing',
          type: 'text',
          label: 'Title Letter Spacing',
          admin: {
            description: 'CSS letter-spacing value',
          },
        },
        {
          name: 'titleTextTransform',
          type: 'select',
          label: 'Title Text Transform',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Uppercase', value: 'uppercase' },
            { label: 'Lowercase', value: 'lowercase' },
            { label: 'Capitalize', value: 'capitalize' },
          ],
          defaultValue: 'none',
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
          label: 'Show Background Image',
          defaultValue: true,
        },
        {
          name: 'wrapperClassName',
          type: 'text',
          label: 'Wrapper CSS Classes',
          admin: {
            description: 'e.g., inner-clip-photo-banner',
          },
          defaultValue: 'inner-clip-photo-banner',
        },
        {
          name: 'imageContainerClassName',
          type: 'text',
          label: 'Image Container CSS Classes',
          admin: {
            description: 'e.g., inner-photo-banner, services-banner',
          },
          defaultValue: 'inner-photo-banner services-banner',
        },
        {
          name: 'backgroundImages',
          type: 'group',
          label: 'Responsive Background Images',
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
              required: true,
              defaultValue: 'Background Banner Image',
            },
            {
              name: 'defaultUrl',
              type: 'text',
              label: 'Default Image URL',
              admin: {
                description: 'Fallback URL if no image is uploaded',
              },
            },
          ],
        },
        {
          name: 'backgroundSize',
          type: 'select',
          label: 'Background Size',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Auto', value: 'auto' },
            { label: '100% 100%', value: '100% 100%' },
          ],
          defaultValue: 'cover',
        },
        {
          name: 'backgroundPosition',
          type: 'text',
          label: 'Background Position',
          admin: {
            description: 'CSS background-position value (e.g., center, top left)',
          },
          defaultValue: 'center',
        },
        {
          name: 'backgroundAttachment',
          type: 'select',
          label: 'Background Attachment',
          options: [
            { label: 'Scroll', value: 'scroll' },
            { label: 'Fixed', value: 'fixed' },
            { label: 'Local', value: 'local' },
          ],
          defaultValue: 'scroll',
        },
        {
          name: 'backgroundRepeat',
          type: 'select',
          label: 'Background Repeat',
          options: [
            { label: 'Repeat', value: 'repeat' },
            { label: 'Repeat-X', value: 'repeat-x' },
            { label: 'Repeat-Y', value: 'repeat-y' },
            { label: 'No Repeat', value: 'no-repeat' },
          ],
          defaultValue: 'no-repeat',
        },
        {
          name: 'minHeight',
          type: 'text',
          label: 'Minimum Height',
          admin: {
            description: 'CSS height value (e.g., 400px, 60vh)',
          },
          defaultValue: '500px',
        },
        {
          name: 'maxHeight',
          type: 'text',
          label: 'Maximum Height',
          admin: {
            description: 'CSS height value',
          },
        },
      ],
    },
    // Image Transform Settings
    {
      name: 'imageTransform',
      type: 'group',
      label: 'Image Transform/Scale Effects',
      fields: [
        {
          name: 'enableTransform',
          type: 'checkbox',
          label: 'Enable Transform Effects',
          defaultValue: true,
        },
        {
          name: 'scale',
          type: 'text',
          label: 'Scale',
          admin: {
            description: 'Scale factor (e.g., 1.15, 1.2)',
          },
          defaultValue: '1.15',
        },
        {
          name: 'translateX',
          type: 'text',
          label: 'Translate X',
          admin: {
            description: 'Horizontal translation (e.g., 0, 5px)',
          },
          defaultValue: '0',
        },
        {
          name: 'translateY',
          type: 'text',
          label: 'Translate Y',
          admin: {
            description: 'Vertical translation (e.g., 0, 5px)',
          },
          defaultValue: '0',
        },
        {
          name: 'rotateX',
          type: 'text',
          label: 'Rotate X',
          admin: {
            description: 'X-axis rotation in degrees (e.g., 0, 5deg)',
          },
          defaultValue: '0',
        },
        {
          name: 'rotateY',
          type: 'text',
          label: 'Rotate Y',
          admin: {
            description: 'Y-axis rotation in degrees (e.g., 0, 5deg)',
          },
          defaultValue: '0',
        },
        {
          name: 'rotateZ',
          type: 'text',
          label: 'Rotate Z',
          admin: {
            description: 'Z-axis rotation in degrees (e.g., 0, 5deg)',
          },
          defaultValue: '0',
        },
        {
          name: 'skewX',
          type: 'text',
          label: 'Skew X',
          admin: {
            description: 'X-axis skew in degrees',
          },
          defaultValue: '0',
        },
        {
          name: 'skewY',
          type: 'text',
          label: 'Skew Y',
          admin: {
            description: 'Y-axis skew in degrees',
          },
          defaultValue: '0',
        },
        {
          name: 'perspective',
          type: 'text',
          label: 'Perspective',
          admin: {
            description: 'Perspective value for 3D transforms (e.g., 1000px)',
          },
        },
        {
          name: 'transformOriginX',
          type: 'text',
          label: 'Transform Origin X',
          admin: {
            description: 'Origin point for transforms (e.g., 50%, center)',
          },
          defaultValue: '50%',
        },
        {
          name: 'transformOriginY',
          type: 'text',
          label: 'Transform Origin Y',
          admin: {
            description: 'Origin point for transforms (e.g., 50%, center)',
          },
          defaultValue: '50%',
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
          name: 'show',
          type: 'checkbox',
          label: 'Show Overlay',
          defaultValue: true,
        },
        {
          name: 'wrapperClassName',
          type: 'text',
          label: 'Overlay Wrapper CSS Classes',
          admin: {
            description: 'e.g., inner-banner-overlay, with-bottom-light-gradient',
          },
          defaultValue: 'inner-banner-overlay with-bottom-light-gradient',
        },
        {
          name: 'overlayType',
          type: 'select',
          label: 'Overlay Type',
          options: [
            { label: 'Solid Color', value: 'solid' },
            { label: 'Gradient', value: 'gradient' },
            { label: 'Multiple Gradients', value: 'multiple' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'multiple',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., rgba(0,0,0,0.5))',
          },
        },
        {
          name: 'backgroundGradient',
          type: 'text',
          label: 'Background Gradient',
          admin: {
            description: 'CSS gradient value (e.g., linear-gradient(to right, #000, #fff))',
          },
        },
        {
          name: 'opacity',
          type: 'text',
          label: 'Overlay Opacity',
          admin: {
            description: 'Value between 0 and 1 (e.g., 0.5)',
          },
          defaultValue: '1',
        },
        {
          name: 'blendMode',
          type: 'select',
          label: 'Blend Mode',
          options: [
            { label: 'Normal', value: 'normal' },
            { label: 'Multiply', value: 'multiply' },
            { label: 'Screen', value: 'screen' },
            { label: 'Overlay', value: 'overlay' },
            { label: 'Darken', value: 'darken' },
            { label: 'Lighten', value: 'lighten' },
            { label: 'Color Dodge', value: 'color-dodge' },
            { label: 'Color Burn', value: 'color-burn' },
            { label: 'Hard Light', value: 'hard-light' },
            { label: 'Soft Light', value: 'soft-light' },
          ],
          defaultValue: 'normal',
        },
        {
          name: 'gradients',
          type: 'array',
          label: 'Gradient Elements',
          admin: {
            description: 'Add multiple gradient layers/elements',
          },
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'Gradient CSS Class',
              required: true,
              admin: {
                description: 'e.g., red-inner-grad-1, red-inner-grad-2',
              },
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Gradient Background Color',
              admin: {
                description: 'CSS color value',
              },
            },
            {
              name: 'backgroundGradient',
              type: 'text',
              label: 'Gradient Value',
              admin: {
                description:
                  'CSS gradient (e.g., radial-gradient(circle at center, #ff0000, transparent))',
              },
            },
            {
              name: 'opacity',
              type: 'text',
              label: 'Opacity',
              defaultValue: '1',
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
            {
              name: 'size',
              type: 'group',
              label: 'Size',
              fields: [
                {
                  name: 'width',
                  type: 'text',
                  label: 'Width',
                },
                {
                  name: 'height',
                  type: 'text',
                  label: 'Height',
                },
              ],
            },
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Gradient',
              defaultValue: true,
            },
          ],
          defaultValue: [
            {
              className: 'red-inner-grad-1',
              show: true,
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
            { label: 'Title Wrap', value: 'titleWrap' },
            { label: 'Background Image Section', value: 'backgroundImage' },
            { label: 'Overlay Section', value: 'overlay' },
          ],
        },
      ],
      defaultValue: [
        { section: 'banner' },
        { section: 'titleWrap' },
        { section: 'backgroundImage' },
        { section: 'overlay' },
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
            description: 'Default text color',
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
        {
          name: 'parallaxEnabled',
          type: 'checkbox',
          label: 'Enable Parallax Effect',
          defaultValue: false,
        },
        {
          name: 'parallaxSpeed',
          type: 'text',
          label: 'Parallax Speed',
          admin: {
            description: 'Speed factor for parallax (e.g., 0.5, 0.8)',
          },
          defaultValue: '0.5',
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
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile fonts (e.g., 90%)',
          },
          defaultValue: '85%',
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
          name: 'mobileBannerHeight',
          type: 'text',
          label: 'Mobile Banner Height',
          admin: {
            description: 'Min height for banner on mobile',
          },
        },
        {
          name: 'mobileImageHeight',
          type: 'text',
          label: 'Mobile Image Height',
          admin: {
            description: 'Min height for image section on mobile',
          },
        },
        {
          name: 'disableTransformOnMobile',
          type: 'checkbox',
          label: 'Disable Transform Effects on Mobile',
          defaultValue: false,
        },
        {
          name: 'disableParallaxOnMobile',
          type: 'checkbox',
          label: 'Disable Parallax on Mobile',
          defaultValue: true,
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
            description: 'Preload banner and background images',
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
          defaultValue: 'What We Offer',
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
                { label: 'Title Wrap', value: 'titleWrap' },
                { label: 'Background Image Section', value: 'backgroundImage' },
                { label: 'Overlay Section', value: 'overlay' },
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
                { label: 'Element Visible', value: 'visible' },
                { label: 'Scroll to Section', value: 'scroll' },
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
