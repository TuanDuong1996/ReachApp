module.exports = {
  purge: ["./src/**/*.tsx"],
  important: "#incident-container",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        "#b4a5af": "#b4a5af",
        "#9ca3af": "#9ca3af",
        transparent: "transparent",
      },
      spacing: {
        "8px": "8px",
        "10px": "10px",
        "15px": "15px",
        "20px": "20px",
        "30px": "30px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      width: {
        "100px": "100px",
        "150px": "150px",
      },
      height: {
        "40px": "40px",
      },
      borderRadius: {
        "5px": "5px",
        "10px": "10px",
        "12.5px": "12.5px",
      },
      fontSize: {
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "19px": "19px",
      },
      screens: {},
    },
  },
};
