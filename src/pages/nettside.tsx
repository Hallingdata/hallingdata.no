import * as React from "react"

import { Hero } from "../components/Hero"
import Head from "../components/Head"
import { InfoWithCard } from "../components/InfoWithCard"
import { Portfolio, PortfolioItem } from "../components/Portfolio"
import SchemaBreadcrumbList from "../components/SchemaBreadcrumbList"
import * as heroImg from "./img/hero/code15.min.jpeg"
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
  pageName: string
  header: string
  metaTitle: string
  metaDescription: string
  metaUrl: string
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
    pageName,
    header,
    metaTitle,
    metaDescription,
    metaUrl,
    checklist,
    checklistHeader,
    portfolio,
    portfolioHeader,
  } = data.webpagesPage.childMarkdownRemark.frontmatter
  const html = data.webpagesPage.childMarkdownRemark.html
  return (
    <div style={gridFix}>
      <Head title={metaTitle} description={metaDescription} url={metaUrl} />
      <SchemaBreadcrumbList pageName={pageName} />
      <Hero header={header} type="small" img={heroImg} imgPosition="bottom" />
      <InfoWithCard
        htmlContent={html}
        checklistHeader={checklistHeader}
        checklistItems={checklist}
      />
      <Portfolio portfolioItems={portfolio} header={portfolioHeader} />
    </div>
  )
}

export default WebpagesPage

export const pageQuery = graphql`
  query WebpagesContent {
    webpagesPage: file(relativePath: { eq: "content/nettside_page.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          pageName
          header
          metaTitle
          metaDescription
          metaUrl
          checklistHeader
          checklist
          portfolioHeader
          portfolio {
            title
            description
            url
          }
        }
      }
    }
  }
`
