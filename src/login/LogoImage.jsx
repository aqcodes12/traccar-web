import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import CustomLogo from "../resources/images/trackway.png";

const useStyles = makeStyles((theme) => ({
  image: {
    alignSelf: "center",
    maxWidth: "240px",
    maxHeight: "120px",
    width: "auto",
    height: "auto",
    margin: theme.spacing(2),
  },
}));

const LogoImage = ({ color }) => {
  const theme = useTheme();
  const classes = useStyles();

  const expanded = !useMediaQuery(theme.breakpoints.down("lg"));

  const logo = useSelector((state) => state.session.server.attributes?.logo);
  const logoInverted = useSelector(
    (state) => state.session.server.attributes?.logoInverted
  );

  if (logo) {
    if (expanded && logoInverted) {
      return <img className={classes.image} src={logoInverted} alt="" />;
    }
    return <img className={classes.image} src={logo} alt="" />;
  }
  // Use your custom image component here
  return <img className={classes.image} src={CustomLogo} alt="" />;
};

export default LogoImage;
