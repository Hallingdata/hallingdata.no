import { Grid } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { BigImg } from "../components/BigImg"
import { Hero } from "../components/hero/hero.component"
import { InfoWithCard } from "../components/InfoWithCard"
import { MobileLogoRow } from "../components/MobileLogoRow"
import { OurServices } from "../components/our-services/our-services.component"
import * as heroImg from "./img/hero/phone3.jpeg"
import * as bottomImg from "./img/hero/phone8.jpeg"
import * as style from "./index.module.css"

type Props = {
  data: {
    appsPage: {
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
  ourServices: Array<{
    header: string
    icon: string
    description: strin
  }>
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any,
}

const webpagesPage: React.SFC<Props & { classes: StyleClassNames }> = ({
  data,
  classes,
}) => {
  const {
    checklist,
    header,
    ourServices,
    checklistHeader,
  } = data.appsPage.childMarkdownRemark.frontmatter
  const html = data.appsPage.childMarkdownRemark.html
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
      <Grid item xs={12}>
        <OurServices services={ourServices} />
      </Grid>
      <Grid item xs={12}>
        <MobileLogoRow />
      </Grid>
      <Grid item xs={12} style={{ padding: 0 }}>
        <BigImg img={bottomImg} />
      </Grid>
    </Grid>
  )
}

type StyleClassNames = {}

const styles: StyleRulesCallback = theme => ({})

export default withStyles(styles)<Props>(webpagesPage)

export const pageQuery = graphql`
  query AppsContent {
    appsPage: file(relativePath: { eq: "content/apps-page.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
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
