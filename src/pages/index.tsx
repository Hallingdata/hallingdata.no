import { Typography } from "material-ui"
import Grid from "material-ui/Grid"
import * as React from "react"

import { CustomerLogos } from "../components/customer-logos/customer-logos.component"
import { Hero } from "../components/hero/hero.component"
import { OurServices } from "../components/our-services/our-services.component"
import { Team } from "../components/team/team.component"
import * as heroImg from "./img/hero/code18-light.jpg"
import * as style from "./index.module.css"

type Props = {
  data: {
    landingPage: {
      childMarkdownRemark: {
        frontmatter: Frontmatter
      }
    }
  }
}

type Frontmatter = {
  header: string
  ourServices: Array<{
    header: string
    icon: string
    description: strin
  }>
  promoText: string
  teamHeader: string
  team: any
  customerLogoHeader: string
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any,
}

const IndexPage: React.SFC<Props> = ({ data }) => {
  const frontmatter = data.landingPage.childMarkdownRemark.frontmatter

  return (
    <Grid container direction="column" spacing={0} style={gridFix}>
      <Grid item>
        <Hero header={frontmatter.header} type="big" img={heroImg} />
      </Grid>
      <Grid item>
        <OurServices services={frontmatter.ourServices} />
      </Grid>
      <Grid item>
        <Typography
          type="display2"
          style={{ textAlign: "center", padding: "50px" }}
        >
          {frontmatter.promoText}
        </Typography>
      </Grid>
      <Grid item>
        <Team header={frontmatter.teamHeader} people={frontmatter.team} />
      </Grid>
      <Grid item>
        <CustomerLogos header={frontmatter.customerLogoHeader} />
      </Grid>
    </Grid>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query LandingContent {
    landingPage: file(relativePath: { eq: "content/landing-page.md" }) {
      childMarkdownRemark {
        html
        timeToRead
        frontmatter {
          header
          ourServices {
            header
            icon
            description
          }
          promoText
          teamHeader
          team {
            name
            description
            linkedinUrl
            githubUrl
          }
          customerLogoHeader
        }
      }
    }
  }
`
