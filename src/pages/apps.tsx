import {
  Portfolio,
  PortfolioItem,
} from "../components/portfolio/portfolio.component"
import { ChecklistCard } from "../components/checklist-card/checklist-card.component"
import { Typography } from "material-ui"
import Grid from "material-ui/Grid"
import * as React from "react"

import { CustomerLogos } from "../components/customer-logos/customer-logos.component"
import { Hero } from "../components/hero/hero.component"
import { OurServices } from "../components/our-services/our-services.component"
import { Team } from "../components/team/team.component"
import * as style from "./index.module.css"
import * as heroImg from "./img/hero/phone3.jpeg"
import * as bottomImg from "./img/hero/phone8.jpeg"
import * as androidLogo from "./img/android-logo.png"
import * as appleLogo from "./img/apple-logo.png"

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
  overflow: "hidden" as any,
  margin: 0,
}

const WebpagesPage: React.SFC<Props> = ({ data }) => {
  const frontmatter = data.appsPage.childMarkdownRemark.frontmatter
  const html = data.appsPage.childMarkdownRemark.html
  return (
    <Grid container direction="row" style={gridFix} justify="space-around">
      <Grid item xs={12}>
        <Hero header={frontmatter.header} type="small" img={heroImg} />
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          justify="space-around"
          style={{ maxWidth: 1200, margin: "auto" }}
        >
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
            <ChecklistCard
              header={frontmatter.checklistHeader}
              list={frontmatter.checklist}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <OurServices services={frontmatter.ourServices} />
      </Grid>
      <Grid item xs={6} style={{textAlign: "center", backgroundColor: "#6d6e71", padding: 30}} justify="center">
        <img
          src={androidLogo}
          alt="Android logo"
          height="100"
          style={{ padding: 15 }}
        />
      </Grid>
      <Grid item xs={6} style={{textAlign: "center", backgroundColor: "#a4c439", padding: 20}} alignItems="center">
        <img
          src={appleLogo}
          alt="Apple logo"
          height="100"
          style={{ padding: 15 }}
        />
      </Grid>
      <Grid item xs={12} style={backgroundStyle(bottomImg)} />
    </Grid>
  )
}

const backgroundStyle = (image: any) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    height: 600,
  }
}

export default WebpagesPage

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
