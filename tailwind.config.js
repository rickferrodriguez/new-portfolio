/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'kanagawa-oldWhite': '#DCD7BA',
        'kanagawa-boatYellow': '#BDAE93',
        'kanagawa-fujiYellow': '#32302F',
        'kanagawa-roninYellow': '#FF9E3B',
        'kanagawa-winterYellow': '#3C3D3C',
        'kanagawa-sumiInko': '#16161D',
        'kanagawa-sumiInko1': '#1F1F28',
        'kanagawa-winterRed': '#71322D',
        'kanagawa-autumnRed': '#E6644C',
        'kanagawa-winterGreen': '#4C4E31',
        'kanagawa-autumnGreen': '#B2B553',
        'kanagawa-gruvYellow': '#fabd2f'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      fontWeight: {
        regular: ['400']
      }
    }
  },
  plugins: []
}
