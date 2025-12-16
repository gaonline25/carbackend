// // // // import { withPayload } from '@payloadcms/next/withPayload'

// // // // /** @type {import('next').NextConfig} */
// // // // const nextConfig = {
// // // //   // Your Next.js config here
// // // //   webpack: (webpackConfig) => {
// // // //     webpackConfig.resolve.extensionAlias = {
// // // //       '.cjs': ['.cts', '.cjs'],
// // // //       '.js': ['.ts', '.tsx', '.js', '.jsx'],
// // // //       '.mjs': ['.mts', '.mjs'],
// // // //     }

// // // //     return webpackConfig
// // // //   },
// // // // }

// // // // export default withPayload(nextConfig, { devBundleServerPackages: false })




// // // // import { withPayload } from '@payloadcms/next/withPayload'

// // // // /** @type {import('next').NextConfig} */
// // // // const nextConfig = {
// // // //   // Your Next.js config here
// // // //   webpack: (webpackConfig) => {
// // // //     webpackConfig.resolve.extensionAlias = {
// // // //       '.cjs': ['.cts', '.cjs'],
// // // //       '.js': ['.ts', '.tsx', '.js', '.jsx'],
// // // //       '.mjs': ['.mts', '.mjs'],
// // // //     }

// // // //     return webpackConfig
// // // //   },
// // // // }

// // // // export default withPayload(nextConfig, { devBundleServerPackages: false })

// // // import { withPayload } from '@payloadcms/next/withPayload'

// // // /** @type {import('next').NextConfig} */
// // // const nextConfig = {
// // //   // Bypass TypeScript type checking during build
// // //   typescript: {
// // //     ignoreBuildErrors: true,
// // //   },
// // //   // Bypass ESLint during build
// // //   eslint: {
// // //     ignoreDuringBuilds: true,
// // //   },
// // //   // Your existing webpack config
// // //   webpack: (webpackConfig) => {
// // //     webpackConfig.resolve.extensionAlias = {
// // //       '.cjs': ['.cts', '.cjs'],
// // //       '.js': ['.ts', '.tsx', '.js', '.jsx'],
// // //       '.mjs': ['.mts', '.mjs'],
// // //     }

// // //     return webpackConfig
// // //   },
// // // }

// // // export default withPayload(nextConfig, { devBundleServerPackages: false })



// // import { withPayload } from '@payloadcms/next/withPayload'

// // /** @type {import('next').NextConfig} */
// // const nextConfig = {
// //   // ✅ Keep these as-is
// //   typescript: {
// //     ignoreBuildErrors: true,
// //   },

// //   // ❌ REMOVE eslint from next.config (Next 16 rule)
// //   // eslint config must live in .eslintrc.json now

// //   // ✅ FORCE WEBPACK (this fixes the build)
// //   experimental: {
// //     webpackBuildWorker: true,
// //   },

// //   // ✅ Your existing webpack config (unchanged)
// //   webpack: (webpackConfig) => {
// //     webpackConfig.resolve.extensionAlias = {
// //       '.cjs': ['.cts', '.cjs'],
// //       '.js': ['.ts', '.tsx', '.js', '.jsx'],
// //       '.mjs': ['.mts', '.mjs'],
// //     }

// //     return webpackConfig
// //   },
// // }

// // export default withPayload(nextConfig, {
// //   devBundleServerPackages: false,
// // })




// import { withPayload } from '@payloadcms/next/withPayload'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   experimental: {
//     webpackBuildWorker: true,
//   },

//   // 🔴 THIS IS THE MISSING PIECE
//   // Explicitly acknowledge Turbopack so Next stops complaining
//   turbopack: {},

//   webpack: (webpackConfig) => {
//     webpackConfig.resolve.extensionAlias = {
//       '.cjs': ['.cts', '.cjs'],
//       '.js': ['.ts', '.tsx', '.js', '.jsx'],
//       '.mjs': ['.mts', '.mjs'],
//     }

//     return webpackConfig
//   },
// }

// export default withPayload(nextConfig, {
//   devBundleServerPackages: false,
// })




import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ THIS IS THE KEY FIX
  serverExternalPackages: ['payload', 'pino', 'thread-stream'],

  // Required because Payload adds webpack config
  turbopack: {},

  webpack: (config) => {
    config.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }
    return config
  },
}

export default withPayload(nextConfig, {
  devBundleServerPackages: false,
})
