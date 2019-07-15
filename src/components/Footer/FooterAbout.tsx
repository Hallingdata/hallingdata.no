import { Grid, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { Logo } from "../Logo"

type Props = {}

const footerAbout: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
}) => (
  <Grid item xs={10} md={5} sm={5} className={classes.gridItem}>
    <Logo className={classes.logo} />
    <Typography
      type="body1"
      gutterBottom
      color="inherit"
      className={classes.vision}
    >
      Hallingdata hjelper bedrifter og organisasjoner med fornuftig bruk av
      informasjonsteknologi (IT). Vi er IT-eksperter som skjønner
      forretningsdrift. Vi holder til i Hallingdal, en region som består av Hemsedal, Hol, Ål, Gol, Nesbyen og Flå. 
      <br/>Ta kontakt for å finne ut hvordan vi kan hjelpe deg og
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
    height: 68,
    marginBottom: 6,
  },
  vision: {
    marginBottom: 26,
  },
  gridItem: {
    marginBottom: 30,
  },
})

export const FooterAbout = withStyles(styles)<Props>(footerAbout)
