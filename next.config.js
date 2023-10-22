/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:'**'
            }
        ]
    },
   output:'export',
    images: { unoptimized: true } 
}

module.exports = nextConfig
