/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            protocol: "https",
            hostname: "storage.googleapis.com",
            // hostname: "fakestoreapi.in/api",
        }
        ]
    }
};

export default nextConfig;
