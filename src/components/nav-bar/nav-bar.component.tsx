import AppBar from "material-ui/AppBar"
import Button from "material-ui/Button"
import * as React from "react"
import { Toolbar } from "material-ui"

import * as style from "./nav-bar.module.css"
import * as logo from "./logo-white-transparent.png"

type Props = {}

const NavBarComponent = (props: Props) => (
  <AppBar>
    <Toolbar>
      <img src={logo} alt="Hallingdata logo" height="60px" />
      <span style={{ flex: 1 }} />
      <Button className={style.navButton}>Hjem</Button>
      <Button className={style.navButton}>Nettsider</Button>
      <Button className={style.navButton}>Apper</Button>
      <Button className={style.navButton}>Tjenester</Button>
      <Button className={style.navButton}>Om oss</Button>
      <Button className={style.navButton}>Kontakt</Button>
    </Toolbar>
  </AppBar>
)

export default NavBarComponent
