import { Hidden, Toolbar } from "material-ui"
import AppBar from "material-ui/AppBar"
import Button from "material-ui/Button"
import { map } from "ramda"
import * as React from "react"

import { NavDrawer } from "../nav-drawer/nav-drawer.component"
import { Logo } from "../logo/logo.component"
import * as style from "./nav-bar.module.css"

type Props = {}

export const NavBar = (props: Props) => (
  <AppBar>
    <Toolbar>
      <Logo height="35px" color="white-transparent" />
      <span style={{ flex: 1 }} />
      <Hidden smDown>
        {map(page => {
          if (page.name == "Kontakt") {
            return (
              <Button className={style.contactButton} color="accent" raised>
                Kontakt
              </Button>
            )
          } else {
            return (
              <Button key="{page.name}" className={style.navButton}>
                {page.name}
              </Button>
            )
          }
        }, pages)}
      </Hidden>
      <Hidden mdUp>
        <NavDrawer links={pages} />
      </Hidden>
    </Toolbar>
  </AppBar>
)

const pages = [
  {
    name: "Hjem",
    link: ""
  },
  {
    name: "Nettsider",
    link: ""
  },
  {
    name: "Apper",
    link: ""
  },
  {
    name: "Tjenester",
    link: ""
  },
  {
    name: "Tidligere arbeid",
    link: ""
  },
  {
    name: "Om oss",
    link: ""
  },
  {
    name: "Kontakt",
    link: ""
  }
]
