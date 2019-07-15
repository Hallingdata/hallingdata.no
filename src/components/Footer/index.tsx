import { Grid } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { FacebookBadge } from "../FacebookBadge"
import { FooterAbout } from "./FooterAbout"
import { FooterContact } from "./FooterContact"

type Props = {}

const footer: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
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
    </Grid>
  )
}

type StyleClassNames = {
  outer: string
  gridItem: string
  creditRatingLogo: string
}

const styles: StyleRulesCallback = theme => ({
  outer: {
    backgroundColor: "#363839",
    color: "#fff",
    paddingTop: 50,
    paddingBottom: 100,
  },
  gridItem: {
    marginBottom: 30,
  },
  creditRatingLogo: {
    height: 100,
    marginTop: 20,
  },
})

export const Footer = withStyles(styles)<Props>(footer)
