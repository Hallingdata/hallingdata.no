import { navigateTo } from "gatsby-link"
import { AppBar, Button, Hidden, Toolbar } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import { map } from "ramda"
import * as React from "react"

import { Logo } from "../logo/logo.component"
import { NavDrawer } from "../nav-drawer/nav-drawer.component"

type Props = {}

const navBar: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
}) => (
  <AppBar position="absolute" className={classes.appBar}>
    <Toolbar>
      <Logo className={classes.logo} color="white-transparent" />
      <span style={{ flex: 1 }} />
      <Hidden smDown>
        {map(page => {
          if (page.name == "Kontakt") {
            return (
              <Button
                className={classes.contactButton}
                color="accent"
                raised
                key={page.name + "-navBarButton"}
              >
                Kontakt
              </Button>
            )
          } else {
            return (
              <Button
                className={classes.navButton}
                key={page.name + "-navBarButton"}
                onClick={() => navigateTo("/" + page.link)}
              >
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

type StyleClassNames = {
  navButton: string
  logo: string
  contactButton: string
  appBar: string
}

const styles: StyleRulesCallback = theme => ({
  navButton: {
    marginLeft: "0px !important",
    marginRight: "0px !important",
    color: "white !important",
  },
  logo: {
    height: 37,
  },
  contactButton: {
    marginLeft: 15,
  },
  appBar: {
    backgroundColor: "transparent !important",
    boxShadow: "unset !important",
  },
})

export const NavBar = withStyles(styles)<Props>(navBar)

const pages = [
  {
    name: "Hjem",
    link: "",
  },
  {
    name: "Nettsider",
    link: "webpages",
  },
  {
    name: "Apper",
    link: "",
  },
  {
    name: "Tjenester",
    link: "",
  },
  {
    name: "Tidligere arbeid",
    link: "",
  },
  {
    name: "Om oss",
    link: "",
  },
  {
    name: "Kontakt",
    link: "",
  },
]
