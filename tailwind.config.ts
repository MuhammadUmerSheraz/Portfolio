import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        display: ["3rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.035em" }],
      },
      colors: {
        midnight: {
          DEFAULT: "#0c1222",
          soft: "#161d2e",
          muted: "#3d4a63",
        },
        void: "#070b12",
        cream: {
          DEFAULT: "#fffdf9",
          deep: "#faf6f0",
          warm: "#f5f0e8",
        },
        pearl: "#f0ebe3",
        line: "rgba(12, 18, 34, 0.08)",
        accent: {
          DEFAULT: "#c4a574",
          dark: "#9a7b4f",
          glow: "rgba(196, 165, 116, 0.35)",
        },
        sea: {
          DEFAULT: "#1e5f5f",
          light: "#2d7a7a",
          mist: "rgba(30, 95, 95, 0.12)",
        },
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(12, 18, 34, 0.08), 0 12px 48px -12px rgba(12, 18, 34, 0.12)",
        card: "0 2px 8px -2px rgba(12, 18, 34, 0.06), 0 16px 40px -16px rgba(12, 18, 34, 0.1)",
        lift: "0 8px 32px -8px rgba(12, 18, 34, 0.14), 0 24px 56px -20px rgba(12, 18, 34, 0.08)",
        glow: "0 0 0 1px rgba(196, 165, 116, 0.25), 0 20px 50px -15px rgba(196, 165, 116, 0.2)",
        "soft-dark": "0 4px 24px -4px rgba(0, 0, 0, 0.45), 0 12px 48px -12px rgba(0, 0, 0, 0.35)",
        "card-dark": "0 2px 8px -2px rgba(0, 0, 0, 0.4), 0 16px 40px -16px rgba(0, 0, 0, 0.35)",
        "lift-dark": "0 8px 32px -8px rgba(0, 0, 0, 0.5), 0 24px 56px -20px rgba(0, 0, 0, 0.3)",
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(ellipse 80% 60% at 70% -10%, rgba(196, 165, 116, 0.18), transparent 55%), radial-gradient(ellipse 50% 45% at 0% 50%, rgba(30, 95, 95, 0.1), transparent 50%)",
        "mesh-hero-dark":
          "radial-gradient(ellipse 70% 55% at 75% -5%, rgba(196, 165, 116, 0.14), transparent 50%), radial-gradient(ellipse 45% 40% at 5% 45%, rgba(45, 122, 122, 0.12), transparent 48%)",
        "mesh-footer":
          "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(30, 95, 95, 0.08), transparent 55%)",
        "mesh-footer-dark":
          "radial-gradient(ellipse 100% 80% at 50% 100%, rgba(45, 122, 122, 0.1), transparent 55%)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(255,253,249,0.4) 100%)",
        "card-shine-dark":
          "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 45%, transparent 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        drift: "drift 18s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(2%, -2%) scale(1.03)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
