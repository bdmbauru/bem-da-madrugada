import { container, title } from "assets/jss/material-kit-react.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const typographyStyle = {
  par:{
    fontSize: "16px",
  },
  section: {
    paddingLeft: "5%",
    paddingRight: "5%",
    padding: "5% 0",
    color: "#FFFFFF"
  },
  container,
  paper:{
    textAlign: "center",
    background: "#000000",
    color: "#FFFFFF"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#FFFFFF"
  },
  typo: {
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "10px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  },
  ...imagesStyles
};

export default typographyStyle;
