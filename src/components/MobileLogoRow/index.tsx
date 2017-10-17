import * as React from "react"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import { Grid, Typography } from "material-ui"

import * as appleLogo from "./img/apple-logo.png"
import * as androidLogo from "./img/android-logo.png"

type Props = {}

const mobileLogoRow: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
}) => (
  <Grid container>
    <Grid item xs={6} className={classes.androidGridItem}>
      <img
        src={androidLogo}
        alt="Android logo"
        height="100"
        className={classes.img}
      />
    </Grid>
    <Grid item xs={6} className={classes.appleGridItem}>
      <img
        src={appleLogo}
        alt="Apple logo"
        height="100"
        className={classes.img}
      />
    </Grid>
  </Grid>
)

type StyleClassNames = {
  img: string
  appleGridItem: string
  androidGridItem: string
}

const styles: StyleRulesCallback = theme => ({
  img: {
    padding: 15,
  },
  appleGridItem: {
    textAlign: "center",
    backgroundColor: "#a4c439",
    padding: 20,
  },
  androidGridItem: {
    textAlign: "center",
    backgroundColor: "#6d6e71",
    padding: 30,
  },
})

export const MobileLogoRow = withStyles(styles)<Props>(mobileLogoRow)
