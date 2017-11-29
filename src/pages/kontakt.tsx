import { ContactForm } from "../components/ContactForm"
import { Button, Grid, Icon, TextField, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import { map } from "ramda"
import * as React from "react"

import { Hero } from "../components/Hero"
import Head from "../components/Head"
import SchemaBreadcrumbList from "../components/SchemaBreadcrumbList"
import { PageSection } from "../components/PageSection"
import * as heroImg from "./img/hero/hallingskarvet-min.jpg"
import * as style from "./index.module.css"

type Props = {
  data: {
    contactPage: {
      childMarkdownRemark: {
        frontmatter: Frontmatter
        html: string
      }
    }
  }
}

type Frontmatter = {
  header: string
  metaTitle: string
  metaDescription: string
  metaUrl: string
  contactFormHeader: string
  contactList: Array<{
    contact: string
    header: string
    info: string
    icon: string
  }>
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  width: "100%",
  overflowX: "hidden" as any,
}

const contactPage: React.SFC<Props & { classes: StyleClassNames }> = ({
  data,
  classes,
}) => {
  const {
    header,
    contactList,
    contactFormHeader,
    metaTitle,
    metaDescription,
    metaUrl,
  } = data.contactPage.childMarkdownRemark.frontmatter
  const html = data.contactPage.childMarkdownRemark.html
  return (
    <div style={gridFix}>
      <Head title={metaTitle} description={metaDescription} url={metaUrl} />
      <Hero header={header} type="small" img={heroImg} imgPosition="center" />
      <SchemaBreadcrumbList pageName="Kontakt" />
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Typography type="display1" className={classes.promoText}>
            Vi er Hallingdals leverandør av hjemmesider/nettsider, apper <br />og
            annen systemutviklings kompetanse.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PageSection header={contactFormHeader}>
            <ContactForm />
          </PageSection>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid
            container
            spacing={0}
            alignItems="center"
            style={{ height: "100%", maxWidth: 780 }}
          >
            {map(
              ({ header, info, contact, icon }) => (
                <Grid
                  item
                  xs={12}
                  md={6}
                  lg={4}
                  className={classes.contactTile}
                  key={contact}
                >
                  <div className={classes.contactTileInner}>
                    <Icon color="primary" className={classes.contactIcon}>
                      {icon}
                    </Icon>
                    <Typography type="headline" gutterBottom align="center">
                      {header}
                    </Typography>
                    <Typography
                      type="body1"
                      gutterBottom
                      align="center"
                      className={classes.contactTileInfo}
                    >
                      {info}
                    </Typography>
                    <Typography
                      type="body2"
                      gutterBottom
                      align="center"
                      className={classes.contactTileContact}
                    >
                      {contact}
                    </Typography>
                  </div>
                </Grid>
              ),
              contactList
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

type StyleClassNames = {
  promoText: string
  contactTile: string
  contactIcon: string
  contactTileInner: string
  contactTileInfo: string
  contactTileIcon: string
  contactTileContact: string
}

const styles: StyleRulesCallback = theme => ({
  promoText: {
    margin: "auto",
    textAlign: "center",
    marginTop: 25,
    fontSize: 22,
  },
  contactIcon: {
    fontSize: 60,
  },
  contactTile: {
    height: 250,
    textAlign: "center",
  },
  contactTileInner: {
    padding: 40,
  },
  contactTileInfo: {
    color: "rgba(0, 0, 0, 0.44)",
  },
  contactTileContact: {
    fontSize: 16,
  },
  contactTileIcon: {
    color: "rgba(0, 0, 0, 0.44)",
  },
})

export default withStyles(styles)<Props>(contactPage)

export const pageQuery = graphql`
  query ContactContent {
    contactPage: file(relativePath: { eq: "content/kontakt_page.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          header
          metaTitle
          metaDescription
          metaUrl
          contactFormHeader
          contactList {
            contact
            header
            info
            icon
          }
        }
      }
    }
  }
`
