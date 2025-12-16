import { CollectionConfig } from 'payload'

export const ContactSectionComponent: CollectionConfig = {
  slug: 'contact-section-component',
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
      defaultValue: 'Contact Section Component',
    },
    // Contact Us Form Section
    {
      name: 'contactFormSection',
      type: 'group',
      label: 'Contact Us Form Section',
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
          defaultValue: 'contact-us-section',
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
          name: 'containerClassName',
          type: 'text',
          label: 'Container CSS Classes',
          defaultValue: 'contact-container',
        },
        {
          name: 'gridClassName',
          type: 'text',
          label: 'Grid CSS Classes',
          defaultValue: 'contact-us-column-grid',
        },
        // Left Column
        {
          name: 'leftColumn',
          type: 'group',
          label: 'Left Column',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Left Column',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'CSS Classes',
              defaultValue: 'grid-column-left',
            },
            {
              name: 'nodeId',
              type: 'text',
              label: 'Node ID',
              defaultValue: 'w-node-_78c3fced-68de-f04d-8282-61f416ab32d0-fbbea1d4',
            },
            {
              name: 'backgroundImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Background Image',
            },
            {
              name: 'backgroundImageAlt',
              type: 'text',
              label: 'Background Image Alt Text',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Background Color',
            },
          ],
        },
        // Right Column
        {
          name: 'rightColumn',
          type: 'group',
          label: 'Right Column (Form Area)',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Right Column',
              defaultValue: true,
            },
            {
              name: 'className',
              type: 'text',
              label: 'CSS Classes',
              defaultValue: 'grid-col-right',
            },
            {
              name: 'nodeId',
              type: 'text',
              label: 'Node ID',
              defaultValue: 'w-node-_78c3fced-68de-f04d-8282-61f416ab32d1-fbbea1d4',
            },
            {
              name: 'formContainerClassName',
              type: 'text',
              label: 'Form Container CSS Classes',
              defaultValue: 'form-contacts-right',
            },
            {
              name: 'subscribeFormClassName',
              type: 'text',
              label: 'Subscribe Form CSS Classes',
              defaultValue: 'subscribe-form-2',
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
              name: 'subtitleText',
              type: 'text',
              label: 'Subtitle Text',
              required: true,
              defaultValue: 'Contact Our Friendly Support Team Now!',
            },
            {
              name: 'subtitleColor',
              type: 'text',
              label: 'Subtitle Color',
            },
            {
              name: 'subtitleClassName',
              type: 'text',
              label: 'Subtitle CSS Classes',
              defaultValue: 'black-subtitle',
            },
            {
              name: 'subtitleWrapperClassName',
              type: 'text',
              label: 'Subtitle Wrapper CSS Classes',
              defaultValue: 'subtitle-wrap',
            },
            {
              name: 'titleText',
              type: 'text',
              label: 'Form Title',
              required: true,
              defaultValue: 'Contact Us!',
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
              defaultValue: 'contact-us-top-title',
            },
            {
              name: 'descriptionText',
              type: 'textarea',
              label: 'Form Description',
              required: true,
              defaultValue:
                "Schedule your service appointment today to ensure your vehicle receives top-notch care from our expert technicians. Don't wait – keep your car running smoothly with a quick and easy booking.",
            },
            {
              name: 'descriptionColor',
              type: 'text',
              label: 'Description Text Color',
            },
            {
              name: 'descriptionClassName',
              type: 'text',
              label: 'Description CSS Classes',
              defaultValue: 'form-description',
            },
          ],
        },
        // Form Configuration
        {
          name: 'formConfiguration',
          type: 'group',
          label: 'Form Configuration',
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
              name: 'formMethod',
              type: 'select',
              label: 'Form Method',
              options: [
                { label: 'GET', value: 'get' },
                { label: 'POST', value: 'post' },
              ],
              defaultValue: 'get',
            },
            {
              name: 'formClassName',
              type: 'text',
              label: 'Form CSS Classes',
              defaultValue: 'contacts-form',
            },
            {
              name: 'successMessage',
              type: 'text',
              label: 'Success Message Title',
              defaultValue: 'Thank you!',
            },
            {
              name: 'successMessageBody',
              type: 'text',
              label: 'Success Message Body',
              defaultValue: 'Your submission has been received!',
            },
            {
              name: 'errorMessage',
              type: 'text',
              label: 'Error Message Title',
              defaultValue: 'Ooooooops!',
            },
            {
              name: 'errorMessageBody',
              type: 'text',
              label: 'Error Message Body',
              defaultValue: 'Something went wrong while submitting the form.',
            },
          ],
        },
        // Form Fields
        {
          name: 'formFields',
          type: 'array',
          label: 'Form Fields',
          admin: {
            description: 'Drag to reorder form fields',
          },
          fields: [
            {
              name: 'fieldName',
              type: 'text',
              label: 'Field Name',
              required: true,
            },
            {
              name: 'fieldId',
              type: 'text',
              label: 'Field ID',
              required: true,
            },
            {
              name: 'fieldType',
              type: 'select',
              label: 'Field Type',
              required: true,
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'tel' },
                { label: 'Textarea', value: 'textarea' },
                { label: 'Select', value: 'select' },
                { label: 'Checkbox', value: 'checkbox' },
              ],
            },
            {
              name: 'placeholder',
              type: 'text',
              label: 'Placeholder Text',
            },
            {
              name: 'dataName',
              type: 'text',
              label: 'Data Name Attribute',
            },
            {
              name: 'required',
              type: 'checkbox',
              label: 'Required Field',
              defaultValue: true,
            },
            {
              name: 'maxLength',
              type: 'number',
              label: 'Max Length',
              defaultValue: 256,
            },
            {
              name: 'className',
              type: 'text',
              label: 'CSS Classes',
            },
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Wrapper CSS Classes',
            },
            {
              name: 'rowPosition',
              type: 'select',
              label: 'Row Position',
              options: [
                { label: 'Grid Row (2 columns)', value: 'grid' },
                { label: 'Full Width', value: 'full' },
              ],
              admin: {
                description: 'Whether field spans 2 columns or full width',
              },
            },
          ],
          defaultValue: [
            {
              fieldName: 'name',
              fieldId: 'email-3',
              fieldType: 'text',
              placeholder: 'name',
              dataName: 'Email 3',
              required: true,
              maxLength: 256,
              className: 'form-input-no-space w-input',
              wrapperClassName: 'form-input-wrapper',
              rowPosition: 'grid',
            },
            {
              fieldName: 'email',
              fieldId: 'email-3',
              fieldType: 'email',
              placeholder: 'email',
              dataName: 'Email 3',
              required: true,
              maxLength: 256,
              className: 'form-input-no-space w-input',
              wrapperClassName: 'form-input-wrapper',
              rowPosition: 'grid',
            },
            {
              fieldName: 'phone',
              fieldId: 'email-3',
              fieldType: 'tel',
              placeholder: 'Phone',
              dataName: 'Email 3',
              required: true,
              maxLength: 256,
              className: 'form-input w-input',
              wrapperClassName: 'contact-form-inputs',
              rowPosition: 'full',
            },
          ],
        },
        // Submit Button
        {
          name: 'submitButton',
          type: 'group',
          label: 'Submit Button',
          fields: [
            {
              name: 'text',
              type: 'text',
              label: 'Button Text',
              required: true,
              defaultValue: "Let's Get Started!",
            },
            {
              name: 'className',
              type: 'text',
              label: 'Button CSS Classes',
              defaultValue: 'primary-button-form w-button',
            },
            {
              name: 'waitText',
              type: 'text',
              label: 'Loading Text',
              defaultValue: 'Please Wait',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Button Background Color',
            },
            {
              name: 'textColor',
              type: 'text',
              label: 'Button Text Color',
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Hover Background Color',
            },
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Wrapper CSS Classes',
              defaultValue: 'form-hero-btn',
            },
          ],
        },
        // Decorative Elements
        {
          name: 'decorativeSquares',
          type: 'group',
          label: 'Decorative Squares',
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
              name: 'topLeftClassName',
              type: 'text',
              label: 'Top Left Square Classes',
              defaultValue: 'page-square-print form-top-left',
            },
            {
              name: 'topRightClassName',
              type: 'text',
              label: 'Top Right Square Classes',
              defaultValue: 'page-square-print form-top-right',
            },
            {
              name: 'bottomLeftClassName',
              type: 'text',
              label: 'Bottom Left Square Classes',
              defaultValue: 'page-square-print form-bottom-left',
            },
            {
              name: 'bottomRightClassName',
              type: 'text',
              label: 'Bottom Right Square Classes',
              defaultValue: 'page-square-print form-bottom-right',
            },
            {
              name: 'squareSize',
              type: 'text',
              label: 'Square Size',
              admin: {
                description: 'Size of decorative squares (e.g., 100px, 6rem)',
              },
            },
            {
              name: 'squareColor',
              type: 'text',
              label: 'Square Color',
            },
            {
              name: 'squareOpacity',
              type: 'text',
              label: 'Square Opacity',
              admin: {
                description: 'Value between 0 and 1',
              },
            },
          ],
        },
        // Divider Lines
        {
          name: 'dividerLines',
          type: 'group',
          label: 'Divider Lines',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Divider Lines',
              defaultValue: true,
            },
            {
              name: 'topLineClassName',
              type: 'text',
              label: 'Top Line CSS Classes',
              defaultValue: 'top-cta-line contact-us',
            },
            {
              name: 'bottomLineClassName',
              type: 'text',
              label: 'Bottom Line CSS Classes',
              defaultValue: 'bottom-cta-line contact-us',
            },
            {
              name: 'lineColor',
              type: 'text',
              label: 'Line Color',
            },
            {
              name: 'lineHeight',
              type: 'text',
              label: 'Line Height',
              admin: {
                description: 'e.g., 2px, 1px',
              },
            },
          ],
        },
        // Video Background
        {
          name: 'videoBackground',
          type: 'group',
          label: 'Video Background',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Video Background',
              defaultValue: true,
            },
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Wrapper CSS Classes',
              defaultValue: 'contact-video-wrapper',
            },
            {
              name: 'videoClassName',
              type: 'text',
              label: 'Video CSS Classes',
              defaultValue: 'cta-hero-video-banner w-background-video w-background-video-atom',
            },
            {
              name: 'posterUrl',
              type: 'text',
              label: 'Poster Image URL',
              admin: {
                description: 'URL to poster image displayed before video loads',
              },
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175%2F66a3c55c5850950cb4c365dc_4228659%20hd%201920%201080%2025fps-poster-00001.jpg',
            },
            {
              name: 'posterUpload',
              type: 'upload',
              relationTo: 'media',
              label: 'Poster Image Upload',
            },
            {
              name: 'videoMp4Url',
              type: 'text',
              label: 'MP4 Video URL',
              admin: {
                description: 'URL to MP4 video file',
              },
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175%2F66a3c55c5850950cb4c365dc_4228659%20hd%201920%201080%2025fps-transcode.mp4',
            },
            {
              name: 'videoWebmUrl',
              type: 'text',
              label: 'WebM Video URL',
              admin: {
                description: 'URL to WebM video file',
              },
              defaultValue:
                'https://cdn.prod.website-files.com/669e1212d181ce4bfbbea175%2F66a3c55c5850950cb4c365dc_4228659%20hd%201920%201080%2025fps-transcode.webm',
            },
            {
              name: 'videoUploadMp4',
              type: 'upload',
              relationTo: 'media',
              label: 'MP4 Video Upload',
            },
            {
              name: 'videoUploadWebm',
              type: 'upload',
              relationTo: 'media',
              label: 'WebM Video Upload',
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
              label: 'Loop',
              defaultValue: true,
            },
            {
              name: 'muted',
              type: 'checkbox',
              label: 'Muted',
              defaultValue: true,
            },
            {
              name: 'playsInline',
              type: 'checkbox',
              label: 'Plays Inline',
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
            {
              name: 'overlayClassName',
              type: 'text',
              label: 'Overlay CSS Classes',
              defaultValue: 'cta-overlay',
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
                description: 'Value between 0 and 1',
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
          label: 'Show FAQ Section',
          defaultValue: true,
        },
        {
          name: 'sectionClassName',
          type: 'text',
          label: 'Section CSS Classes',
          defaultValue: 'section top-smaller-space',
        },
        {
          name: 'wrapperClassName',
          type: 'text',
          label: 'Page Wrapper CSS Classes',
          defaultValue: 'relative-page-wrapper',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Section Background Color',
        },
        // FAQ Header
        {
          name: 'faqHeader',
          type: 'group',
          label: 'FAQ Header',
          fields: [
            {
              name: 'subtitleText',
              type: 'text',
              label: 'Subtitle',
              required: true,
              defaultValue: 'Find Answers to Your Most Frequently Asked Questions',
            },
            {
              name: 'subtitleColor',
              type: 'text',
              label: 'Subtitle Color',
            },
            {
              name: 'subtitleClassName',
              type: 'text',
              label: 'Subtitle CSS Classes',
              defaultValue: 'black-subtitle',
            },
            {
              name: 'titleText',
              type: 'text',
              label: 'Title',
              required: true,
              defaultValue: 'Have Questions About Our Services? FAQ for Answers',
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
              defaultValue: 'shop-title',
            },
            {
              name: 'ctaButtonText',
              type: 'text',
              label: 'CTA Button Text',
              defaultValue: 'Carsy experts',
            },
            {
              name: 'ctaButtonUrl',
              type: 'text',
              label: 'CTA Button URL',
              defaultValue: '/our-team',
            },
            {
              name: 'ctaButtonClassName',
              type: 'text',
              label: 'CTA Button CSS Classes',
              defaultValue: 'primary-button w-button',
            },
            {
              name: 'ctaButtonColor',
              type: 'text',
              label: 'CTA Button Color',
            },
            {
              name: 'ctaButtonHoverColor',
              type: 'text',
              label: 'CTA Button Hover Color',
            },
          ],
        },
        // FAQ Items
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
              type: 'textarea',
              label: 'Answer',
              required: true,
            },
            {
              name: 'questionClassName',
              type: 'text',
              label: 'Question CSS Classes',
              defaultValue: 'faq-hero-title-dark',
            },
            {
              name: 'answerClassName',
              type: 'text',
              label: 'Answer CSS Classes',
              defaultValue: 'par-answer-faq-dark',
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
              name: 'isExpanded',
              type: 'checkbox',
              label: 'Expanded by Default',
              defaultValue: false,
            },
          ],
          defaultValue: [
            {
              question: 'What services do you offer?',
              answer:
                'At Carsy, we provide a comprehensive range of automotive services to keep your vehicle in top condition. Our offerings include brake repair, engine repair, tire repair, cooling system service, battery repair, steering repair, transmission service, oil changes, exhaust system repair, wheel alignment, air conditioning repair, electrical system repair, radiator service, timing belt replacement, windshield repair, differential repair, clutch repair, and emissions testing and repair. Our expert technicians use state-of-the-art technology and follow best industry practices to ensure your vehicle receives the best care possible.',
              questionClassName: 'faq-hero-title-dark',
              answerClassName: 'par-answer-faq-dark',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              isExpanded: false,
            },
            {
              question: 'How do I schedule an appointment?',
              answer:
                'Scheduling an appointment with Carsy is easy and convenient. You can book an appointment online through our website by selecting your preferred date and time. Alternatively, you can call our customer service team, who will assist you in finding a suitable slot. We recommend booking in advance to ensure availability, especially during peak times. Once your appointment is confirmed, our team will be ready to provide the high-quality service you expect from Carsy.',
              questionClassName: 'faq-hero-title-dark',
              answerClassName: 'par-answer-faq-dark',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              isExpanded: false,
            },
            {
              question: "How do I maintain my car's battery?",
              answer:
                "Maintaining your car's battery involves regular inspections and proper care. Ensure the battery terminals are clean and free of corrosion, and check the battery's charge level periodically. Avoid leaving your lights or electronic devices on when the engine is off, as this can drain the battery. During extreme weather conditions, such as very hot or cold temperatures, the battery may require additional attention. At Carsy, we offer battery testing and maintenance services to keep your battery in optimal condition and prevent unexpected failures.",
              questionClassName: 'faq-hero-title-dark',
              answerClassName: 'par-answer-faq-dark',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              isExpanded: false,
            },
            {
              question: 'What does the check engine light mean?',
              answer:
                'The check engine light can indicate various issues, ranging from minor problems like a loose gas cap to more serious concerns such as a malfunctioning engine component. When the light comes on, it is essential to have your vehicle diagnosed by a professional technician. At Carsy, we use advanced diagnostic tools to read the error codes and identify the underlying issue. Our team will then provide a detailed explanation and recommend the necessary repairs to ensure your vehicle operates efficiently and safely.',
              questionClassName: 'faq-hero-title-dark',
              answerClassName: 'par-answer-faq-dark',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              isExpanded: false,
            },
            {
              question: 'Do you offer fleet services?',
              answer:
                "Yes, we provide specialized fleet services for businesses. Our fleet maintenance and repair services ensure that your company's vehicles are always in top condition, minimizing downtime and maximizing efficiency. We offer tailored service packages, priority scheduling, and detailed reporting to help manage your fleet effectively.",
              questionClassName: 'faq-hero-title-dark',
              answerClassName: 'par-answer-faq-dark',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              isExpanded: false,
            },
            {
              question: 'Can you help with car customization?',
              answer:
                "Yes, we offer car customization services. Whether you want to upgrade your vehicle's performance, enhance its appearance, or add new features, our team can assist with a variety of customization options. From installing aftermarket parts to custom paint jobs and interior modifications, we tailor our services to meet your specific desires.",
              questionClassName: 'faq-hero-title-dark',
              answerClassName: 'par-answer-faq-dark',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              isExpanded: false,
            },
            {
              question: 'How often should I service my car?',
              answer:
                "The frequency of service depends on your vehicle's make, model, and driving conditions. Generally, routine maintenance such as oil changes, tire rotations, and brake inspections should be done every 3,000 to 5,000 miles. More extensive services like transmission checks, coolant flushes, and timing belt replacements follow the manufacturer's recommended schedule. Our team can help you develop a personalized maintenance plan based on your vehicle's needs.",
              questionClassName: 'faq-hero-title-dark',
              answerClassName: 'par-answer-faq-dark',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              isExpanded: false,
            },
            {
              question: 'What makes your service unique?',
              answer:
                "Our service is unique because we prioritize customer satisfaction through personalized care, advanced diagnostic tools, and a commitment to quality. We provide detailed inspections and transparent reports, allowing you to understand your vehicle's condition clearly. Our comfortable waiting area, free Wi-Fi, and complimentary refreshments make your visit pleasant while our efficient service ensures minimal wait times.",
              questionClassName: 'faq-hero-title-dark',
              answerClassName: 'par-answer-faq-dark',
              dropdownClassName: 'faq-dropdown-down w-dropdown',
              toggleClassName: 'faq-toggle-2 w-dropdown-toggle',
              isExpanded: false,
            },
          ],
        },
        // FAQ Grid Layout
        {
          name: 'faqGridLayout',
          type: 'group',
          label: 'FAQ Grid Layout',
          fields: [
            {
              name: 'containerClassName',
              type: 'text',
              label: 'Container CSS Classes',
              defaultValue: 'base-container',
            },
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Grid Wrapper CSS Classes',
              defaultValue: 'grid-faq-wrapper',
            },
            {
              name: 'itemClassName',
              type: 'text',
              label: 'Grid Item CSS Classes',
              defaultValue: 'faq-grid-item',
            },
            {
              name: 'gridColumns',
              type: 'text',
              label: 'Grid Columns (Desktop)',
              admin: {
                description: 'Number of columns for FAQ items',
              },
              defaultValue: '2',
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
              name: 'gridGap',
              type: 'text',
              label: 'Grid Gap',
              admin: {
                description: 'Space between items (e.g., 20px, 1.5rem)',
              },
            },
          ],
        },
        // FAQ Styling
        {
          name: 'faqStyling',
          type: 'group',
          label: 'FAQ Styling',
          fields: [
            {
              name: 'questionColor',
              type: 'text',
              label: 'Question Text Color',
            },
            {
              name: 'answerColor',
              type: 'text',
              label: 'Answer Text Color',
            },
            {
              name: 'borderColor',
              type: 'text',
              label: 'Border Color',
            },
            {
              name: 'borderWidth',
              type: 'text',
              label: 'Border Width',
              admin: {
                description: 'e.g., 1px, 2px',
              },
            },
            {
              name: 'hoverBackgroundColor',
              type: 'text',
              label: 'Hover Background Color',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              label: 'Item Background Color',
            },
            {
              name: 'iconColor',
              type: 'text',
              label: 'Icon Color (Plus/Minus)',
            },
            {
              name: 'iconHoverColor',
              type: 'text',
              label: 'Icon Hover Color',
            },
          ],
        },
        // Gradient Decoration
        {
          name: 'gradientDecoration',
          type: 'group',
          label: 'Gradient Decoration',
          fields: [
            {
              name: 'show',
              type: 'checkbox',
              label: 'Show Gradient',
              defaultValue: true,
            },
            {
              name: 'wrapperClassName',
              type: 'text',
              label: 'Wrapper CSS Classes',
              defaultValue: 'gradient-wrapper grad-wrapper-3',
            },
            {
              name: 'gradient1ClassName',
              type: 'text',
              label: 'Gradient 1 CSS Classes',
              defaultValue: 'red-grad-9',
            },
            {
              name: 'gradient2ClassName',
              type: 'text',
              label: 'Gradient 2 CSS Classes',
              defaultValue: 'red-grad-7',
            },
            {
              name: 'gradient1Color',
              type: 'text',
              label: 'Gradient 1 Color',
            },
            {
              name: 'gradient2Color',
              type: 'text',
              label: 'Gradient 2 Color',
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
            { label: 'Contact Form Section', value: 'contactForm' },
            { label: 'FAQ Section', value: 'faq' },
          ],
        },
      ],
      defaultValue: [{ section: 'contactForm' }, { section: 'faq' }],
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
            description: 'CSS max-width value',
          },
        },
        {
          name: 'containerPadding',
          type: 'text',
          label: 'Container Padding',
          admin: {
            description: 'CSS padding value',
          },
        },
        {
          name: 'sectionSpacing',
          type: 'text',
          label: 'Section Spacing',
          admin: {
            description: 'Spacing between sections',
          },
        },
        {
          name: 'fontFamily',
          type: 'text',
          label: 'Font Family',
        },
        {
          name: 'primaryColor',
          type: 'text',
          label: 'Primary Color',
        },
        {
          name: 'secondaryColor',
          type: 'text',
          label: 'Secondary Color',
        },
        {
          name: 'textColor',
          type: 'text',
          label: 'Default Text Color',
        },
        {
          name: 'backgroundColor',
          type: 'text',
          label: 'Page Background Color',
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
          defaultValue: '1.6',
        },
        {
          name: 'paragraphSpacing',
          type: 'text',
          label: 'Paragraph Spacing',
        },
      ],
    },
    // Form Styling
    {
      name: 'formStyling',
      type: 'group',
      label: 'Form Styling',
      fields: [
        {
          name: 'inputBackgroundColor',
          type: 'text',
          label: 'Input Background Color',
        },
        {
          name: 'inputTextColor',
          type: 'text',
          label: 'Input Text Color',
        },
        {
          name: 'inputBorderColor',
          type: 'text',
          label: 'Input Border Color',
        },
        {
          name: 'inputBorderWidth',
          type: 'text',
          label: 'Input Border Width',
          admin: {
            description: 'e.g., 1px, 2px',
          },
        },
        {
          name: 'inputBorderRadius',
          type: 'text',
          label: 'Input Border Radius',
        },
        {
          name: 'inputFocusBorderColor',
          type: 'text',
          label: 'Input Focus Border Color',
        },
        {
          name: 'inputPlaceholderColor',
          type: 'text',
          label: 'Input Placeholder Color',
        },
        {
          name: 'inputPadding',
          type: 'text',
          label: 'Input Padding',
        },
        {
          name: 'textareaHeight',
          type: 'text',
          label: 'Textarea Height',
        },
        {
          name: 'fieldSpacing',
          type: 'text',
          label: 'Field Spacing',
          admin: {
            description: 'Space between form fields',
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
          defaultValue: '0.8s',
        },
        {
          name: 'faqToggleDuration',
          type: 'text',
          label: 'FAQ Toggle Duration',
          admin: {
            description: 'Duration for FAQ expand/collapse animation',
          },
          defaultValue: '0.3s',
        },
        {
          name: 'formInputTransition',
          type: 'text',
          label: 'Form Input Transition',
          admin: {
            description: 'Transition for input focus effects',
          },
          defaultValue: '0.2s',
        },
        {
          name: 'hoverScaleAmount',
          type: 'text',
          label: 'Hover Scale Amount',
          defaultValue: '1.02',
        },
        {
          name: 'enableScrollAnimations',
          type: 'checkbox',
          label: 'Enable Scroll Animations',
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
          defaultValue: '768px',
        },
        {
          name: 'tabletBreakpoint',
          type: 'text',
          label: 'Tablet Breakpoint',
          defaultValue: '1024px',
        },
        {
          name: 'desktopBreakpoint',
          type: 'text',
          label: 'Desktop Breakpoint',
          defaultValue: '1440px',
        },
        {
          name: 'mobileFormColumns',
          type: 'text',
          label: 'Mobile Form Grid Columns',
          admin: {
            description: 'Number of columns for form fields on mobile',
          },
          defaultValue: '1',
        },
        {
          name: 'mobileVideoHeight',
          type: 'text',
          label: 'Mobile Video Height',
          admin: {
            description: 'Video height on mobile devices',
          },
        },
        {
          name: 'mobileFontSizeAdjustment',
          type: 'text',
          label: 'Mobile Font Size Adjustment',
          admin: {
            description: 'Percentage adjustment for mobile fonts',
          },
          defaultValue: '90%',
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
          name: 'lazyLoadVideos',
          type: 'checkbox',
          label: 'Lazy Load Videos',
          defaultValue: true,
        },
        {
          name: 'videoQuality',
          type: 'select',
          label: 'Video Quality',
          options: [
            { label: 'Low (480p)', value: '480p' },
            { label: 'Medium (720p)', value: '720p' },
            { label: 'High (1080p)', value: '1080p' },
            { label: 'Ultra (2K+)', value: '2k' },
          ],
          defaultValue: '1080p',
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
          label: 'Cache Max Age (seconds)',
          defaultValue: '3600',
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
          defaultValue: 'Contact Us - Carsy Automotive Services',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
          defaultValue:
            'Get in touch with our friendly support team. Schedule your service appointment and find answers to frequently asked questions.',
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
        },
        {
          name: 'facebookPixelId',
          type: 'text',
          label: 'Facebook Pixel ID',
        },
        {
          name: 'formSubmissionWebhook',
          type: 'text',
          label: 'Form Submission Webhook URL',
          admin: {
            description: 'Webhook URL to receive form submissions',
          },
        },
        {
          name: 'enableFormValidation',
          type: 'checkbox',
          label: 'Enable Form Validation',
          defaultValue: true,
        },
        {
          name: 'formValidationType',
          type: 'select',
          label: 'Validation Type',
          options: [
            { label: 'Client-side Only', value: 'client' },
            { label: 'Server-side Only', value: 'server' },
            { label: 'Both Client and Server', value: 'both' },
          ],
          defaultValue: 'both',
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
            description: 'Add custom JavaScript code',
          },
        },
        {
          name: 'dataAttributes',
          type: 'array',
          label: 'Custom Data Attributes',
          fields: [
            {
              name: 'attribute',
              type: 'text',
              label: 'Attribute Name',
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
                { label: 'Contact Form', value: 'contactForm' },
                { label: 'FAQ Section', value: 'faq' },
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
