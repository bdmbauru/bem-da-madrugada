import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

// core components
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionDonation() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="donation">
          <GridContainer xs={15} justify='center'>
            <GridItem md={7}>
              <Quote
                text="Muita gente pequena, em lugares pequenos, fazendo coisas pequenas, pode mudar o mundo."
                author="Eduardo Galeano"
              />
            </GridItem>
            <GridItem md={4}>
               <Button
                  target ="_blank"
                  rel="noopener noreferrer"
                  href="https://nubank.com.br/pagar/5qgwn/9i8JWKtbDZ"
                  color="primary"
                  block
                >
                  <AccountBalanceIcon className={classes.icon} />
                  Fazer doação ao Bem da Madrugada
                </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
