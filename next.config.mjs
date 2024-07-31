/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const nextConfig = {
  output: 'export',
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'mui.com',
        port: '',
        pathname: '**',
      },
    ],
  },

  sassOptions: {
    prependData: `@import "./src/app/styles/_mixins.scss"; @import "./src/app/styles/_variables.scss";`,
  },
};

export default nextConfig;

// includePaths: ['./src/app/styles/_variables.scss'],
// includePaths: [path.join(__dirname, 'styles')],
