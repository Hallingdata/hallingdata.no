import { Typography } from "material-ui"
import Grid from "material-ui/Grid"
import * as React from "react"

import { CustomerLogos } from "../components/CustomerLogos"
import { Hero } from "../components/Hero"
import { OurServices } from "../components/OurServices"
import { Team } from "../components/Team"
import * as heroImg from "./img/hero/code18-light-min.jpg"
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
    description: string
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
    <div style={gridFix}>
      <Hero header={frontmatter.header} type="big" img={heroImg} />
      <OurServices services={frontmatter.ourServices} />
      <Typography
        type="display2"
        style={{ textAlign: "center", padding: "50px" }}
      >
        {frontmatter.promoText}
      </Typography>
      <Team header={frontmatter.teamHeader} people={frontmatter.team} />
      <CustomerLogos header={frontmatter.customerLogoHeader} />
    </div>
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
