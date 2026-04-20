/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['nl', 'de'],
    defaultLocale: 'nl',
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

let userConfig = undefined
try {
  userConfig = (await import('./v0-user-next.config')).default
} catch (e) {
  // ignore if file does not exist
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(baseConfig, userConfig) {
  if (!userConfig) return

  for (const key in userConfig) {
    if (
      typeof baseConfig[key] === 'object' &&
      !Array.isArray(baseConfig[key])
    ) {
      baseConfig[key] = {
        ...baseConfig[key],
        ...userConfig[key],
      }
    } else {
      baseConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
