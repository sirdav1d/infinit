import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      hostname: 'images.unsplash.com',
      protocol: 'https'
    }, {
      hostname: 'sa-east-1.graphassets.com',
      protocol: 'https'
    }, {
      hostname: 'img.freepik.com',
      protocol: 'https'
    }]
  }
};

export default nextConfig;
