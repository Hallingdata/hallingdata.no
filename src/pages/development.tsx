import { Grid } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { BigImg } from "../components/BigImg"
import { Hero } from "../components/Hero"
import { InfoWithCard } from "../components/InfoWithCard"
import { MobileLogoRow } from "../components/MobileLogoRow"
import { OurServices } from "../components/OurServices"
import * as heroImg from "./img/hero/code1.jpeg"
import * as bottomImg from "./img/hero/phone8.jpeg"
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
    technologies,
  } = data.developmentPage.childMarkdownRemark.frontmatter
  const html = data.developmentPage.childMarkdownRemark.html
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
        <InfoWithCard htmlContent={html} checklistItems={checklist} />
      </Grid>
      <Grid item xs={12} style={{ padding: 0 }}>
        <BigImg img={bottomImg} />
      </Grid>
    </Grid>
  )
}

type StyleClassNames = {}

const styles: StyleRulesCallback = theme => ({})

export default withStyles(styles)<Props>(developmentPage)

export const pageQuery = graphql`
  query DevelopmentAppsContent {
    developmentPage: file(relativePath: { eq: "content/development-page.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          header
          checklistHeader
          checklist
          technologies
        }
      }
    }
  }
`
