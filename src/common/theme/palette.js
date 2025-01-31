import { grey, green, indigo, orange } from "@mui/material/colors";

const validatedColor = (color) =>
  /^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null;

export default (server, darkMode) => ({
  mode: darkMode ? "dark" : "light",
  background: {
    default: darkMode ? grey[900] : grey[50],
  },

  primary: {
    main:
      validatedColor(server?.attributes?.colorPrimary) ||
      (darkMode ? orange[300] : orange[300]),
  },
  secondary: {
    main:
      validatedColor(server?.attributes?.colorSecondary) ||
      (darkMode ? orange[300] : orange[300]),
  },
  neutral: {
    main: grey[500],
  },
  geometry: {
    main: "#3bb2d0",
  },
});
