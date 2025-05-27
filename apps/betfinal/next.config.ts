import type { NextConfig } from "next";
const { i18n } = require('../../next-i18next.config')

const nextConfig: NextConfig = {
    experimental: {
        turbopack: true,
    },
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        modules: {
            localIdentName: '[local]__[hash:base64:5]',
        },
    },
    i18n,
};

export default nextConfig;
