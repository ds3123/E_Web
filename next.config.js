/** @type {import('next').NextConfig} */
const nextConfig = {

    reactStrictMode : true ,
    distDir         : 'build' ,     // 自訂 build ( 預設為 .next ) 資料夾
    output          : "standalone",  // 啟用獨立功能。 此步驟會減少 Next.js 專案的大小，以確保它低於靜態 Web Apps 的大小限制

    // 授權圖片 url
    images          : {
                        domains : [ 'github.com' , 'lh3.googleusercontent.com' ]
                      }


}

module.exports = nextConfig
