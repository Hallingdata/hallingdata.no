import Grid from "material-ui/Grid"
import * as React from "react"

import { Hero } from "../components/Hero"
import { InfoWithCard } from "../components/InfoWithCard"
import {
  Portfolio,
  PortfolioItem,
} from "../components/Portfolio"
import * as heroImg from "./img/hero/code1.jpeg"
import * as style from "./index.module.css"

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
  checklistHeader: string
  checklist: Array<string>
  portfolioHeader: string
  portfolio: Array<PortfolioItem>
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflow: "hidden" as any,
}

const WebpagesPage: React.SFC<Props> = ({ data }) => {
  const {
    header,
    checklist,
    checklistHeader,
    portfolio,
    portfolioHeader,
  } = data.webpagesPage.childMarkdownRemark.frontmatter
  const html = data.webpagesPage.childMarkdownRemark.html
  return (
    <Grid
      container
      direction="row"
      style={gridFix}
      justify="space-around"
      spacing={0}
    >
      <Grid item xs={12}>
        <Hero header={header} type="small" img={heroImg} />
      </Grid>
      <Grid item xs={12}>
        <InfoWithCard
          htmlContent={html}
          checklistHeader={checklistHeader}
          checklistItems={checklist}
        />
      </Grid>
      <Grid item xs={12} style={{ padding: 0 }}>
        <Portfolio portfolioItems={portfolio} header={portfolioHeader} />
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
        frontmatter {
          header
          checklistHeader
          checklist
          portfolioHeader
          portfolio {
            title
            img
            description
            url
          }
        }
      }
    }
  }
`
