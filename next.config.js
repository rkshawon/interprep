const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  unstable_staticImage: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.watchOptions = {
      ignored: ["**/private-files/**"],
    };

    return config;
  },
};

module.exports = withNextra(nextConfig);
