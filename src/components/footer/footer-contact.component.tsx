import { Button, Grid, Icon, Typography } from "material-ui"
import * as React from "react"
import { StyleRulesCallback, withStyles } from "material-ui/styles"

import { FacebookBadge } from "../facebook-badge/facebook-badge.component"
import { Logo } from "../logo/logo.component"

type Props = {}

const footerContact: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
}) => (
  <Grid item md={2} xs={10} sm={5} className={classes.gridItem}>
    <Typography
      type="title"
      color="inherit"
      gutterBottom
      style={{ paddingTop: "9px" }}
    >
      Skal vi ta en prat?
    </Typography>
    <Typography type="body1" gutterBottom color="inherit">
      Ring oss for en uforpliktende telefonsamtale.
    </Typography>
    <Button
      href="tel:+4732178032"
      color="inherit"
      raised
      className={classes.contactButton}
    >
      <Icon color="inherit" className={classes.icon}>
        phone
      </Icon>
      Ring oss
    </Button>
    <Button
      href="mailto:post@hallingdata.no"
      color="inherit"
      raised
      className={classes.contactButton}
    >
      <Icon color="inherit" className={classes.icon}>
        email
      </Icon>
      Send epost
    </Button>
    <Typography type="body1" gutterBottom color="inherit">
      TLF: 32 17 80 32<br />
      E-post: post@hallingdata.no<br />
    </Typography>
  </Grid>
)

type StyleClassNames = {
  icon: string
  contactButton: string
  gridItem: string
}

const styles: StyleRulesCallback = theme => ({
  icon: {
    paddingRight: 5,
  },
  contactButton: {
    marginBottom: 10,
    width: "100%",
  },
  gridItem: {
    marginBottom: 30,
  },
})

export const FooterContact = withStyles(styles)<Props>(footerContact)
