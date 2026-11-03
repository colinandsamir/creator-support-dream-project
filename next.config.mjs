/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // The announcement's review URL. The draft link went round the team, so
      // send it to the homepage it now lives on instead of a 404. Deliberately
      // not permanent — a 308 sticks in browser caches indefinitely.
      { source: "/draftannouncement2026", destination: "/", permanent: false },
    ];
  },
};
export default nextConfig;
