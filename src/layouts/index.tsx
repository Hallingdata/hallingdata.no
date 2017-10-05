import AppBar from "material-ui/AppBar"
import Button from "material-ui/Button"
import amber from "material-ui/colors/amber"
import purple from "material-ui/colors/purple"
import deepPurple from "material-ui/colors/deepPurple"
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles"
import Toolbar from "material-ui/Toolbar"
import * as React from "react"
import { Helmet } from "react-helmet"

import * as styles from "./index.module.css"
import * as logo from "./logo-white-transparent.png"
import { Grid } from "material-ui"

type Props = {
  children: () => React.ReactNode
}

const TemplateWrapper = ({ children }: Props) => (
  <MuiThemeProvider theme={myTheme}>
    <div>
      <Helmet
        title="Hallingdata"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <MyAppBar />
      <Grid container xs={12}>{children()}</Grid>
    </div>
  </MuiThemeProvider>
)

export default TemplateWrapper

const MyAppBar = () => (
  <AppBar>
    <Toolbar>
      <img src={logo} alt="Hallingdata logo" height="60px" />
      <span style={{ flex: 1 }} />
      <Button color="contrast">Login</Button>
      <Button className={styles.navButton}>Hjem</Button>
      <Button className={styles.navButton}>Tjenester</Button>
      <Button className={styles.navButton}>Om oss</Button>
      <Button className={styles.navButton}>Kontakt</Button>
    </Toolbar>
  </AppBar>
)

const myTheme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: amber
  }
})
