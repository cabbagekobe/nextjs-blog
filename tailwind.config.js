const mdx = require("@mdx-js/mdx");

module.exports = {
  purge: {
    mode: "all",
    content: ["./src/**/*.{js,mdx}", "./next.config.js"],
    options: {
      extractors: [
        {
          extensions: ["mdx"],
          extractor: (content) => { },
        },
      ],
    },
  },
  theme: {
    extend: {
      spacing: {
        "9/16": "56.25%",
      },
      lineHeight: {
        "11": "2.75rem",
        "12": "3rem",
        "13": "3.25rem",
        "14": "3.5rem",
      },
      colors: {
        code: {
          green: "#b5f4a5",
          yellow: "#ffe484",
          purple: "#d9a9ff",
          red: "#ff8383",
          blue: "#93ddfd",
          white: "#fff",
        },
      },
      typography: (theme) => ({
        default: {
          css: {
          },
        },
      }),
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui"),
    require("@tailwindcss/typography"),
  ],
};
