import { Typography } from "material-ui"
import { map } from "ramda"
import * as React from "react"
import { StyleRulesCallback, withStyles } from "material-ui/styles"

import * as basefarmLogo from "./img/basefarm_logo_v1.png"
import * as eikaLogo from "./img/eika_logo.png"
import * as felleskjopetLogo from "./img/felleskjoepet_logo_v1.png"
import * as norgesgruppenLogo from "./img/norgesgruppen_logo_v2.png"
import * as oracleLogo from "./img/oracle_logo.png"
import * as sporveienLogo from "./img/oslosporveier_logo.png"
import * as reddBarnaLogo from "./img/reddbarna_logo_v2.png"
import * as rikstotoLogo from "./img/rikstoto_logo_v2.png"
import * as skattLogo from "./img/skatteetaten_logo.png"
import * as statsKraftLogo from "./img/statkraft_logo.png"
import * as statnettLogo from "./img/statnett_logo_m_tekst.png"
import * as telenorLogo from "./img/telenor_logo_v2.png"
import * as vgLogo from "./img/vg_logo.png"

type Props = {
  header: string
}

const logos = [
  basefarmLogo,
  eikaLogo,
  felleskjopetLogo,
  norgesgruppenLogo,
  oracleLogo,
  sporveienLogo,
  reddBarnaLogo,
  rikstotoLogo,
  skattLogo,
  statnettLogo,
  statsKraftLogo,
  telenorLogo,
  vgLogo,
]

const customerLogos: React.SFC<Props & { classes: StyleClassNames }> = ({
  header,
  classes,
}) => (
  <section className={classes.outer}>
    <Typography type="display1" gutterBottom>
      {header}
    </Typography>
    {map(
      logo => (
        <img
          src={logo}
          alt="firma logo"
          className={classes.logo}
          key={logo}
          height="100px"
        />
      ),
      logos
    )}
  </section>
)

type StyleClassNames = {
  logo: string
  outer: string
}

const styles: StyleRulesCallback = theme => ({
  logo: {
    padding: "40px",
  },
  outer: {
    textAlign: "center",
    paddingTop: "100px",
    paddingBottom: "100px",
  },
})

export const CustomerLogos = withStyles(styles)<Props>(customerLogos)