import { CollectionConfig } from 'payload'

export const CarsyPageComponent: CollectionConfig = {
  slug: 'carsy-page-component',
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
      defaultValue: 'Carsy Page Component',
    },
    // Video Section (Why Choose Carsy)
    {
      name: 'videoSection',
      type: 'group',
      label: 'Video Section (Why Choose Carsy)',
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
          label: 'Wrapper CSS Classes',
          admin: {
            description: 'e.g., color-section-wrapper',
          },
          defaultValue: 'color-section-wrapper',
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
          name: 'sectionClassName',
          type: 'text',
          label: 'Section CSS Classes',
          admin: {
            description: 'e.g., section-video-content',
          },
          defaultValue: 'section-video-content',
        },
        {
          name: 'gridClassName',
          type: 'text',
          label: 'Grid CSS Classes',
          admin: {
            description: 'e.g., video-grid-wrapper',
          },
          defaultValue: 'video-grid-wrapper',
        },
        {
          name: 'contentGridClassName',
          type: 'text',
          label: 'Content Grid CSS Classes',
          admin: {
            description: 'e.g., content-grid',
          },
          defaultValue: 'content-grid',
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
              name: 'videoUrlMp4',
              type: 'text',
              label: 'Video URL (MP4)',
              admin: {
                description: 'URL to MP4 video file',
              },
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175%2F66a0cc145139b02261b2e4d7_5309381%20hd%201920%201080%2025fps-transcode.mp4',
            },
            {
              name: 'videoUrlWebm',
              type: 'text',
              label: 'Video URL (WebM)',
              admin: {
                description: 'URL to WebM video file',
              },
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175%2F66a0cc145139b02261b2e4d7_5309381%20hd%201920%201080%2025fps-transcode.webm',
            },
            {
              name: 'posterUrl',
              type: 'text',
              label: 'Poster Image URL',
              admin: {
                description: 'Image shown before video loads',
              },
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175%2F66a0cc145139b02261b2e4d7_5309381%20hd%201920%201080%2025fps-poster-00001.jpg',
            },
            {
              name: 'autoplay',
              type: 'checkbox',
              label: 'Autoplay Video',
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
              label: 'Mute Video',
              defaultValue: true,
            },
            {
              name: 'overlayEnabled',
              type: 'checkbox',
              label: 'Enable Dark Overlay',
              defaultValue: true,
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
                description: '0 to 1 (e.g., 0.5)',
              },
            },
            {
              name: 'videoCoverClassName',
              type: 'text',
              label: 'Video Cover CSS Classes',
              defaultValue: 'video-cover',
            },
            {
              name: 'videoWrapClassName',
              type: 'text',
              label: 'Video Wrap CSS Classes',
              defaultValue: 'video-wrap',
            },
          ],
        },
        {
          name: 'contentPanel',
          type: 'group',
          label: 'Content Panel',
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'Panel CSS Classes',
              admin: {
                description: 'e.g., history-intro',
              },
              defaultValue: 'history-intro',
            },
            {
              name: 'containerClassName',
              type: 'text',
              label: 'Container CSS Classes',
              defaultValue: 'full-width-panel',
            },
            {
              name: 'contentClassName',
              type: 'text',
              label: 'Content CSS Classes',
              defaultValue: 'tab-content-home-4',
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
              name: 'subtitle',
              type: 'text',
              label: 'Subtitle',
              required: true,
              defaultValue: 'Discover the Carsy Advantage',
            },
            {
              name: 'subtitleClassName',
              type: 'text',
              label: 'Subtitle CSS Classes',
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
              required: true,
              defaultValue: 'Why Choose Carsy?',
            },
            {
              name: 'titleClassName',
              type: 'text',
              label: 'Title CSS Classes',
              defaultValue: 'left-benefit-title',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
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
              type: 'richText',
              label: 'Description',
            },
            {
              name: 'descriptionClassName',
              type: 'text',
              label: 'Description CSS Classes',
              defaultValue: 'space-text',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
          ],
        },
        {
          name: 'benefits',
          type: 'group',
          label: 'Benefits Section',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Benefits',
              defaultValue: true,
            },
            {
              name: 'wrapClassName',
              type: 'text',
              label: 'Benefits Wrap CSS Classes',
              defaultValue: 'benefits-wrap',
            },
            {
              name: 'itemClassName',
              type: 'text',
              label: 'Benefit Item CSS Classes',
              defaultValue: 'benefit-items',
            },
            {
              name: 'benefitList',
              type: 'array',
              label: 'Benefits List',
              admin: {
                description: 'Drag to reorder benefits',
              },
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Benefit Name',
                  required: true,
                },
                {
                  name: 'nameClassName',
                  type: 'text',
                  label: 'Name CSS Classes',
                  defaultValue: 'benefit',
                },
                {
                  name: 'percentage',
                  type: 'number',
                  label: 'Percentage',
                  required: true,
                  min: 0,
                  max: 100,
                },
                {
                  name: 'progressBarClassName',
                  type: 'text',
                  label: 'Progress Bar CSS Classes',
                  admin: {
                    description: 'e.g., benefits-bar-90-white',
                  },
                },
                {
                  name: 'progressBarColor',
                  type: 'text',
                  label: 'Progress Bar Color',
                },
                {
                  name: 'progressBarBackgroundColor',
                  type: 'text',
                  label: 'Progress Bar Background Color',
                },
                {
                  name: 'showPercentageNumber',
                  type: 'checkbox',
                  label: 'Show Percentage Number',
                  defaultValue: true,
                },
                {
                  name: 'numberClassName',
                  type: 'text',
                  label: 'Number CSS Classes',
                  defaultValue: 'benefits-number',
                },
              ],
              defaultValue: [
                {
                  name: 'Expert Technicians',
                  nameClassName: 'benefit',
                  percentage: 90,
                  progressBarClassName: 'benefits-bar-90-white',
                  showPercentageNumber: true,
                  numberClassName: 'benefits-number',
                },
                {
                  name: 'Quick Turnaround',
                  nameClassName: 'benefit',
                  percentage: 85,
                  progressBarClassName: 'benefits-bar-85-white',
                  showPercentageNumber: true,
                  numberClassName: 'benefits-number',
                },
                {
                  name: 'Quality Assurance',
                  nameClassName: 'benefit',
                  percentage: 95,
                  progressBarClassName: 'benefits-bar-95-white',
                  showPercentageNumber: true,
                  numberClassName: 'benefits-number',
                },
              ],
            },
            {
              name: 'progressBarWrapperClassName',
              type: 'text',
              label: 'Progress Bar Wrapper CSS Classes',
              defaultValue: 'benefits-progress-bar-wrapper',
            },
            {
              name: 'progressBarOpacityClassName',
              type: 'text',
              label: 'Progress Bar Background CSS Classes',
              defaultValue: 'benefits-progress-50-opasity',
            },
          ],
        },
        {
          name: 'decorativeSquares',
          type: 'group',
          label: 'Decorative Square Prints',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Decorative Squares',
              defaultValue: true,
            },
            {
              name: 'squareClassName',
              type: 'text',
              label: 'Square CSS Classes',
              defaultValue: 'page-square-print',
            },
            {
              name: 'centerTopClassName',
              type: 'text',
              label: 'Center Top Additional Classes',
              defaultValue: 'center-top',
            },
            {
              name: 'squareColor',
              type: 'text',
              label: 'Square Color',
            },
          ],
        },
        {
          name: 'animations',
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
              name: 'videoCoverInitialOpacity',
              type: 'text',
              label: 'Video Cover Initial Opacity',
              defaultValue: '0',
            },
            {
              name: 'contentInitialOpacity',
              type: 'text',
              label: 'Content Initial Opacity',
              defaultValue: '0',
            },
            {
              name: 'animationDuration',
              type: 'text',
              label: 'Animation Duration',
              admin: {
                description: 'e.g., 1s, 2s',
              },
            },
            {
              name: 'animationDelay',
              type: 'text',
              label: 'Animation Delay',
              admin: {
                description: 'e.g., 0.2s, 0.5s',
              },
            },
          ],
        },
      ],
    },
    // FAQ Section
    {
      name: 'faqSection',
      type: 'group',
      label: 'FAQ Section',
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
          admin: {
            description: 'e.g., Pricing',
          },
          defaultValue: 'Pricing',
        },
        {
          name: 'className',
          type: 'text',
          label: 'Section CSS Classes',
          admin: {
            description: 'e.g., section-soft-color-bg',
          },
          defaultValue: 'section-soft-color-bg',
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
          name: 'gridWrapperClassName',
          type: 'text',
          label: 'Grid Wrapper CSS Classes',
          defaultValue: 'video-grid-wrapper',
        },
        {
          name: 'contentGridClassName',
          type: 'text',
          label: 'Content Grid CSS Classes',
          defaultValue: 'content-grid-column',
        },
        {
          name: 'rightPhoto',
          type: 'group',
          label: 'Right Photo',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Right Photo',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'Photo CSS Classes',
              defaultValue: 'right-photo',
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Image',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
            {
              name: 'overlayEnabled',
              type: 'checkbox',
              label: 'Enable Dark Overlay',
              defaultValue: true,
            },
            {
              name: 'overlayClassName',
              type: 'text',
              label: 'Overlay CSS Classes',
              defaultValue: 'overlay-dark',
            },
            {
              name: 'overlayColor',
              type: 'text',
              label: 'Overlay Color',
            },
            {
              name: 'overlayOpacity',
              type: 'text',
              label: 'Overlay Opacity',
              admin: {
                description: '0 to 1 (e.g., 0.5)',
              },
            },
            {
              name: 'initialTransform',
              type: 'text',
              label: 'Initial Transform',
              admin: {
                description: 'CSS transform value for animation',
              },
              defaultValue:
                'translate3d(0, 0, 0) scale3d(0.95, 0.95, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
            },
            {
              name: 'initialOpacity',
              type: 'text',
              label: 'Initial Opacity',
              defaultValue: '0',
            },
          ],
        },
        {
          name: 'faqContent',
          type: 'group',
          label: 'FAQ Content',
          fields: [
            {
              name: 'className',
              type: 'text',
              label: 'FAQ Intro CSS Classes',
              defaultValue: 'faq-intro',
            },
            {
              name: 'containerClassName',
              type: 'text',
              label: 'FAQ Container CSS Classes',
              defaultValue: 'faq-container',
            },
            {
              name: 'contentClassName',
              type: 'text',
              label: 'Content CSS Classes',
              defaultValue: 'tab-content-home-4',
            },
            {
              name: 'subtitle',
              type: 'text',
              label: 'Subtitle',
              required: true,
              defaultValue: 'Quick FAQs for Easy Answers',
            },
            {
              name: 'subtitleClassName',
              type: 'text',
              label: 'Subtitle CSS Classes',
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
              required: true,
              defaultValue: 'All You Need to Know',
            },
            {
              name: 'titleClassName',
              type: 'text',
              label: 'Title CSS Classes',
              defaultValue: 'left-benefit-title',
            },
            {
              name: 'titleColor',
              type: 'text',
              label: 'Title Color',
            },
            {
              name: 'titleFontSize',
              type: 'text',
              label: 'Title Font Size',
            },
            {
              name: 'description',
              type: 'richText',
              label: 'Description',
            },
            {
              name: 'descriptionClassName',
              type: 'text',
              label: 'Description CSS Classes',
              defaultValue: 'space-text',
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Color',
            },
          ],
        },
        {
          name: 'faqItems',
          type: 'array',
          label: 'FAQ Items',
          admin: {
            description: 'Drag to reorder FAQ items',
          },
          fields: [
            {
              name: 'question',
              type: 'text',
              label: 'Question',
              required: true,
            },
            {
              name: 'answer',
              type: 'richText',
              label: 'Answer',
            },
            {
              name: 'dropdownClassName',
              type: 'text',
              label: 'Dropdown CSS Classes',
              defaultValue: 'faq-dropdown-down w-dropdown',
            },
            {
              name: 'toggleClassName',
              type: 'text',
              label: 'Toggle CSS Classes',
              defaultValue: 'faq-toggle-2 w-dropdown-toggle',
            },
            {
              name: 'questionClassName',
              type: 'text',
              label: 'Question Wrapper CSS Classes',
              defaultValue: 'faq-question-2',
            },
            {
              name: 'questionTitleClassName',
              type: 'text',
              label: 'Question Title CSS Classes',
              defaultValue: 'faq-hero-title-dark',
            },
            {
              name: 'questionColor',
              type: 'text',
              label: 'Question Text Color',
            },
            {
              name: 'answerClassName',
              type: 'text',
              label: 'Answer CSS Classes',
              defaultValue: 'faq-answer-2',
            },
            {
              name: 'answerTextClassName',
              type: 'text',
              label: 'Answer Text CSS Classes',
              defaultValue: 'par-answer-faq-dark',
            },
            {
              name: 'answerColor',
              type: 'text',
              label: 'Answer Text Color',
            },
            {
              name: 'iconContainerClassName',
              type: 'text',
              label: 'Icon Container CSS Classes',
              defaultValue: 'faq-icon-con',
            },
            {
              name: 'iconClassName',
              type: 'text',
              label: 'Icon CSS Classes',
              defaultValue: 'faq-icon',
            },
            {
              name: 'plusIconClassName',
              type: 'text',
              label: 'Plus Icon CSS Classes',
              defaultValue: 'plus-dark',
            },
            {
              name: 'minusIconClassName',
              type: 'text',
              label: 'Minus Icon CSS Classes',
              defaultValue: 'minus-dark',
            },
            {
              name: 'bottomLineClassName',
              type: 'text',
              label: 'Bottom Line CSS Classes',
              defaultValue: 'faq-bottom-line',
            },
            {
              name: 'bottomLineColor',
              type: 'text',
              label: 'Bottom Line Color',
            },
            {
              name: 'dropdownListClassName',
              type: 'text',
              label: 'Dropdown List CSS Classes',
              defaultValue: 'faq-dropdown-list w-dropdown-list',
            },
          ],
          defaultValue: [
            {
              question: 'What services do you offer?',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              questionClassName: 'faq-question-2',
              questionTitleClassName: 'faq-hero-title-dark',
              answerClassName: 'faq-answer-2',
              answerTextClassName: 'par-answer-faq-dark',
              iconContainerClassName: 'faq-icon-con',
              iconClassName: 'faq-icon',
              plusIconClassName: 'plus-dark',
              minusIconClassName: 'minus-dark',
              bottomLineClassName: 'faq-bottom-line',
              dropdownListClassName: 'faq-dropdown-list w-dropdown-list',
            },
            {
              question: 'How do I schedule an appointment?',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              questionClassName: 'faq-question-2',
              questionTitleClassName: 'faq-hero-title-dark',
              answerClassName: 'faq-answer-2',
              answerTextClassName: 'par-answer-faq-dark',
              iconContainerClassName: 'faq-icon-con',
              iconClassName: 'faq-icon',
              plusIconClassName: 'plus-dark',
              minusIconClassName: 'minus-dark',
              bottomLineClassName: 'faq-bottom-line',
              dropdownListClassName: 'faq-dropdown-list w-dropdown-list',
            },
            {
              question: "How do I maintain my car's battery?",
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              questionClassName: 'faq-question-2',
              questionTitleClassName: 'faq-hero-title-dark',
              answerClassName: 'faq-answer-2',
              answerTextClassName: 'par-answer-faq-dark',
              iconContainerClassName: 'faq-icon-con',
              iconClassName: 'faq-icon',
              plusIconClassName: 'plus-dark',
              minusIconClassName: 'minus-dark',
              bottomLineClassName: 'faq-bottom-line',
              dropdownListClassName: 'faq-dropdown-list w-dropdown-list',
            },
            {
              question: 'What does the check engine light mean?',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              questionClassName: 'faq-question-2',
              questionTitleClassName: 'faq-hero-title-dark',
              answerClassName: 'faq-answer-2',
              answerTextClassName: 'par-answer-faq-dark',
              iconContainerClassName: 'faq-icon-con',
              iconClassName: 'faq-icon',
              plusIconClassName: 'plus-dark',
              minusIconClassName: 'minus-dark',
              bottomLineClassName: 'faq-bottom-line',
              dropdownListClassName: 'faq-dropdown-list w-dropdown-list',
            },
          ],
        },
        {
          name: 'faqGridClassName',
          type: 'text',
          label: 'FAQ Grid CSS Classes',
          defaultValue: 'faq-grid-item',
        },
        {
          name: 'decorativeSquares',
          type: 'group',
          label: 'Decorative Square Prints',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Decorative Squares',
              defaultValue: true,
            },
            {
              name: 'squareClassName',
              type: 'text',
              label: 'Square CSS Classes',
              defaultValue: 'page-square-print',
            },
            {
              name: 'squares',
              type: 'array',
              label: 'Square Positions',
              fields: [
                {
                  name: 'position',
                  type: 'text',
                  label: 'Position Class',
                  admin: {
                    description: 'e.g., center, center-bottom, center-left, center-right',
                  },
                },
                {
                  name: 'color',
                  type: 'text',
                  label: 'Square Color',
                },
              ],
              defaultValue: [
                { position: 'center' },
                { position: 'center-bottom' },
                { position: 'center-left' },
                { position: 'center-right' },
              ],
            },
          ],
        },
        {
          name: 'animations',
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
              name: 'contentInitialOpacity',
              type: 'text',
              label: 'Content Initial Opacity',
              defaultValue: '0',
            },
          ],
        },
      ],
    },
    // Bottom Decorative Section
    {
      name: 'bottomDecorativeSection',
      type: 'group',
      label: 'Bottom Decorative Section',
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
          label: 'Wrapper CSS Classes',
          defaultValue: 'clip-print',
        },
        {
          name: 'squareClassName',
          type: 'text',
          label: 'Square CSS Classes',
          defaultValue: 'page-square-print',
        },
        {
          name: 'squares',
          type: 'array',
          label: 'Square Positions',
          admin: {
            description: 'Drag to reorder squares',
          },
          fields: [
            {
              name: 'position',
              type: 'text',
              label: 'Position Class',
              required: true,
              admin: {
                description: 'e.g., bottom-right, bottom-left, top-right, top-left',
              },
            },
            {
              name: 'color',
              type: 'text',
              label: 'Square Color',
            },
            {
              name: 'animationId',
              type: 'text',
              label: 'Animation ID',
              admin: {
                description: 'data-w-id for animations',
              },
            },
          ],
          defaultValue: [
            {
              position: 'bottom-right',
              animationId: '3eba47a1-7b9c-ace1-1222-fb8a71ddf267',
            },
            {
              position: 'bottom-left',
            },
            {
              position: 'top-right',
            },
            {
              position: 'top-left',
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
            { label: 'Video Section (Why Choose Carsy)', value: 'videoSection' },
            { label: 'FAQ Section', value: 'faqSection' },
            { label: 'Bottom Decorative Section', value: 'bottomDecorativeSection' },
          ],
        },
      ],
      defaultValue: [
        { section: 'videoSection' },
        { section: 'faqSection' },
        { section: 'bottomDecorativeSection' },
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
            description: 'Accent brand color',
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
          name: 'backgroundColor',
          type: 'text',
          label: 'Default Background Color',
          admin: {
            description: 'Default background color for the page',
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
            description: 'e.g., 400, 700, bold',
          },
        },
        {
          name: 'h1LineHeight',
          type: 'text',
          label: 'H1 Line Height',
          admin: {
            description: 'e.g., 1.2, 120%',
          },
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
          name: 'h3LineHeight',
          type: 'text',
          label: 'H3 Line Height',
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
      ],
    },
    // Layout Settings
    {
      name: 'layoutSettings',
      type: 'group',
      label: 'Layout Settings',
      fields: [
        {
          name: 'contentWidth',
          type: 'text',
          label: 'Content Width',
          admin: {
            description: 'Max width for content sections (e.g., 1200px, 80%)',
          },
        },
        {
          name: 'gridGap',
          type: 'text',
          label: 'Grid Gap',
          admin: {
            description: 'Gap between grid items (e.g., 30px, 2rem)',
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
          label: 'Border Radius',
          admin: {
            description: 'Default border radius for elements (e.g., 8px, 0.5rem)',
          },
        },
        {
          name: 'boxShadow',
          type: 'text',
          label: 'Box Shadow',
          admin: {
            description: 'Default box shadow for cards/elements',
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
          admin: {
            description: 'Duration for hover transitions',
          },
          defaultValue: '0.3s',
        },
        {
          name: 'enableScrollAnimations',
          type: 'checkbox',
          label: 'Enable Scroll Animations',
          admin: {
            description: 'Trigger animations on scroll',
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
    // Video Settings
    {
      name: 'videoSettings',
      type: 'group',
      label: 'Video Settings',
      fields: [
        {
          name: 'videoQuality',
          type: 'select',
          label: 'Video Quality',
          options: [
            { label: 'Auto', value: 'auto' },
            { label: '720p', value: '720p' },
            { label: '1080p', value: '1080p' },
            { label: '1440p', value: '1440p' },
            { label: '4K', value: '4k' },
          ],
          defaultValue: 'auto',
        },
        {
          name: 'videoPosterQuality',
          type: 'text',
          label: 'Video Poster Quality',
          admin: {
            description: 'Compression quality for poster images (1-100)',
          },
          defaultValue: '85',
        },
        {
          name: 'videoPreload',
          type: 'select',
          label: 'Video Preload',
          options: [
            { label: 'Auto', value: 'auto' },
            { label: 'Metadata', value: 'metadata' },
            { label: 'None', value: 'none' },
          ],
          defaultValue: 'metadata',
        },
        {
          name: 'videoObjectFit',
          type: 'select',
          label: 'Video Object Fit',
          options: [
            { label: 'Cover', value: 'cover' },
            { label: 'Contain', value: 'contain' },
            { label: 'Fill', value: 'fill' },
          ],
          defaultValue: 'cover',
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
          defaultValue: 'Carsy - Automotive Care Services',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Expert automotive care services with quality assurance, quick turnaround, and professional technicians. Your trusted partner for all vehicle maintenance and repair needs.',
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
          defaultValue:
            'automotive service, car repair, vehicle maintenance, expert technicians, quality assurance',
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
          label: 'Require Alt Text for Images/Videos',
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
          name: 'reducedMotion',
          type: 'checkbox',
          label: 'Respect Prefers-Reduced-Motion',
          admin: {
            description: 'Disable animations for users who prefer reduced motion',
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
          name: 'mobileVideoEnabled',
          type: 'checkbox',
          label: 'Enable Video on Mobile',
          admin: {
            description: 'Show video background on mobile devices',
          },
          defaultValue: false,
        },
        {
          name: 'mobileFallbackImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Mobile Video Fallback Image',
          admin: {
            description: 'Image to show instead of video on mobile',
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
                { label: 'Video Section', value: 'videoSection' },
                { label: 'FAQ Section', value: 'faqSection' },
                { label: 'Bottom Decorative Section', value: 'bottomDecorativeSection' },
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
          name: 'lazyLoadVideos',
          type: 'checkbox',
          label: 'Enable Lazy Loading for Videos',
          defaultValue: false,
        },
        {
          name: 'enableCaching',
          type: 'checkbox',
          label: 'Enable Page Caching',
          defaultValue: true,
        },
        {
          name: 'preloadCriticalAssets',
          type: 'checkbox',
          label: 'Preload Critical Assets',
          admin: {
            description: 'Preload above-the-fold resources for better performance',
          },
          defaultValue: true,
        },
        {
          name: 'enableServiceWorker',
          type: 'checkbox',
          label: 'Enable Service Worker',
          admin: {
            description: 'Enable offline functionality',
          },
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
          defaultValue: '420,768,1024,1440,1920',
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
          name: 'compressionLevel',
          type: 'select',
          label: 'Compression Level',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Low', value: 'low' },
            { label: 'Medium', value: 'medium' },
            { label: 'High', value: 'high' },
          ],
          defaultValue: 'medium',
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
          name: 'googleTagManagerId',
          type: 'text',
          label: 'Google Tag Manager ID',
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
          name: 'heatmapTrackingEnabled',
          type: 'checkbox',
          label: 'Enable Heatmap Tracking',
          admin: {
            description: 'e.g., Hotjar, Crazy Egg',
          },
          defaultValue: false,
        },
        {
          name: 'chatWidgetEnabled',
          type: 'checkbox',
          label: 'Enable Chat Widget',
          defaultValue: false,
        },
        {
          name: 'customTrackingCode',
          type: 'textarea',
          label: 'Custom Tracking Code',
          admin: {
            description: 'Additional tracking scripts',
          },
        },
      ],
    },
    // Brand Settings
    {
      name: 'brandSettings',
      type: 'group',
      label: 'Brand Settings',
      fields: [
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          label: 'Brand Logo',
        },
        {
          name: 'logoAlt',
          type: 'text',
          label: 'Logo Alt Text',
          defaultValue: 'Carsy Logo',
        },
        {
          name: 'brandName',
          type: 'text',
          label: 'Brand Name',
          defaultValue: 'Carsy',
        },
        {
          name: 'brandColors',
          type: 'group',
          label: 'Brand Colors',
          fields: [
            {
              name: 'primary',
              type: 'text',
              label: 'Primary Color',
              admin: {
                description: 'Primary brand color',
              },
            },
            {
              name: 'secondary',
              type: 'text',
              label: 'Secondary Color',
            },
            {
              name: 'accent',
              type: 'text',
              label: 'Accent Color',
            },
            {
              name: 'dark',
              type: 'text',
              label: 'Dark Color',
            },
            {
              name: 'light',
              type: 'text',
              label: 'Light Color',
            },
          ],
        },
      ],
    },
    // Call-to-Action Settings
    {
      name: 'ctaSettings',
      type: 'group',
      label: 'Call-to-Action Settings',
      fields: [
        {
          name: 'enableGlobalCTA',
          type: 'checkbox',
          label: 'Enable Global CTA',
          admin: {
            description: 'Add a floating or sticky CTA button',
          },
          defaultValue: false,
        },
        {
          name: 'globalCTAText',
          type: 'text',
          label: 'Global CTA Text',
          defaultValue: 'Schedule Appointment',
        },
        {
          name: 'globalCTAUrl',
          type: 'text',
          label: 'Global CTA URL',
        },
        {
          name: 'globalCTAPosition',
          type: 'select',
          label: 'Global CTA Position',
          options: [
            { label: 'Bottom Right', value: 'bottom-right' },
            { label: 'Bottom Left', value: 'bottom-left' },
            { label: 'Top Right', value: 'top-right' },
            { label: 'Top Left', value: 'top-left' },
            { label: 'Bottom Center (Sticky)', value: 'bottom-center' },
          ],
          defaultValue: 'bottom-right',
        },
        {
          name: 'ctaBackgroundColor',
          type: 'text',
          label: 'CTA Background Color',
        },
        {
          name: 'ctaTextColor',
          type: 'text',
          label: 'CTA Text Color',
        },
        {
          name: 'ctaHoverBackgroundColor',
          type: 'text',
          label: 'CTA Hover Background Color',
        },
        {
          name: 'ctaIcon',
          type: 'text',
          label: 'CTA Icon',
          admin: {
            description: 'Icon class or name',
          },
        },
      ],
    },
    // Content Settings
    {
      name: 'contentSettings',
      type: 'group',
      label: 'Content Settings',
      fields: [
        {
          name: 'phoneNumberFormat',
          type: 'select',
          label: 'Phone Number Format',
          options: [
            { label: '(123) 456-7890', value: 'formatted' },
            { label: '123-456-7890', value: 'dashed' },
            { label: '123.456.7890', value: 'dotted' },
            { label: '1234567890', value: 'plain' },
          ],
          defaultValue: 'formatted',
        },
        {
          name: 'defaultPhoneNumber',
          type: 'text',
          label: 'Default Phone Number',
        },
        {
          name: 'businessHours',
          type: 'textarea',
          label: 'Business Hours',
          admin: {
            description: 'Display format for business hours',
          },
        },
        {
          name: 'externalLinksOpenNewTab',
          type: 'checkbox',
          label: 'Open External Links in New Tab',
          defaultValue: true,
        },
        {
          name: 'showSocialLinks',
          type: 'checkbox',
          label: 'Show Social Media Links',
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
