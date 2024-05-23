/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'udemy-certificate.s3.amazonaws.com',
            port: '',
          },
        ],
      },
};



export default nextConfig;
