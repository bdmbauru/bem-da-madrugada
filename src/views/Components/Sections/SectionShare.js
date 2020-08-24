/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
// core components
import styles from "assets/jss/material-kit-react/views/componentsSections/downloadStyle.js";
import {FacebookShareButton} from 'react-share'

const useStyles = makeStyles(styles);

export default function SectionShare() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.textCenter + " " + classes.sharingArea}>
          <GridContainer justify="center">
            <h3>Nós do Bem da Madrugada Bauru agradecemos sua doação</h3>
          </GridContainer>
          <FacebookShareButton url={`https://bdmbauru.github.io/bem-da-madrugada/`} 
          quote={"Quer ajudar o Bem da Madrugada - Bauru? Você pode fazer isso através do site !"} className="share">
            <Button color="facebook">
              <i className={classes.socials + " fab fa-facebook-square"} /> Compartilhar
            </Button>
          </FacebookShareButton>
        </div>
      </div>
    </div>
  );
}
