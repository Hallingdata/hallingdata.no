import { Button, Grid, Typography } from "material-ui"
import * as React from "react"

import * as style from "./hero.module.css"

type Props = {
  header: string
}

export const Hero = (props: Props) => (
  <Grid container className={style.outer} align="center" justify="center">
    <Grid item>
      <div className={style.inner}>
        <Typography
          type="display3"
          gutterBottom
          style={{ color: "#fff" }}
          className={style.header}
        >
          {props.header}
        </Typography>
        <Button color="accent" raised>
          Kontakt oss
        </Button>
      </div>
    </Grid>
  </Grid>
)
