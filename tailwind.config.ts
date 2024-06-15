import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

const config = {
  darkMode: ['class'],
  content: [
    './src/**/*.{ts,tsx}',
    './src/shared/ui/*.{ts,tsx}',
    // './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        // '2xl': { max: '1535px'}, // изначально используйте 'min'
        xl: { min: '1440px' },
        // lg: { max: '1023px' },
        // md: { max: '767px' },
				// sm: { max: '639px' },
				// начнет работать с 1200px, например, tall:hidden скроет элемент если высота экрана > или = 1200px
        tall: { raw: '(min-height: 1200px)' },
      },
      spacing: {
        // '1': '1rem',
        // '2': '20rem',
      },
      colors: {
        border: 'hsl(var(--border))',
        // Остальные кастомные цвета
        label: 'hsl(var(--label))',
        // input: 'hsl(var(--input))',
        'input-border': 'hsl(var(--input-border))',
        ring: 'hsl(var(--ring))',
        background: 'var(--background)',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'var(--primary, #1C0F00)',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontSize: {
        // input: 'var(--input-font-size)',
        label: 'var(--label-font-size)',
      },
      lineHeight: {
        // input: 'var(--input-line-height)',
        label: 'var(--label-line-height)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
        creato: ['var(--font-creato)', ...fontFamily.sans],
        zt: ['var(--font-zt)', ...fontFamily.sans],
        libre: ['var(--font-libre)', ...fontFamily.sans],
      },
      borderColor: {
        input: 'hsl(var(--input-color-border))',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        rotate180: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(180deg)' },
        },
        rotate0: {
          from: { transform: 'rotate(180deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        rotate180: 'rotate180 0.3s ease-in-out forwards',
        rotate0: 'rotate0 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addComponents }) => {
      addComponents({
        '.text-input': {
          lineHeight: 'var(--input-line-height)',
          color: 'hsl(var(--input))',
          fontSize: 'var(--input-font-size)',
        },
        '.main-heading': {
          fontSize: '34px',
          lineHeight: '40px',
          fontWeight: '500',
        },
        '.form-block-heading': {
          fontSize: '20px',
          lineHeight: '24px',
          fontWeight: '500',
        },
        '.text-description': {
          fontSize: '16px',
          lineHeight: '20px',
          fontWeight: '300',
        },
        '.text-tab': {
          lineHeight: 'var(--tab-line-height)',
          color: 'hsl(var(--tab))',
          fontSize: 'var(--tab-font-size)',
          fontWeight: '300',
        },
        '.text-tab-secondary': {
          lineHeight: 'var(--tab-line-height)',
          color: 'hsl(var(--tab-secondary))',
          fontSize: 'var(--tab-font-size)',
          fontWeight: '300',
        },
        '.border-secondary': {
          borderColor: '#E6EEEF',
        },
      });
    }),
  ],
} satisfies Config;

export default config;
