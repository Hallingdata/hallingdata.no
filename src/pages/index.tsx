import { Typography } from "material-ui"
import Grid from "material-ui/Grid"
import * as React from "react"

import { CustomerLogos } from "../components/customer-logos/customer-logos.component"
import { Hero } from "../components/hero/hero.component"
import { OurServices } from "../components/our-services/our-services.component"
import { Team } from "../components/team/team.component"
import * as style from "./index.module.css"

type Props = {
  data: {
    row1: any
    landingPage: any
  }
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any
}

const IndexPage = ({ data }: Props) => (
  <Grid container direction="column" spacing={0} style={gridFix}>
    <Grid item>
      <Hero />
    </Grid>
    <Grid item>
      <OurServices
        services={data.landingPage.childMarkdownRemark.frontmatter.ourServices}
      />
    </Grid>
    <Grid item>
      <Typography
        type="display2"
        style={{ textAlign: "center", padding: "50px" }}
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
    landingPage: file(relativePath: { eq: "content/landing-page.md" }) {
      childMarkdownRemark {
        html
        timeToRead
        frontmatter {
          ourServices {
            header
            icon
            description
          }
        }
      }
    }
  }
`
