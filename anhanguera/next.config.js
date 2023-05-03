/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns: [{
      protocol:"https",
      hostname: "github.com",
      port:"",
      pathname: "/FrancisWorld.png"
    },
  ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
