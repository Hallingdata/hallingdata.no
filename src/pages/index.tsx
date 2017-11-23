import * as React from "react"

import { CustomerLogos } from "../components/CustomerLogos"
import { FacebookPosts } from "../components/FacebookPosts"
import { Hero } from "../components/Hero"
import { OurServices } from "../components/OurServices"
import { Team } from "../components/Team"
import PromoText from "../components/PromoText"
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
  promoText: string
  ourServices: Array<{
    header: string
    icon: string
    description: string
    link: string
  }>
  facebookPostsHeader: string
  facebookPosts: Array<string>
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
      <Hero header={frontmatter.header} type="big" img={heroImg} promoText={frontmatter.promoText} />
      <OurServices services={frontmatter.ourServices} />

      <FacebookPosts header={frontmatter.facebookPostsHeader} posts={frontmatter.facebookPosts} />
      <Team header={frontmatter.teamHeader} people={frontmatter.team} />
      <CustomerLogos header={frontmatter.customerLogoHeader} />
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query LandingContent {
    landingPage: file(relativePath: { eq: "content/hjem_page.md" }) {
      childMarkdownRemark {
        html
        timeToRead
        frontmatter {
          header
          promoText
          ourServices {
            header
            icon
            description
            link
          }
          facebookPostsHeader
          facebookPosts
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
