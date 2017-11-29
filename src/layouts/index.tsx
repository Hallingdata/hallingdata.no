import "ionicons/css/ionicons.min.css"
import "material-design-icons-iconfont/dist/material-design-icons.css"
import "typeface-roboto"
import "animate.css/animate.css"

import amber from "material-ui/colors/amber"
import deepPurple from "material-ui/colors/deepPurple"
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles"
import * as React from "react"

import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

type Props = {
  children: () => React.ReactNode
}

const TemplateWrapper: React.SFC<Props> = ({ children }) => (
  <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
    <div>
      <NavBar />
      {children()}
      <Footer />
    </div>
  </MuiThemeProvider>
)

export default TemplateWrapper

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
  },
  custom: {
    pageMaxWith: 1200,
  },
})
