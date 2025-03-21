/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        SIGNING_SECRET: process.env.SIGNING_SECRET,
    },
};
export default nextConfig;
// 
