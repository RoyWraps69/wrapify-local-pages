
import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "wrap-blue": "#1D3557",
        "wrap-red": "#E63946",
        "wrap-light": "#F1FAEE",
        "wrap-grey": "#457B9D",
        "wrap-dark": "#2B2D42",
        "cyber-red": "#ff2a6d",
        "cyber-blue": "#05d9e8",
        "cyber-dark": "#1a1a2e",
        "cyber-purple": "#7e22ce",
        "cyber-pink": "#d946ef",
      },
      boxShadow: {
        soft: '0 4px 12px -2px rgba(0, 0, 0, 0.08)',
        neon: '0 0 10px rgba(255, 42, 109, 0.5), 0 0 20px rgba(255, 42, 109, 0.3)',
        'neon-blue': '0 0 10px rgba(5, 217, 232, 0.5), 0 0 20px rgba(5, 217, 232, 0.3)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "header-expand": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.03)" },
        },
        "light-streak": {
          "0%": { 
            transform: "translateX(-100%) rotate(45deg)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateX(200%) rotate(45deg)",
            opacity: "0.7"
          }
        },
        "float-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "header-expand": "header-expand 0.3s ease-out forwards",
        "light-streak": "light-streak 1.5s ease-in-out",
        "float-subtle": "float-subtle 3s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "ui-serif", "Georgia"],
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(45deg, #1a1a2e, #16213e)',
        'red-glow': 'radial-gradient(circle, rgba(255,42,109,0.2) 0%, rgba(0,0,0,0) 70%)',
        'blue-glow': 'radial-gradient(circle, rgba(5,217,232,0.2) 0%, rgba(0,0,0,0) 70%)'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
