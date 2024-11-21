/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        domains: ['d2197f97-art-mebel.s3.timeweb.cloud'], // Добавь свой домен S3
        remotePatterns: [{
            protocol: 'https',
            hostname: 'd2197f97-art-mebel.s3.timeweb.cloud',
        }
        ],
    },
};

export default nextConfig;
