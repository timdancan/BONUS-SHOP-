/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turbopack: {
            resolveAlias: {
                "@shared": "../../packages/shared/src"
            }
        }
    },
    transpilePackages: ["@shared"]
}

export default nextConfig;
