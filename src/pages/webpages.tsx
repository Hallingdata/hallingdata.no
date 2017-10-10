import { Typography } from "material-ui"
import Grid from "material-ui/Grid"
import * as React from "react"

import { CustomerLogos } from "../components/customer-logos/customer-logos.component"
import { Hero } from "../components/hero/hero.component"
import { OurServices } from "../components/our-services/our-services.component"
import { Team } from "../components/team/team.component"
import * as style from "./index.module.css"
import * as heroImg from "./img/hero/code1.jpeg"

type Props = {
  data: {
    webpagesPage: {
      childMarkdownRemark: {
        frontmatter: Frontmatter
      }
    }
  }
}

type Frontmatter = {
  header: string
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any
}

const WebpagesPage = ({ data }: Props) => {
  const frontmatter = data.webpagesPage.childMarkdownRemark.frontmatter
  return (
    <Grid container direction="column" spacing={0} style={gridFix}>
      <Grid item>
        <Hero header={frontmatter.header} type="small" img={heroImg} />
      </Grid>
    </Grid>
  )
}

export default WebpagesPage

export const pageQuery = graphql`
  query WebpagesContent {
    webpagesPage: file(relativePath: { eq: "content/webpages-page.md" }) {
      childMarkdownRemark {
        html
        timeToRead
        frontmatter {
          header
        }
      }
    }
  }
`
