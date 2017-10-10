import { Typography } from "material-ui"
import Grid from "material-ui/Grid"
import * as React from "react"

import { CustomerLogos } from "../components/customer-logos/customer-logos.component"
import { Hero } from "../components/hero/hero.component"
import { OurServices } from "../components/our-services/our-services.component"
import { Team } from "../components/team/team.component"
import * as style from "./index.module.css"
import * as heroImg from "./img/hero/desk1-light.jpeg"

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
  team: any
  customerLogoHeader: string
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any
}

const IndexPage = ({ data }: Props) => {
  const frontmatter = data.landingPage.childMarkdownRemark.frontmatter
  console.log(frontmatter)

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
        <Team people={frontmatter.team}/>
      </Grid>
      <Grid item>
        <CustomerLogos header={frontmatter.customerLogoHeader} />
      </Grid>
    </Grid>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query PromoContent {
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
