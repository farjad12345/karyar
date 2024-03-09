/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "76":"19rem",
        "100":"25rem",
        '164': '41rem',
        '9': '36rem',
        "120":"40rem",
        "120":"40rem"
      },
      boxShadow: {
        "3xl":"0 1rem 4rem rgba(0, 0, 0, 0.5)",
    },

      colors: {
      "white": "#fff",
      "primary": "#c69963",
      "primaryDark": "#b28451",
      "secondry": "#101d2c",
      "secondryLight": "#101d2cef",
      "graylight-1": "#f9f7f6",
      "graylight-2": "#aaa",
      "grayDark-1": "#54483a",
    "grayDark-2": "#6d5d4b",
           },
            contentText: {
              "content":"",
              "height": "1px",
            "  background-color": "currentColor",
              "display": "block",
          }

           ,    backgroundImage: {
            "backgroundSize":" cover%",
            'linearGradient': 'linear-gradient(#101d2cef,#101d2cef), url(/img/gal-4.jpeg)',
            "backgroundposition": "center",

      },
    },
  },
  plugins: [],
};
