import * as React from "react"
import Link from "gatsby-link"
import Grid from "material-ui/Grid"
import * as phoneImage from "./phone2@2x.png"

import * as style from "./hero.module.css"
import Button from "material-ui/button"
import Typography from "material-ui/typography"

type Props = {}

const HeroComponent = (props: Props) => (
  <Grid
    container
    xs={12}
    spacing={0}
    className={style.outer}
    align="center"
    justify="center"
  >
    <Grid item>
      <div className={style.inner}>
        <Typography
          type="display3"
          gutterBottom
          style={{ color: "#fff" }}
          className={style.header}
        >
          Web og app utvikling
        </Typography>
        <Button color="accent" raised>
          Kontakt oss
        </Button>
      </div>
    </Grid>
  </Grid>
)

export default HeroComponent
