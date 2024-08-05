/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        IMAGGA_API_KEY: process.env.IMAGGA_API_KEY,
        IMAGGA_API_SECRET: process.env.IMAGGA_API_SECRET,
    },
};

export default nextConfig;

// next.config.js
