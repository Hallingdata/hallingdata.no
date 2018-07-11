import * as React from "react"

import { CustomerLogos } from "../components/CustomerLogos"
import Head from "../components/Head"
import { Hero } from "../components/Hero"
import { OurServices } from "../components/OurServices"
import { Team } from "../components/Team"
import * as heroImg from "./img/hero/code3.min.jpeg" // 3 6 14 

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
  metaTitle: string
  metaDescription: string
  metaUrl: string
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
      <Head
        title={frontmatter.metaTitle}
        description={frontmatter.metaDescription}
        url={frontmatter.metaUrl}
      />
      <Hero
        header={frontmatter.header}
        type="big"
        img={heroImg}
        promoText={frontmatter.promoText}
      />
      <OurServices services={frontmatter.ourServices} />

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
          metaTitle
          metaDescription
          metaUrl
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
