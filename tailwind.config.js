const themeStyle = require("./config/style.json");
const primaryFont = themeStyle.font.fontFamily.primary.replace(/\+/g, " ");
const secondaryFont = themeStyle.font.fontFamily.secondary.replace(/\+/g, " ");
const base = Number(themeStyle.font.fontSize.base.replace("px", ""));
const font_scale = themeStyle.font.fontSize.font_scale;
const h6 = base;
const h5 = h6 * font_scale;
const h4 = h5 * font_scale;
const h3 = h4 * font_scale;
const h2 = h3 * font_scale;
const h1 = h2 * font_scale;
const h1_sm = h1 * 0.625;
const h2_sm = h2 * 0.625;
const h3_sm = h3 * 0.625;
const large = base + base * 0.125;
const small = base - base * 0.125;
module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  variants: {
    extend: {
      variantOrder: [
        "first",
        "last",
        "odd",
        "even",
        "visited",
        "checked",
        "group-hover",
        "group-focus",
        "focus-within",
        "hover",
        "focus",
        "focus-visible",
        "active",
        "disabled",
      ],
      opacity: ["disabled"],
      display: ["group-hover"],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
  theme: {
    extend: {
      fontSize: {
        base: themeStyle.font.fontSize.base,
        large: large + "px",
        small: small + "px",
        h1: h1 + "px",
        h2: h2 + "px",
        h3: h3 + "px",
        h4: h4 + "px",
        h5: h5 + "px",
        h6: h6 + "px",
        h1_sm: h1_sm + "px",
        h2_sm: h2_sm + "px",
        h3_sm: h3_sm + "px",
      },
      fontFamily: {
        primary: [
          primaryFont.replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, ""),
          themeStyle.font.fontFamily.type,
        ],
        secondary: [
          secondaryFont.replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, ""),
          themeStyle.font.fontFamily.type,
        ],
      },
      height: {
        37: "18.75rem",
        h600: "600px",
        h800: "800px",
      },
      backgroundImage: {
        bannerBg: "url('/images/banner/banner.png')",
      },
      colors: {
        primaryColor: themeStyle.color.themeColor.primary,

        light: themeStyle.color.basicColor.light,
        dark: themeStyle.color.basicColor.dark,
        textDark: themeStyle.color.textColor.dark,
        textColor: themeStyle.color.textColor.default,
        textLight: themeStyle.color.textColor.light,
        borderColor: themeStyle.color.themeColor.border,
        body: themeStyle.color.themeColor.body,
      },
      screens: {
        xsm: "420px",
      },
    },
  },
};
