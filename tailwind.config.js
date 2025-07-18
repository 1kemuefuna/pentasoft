/** @type {import('tailwindcss').Config} */
import { themeColors } from './themeColors';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: themeColors.light.primary,
        background: themeColors.light.background,
        text: themeColors.light.text,
        surface: themeColors.light.surface,
        accent: themeColors.light.accent,
        accentVariant: themeColors.light.accentVariant,
        border: themeColors.light.border,
        card: themeColors.light.card,
        dark: {
          primary: themeColors.dark.primary,
          background: themeColors.dark.background,
          text: themeColors.dark.text,
          surface: themeColors.dark.surface,
          accent: themeColors.dark.accent,
          accentVariant: themeColors.dark.accentVariant,
          border: themeColors.dark.border,
          card: themeColors.dark.card,
        },
        button: {
          primary: themeColors.light.button.primary,
          onPrimary: themeColors.light.button.onPrimary,
          accent: themeColors.light.button.accent,
          onAccent: themeColors.light.button.onAccent,
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};