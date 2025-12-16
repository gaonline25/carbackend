import { CollectionConfig } from 'payload'

export const ServiceProcessComponent: CollectionConfig = {
  slug: 'service-process-component',
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
      defaultValue: 'Service Process Component',
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
          label: 'Section CSS Classes',
          admin: {
            description: 'e.g., section special-bottom-space',
          },
          defaultValue: 'section special-bottom-space',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
          admin: {
            description: 'CSS color value (e.g., #ffffff, transparent)',
          },
        },
        {
          name: 'paddingTop',
          type: 'text',
          label: 'Padding Top',
          admin: {
            description: 'CSS padding value (e.g., 60px, 4rem)',
          },
        },
        {
          name: 'paddingBottom',
          type: 'text',
          label: 'Padding Bottom',
          admin: {
            description: 'CSS padding value (e.g., 60px, 4rem)',
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
          name: 'className',
          type: 'text',
          label: 'Container CSS Classes',
          defaultValue: 'base-container',
        },
        {
          name: 'maxWidth',
          type: 'text',
          label: 'Container Max Width',
          admin: {
            description: 'CSS max-width value (e.g., 1200px, 100%)',
          },
        },
      ],
    },
    // Grid Settings
    {
      name: 'gridSettings',
      type: 'group',
      label: 'Grid Settings',
      fields: [
        {
          name: 'className',
          type: 'text',
          label: 'Grid CSS Classes',
          defaultValue: 'service-grid-steps',
        },
        {
          name: 'gridTemplateColumns',
          type: 'text',
          label: 'Grid Template Columns',
          admin: {
            description: 'CSS grid-template-columns value',
          },
        },
        {
          name: 'gap',
          type: 'text',
          label: 'Grid Gap',
          admin: {
            description: 'Gap between grid items (e.g., 30px, 2rem)',
          },
        },
      ],
    },
    // Left Info Section
    {
      name: 'leftInfoSection',
      type: 'group',
      label: 'Left Info Section',
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
          defaultValue: 'w-node-_999a9c0c-d5a5-63e2-34a8-e028c0ebd62b-ab3f40e0',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Section CSS Classes',
          defaultValue: 'service-left-info',
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
          type: 'text',
          label: 'Padding',
          admin: {
            description: 'CSS padding value',
          },
        },
        // Subtitle
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
              defaultValue: "Your Vehicle's Service Adventure",
            },
            {
              name: 'className',
              type: 'text',
              label: 'Subtitle CSS Classes',
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
            {
              name: 'fontWeight',
              type: 'text',
              label: 'Font Weight',
            },
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Wrapper CSS Classes',
              defaultValue: 'subtitle-wrap',
            },
            {
              name: 'animationId',
              type: 'text',
              label: 'Animation ID',
              defaultValue: '45a0a0e8-e2c2-d09e-89c5-06da62ea48e0',
            },
          ],
        },
        // Main Title
        {
          name: 'mainTitle',
          type: 'group',
          label: 'Main Title',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Title',
              defaultValue: true,
            },
            {
              name: 'text',
              type: 'text',
              label: 'Title Text',
              required: true,
              defaultValue: 'Drive Through Our Service Process',
            },
            {
              name: 'className',
              type: 'text',
              label: 'Title CSS Classes',
              defaultValue: 'main-title-h2',
            },
            {
              name: 'color',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'fontSize',
              type: 'text',
              label: 'Font Size',
            },
            {
              name: 'fontWeight',
              type: 'text',
              label: 'Font Weight',
            },
            {
              name: 'lineHeight',
              type: 'text',
              label: 'Line Height',
            },
          ],
        },
        // CTA Buttons
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
              name: 'className',
              type: 'text',
              label: 'Button CSS Classes',
              admin: {
                description: 'e.g., primary-button w-button',
              },
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
        {
          name: 'buttonWrapperClassName',
          type: 'text',
          label: 'Button Wrapper CSS Classes',
          defaultValue: 'flex-btn-group',
        },
        {
          name: 'buttonWrapperAnimationId',
          type: 'text',
          label: 'Button Wrapper Animation ID',
          defaultValue: 'd6ad84eb-8d6c-578b-8317-37528f06ab85',
        },
      ],
    },
    // Right Info Section (Service Cards)
    {
      name: 'rightInfoSection',
      type: 'group',
      label: 'Right Info Section (Service Cards)',
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
          defaultValue: 'w-node-_2c512893-809d-abf7-55c0-cf8d0c4f6e92-ab3f40e0',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Section CSS Classes',
          defaultValue: 'service-right-info',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Background Color',
        },
        {
          name: 'cardsContainerClassName',
          type: 'text',
          label: 'Cards Container CSS Classes',
          defaultValue: 'services-card',
        },
        // Service Cards Array
        {
          name: 'serviceCards',
          type: 'array',
          label: 'Service Cards',
          admin: {
            description: 'Drag to reorder service cards',
          },
          fields: [
            {
              name: 'id',
              type: 'text',
              label: 'Card HTML ID',
              required: true,
            },
            {
              name: 'number',
              type: 'text',
              label: 'Card Number',
              required: true,
            },
            {
              name: 'title',
              type: 'text',
              label: 'Card Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Card Description',
              required: true,
            },
            {
              name: 'bgClass',
              type: 'text',
              label: 'Background Class',
              admin: {
                description: 'e.g., bg-one, bg-two, bg-three',
              },
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
              admin: {
                description: 'Override background class with custom color',
              },
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Text Color',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
            {
              name: 'numberColor',
              type: 'text',
              label: 'Number Color',
            },
            {
              name: 'lineId',
              type: 'text',
              label: 'Horizontal Line ID',
            },
            {
              name: 'lineColor',
              type: 'text',
              label: 'Line Color',
            },
            {
              name: 'descId',
              type: 'text',
              label: 'Description ID',
            },
            {
              name: 'cardClassName',
              type: 'text',
              label: 'Card CSS Classes',
              defaultValue: 'about-us-card',
            },
            {
              name: 'circleBackgroundColor',
              type: 'text',
              label: 'Circle Background Color',
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
          defaultValue: [
            {
              id: 'w-node-_1b9f19e0-0985-4284-29cd-76d2f9451e54-ab3f40e0',
              number: '01',
              title: 'Book an Appointment',
              description:
                'At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.',
              bgClass: 'bg-one',
              lineId: 'w-node-_1b9f19e0-0985-4284-29cd-76d2f9451e5d-ab3f40e0',
              descId: 'w-node-_1b9f19e0-0985-4284-29cd-76d2f9451e61-ab3f40e0',
              cardClassName: 'about-us-card',
            },
            {
              id: 'w-node-d26b1600-e924-c3ef-4bae-ec769adedb62-ab3f40e0',
              number: '02',
              title: 'Choose Your Service',
              description:
                'At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.',
              bgClass: 'bg-two',
              lineId: 'w-node-d26b1600-e924-c3ef-4bae-ec769adedb6b-ab3f40e0',
              descId: 'w-node-d26b1600-e924-c3ef-4bae-ec769adedb6f-ab3f40e0',
              cardClassName: 'about-us-card',
            },
            {
              id: 'w-node-ea001642-1984-4054-ca59-3a847adba4a2-ab3f40e0',
              number: '03',
              title: 'Confirm Your Request',
              description:
                'At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.',
              bgClass: 'bg-three',
              lineId: 'w-node-ea001642-1984-4054-ca59-3a847adba4ab-ab3f40e0',
              descId: 'w-node-ea001642-1984-4054-ca59-3a847adba4af-ab3f40e0',
              cardClassName: 'about-us-card',
            },
            {
              id: 'w-node-_111618d9-231a-65f1-92a6-11831608f4cc-ab3f40e0',
              number: '04',
              title: 'Drop Off Your Vehicle',
              description:
                'At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.',
              bgClass: 'bg-four',
              lineId: 'w-node-_111618d9-231a-65f1-92a6-11831608f4d5-ab3f40e0',
              descId: 'w-node-_111618d9-231a-65f1-92a6-11831608f4d9-ab3f40e0',
              cardClassName: 'about-us-card',
            },
            {
              id: 'w-node-_622ba6a9-57f4-3713-6c54-3b006c965017-ab3f40e0',
              number: '05',
              title: 'Service and Repair',
              description:
                'At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.',
              bgClass: 'bg-five',
              lineId: 'w-node-_622ba6a9-57f4-3713-6c54-3b006c965020-ab3f40e0',
              descId: 'w-node-_622ba6a9-57f4-3713-6c54-3b006c965024-ab3f40e0',
              cardClassName: 'about-us-card',
            },
            {
              id: 'w-node-_6e3e2e3a-8e50-aee0-39a3-052c5da0e3a7-ab3f40e0',
              number: '06',
              title: 'Review and Pick Up',
              description:
                'At Carsy, we streamline the car service process to ensure a hassle-free experience. The journey begins with booking an appointment, where you select a convenient time and date.',
              bgClass: 'bg-six',
              lineId: 'w-node-_6e3e2e3a-8e50-aee0-39a3-052c5da0e3b0-ab3f40e0',
              descId: 'w-node-_6e3e2e3a-8e50-aee0-39a3-052c5da0e3b4-ab3f40e0',
              cardClassName: 'about-us-card',
            },
          ],
        },
      ],
    },
    // Card Styling Settings
    {
      name: 'cardStyling',
      type: 'group',
      label: 'Card Styling Settings',
      fields: [
        {
          name: 'cardBorderRadius',
          type: 'text',
          label: 'Card Border Radius',
          admin: {
            description: 'CSS border-radius value (e.g., 12px, 1rem)',
          },
        },
        {
          name: 'cardPadding',
          type: 'text',
          label: 'Card Padding',
          admin: {
            description: 'CSS padding value',
          },
        },
        {
          name: 'cardShadow',
          type: 'text',
          label: 'Card Box Shadow',
          admin: {
            description: 'CSS box-shadow value',
          },
        },
        {
          name: 'cardHoverShadow',
          type: 'text',
          label: 'Card Hover Box Shadow',
        },
        {
          name: 'cardTransition',
          type: 'text',
          label: 'Card Transition',
          admin: {
            description: 'CSS transition value',
          },
          defaultValue: 'all 0.3s ease',
        },
        {
          name: 'circleDiameter',
          type: 'text',
          label: 'Number Circle Diameter',
          admin: {
            description: 'Size of the number circle (e.g., 60px)',
          },
        },
        {
          name: 'circleBackgroundColor',
          type: 'text',
          label: 'Default Circle Background Color',
        },
        {
          name: 'horizontalLineHeight',
          type: 'text',
          label: 'Horizontal Line Height',
          admin: {
            description: 'Height/thickness of the line (e.g., 2px)',
          },
        },
        {
          name: 'horizontalLineColor',
          type: 'text',
          label: 'Default Horizontal Line Color',
        },
      ],
    },
    // Gradient Wrapper Settings
    {
      name: 'gradientWrapper',
      type: 'group',
      label: 'Gradient Wrapper Settings',
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
          label: 'Wrapper CSS Classes',
          defaultValue: 'gradient-wrapper grad-wrapper-2',
        },
        // Red Gradient 6
        {
          name: 'redGrad6',
          type: 'group',
          label: 'Red Gradient 6',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'CSS Classes',
              defaultValue: 'red-grad-6',
            },
            {
              name: 'animationId',
              type: 'text',
              label: 'Animation ID',
              defaultValue: '4f22b339-15ae-0816-c9bd-c9bdc1f2d9a8',
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
              admin: {
                description: 'Value between 0 and 1',
              },
            },
          ],
        },
        // Red Gradient 5
        {
          name: 'redGrad5',
          type: 'group',
          label: 'Red Gradient 5',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'CSS Classes',
              defaultValue: 'red-grad-5',
            },
            {
              name: 'animationId',
              type: 'text',
              label: 'Animation ID',
              defaultValue: '4f22b339-15ae-0816-c9bd-c9bdc1f2d9a9',
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
              admin: {
                description: 'Value between 0 and 1',
              },
            },
          ],
        },
        // Print Wrapper
        {
          name: 'printWrapper',
          type: 'group',
          label: 'Print/Decorative Image',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show',
              defaultValue: true,
            },
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Wrapper CSS Classes',
              defaultValue: 'print-wrapper-1 print-2',
            },
            {
              name: 'imageUrl',
              type: 'upload',
              relationTo: 'media',
              label: 'Decorative Image',
            },
            {
              name: 'imageUrlFallback',
              type: 'text',
              label: 'Image URL (Fallback)',
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175/66a0ff2e6a489b9fa090eed0_Group.svg',
            },
            {
              name: 'imageClassName',
              type: 'text',
              label: 'Image CSS Classes',
              defaultValue: 'print-img-1 img-2',
            },
            {
              name: 'imageAlt',
              type: 'text',
              label: 'Image Alt Text',
              defaultValue: 'Project photo',
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
            { label: 'Left Info Section', value: 'leftInfo' },
            { label: 'Right Info Section (Cards)', value: 'rightInfo' },
            { label: 'Gradient Wrapper', value: 'gradientWrapper' },
          ],
        },
      ],
      defaultValue: [
        { section: 'leftInfo' },
        { section: 'rightInfo' },
        { section: 'gradientWrapper' },
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
        },
        {
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
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
            description: 'Number of columns for cards grid (e.g., 2, 3, auto-fit)',
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
          name: 'leftInfoWidth',
          type: 'text',
          label: 'Left Info Section Width',
          admin: {
            description: 'Width percentage (e.g., 40%, 50%)',
          },
        },
        {
          name: 'rightInfoWidth',
          type: 'text',
          label: 'Right Info Section Width',
          admin: {
            description: 'Width percentage (e.g., 60%, 50%)',
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
          name: 'cardAnimationDelay',
          type: 'text',
          label: 'Card Animation Stagger Delay',
          admin: {
            description: 'Delay between each card animation (e.g., 0.1s)',
          },
          defaultValue: '0.1s',
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
          name: 'hoverScaleEffect',
          type: 'checkbox',
          label: 'Enable Hover Scale Effect on Cards',
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
          name: 'mobileGridColumns',
          type: 'text',
          label: 'Mobile Grid Columns',
          admin: {
            description: 'Number of columns on mobile',
          },
          defaultValue: '1',
        },
        {
          name: 'tabletGridColumns',
          type: 'text',
          label: 'Tablet Grid Columns',
          admin: {
            description: 'Number of columns on tablet',
          },
          defaultValue: '2',
        },
        {
          name: 'mobileStackLayout',
          type: 'checkbox',
          label: 'Stack Layout on Mobile',
          admin: {
            description: 'Stack left and right sections vertically on mobile',
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
          defaultValue: 'Service Process - How We Work',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Learn about our streamlined car service process from booking to completion. We ensure a hassle-free experience at every step.',
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
          defaultValue: 'car service, vehicle repair, service process, auto maintenance',
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
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'sectionAriaLabel',
          type: 'text',
          label: 'Section ARIA Label',
          defaultValue: 'Service process steps',
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
                { label: 'Left Info Section', value: 'leftInfo' },
                { label: 'Right Info Section', value: 'rightInfo' },
                { label: 'All Cards', value: 'allCards' },
                { label: 'Gradient Wrapper', value: 'gradientWrapper' },
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
