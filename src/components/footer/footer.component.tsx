import { Button, Grid, Icon, Typography } from "material-ui"
import * as React from "react"

import { FacebookBadge } from "../facebook-badge/facebook-badge.component"
import { Logo } from "../logo/logo.component"
import * as style from "./footer.module.css"

type Props = {}

export const Footer = (props: Props) => {
  return (
    <Grid
      container
      direction="row"
      className={style.outer}
      spacing={0}
      justify="space-around"
    >
      {contactColumn}
      {aboutColumn}
      <Grid item md={3} xs={10} className={style.gridItem}>
        <FacebookBadge />
      </Grid>
    </Grid>
  )
}

const contactColumn = (
  <Grid item md={2} xs={10} sm={5} className={style.gridItem}>
    <Typography
      type="title"
      color="inherit"
      gutterBottom
      style={{ paddingTop: "9px" }}
    >
      Skal vi ta en prat?
    </Typography>
    <Typography type="body1" gutterBottom color="inherit">
      Ring oss for en uforpliktende telefonsamtale.
    </Typography>
    <Button
      href="tel:+4732178032"
      color="inherit"
      raised
      className={style.contactButton}
    >
      <Icon color="inherit" className={style.icon}>
        phone
      </Icon>
      Ring oss
    </Button>
    <Button
      href="mailto:post@hallingdata.no"
      color="inherit"
      raised
      className={style.contactButton}
    >
      <Icon color="inherit" className={style.icon}>
        email
      </Icon>
      Send epost
    </Button>
    <Typography type="body1" gutterBottom color="inherit">
      TLF: 32 17 80 32<br />
      E-post: post@hallingdata.no<br />
    </Typography>
  </Grid>
)

const aboutColumn = (
  <Grid item xs={10} md={3} sm={5} className={style.gridItem}>
    <Logo height="45px" color="white-transparent" className={style.logo} />
    <Typography
      type="body1"
      gutterBottom
      color="inherit"
      className={style.vision}
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
