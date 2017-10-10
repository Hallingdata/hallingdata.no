import { Team } from "../components/team/team.component"
import * as image from "../content/index/row1.jpg"

import * as React from "react"
import Link from "gatsby-link"
import Grid from "material-ui/Grid"

import { Hero } from "../components/hero/hero.component"
import { OurServices } from "../components/our-services/our-services.component"
import { CustomerLogos } from "../components/customer-logos/customer-logos.component"
import * as style from "./index.module.css"
import { Typography } from "material-ui"

type Props = {
  data: {
    row1: any
    services: any
  }
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  "overflow-x": "hidden"
}
const IndexPage = ({ data }: Props) => (
  <Grid container direction="column" spacing={0} style={gridFix}>
    <Grid item>
      <Hero />
    </Grid>
    <Grid item>
      <OurServices
        services={data.services.childMarkdownRemark.frontmatter.services}
      />
    </Grid>
    <Grid item>
      <Typography
        type="display2"
        style={{ "textAlign": "center", padding: "50px" }}
      >
        Vi er teknologiske eksperter
      </Typography>
    </Grid>
    <Grid item>
      <Team />
    </Grid>
    <Grid item>
      <CustomerLogos />
    </Grid>
  </Grid>
)

export default IndexPage

export const pageQuery = graphql`
  query PromoContent {
    row1: file(relativePath: { eq: "content/index/row1.md" }) {
      childMarkdownRemark {
        html
        timeToRead
      }
    }
    services: file(relativePath: { eq: "content/index/services.md" }) {
      childMarkdownRemark {
        html
        timeToRead
        frontmatter {
          services {
            header
            icon
            description
          }
        }
      }
    }
  }
`
