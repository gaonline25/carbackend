import { CollectionConfig } from 'payload'

export const NewsletterSectionComponent: CollectionConfig = {
  slug: 'newsletter-section-component',
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
      defaultValue: 'Newsletter Section Component',
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
          name: 'sectionClass',
          type: 'text',
          label: 'Section CSS Class',
          defaultValue: 'newsetter-section',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Section Background Color',
          admin: {
            description: 'CSS color value (e.g., #ffffff, rgba(0,0,0,0.5))',
          },
        },
        {
          name: 'backgroundGradient',
          type: 'text',
          label: 'Background Gradient',
          admin: {
            description: 'CSS gradient value (optional)',
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
          name: 'ctaContainerClass',
          type: 'text',
          label: 'CTA Container Class',
          defaultValue: 'cta-container',
        },
        {
          name: 'gridClass',
          type: 'text',
          label: 'Grid CSS Class',
          defaultValue: 'cta-column-grid',
        },
        {
          name: 'leftColumnId',
          type: 'text',
          label: 'Left Column ID',
          defaultValue: 'w-node-_391444bd-5914-5014-3fb7-36849d21f728-ab3f40e0',
        },
        {
          name: 'leftColumnClass',
          type: 'text',
          label: 'Left Column CSS Class',
          defaultValue: 'grid-column-left',
        },
        {
          name: 'rightColumnId',
          type: 'text',
          label: 'Right Column ID',
          defaultValue: 'w-node-_391444bd-5914-5014-3fb7-36849d21f7b0-ab3f40e0',
        },
        {
          name: 'rightColumnClass',
          type: 'text',
          label: 'Right Column CSS Class',
          defaultValue: 'grid-col-right',
        },
        {
          name: 'columnGap',
          type: 'text',
          label: 'Column Gap',
          admin: {
            description: 'Gap between columns (e.g., 30px, 2rem)',
          },
        },
      ],
    },
    // Form Content
    {
      name: 'formContent',
      type: 'group',
      label: 'Form Content',
      fields: [
        {
          name: 'subtitleShow',
          type: 'checkbox',
          label: 'Show Subtitle',
          defaultValue: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          label: 'Subtitle Text',
          defaultValue: 'Book Your Appointment Today',
        },
        {
          name: 'subtitleClass',
          type: 'text',
          label: 'Subtitle CSS Class',
          defaultValue: 'black-subtitle',
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
          name: 'subtitleFontSize',
          type: 'text',
          label: 'Subtitle Font Size',
          admin: {
            description: 'e.g., 14px, 0.875rem',
          },
        },
        {
          name: 'mainTitle',
          type: 'text',
          label: 'Main Form Title',
          required: true,
          defaultValue: 'Upgrade Your Ride!',
        },
        {
          name: 'mainTitleClass',
          type: 'text',
          label: 'Title CSS Class',
          defaultValue: 'form-large-top-title',
        },
        {
          name: 'mainTitleColor',
          type: 'text',
          label: 'Title Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'mainTitleFontSize',
          type: 'text',
          label: 'Title Font Size',
          admin: {
            description: 'e.g., 48px, 3rem',
          },
        },
        {
          name: 'mainTitleFontWeight',
          type: 'text',
          label: 'Title Font Weight',
          admin: {
            description: 'e.g., 700, bold',
          },
        },
        {
          name: 'descriptionShow',
          type: 'checkbox',
          label: 'Show Description',
          defaultValue: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Form Description',
          defaultValue:
            "Schedule your service appointment today to ensure your vehicle receives top-notch care from our expert technicians. Don't wait – keep your car running smoothly with a quick and easy booking.",
        },
        {
          name: 'descriptionClass',
          type: 'text',
          label: 'Description CSS Class',
          defaultValue: 'form-description',
        },
        {
          name: 'descriptionColor',
          type: 'text',
          label: 'Description Text Color',
        },
        {
          name: 'descriptionFontSize',
          type: 'text',
          label: 'Description Font Size',
          admin: {
            description: 'e.g., 16px, 1rem',
          },
        },
        {
          name: 'descriptionLineHeight',
          type: 'text',
          label: 'Description Line Height',
          admin: {
            description: 'e.g., 1.6, 160%',
          },
        },
      ],
    },
    // Form Input Settings
    {
      name: 'formInputSettings',
      type: 'group',
      label: 'Form Input Settings',
      fields: [
        {
          name: 'formId',
          type: 'text',
          label: 'Form ID',
          defaultValue: 'email-form-2',
        },
        {
          name: 'formName',
          type: 'text',
          label: 'Form Name',
          defaultValue: 'email-form-2',
        },
        {
          name: 'formClass',
          type: 'text',
          label: 'Form CSS Class',
          defaultValue: 'contacts-form',
        },
        {
          name: 'inputPlaceholder',
          type: 'text',
          label: 'Input Placeholder Text',
          defaultValue: 'Phone',
        },
        {
          name: 'inputType',
          type: 'select',
          label: 'Input Type',
          options: [
            { label: 'Text', value: 'text' },
            { label: 'Email', value: 'email' },
            { label: 'Phone', value: 'tel' },
            { label: 'Number', value: 'number' },
            { label: 'URL', value: 'url' },
          ],
          defaultValue: 'tel',
        },
        {
          name: 'inputId',
          type: 'text',
          label: 'Input ID',
          defaultValue: 'email-3',
        },
        {
          name: 'inputName',
          type: 'text',
          label: 'Input Name',
          defaultValue: 'email-3',
        },
        {
          name: 'inputClass',
          type: 'text',
          label: 'Input CSS Class',
          defaultValue: 'form-hero-input w-input',
        },
        {
          name: 'inputBackgroundColor',
          type: 'text',
          label: 'Input Background Color',
        },
        {
          name: 'inputBorderColor',
          type: 'text',
          label: 'Input Border Color',
        },
        {
          name: 'inputTextColor',
          type: 'text',
          label: 'Input Text Color',
        },
        {
          name: 'inputPlaceholderColor',
          type: 'text',
          label: 'Input Placeholder Color',
        },
        {
          name: 'inputFocusBorderColor',
          type: 'text',
          label: 'Input Focus Border Color',
        },
        {
          name: 'inputPadding',
          type: 'text',
          label: 'Input Padding',
          admin: {
            description: 'e.g., 12px 16px',
          },
        },
        {
          name: 'inputFontSize',
          type: 'text',
          label: 'Input Font Size',
          admin: {
            description: 'e.g., 16px, 1rem',
          },
        },
        {
          name: 'inputBorderRadius',
          type: 'text',
          label: 'Input Border Radius',
          admin: {
            description: 'e.g., 4px, 0.25rem',
          },
        },
        {
          name: 'inputRequired',
          type: 'checkbox',
          label: 'Field Required',
          defaultValue: true,
        },
      ],
    },
    // Submit Button Settings
    {
      name: 'submitButtonSettings',
      type: 'group',
      label: 'Submit Button Settings',
      fields: [
        {
          name: 'buttonShow',
          type: 'checkbox',
          label: 'Show Button',
          defaultValue: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Text',
          required: true,
          defaultValue: "Let's Get Started!",
        },
        {
          name: 'buttonClass',
          type: 'text',
          label: 'Button CSS Class',
          defaultValue: 'primary-button-form w-button',
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
        {
          name: 'buttonHoverBackgroundColor',
          type: 'text',
          label: 'Button Hover Background Color',
        },
        {
          name: 'buttonHoverTextColor',
          type: 'text',
          label: 'Button Hover Text Color',
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
          admin: {
            description: 'e.g., 16px, 1rem',
          },
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
          name: 'buttonBorderRadius',
          type: 'text',
          label: 'Button Border Radius',
          admin: {
            description: 'e.g., 4px, 0.25rem',
          },
        },
        {
          name: 'buttonBorder',
          type: 'text',
          label: 'Button Border',
          admin: {
            description: 'e.g., 1px solid #000',
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
        {
          name: 'buttonCursor',
          type: 'select',
          label: 'Button Cursor',
          options: [
            { label: 'Pointer', value: 'pointer' },
            { label: 'Default', value: 'default' },
            { label: 'Not Allowed', value: 'not-allowed' },
          ],
          defaultValue: 'pointer',
        },
      ],
    },
    // Success Message Settings
    {
      name: 'successMessageSettings',
      type: 'group',
      label: 'Success Message Settings',
      fields: [
        {
          name: 'showSuccessMessage',
          type: 'checkbox',
          label: 'Show Success Message',
          defaultValue: true,
        },
        {
          name: 'successMessageClass',
          type: 'text',
          label: 'Success Message CSS Class',
          defaultValue: 'succes-message-transparent w-form-done',
        },
        {
          name: 'successThankYouText',
          type: 'text',
          label: 'Thank You Text',
          defaultValue: 'Thank you!',
        },
        {
          name: 'successMainText',
          type: 'text',
          label: 'Success Main Text',
          defaultValue: 'Your submission has been received!',
        },
        {
          name: 'successCircleWrapperClass',
          type: 'text',
          label: 'Circle Wrapper CSS Class',
          defaultValue: 'success-circle-wrapper',
        },
        {
          name: 'successBackgroundColor',
          type: 'text',
          label: 'Success Message Background Color',
        },
        {
          name: 'successTextColor',
          type: 'text',
          label: 'Success Text Color',
        },
        {
          name: 'successThankYouTextClass',
          type: 'text',
          label: 'Thank You Text CSS Class',
          defaultValue: 'thank-you-text',
        },
        {
          name: 'successThankYouColor',
          type: 'text',
          label: 'Thank You Text Color',
        },
        {
          name: 'successDuration',
          type: 'number',
          label: 'Success Message Duration (ms)',
          defaultValue: 3000,
          admin: {
            description: 'How long to show success message',
          },
        },
      ],
    },
    // Error Message Settings
    {
      name: 'errorMessageSettings',
      type: 'group',
      label: 'Error Message Settings',
      fields: [
        {
          name: 'showErrorMessage',
          type: 'checkbox',
          label: 'Show Error Message',
          defaultValue: true,
        },
        {
          name: 'errorMessageClass',
          type: 'text',
          label: 'Error Message CSS Class',
          defaultValue: 'error-project-message w-form-fail',
        },
        {
          name: 'errorOopsText',
          type: 'text',
          label: 'Oops Text',
          defaultValue: 'Ooooooops!',
        },
        {
          name: 'errorMainText',
          type: 'text',
          label: 'Error Main Text',
          defaultValue: 'Something went wrong while submitting the form.',
        },
        {
          name: 'errorBackgroundColor',
          type: 'text',
          label: 'Error Message Background Color',
        },
        {
          name: 'errorTextColor',
          type: 'text',
          label: 'Error Text Color',
        },
        {
          name: 'errorOopsTextClass',
          type: 'text',
          label: 'Oops Text CSS Class',
          defaultValue: 'error-span',
        },
        {
          name: 'errorOopsColor',
          type: 'text',
          label: 'Oops Text Color',
        },
      ],
    },
    // Decorative Elements
    {
      name: 'decorativeElements',
      type: 'group',
      label: 'Decorative Elements',
      fields: [
        {
          name: 'showDecoratveSquares',
          type: 'checkbox',
          label: 'Show Decorative Squares',
          defaultValue: true,
        },
        {
          name: 'squareClass',
          type: 'text',
          label: 'Square CSS Class',
          defaultValue: 'page-square-print',
        },
        {
          name: 'topLeftSquareClass',
          type: 'text',
          label: 'Top Left Square Additional Class',
          defaultValue: 'form-top-left',
        },
        {
          name: 'topRightSquareClass',
          type: 'text',
          label: 'Top Right Square Additional Class',
          defaultValue: 'form-top-right',
        },
        {
          name: 'bottomLeftSquareClass',
          type: 'text',
          label: 'Bottom Left Square Additional Class',
          defaultValue: 'form-bottom-left',
        },
        {
          name: 'bottomRightSquareClass',
          type: 'text',
          label: 'Bottom Right Square Additional Class',
          defaultValue: 'form-bottom-right',
        },
        {
          name: 'squareColor',
          type: 'text',
          label: 'Square Color',
          admin: {
            description: 'CSS color value',
          },
        },
        {
          name: 'squareSize',
          type: 'text',
          label: 'Square Size',
          admin: {
            description: 'e.g., 40px, 2.5rem',
          },
        },
        {
          name: 'showTopLine',
          type: 'checkbox',
          label: 'Show Top Line',
          defaultValue: true,
        },
        {
          name: 'topLineClass',
          type: 'text',
          label: 'Top Line CSS Class',
          defaultValue: 'top-cta-line',
        },
        {
          name: 'topLineColor',
          type: 'text',
          label: 'Top Line Color',
        },
        {
          name: 'showBottomLine',
          type: 'checkbox',
          label: 'Show Bottom Line',
          defaultValue: true,
        },
        {
          name: 'bottomLineClass',
          type: 'text',
          label: 'Bottom Line CSS Class',
          defaultValue: 'bottom-cta-line',
        },
        {
          name: 'bottomLineColor',
          type: 'text',
          label: 'Bottom Line Color',
        },
      ],
    },
    // Background Banner Settings
    {
      name: 'backgroundBannerSettings',
      type: 'group',
      label: 'Background Banner Settings',
      fields: [
        {
          name: 'showBackgroundBanner',
          type: 'checkbox',
          label: 'Show Background Banner',
          defaultValue: true,
        },
        {
          name: 'clipWrapperClass',
          type: 'text',
          label: 'Clip Wrapper CSS Class',
          defaultValue: 'cta-clip-wrapper',
        },
        {
          name: 'bannerClass',
          type: 'text',
          label: 'Banner CSS Class',
          defaultValue: 'cta-hero-banner',
        },
        {
          name: 'bannerBackgroundColor',
          type: 'text',
          label: 'Banner Background Color',
        },
        {
          name: 'bannerBackgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Banner Background Image',
        },
        {
          name: 'bannerBackgroundImageUrl',
          type: 'text',
          label: 'Banner Background Image URL (Alternative)',
          admin: {
            description: 'Direct URL if not uploading',
          },
        },
        {
          name: 'bannerBackgroundSize',
          type: 'select',
          label: 'Banner Background Size',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Stretch', value: 'stretch' },
            { label: 'Auto', value: 'auto' },
          ],
          defaultValue: 'cover',
        },
        {
          name: 'bannerBackgroundPosition',
          type: 'select',
          label: 'Banner Background Position',
          options: [
            { label: 'Center', value: 'center' },
            { label: 'Top', value: 'top' },
            { label: 'Bottom', value: 'bottom' },
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
          ],
          defaultValue: 'center',
        },
        {
          name: 'showOverlay',
          type: 'checkbox',
          label: 'Show Overlay',
          defaultValue: true,
        },
        {
          name: 'overlayClass',
          type: 'text',
          label: 'Overlay CSS Class',
          defaultValue: 'cta-overlay',
        },
        {
          name: 'overlayBackgroundColor',
          type: 'text',
          label: 'Overlay Background Color',
          admin: {
            description: 'e.g., rgba(0, 0, 0, 0.5)',
          },
        },
        {
          name: 'overlayOpacity',
          type: 'text',
          label: 'Overlay Opacity',
          admin: {
            description: 'Value between 0 and 1',
          },
          defaultValue: '0.5',
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
          name: 'sectionPadding',
          type: 'text',
          label: 'Section Padding',
          admin: {
            description: 'Padding for main section',
          },
        },
        {
          name: 'gridColumns',
          type: 'text',
          label: 'Grid Columns',
          admin: {
            description: 'e.g., 1fr 1fr, 2fr 1fr',
          },
        },
        {
          name: 'formWrapperPadding',
          type: 'text',
          label: 'Form Wrapper Padding',
          admin: {
            description: 'Padding for form container',
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
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
          admin: {
            description: 'CSS font-family value',
          },
        },
        {
          name: 'h3FontSize',
          type: 'text',
          label: 'H3 Font Size (Form Title)',
          admin: {
            description: 'e.g., 48px, 3rem',
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
          admin: {
            description: 'e.g., 700, bold',
          },
        },
        {
          name: 'h3LineHeight',
          type: 'text',
          label: 'H3 Line Height',
        },
        {
          name: 'h6FontSize',
          type: 'text',
          label: 'H6 Font Size (Subtitle)',
          admin: {
            description: 'e.g., 14px, 0.875rem',
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
            description: 'For helper text',
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
          defaultValue: '0.5s',
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
          name: 'bannerScaleValue',
          type: 'text',
          label: 'Banner Scale Value',
          admin: {
            description: 'Scale transform for banner (e.g., 1.15)',
          },
          defaultValue: '1.15',
        },
        {
          name: 'hoverAnimationEnabled',
          type: 'checkbox',
          label: 'Enable Hover Animations',
          admin: {
            description: 'Enable hover effects on buttons and inputs',
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
          name: 'stackColumnsOnMobile',
          type: 'checkbox',
          label: 'Stack Columns on Mobile',
          admin: {
            description: 'Stack columns vertically on mobile devices',
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
          name: 'hideBannerOnMobile',
          type: 'checkbox',
          label: 'Hide Background Banner on Mobile',
          defaultValue: false,
        },
        {
          name: 'hideLeftColumnOnMobile',
          type: 'checkbox',
          label: 'Hide Left Column on Mobile',
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
          name: 'ariaLabelsEnabled',
          type: 'checkbox',
          label: 'Enable ARIA Labels',
          defaultValue: true,
        },
        {
          name: 'inputAriaLabel',
          type: 'text',
          label: 'Input ARIA Label',
          admin: {
            description: 'ARIA label for form input',
          },
          defaultValue: 'Enter your contact information',
        },
        {
          name: 'buttonAriaLabel',
          type: 'text',
          label: 'Button ARIA Label',
          admin: {
            description: 'ARIA label for submit button',
          },
          defaultValue: 'Submit contact form',
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
      ],
    },
    // SEO Settings
    {
      name: 'seoSettings',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'ogTitle',
          type: 'text',
          label: 'OG Title',
          defaultValue: 'Book Your Service Appointment',
        },
        {
          name: 'ogDescription',
          type: 'textarea',
          label: 'OG Description',
          defaultValue:
            'Schedule your vehicle service appointment today. Expert technicians ready to provide top-notch car maintenance.',
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
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
                { label: 'Form Container', value: 'formContainer' },
                { label: 'Input Field', value: 'inputField' },
                { label: 'Submit Button', value: 'submitButton' },
              ],
            },
          ],
        },
        {
          name: 'lazyLoadBackgroundImage',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Background Image',
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
            description: 'Track form submissions as conversions',
          },
          defaultValue: false,
        },
        {
          name: 'conversionEventName',
          type: 'text',
          label: 'Conversion Event Name',
          admin: {
            description: 'Event name for analytics (e.g., appointment_scheduled)',
          },
          defaultValue: 'appointment_scheduled',
        },
        {
          name: 'formSubmissionWebhook',
          type: 'text',
          label: 'Form Submission Webhook URL',
          admin: {
            description:
              'Optional webhook URL to receive form submissions (if using server-side handling)',
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
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
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
