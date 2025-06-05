module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lasakeduinabbey: "var(--lasakeduinabbey)",
        lasakeduinalabaster: "var(--lasakeduinalabaster)",
        lasakeduinalto: "var(--lasakeduinalto)",
        "lasakeduinaquamarine-blue": "var(--lasakeduinaquamarine-blue)",
        lasakeduinblack: "var(--lasakeduinblack)",
        "lasakeduinblack-10": "var(--lasakeduinblack-10)",
        "lasakeduinblack-50": "var(--lasakeduinblack-50)",
        "lasakeduinblack-60": "var(--lasakeduinblack-60)",
        "lasakeduinblack-haze": "var(--lasakeduinblack-haze)",
        lasakeduinboulder: "var(--lasakeduinboulder)",
        lasakeduinbuttercup: "var(--lasakeduinbuttercup)",
        lasakeduinchambray: "var(--lasakeduinchambray)",
        "lasakeduinchateau-green": "var(--lasakeduinchateau-green)",
        lasakeduincinnabar: "var(--lasakeduincinnabar)",
        "lasakeduincod-gray": "var(--lasakeduincod-gray)",
        "lasakeduincornflower-blue": "var(--lasakeduincornflower-blue)",
        "lasakeduindeep-cerulean": "var(--lasakeduindeep-cerulean)",
        lasakeduindenim: "var(--lasakeduindenim)",
        "lasakeduindove-gray": "var(--lasakeduindove-gray)",
        "lasakeduindusty-gray": "var(--lasakeduindusty-gray)",
        lasakeduinemperor: "var(--lasakeduinemperor)",
        lasakeduingallery: "var(--lasakeduingallery)",
        "lasakeduingallery-90": "var(--lasakeduingallery-90)",
        lasakeduingray: "var(--lasakeduingray)",
        lasakeduinmatisse: "var(--lasakeduinmatisse)",
        lasakeduinmercury: "var(--lasakeduinmercury)",
        "lasakeduinmine-shaft": "var(--lasakeduinmine-shaft)",
        lasakeduinred: "var(--lasakeduinred)",
        "lasakeduinroyal-blue": "var(--lasakeduinroyal-blue)",
        lasakeduinscorpion: "var(--lasakeduinscorpion)",
        "lasakeduinsea-buckthorn": "var(--lasakeduinsea-buckthorn)",
        "lasakeduinselective-yellow": "var(--lasakeduinselective-yellow)",
        "lasakeduinship-gray": "var(--lasakeduinship-gray)",
        "lasakeduinsilver-chalice": "var(--lasakeduinsilver-chalice)",
        lasakeduinthunder: "var(--lasakeduinthunder)",
        lasakeduinthunderbird: "var(--lasakeduinthunderbird)",
        lasakeduinwestar: "var(--lasakeduinwestar)",
        lasakeduinwhite: "var(--lasakeduinwhite)",
        "lasakeduinwhite-02": "var(--lasakeduinwhite-02)",
        "lasakeduinwhite-14": "var(--lasakeduinwhite-14)",
        "lasakeduinwhite-white": "var(--lasakeduinwhite-white)",
        "lasakeduinwild-sand": "var(--lasakeduinwild-sand)",
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
      },
      fontFamily: {
        "lasakedu-in-font-awesome-5-brands-regular":
          "var(--lasakedu-in-font-awesome-5-brands-regular-font-family)",
        "lasakedu-in-font-awesome-5-free-regular":
          "var(--lasakedu-in-font-awesome-5-free-regular-font-family)",
        "lasakedu-in-inter-bold": "var(--lasakedu-in-inter-bold-font-family)",
        "lasakedu-in-inter-regular":
          "var(--lasakedu-in-inter-regular-font-family)",
        "lasakedu-in-roboto-italic-underline":
          "var(--lasakedu-in-roboto-italic-underline-font-family)",
        "lasakedu-in-roboto-medium":
          "var(--lasakedu-in-roboto-medium-font-family)",
        "lasakedu-in-roboto-regular":
          "var(--lasakedu-in-roboto-regular-font-family)",
        "lasakedu-in-roboto-regular-title":
          "var(--lasakedu-in-roboto-regular-title-font-family)",
        "lasakedu-in-roboto-regular-underline":
          "var(--lasakedu-in-roboto-regular-underline-font-family)",
        "lasakedu-in-roboto-slab-regular":
          "var(--lasakedu-in-roboto-slab-regular-font-family)",
        "lasakedu-in-semantic-button":
          "var(--lasakedu-in-semantic-button-font-family)",
        "lasakedu-in-semantic-heading-2":
          "var(--lasakedu-in-semantic-heading-2-font-family)",
        "lasakedu-in-semantic-heading-3":
          "var(--lasakedu-in-semantic-heading-3-font-family)",
        "lasakedu-in-semantic-heading-5":
          "var(--lasakedu-in-semantic-heading-5-font-family)",
        "lasakedu-in-semantic-input":
          "var(--lasakedu-in-semantic-input-font-family)",
        "lasakedu-in-semantic-item":
          "var(--lasakedu-in-semantic-item-font-family)",
        "lasakedu-in-semantic-link":
          "var(--lasakedu-in-semantic-link-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
