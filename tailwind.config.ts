import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          950: '#0f0c0a',  // warm black - backgrounds
          900: '#1c1917',  // warm charcoal - surfaces
          800: '#292524',  // warm gray - elevated surfaces
          700: '#3d3835', // warm brown - borders
          600: '#57534e', // muted text
          500: '#78716c', // secondary text
          400: '#a8a29e', // placeholder text
          300: '#d6d3d1', // light text
          200: '#e7e5e4', // lighter text
          100: '#faf5eb', // cream - primary text
          50:  '#fefcf8', // near white
        },
        accent: {
          DEFAULT: '#f59e0b',  // amber
          hover: '#d97706',   // golden
          muted: '#b45309',   // dark amber
          light: '#fbbf24',   // light amber
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
