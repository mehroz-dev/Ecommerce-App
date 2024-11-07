import { extendTheme } from "native-base";

export const BaseTheme = extendTheme({
  components: {
    Input: {
      borderRadius: 0,
      variants: {
        underlined: {
          _stack: {
            _focus: {
              style: {
                outlineWidth: "0",
                boxShadow: "0 1px 0 0 #FC2778",
              },
            },
          },
        },
      },
    },
  },
  colors: {
    primary: {
      500: "#FC2778",
      600: "#FC2779",
    },
    slatePink: {
      300: "#FD2578",
      400: "#FC2778",
      500: "#FC2779",
    },
    textColors: {
      100: "#3F414D",
      200: "#4EB6AC",
    },
    grayShade: {
      100: "#7B7B7B",
    },
    yellowShade: {
      300: "#FFA838",
    },
  },
});
