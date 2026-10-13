/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  transpilePackages: [],
  // Forward the Vite-style Supabase variables so the same .env works for `next build`.
  env: {
    VITE_SUPABASE_URL: process.env.VITE_SUPABASE_URL ?? "",
    VITE_SUPABASE_ANON_KEY: process.env.VITE_SUPABASE_ANON_KEY ?? "",
  },
};

export default nextConfig;
