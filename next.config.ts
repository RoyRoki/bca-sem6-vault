import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  // Allow reading local markdown files from content/ dir
  serverExternalPackages: [],
  // Turbopack is used in dev; this keeps prod builds standard
  experimental: {},
}

export default nextConfig
