/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'd2197f97-art-mebel.s3.timeweb.cloud',
            },
        ],
    }
};

export default nextConfig;
