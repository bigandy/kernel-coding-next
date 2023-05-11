import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const boldFontWeight = {
  fontWeight: "bold",
};

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: boldFontWeight,
    h2: boldFontWeight,
    h3: boldFontWeight,
    h4: boldFontWeight,
    h5: boldFontWeight,
    h6: boldFontWeight,
  },
});

export default theme;
