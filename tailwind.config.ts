import { type Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      colors: {
        lightBlack: '#000814',
        navy: '#001D3D',
        cyan: '#003566',
        yellow: '#FFC300',
        yellowBright: '#FFD903'
      }
    },
  },
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
} satisfies Config;
