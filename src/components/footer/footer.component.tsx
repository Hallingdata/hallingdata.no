import * as React from "react"
import Link from "gatsby-link"
import { Grid, Typography, Button, Icon } from "material-ui"

import * as logo from "./logo-white-transparent.png"
import * as style from "./footer.module.css"

type Props = {}

const FooterComponent = (props: any) => (
  <Grid
    container
    direction="row"
    className={style.outer}
    spacing={0}
    justify="space-around"
  >
    <Grid item md={2} xs={10} sm={3}>
      <Typography
        type="title"
        color="inherit"
        gutterBottom
        style={{ "padding-top": "9px" }}
      >
        Skal vi ta en prat?
      </Typography>
      <Typography type="body1" gutterBottom color="inherit">
       Ring oss for en uforpliktende telefomnsamtale.
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
    <Grid item xs={10} md={3} sm={5}>
      <img
        src={logo}
        alt="Hallingdata logo"
        height="60px"
        className={style.logo}
      />
      <Typography type="body1" gutterBottom color="inherit" className={style.vision}>
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
    <Grid item md={3} xs={10} style={{ "text-align": "center" }}>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhallingdata&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="154" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>'
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<script src="//platform.linkedin.com/in.js" type="text/javascript"></script><script type="IN/CompanyProfile" data-id="5025257" data-format="inline" data-related="false"></script>'
        }}
      />
    </Grid>
  </Grid>
)

export default FooterComponent
