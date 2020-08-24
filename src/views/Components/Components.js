import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionDonation from "./Sections/SectionDonation.js";
import SectionContent from "./Sections/SectionContent.js";
import SectionCarousel from "./Sections/SectionCarousel.js";
import SectionShare from "./Sections/SectionShare.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();

  const { ...rest } = props;
  return (
    <div className={classes.back}>
      <Header
        brand="Bem da Madrugada - Bauru"
        rightLinks={<HeaderLinks/>}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "dark"
        }}
        {...rest}
      />
      <Parallax imageDesktop={require("assets/img/bdm_desktop.jpg")} imageMobile={require("assets/img/bdm_mobile.jpg")}/>

      <div className={classNames(classes.main, classes.mainRaised)}>
        
        <GridItem md={12} className={classes.textCenter}>
          
        </GridItem>
        <SectionContent/>
        <SectionCarousel/>
        <SectionDonation/>
        <SectionShare />
      </div>
      <Footer />
    </div>
  );
}
