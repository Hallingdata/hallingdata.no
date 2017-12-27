import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { BigImg } from "../components/BigImg"
import { Hero } from "../components/Hero"
import { InfoWithCard } from "../components/InfoWithCard"
import { MobileLogoRow } from "../components/MobileLogoRow"
import Head from "../components/Head"
import { OurServices, Service } from "../components/OurServices"
import SchemaBreadcrumbList from "../components/SchemaBreadcrumbList"

import * as heroImg from "./img/hero/crypto-7.jpg"
import * as bottomImg from "./img/hero/phone8-min.jpeg"
import * as style from "./index.module.css"

type Props = {
  data: {
    kryptovalutaPage: {
      childMarkdownRemark: {
        frontmatter: Frontmatter
        html: any
      }
    }
  }
}

type Frontmatter = {
  pageName: string
  metaTitle: string
  metaDescription: string
  metaUrl: string
  header: string
  checklistHeader: string
  checklist: Array<string>
  ourServices: Array<Service>
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any,
  overflowY: "hidden" as any,
}

const webpagesPage: React.SFC<Props & { classes: StyleClassNames }> = ({
  data,
  classes,
}) => {
    console.log(JSON.stringify(data))
  const {
    pageName,
    metaTitle,
    metaDescription,
    metaUrl,
    checklist,
    header,
    ourServices,
    checklistHeader,
  } = data.kryptovalutaPage.childMarkdownRemark.frontmatter
  const html = data.kryptovalutaPage.childMarkdownRemark.html
  return (
    <div style={gridFix}>
      <Head title={metaTitle} description={metaDescription} url={metaUrl} />
      <SchemaBreadcrumbList pageName={pageName} />
      <Hero header={header} type="small" img={heroImg} imgPosition="center" />
      <InfoWithCard htmlContent={html} checklistItems={checklist} />
      <OurServices services={ourServices}  />
    </div>
  )
}

type StyleClassNames = {}

const styles: StyleRulesCallback = theme => ({})

export default withStyles(styles)<Props>(webpagesPage)

export const pageQuery = graphql`
  query KryptovalutaContent {
    kryptovalutaPage: file(relativePath: { eq: "content/kryptovaluta.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          pageName
          metaTitle
          metaDescription
          metaUrl
          header
          checklistHeader
          checklist
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
