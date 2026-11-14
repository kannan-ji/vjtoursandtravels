import type {NextConfig} from 'next';

const isStaticExport =
  process.env.STATIC_EXPORT === 'true' || process.env.GITHUB_ACTIONS === 'true';

const basePath = isStaticExport ? process.env.PAGES_BASE_PATH || '' : '';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    ...(isStaticExport ? { unoptimized: true } : {}),
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: isStaticExport ? 'export' : 'standalone',
  ...(isStaticExport ? { basePath, trailingSlash: true } : {}),
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;
