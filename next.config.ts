import type { NextConfig } from 'next';

// The marketing site has no server-side features, so emit static files that
// hosts such as Netlify can serve directly.
const nextConfig: NextConfig = {
  output: 'export',
};

export default nextConfig;
