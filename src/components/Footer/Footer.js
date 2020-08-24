/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/material-kit-react/components/footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.listItem, classes.inlineBlock, classes.block}>
            <span style={{
              display: 'flex',
              alignItems: "center"
            }}>
              <ContactPhoneIcon style={{marginRight:"10px"}}/>
              Lais Iemma (014) 98834-5799
            </span>
            <span style={{
                display: 'flex',
                alignItems: "center"
              }}> 
                <ContactPhoneIcon style={{marginRight:"10px"}}/>
                Rodrigo Alencar (014) 99126-9471
              </span>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()}, feito com {" "}
          <Favorite className={classes.icon} />
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
