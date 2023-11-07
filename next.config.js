/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
	webpack: (config) => {
		config.module.rules.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"],
		});
		return config;
	},
	reactStrictMode: false,
	experimental: {
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "api-artgharana.craftnotion.com",
				port: "",
				pathname: '/uploads/**',
			},
			{
				protocol: "https",
				hostname: "api-artgharana.craftnotion.com",
				port: "",
				pathname: '/uploads/**',
			},
		],
	},
};
