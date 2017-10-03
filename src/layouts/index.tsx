import * as React from "react"
import Link from "gatsby-link"
import { Helmet } from "react-helmet"

import AppBar from "material-ui/AppBar"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

import "./index.css"

const styles = {
  root: {
    marginTop: 1 * 3,
    width: "100%"
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const ButtonAppBar = (props: any) => (
  <AppBar
    title="Hallingdata"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
)

const TemplateWrapper = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <Helmet
        title="Hallingdata"
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <ButtonAppBar />
      <div>{children()}</div>
    </div>
  </MuiThemeProvider>
)

export default TemplateWrapper
