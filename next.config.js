const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Only apply basePath/assetPrefix in production (GitHub Pages)
  basePath: isProd ? '/Belovech' : '',
  assetPrefix: isProd ? '/Belovech' : '',
  trailingSlash: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
}

module.exports = nextConfig
