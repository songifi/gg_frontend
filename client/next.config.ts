/** @type {import('tailwindcss').Config} */
import designTokens from "@/app/styles/design-tokens"



module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: designTokens.colors.primary,
        secondary: designTokens.colors.secondary,
        background: designTokens.colors.background,
        foreground: designTokens.colors.foreground,
        border: designTokens.colors.border,
      },
      fontFamily: {
        heading: [designTokens.typography.fontFamily.heading],
        body: [designTokens.typography.fontFamily.body],
      },
      fontSize: {
        sm: designTokens.typography.fontSize.sm,
        base: designTokens.typography.fontSize.base,
        lg: designTokens.typography.fontSize.lg,
        xl: designTokens.typography.fontSize.xl,
      },
      spacing: {
        xs: designTokens.spacing.xs,
        sm: designTokens.spacing.sm,
        md: designTokens.spacing.md,
        lg: designTokens.spacing.lg,
        xl: designTokens.spacing.xl,
      },
    },
  },
  plugins: [],
};