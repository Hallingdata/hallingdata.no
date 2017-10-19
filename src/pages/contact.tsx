import { PageSection } from "../components/PageSection"
import contact from "./contact"
import { Grid, TextField, Button, Icon, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"
import { map } from "ramda"

import { Hero } from "../components/Hero"
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
  } = data.contactPage.childMarkdownRemark.frontmatter
  const html = data.contactPage.childMarkdownRemark.html
  return (
    <div style={gridFix}>
      <Hero
        header={header}
        type="small"
        img={heroImg}
        imgPosition="center"
        hideButton
      />
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
          <PageSection header={contactFormHeader}>
            <form
              autoComplete="off"
              className={classes.form}
              action="https://formspree.io/post@hallingdata.no"
              method="POST"
            >
              <TextField
                id="name"
                label="Navn"
                name="Navn"
                className={classes.textField}
                margin="normal"
                required
              />
              <TextField
                id="contact"
                label="Kontakt"
                name="Kontakt"
                placeholder="Epost eller telefonnummer"
                className={classes.textField}
                margin="normal"
                required
              />
              <br />
              <TextField
                id="message"
                label="Din melding"
                name="Melding"
                multiline
                rows="8"
                rowsMax="50"
                className={classes.textField}
                margin="normal"
                required
              />
              <Button
                raised
                color="primary"
                type="submit"
                className={classes.sendButton}
              >
                Send
              </Button>
            </form>
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
  textField: string
  form: string
  sendButton: string
  contactTile: string
  contactIcon: string
  contactTileInner: string
  contactTileInfo: string
  contactTileIcon: string
  contactTileContact: string
}

const styles: StyleRulesCallback = theme => ({
  contactIcon: {
    fontSize: 60,
  },
  form: {
    maxWidth: 500,
    margin: "auto",
    paddingLeft: 30,
    paddingRight: 30,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%",
  },
  sendButton: {
    height: 50,
    width: 120,
    fontSize: 16,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
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
    contactPage: file(relativePath: { eq: "content/contact-page.md" }) {
      childMarkdownRemark {
        html
        frontmatter {
          header
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
