import { ChecklistCard } from "../components/checklist-card/checklist-card.component"
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
        html: any
      }
    }
  }
}

type Frontmatter = {
  header: string
  checklist: Array<string>
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflow: "hidden" as any,
  margin: 0
}

const WebpagesPage = ({ data }: Props) => {
  const frontmatter = data.webpagesPage.childMarkdownRemark.frontmatter
  const html = data.webpagesPage.childMarkdownRemark.html
  console.log("frontmatter: " + JSON.stringify(frontmatter, null, "  "))
  return (
    <Grid container direction="row" style={gridFix} justify="space-around">
      <Grid item xs={12}>
        <Hero header={frontmatter.header} type="small" img={heroImg} />
      </Grid>
      <Grid item sm={6} md={5} xs={10}>
        <Typography
          type="body1"
          gutterBottom
          align="justify"
          style={{ fontSize: "16px" }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Grid>
      <Grid item sm={5} md={4} xs={10}>
        <ChecklistCard list={frontmatter.checklist} />
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
          checklist
        }
        html
      }
    }
  }
`
