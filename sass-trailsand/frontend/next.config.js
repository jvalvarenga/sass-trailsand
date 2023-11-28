/** @type {import('next').NextConfig} */

const nextSafe = require('next-safe')

const isDev = process.env.NODE_ENV !== 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    USER_KEY: process.env.SERVER,
    PASS_KEY: process.env.PASS_KEY,
    NEXT_PUBLIC_SITEMAP_URL: process.env.NEXT_PUBLIC_SITEMAP_URL,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: nextSafe({isDev}),
  //     },
  //   ]
  // },
}

module.exports = nextConfig
