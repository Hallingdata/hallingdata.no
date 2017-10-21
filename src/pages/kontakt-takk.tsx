import { Typography, Grid } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { Hero } from "../components/Hero"
import { PageSection } from "../components/PageSection"
import * as heroImg from "./img/hero/hallingskarvet-min.jpg"

type Props = {
  data: {
    thankYouContactPage: {
      childMarkdownRemark: {
        frontmatter: Frontmatter
        html: any
      }
    }
  }
}

type Frontmatter = {
  heroHeader: string
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any,
}

const thankyouPage: React.SFC<Props & { classes: StyleClassNames }> = ({
  data,
  classes,
}) => {
  const { heroHeader } = data.thankYouContactPage.childMarkdownRemark.frontmatter
  const html = data.thankYouContactPage.childMarkdownRemark.html
  return (
    <div style={gridFix}>
      <Hero
        header={heroHeader}
        hideButton={true}
        type="small"
        img={heroImg}
        imgPosition="center"
      />
      <Grid container className={classes.contentContainer} spacing={0}>
        <Grid item xs={12}>
          <Typography
            style={{display: "hidden"}}
            type="body1"
            gutterBottom
            align="justify"
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <Typography
            type="body1"
            gutterBottom
            align="justify"
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

type StyleClassNames = {
  contentContainer: string
  content: string
}

const styles: StyleRulesCallback = theme => ({
  contentContainer: {
    maxWidth: 850,
    margin: "auto",
  },
  content: {
    fontSize: 16,
    padding: 20,
  },
})

export default withStyles(styles)<Props>(thankyouPage)

export const pageQuery = graphql`
  query ThankYouContactContent {
    thankYouContactPage: file(relativePath: { eq: "content/kontakt-takk_page.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          heroHeader
        }
      }
    }
  }
`
