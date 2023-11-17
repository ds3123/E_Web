import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    backgroundImage : {  // 當圖片格式為 png 時，所要使用的背景圖片 ( public 資料夾中 )
      'png-pattern' : "url('/empty-bg.jpg')"
    }
  },
  plugins: [
              require( "@tailwindcss/typography" ) // 額外下載套件，for TipTap 編輯器
  ],
}
export default config
