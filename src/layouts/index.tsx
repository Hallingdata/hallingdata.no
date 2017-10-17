import amber from "material-ui/colors/amber"
import deepPurple from "material-ui/colors/deepPurple"
import { createMuiTheme, MuiThemeProvider } from "material-ui/styles"
import * as React from "react"
import { Helmet } from "react-helmet"

import { Footer } from "../components/Footer"
import { NavBar } from "../components/NavBar"

type Props = {
  children: () => React.ReactNode
}

const TemplateWrapper: React.SFC<Props> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    <div>
      <Helmet
        title="Hallingdata"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      />
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
})
