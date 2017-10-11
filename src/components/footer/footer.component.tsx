import { FooterAbout } from './footer-about.component';
import { Button, Grid, Icon, Typography } from "material-ui"
import * as React from 'react';
import { StyleRulesCallback, withStyles } from "material-ui/styles"

import { FacebookBadge } from "../facebook-badge/facebook-badge.component"
import { Logo } from "../logo/logo.component"
import { FooterContact } from "./footer-contact.component"

type Props = {}

const footer: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes
}) => {

  return (
    <Grid
      container
      direction="row"
      className={classes.outer}
      spacing={0}
      justify="space-around"
    >
      <FooterContact />
      <FooterAbout />
      <Grid
        item
        md={3}
        xs={10}
        className={classes.gridItem}
        style={{ overflow: "hidden" }}
      >
        <FacebookBadge />
      </Grid>
    </Grid>
  )
}

type StyleClassNames = {
  outer: string
  gridItem: string
}

const styles: StyleRulesCallback = theme => ({
  outer: {
    backgroundColor: "#363839",
    color: "#fff",
    paddingTop: 50,
    paddingBottom: 100
  },
  gridItem: {
    marginBottom: 30
  }
})

export const Footer = withStyles(styles)<Props>(footer)
