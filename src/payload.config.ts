import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { HeroPageComponent } from './collections/HeroPageComponent'
import { CarsyPageComponent } from './collections/CarsyPageComponent'
import { ServiceProcessComponent } from './collections/ServiceProcessComponent'
import { CubeGalleryComponent } from './collections/CubeGalleryComponent'
import { PricingSectionComponent } from './collections/PricingSectionComponent'
import { NewsletterSectionComponent } from './collections/NewsletterSectionComponent'
import { FooterComponent } from './collections/FooterComponent'
import { AboutHeroComponent } from './collections/AboutHeroComponent'
import { ServiceDetailsComponent } from './collections/ServicesPageComponent'
import { WhatWeOfferComponent } from './collections/WhatWeOfferComponent'
import { BlogPostComponentCollection } from './collections/BlogPostComponentCollection'
import { GalleryPageComponent } from './collections/GalleryPageComponent'
import { ContactSectionComponent } from './collections/ContactSectionComponent'
import { FormSubmissions } from './collections/FormSubmissions'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  cors: [
    'http://localhost:3000', // Allow your Next.js dev server
    'http://localhost:3001',
    'https://carbackend-delta.vercel.app',
    'https://carfrontend-tawny.vercel.app',
    // Add your production domain later, e.g.:
    // 'https://yourdomain.com',
  ],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    HeroPageComponent,
    CarsyPageComponent,
    ServiceProcessComponent,
    CubeGalleryComponent,
    PricingSectionComponent,
    NewsletterSectionComponent,
    FooterComponent,
    AboutHeroComponent,
    ServiceDetailsComponent,
    WhatWeOfferComponent,
    BlogPostComponentCollection,
    GalleryPageComponent,
    ContactSectionComponent,
    FormSubmissions,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [],
  csrf: [
    'http://localhost:3001',
    'http://localhost:3000',
    'https://carbackend-delta.vercel.app',
    'https://carfrontend-tawny.vercel.app',
    // 'https://yourdomain.com',
  ],
})
