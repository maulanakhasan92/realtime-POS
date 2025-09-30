import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		serverActions: {
			bodySizeLimit: "10mb",
		},
	},
	devIndicators: false,
	images: {
		domains: ["https://whzhpubvxwovmdlqlimq.supabase.co"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "whzhpubvxwovmdlqlimq.supabase.co",
				port: "",
				pathname: "/**",
			},
		],
	},
};

export default nextConfig;
