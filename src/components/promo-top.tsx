import * as React from "react"
import Link from "gatsby-link"
import Grid from "material-ui/Grid"
import * as phoneImage from "./phone2@2x.png"

import * as styles from "./promo-top.module.css"
import Button from "material-ui/button"
import Typography from "material-ui/typography"

type Props = {}

const PromoTopComponent = (props: Props) => (
  <Grid container align="center" className={styles.outer}>
    <Grid item xs={12}>
      <div className={styles.inner}>
        <Typography type="display3" gutterBottom style={{"color": "#fff"}} className={styles.heroText}>
          Web og app utvikling
        </Typography>
        <Button color="accent" raised>Kontakt oss</Button>
      </div>
    </Grid>
  </Grid>
)

export default PromoTopComponent
