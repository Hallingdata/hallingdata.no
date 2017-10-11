import { Button, Grid, Icon, Typography } from "material-ui"
import * as React from "react"
import { StyleRulesCallback, withStyles } from "material-ui/styles"

import { FacebookBadge } from "../facebook-badge/facebook-badge.component"
import { Logo } from "../logo/logo.component"

type Props = {}

const footerAbout: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes
}) => (
    <Grid item xs={10} md={3} sm={5} className={classes.gridItem}>
      <Logo height="45px" color="white-transparent" className={classes.logo} />
      <Typography
        type="body1"
        gutterBottom
        color="inherit"
        className={classes.vision}
      >
        Hallingdata hjelper bedrifter og organisasjoner med fornuftig bruk av
        informasjonsteknologi (IT). Vi er IT-eksperter som skjønner
        forretningsdrift. Ta kontakt for å finne ut hvordan vi kan hjelpe deg og
        din organisasjon.
      </Typography>
      <Typography type="body2" color="inherit">
        Besøksadresse:
      </Typography>
      <Typography type="body1" gutterBottom color="inherit">
        Hallingdal Næringshage<br />
        Gamlevegen 6 <br />
        3550 GOL<br />
      </Typography>
    </Grid>
)
type StyleClassNames = {
    logo: string
    vision: string
    gridItem: string
  }
  
  const styles: StyleRulesCallback = theme => ({
    logo: {
      height: 36,
      marginBottom: 6
    },
    vision: {
      marginBottom: 26
    },
    gridItem: {
      marginBottom: 30
    }
  })

export const FooterAbout = withStyles(styles)<Props>(footerAbout)
