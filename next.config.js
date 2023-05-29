/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['tsx', 'ts'],
  experimental: {
    runtime: 'edge'
  }
}

module.exports = nextConfig
