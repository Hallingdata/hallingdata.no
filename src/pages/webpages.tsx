import { Typography } from "material-ui"
import Grid from "material-ui/Grid"
import * as React from "react"

import { CustomerLogos } from "../components/customer-logos/customer-logos.component"
import { Hero } from "../components/hero/hero.component"
import { OurServices } from "../components/our-services/our-services.component"
import { Team } from "../components/team/team.component"
import * as style from "./index.module.css"
import * as heroImg from "./img/hero/code18-light.jpg"

type Props = {
}

type Frontmatter = {
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any
}

const WebpagesPage = (props: Props) => {

  return (
    <Grid container direction="column" spacing={0} style={gridFix}>
      <Grid item>
        <Hero header="webpages!!" type="small" img={heroImg} />
      </Grid>
    </Grid>
  )
}

export default WebpagesPage

//export const pageQuery = graphql` `
