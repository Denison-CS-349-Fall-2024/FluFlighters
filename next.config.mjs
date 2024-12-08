/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Disable Next.js Image Optimization (required for static exports)
  },
  // Add any other existing configurations here
};

export default nextConfig;
