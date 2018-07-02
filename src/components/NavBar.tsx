import { navigateTo } from "gatsby-link"
import { AppBar, Button, Hidden, Toolbar } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import { map } from "ramda"
import * as React from "react"
import Headroom from "react-headroom"

import { Logo } from "./Logo"
import { NavDrawer } from "./NavDrawer"

type Props = {}

const navBar: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
}) => (
  <div>
    <Hidden mdUp>
      <Headroom>
        <AppBar position="static">
          <Toolbar>
            <Logo className={classes.logo} />
            <span style={{ flex: 1 }} />
            <NavDrawer links={pages} />
          </Toolbar>
        </AppBar>
      </Headroom>
    </Hidden>

    <Hidden smDown>
      <AppBar position="absolute" className={classes.appBarLarge}>
        <Toolbar>
          <Logo className={classes.logo} />
          <span style={{ flex: 1 }} />
          {map(page => {
            if (page.name == "Kontakt") {
              return (
                <Button
                  className={classes.contactButton}
                  color="accent"
                  raised
                  key={page.name + "-navBarButton"}
                  onClick={() => navigateTo(page.link)}
                >
                  Kontakt
                </Button>
              )
            } else {
              return navigateButton(page.name, page.link, classes.navButton)
            }
          }, pages)}
        </Toolbar>
      </AppBar>
    </Hidden>
  </div>
)

type StyleClassNames = {
  navButton: string
  logo: string
  contactButton: string
  appBarLarge: string
}

const styles: StyleRulesCallback = theme => ({
  navButton: {
    marginLeft: "0px !important",
    marginRight: "0px !important",
    color: "white !important",
  },
  logo: {
    height: 57,
  },
  contactButton: {
    marginLeft: 15,
  },
  appBarLarge: {
    backgroundColor: "transparent !important",
    boxShadow: "unset !important",
  },
})

export const NavBar = withStyles(styles)<Props>(navBar)

const navigateButton = (pageName: string, url: string, classes: string) =>
  url.substr(0, 1) === "/" ? (
    <Button
      className={classes}
      key={pageName + "-navBarButton"}
      onClick={() => navigateTo(url)}
    >
      {pageName}
    </Button>
  ) : (
    <Button className={classes} key={pageName + "-navBarButton"} href={url}>
      {pageName}
    </Button>
  )

const pages = [
  {
    name: "Hjem",
    link: "/",
  },
  {
    name: "Blockchain",
    link: "/blockchain/",
  },
  {
    name: "Web",
    link: "/web/",
  },
  {
    name: "App",
    link: "/app/",
  },
  {
    name: "Systemutvikling",
    link: "/systemutvikling/",
  },
  {
    name: "Om oss",
    link: "/om-oss/",
  },
  {
    name: "Blogg",
    link: "https://medium.com/hallingdata",
  },
  {
    name: "Kontakt",
    link: "/kontakt/",
  },
]
