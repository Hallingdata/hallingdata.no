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
import * as eosPortal from "./img/EOS-portal.png"
import * as hidden from "./img/hidden.jpg"
import { PageSection } from "../PageSection"

type Props = {
  header: string
}

const logos = [
  { img: hidden, lenk: "https://hidden.no" },
  { img: eosPortal, lenk: "https://eosportal.io" },
  { img: basefarmLogo, lenk: "https://www.basefarm.com" },
  { img: eikaLogo, lenk: "https://www2.eika.no" },
  { img: felleskjopetLogo, lenk: "https://www.felleskjopet.no" },
  { img: norgesgruppenLogo, lenk: "http://www.norgesgruppen.no" },
  { img: oracleLogo, lenk: "https://www.oracle.com" },
  { img: sporveienLogo, lenk: "https://www.sporveien.com" },
  { img: reddBarnaLogo, lenk: "https://www.reddbarna.no" },
  { img: rikstotoLogo, lenk: "https://www.rikstoto.no/" },
  { img: skattLogo, lenk: "https://www.skatteetaten.no/" },
  { img: statnettLogo, lenk: "http://www.statnett.no" },
  { img: statsKraftLogo, lenk: "https://www.statkraft.no" },
  { img: telenorLogo, lenk: "https://www.telenor.no" },
  { img: vgLogo, lenk: "https://www.vg.no" },
]

const customerLogos: React.SFC<Props & { classes: StyleClassNames }> = ({
  header,
  classes,
}) => (
  <PageSection header={header} className={classes.outer}>
    {map(
      logo => (
        <a href={logo.lenk} target="_blank" key={logo.lenk}>
          <img
            src={logo.img}
            alt="firma logo"
            className={classes.logo}
            height="100px"
          />
        </a>
      ),
      logos
    )}
  </PageSection>
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
