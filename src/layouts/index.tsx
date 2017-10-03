import * as React from "react"
import Link from "gatsby-link"
import { Helmet } from "react-helmet"
import AppBar from "material-ui/AppBar"
import { Tabs, Tab } from "material-ui/Tabs"
import FlatButton from "material-ui/FlatButton"
import Slider from "material-ui/Slider"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"

type Props = {
  children: () => React.ReactNode
}

const TemplateWrapper = ({ children }: Props) => (
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

const ButtonAppBar = () => (
  <AppBar title="Hallingdata" iconElementRight={<FlatButton label="Hjem" />} />
)
