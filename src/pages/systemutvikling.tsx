import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { BigImg } from "../components/BigImg"
import { ChipGrid } from "../components/ChipGrid"
import { Hero } from "../components/Hero"
import { InfoWithCard } from "../components/InfoWithCard"
import SchemaBreadcrumbList from "../components/SchemaBreadcrumbList"
import * as heroImg from "./img/hero/code1-min.jpeg"
import * as bottomImg from "./img/hero/dev1-min.jpeg"
import * as style from "./index.module.css"

type Props = {
  data: {
    developmentPage: {
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
  technologiesHeader: string
  technologies: Array<string>
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any,
}

const developmentPage: React.SFC<Props & { classes: StyleClassNames }> = ({
  data,
  classes,
}) => {
  const {
    checklist,
    header,
    checklistHeader,
    technologiesHeader,
    technologies,
  } = data.developmentPage.childMarkdownRemark.frontmatter
  const html = data.developmentPage.childMarkdownRemark.html
  return (
    <div style={gridFix}>
          <SchemaBreadcrumbList pageName="Systemutvikling"/>
      <Hero header={header} type="small" img={heroImg} imgPosition="center" />
      <InfoWithCard htmlContent={html} checklistItems={checklist} />
      <ChipGrid header={technologiesHeader} items={technologies} />
      <BigImg img={bottomImg} />
    </div>
  )
}

type StyleClassNames = {}

const styles: StyleRulesCallback = theme => ({})

export default withStyles(styles)<Props>(developmentPage)

export const pageQuery = graphql`
  query DevelopmentAppsContent {
    developmentPage: file(
      relativePath: { eq: "content/systemutvikling_page.md" }
    ) {
      childMarkdownRemark {
        html
        frontmatter {
          header
          checklistHeader
          checklist
          technologiesHeader
          technologies
        }
      }
    }
  }
`
