import { Button, Grid, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

type Props = {
  header: string
  type: "small" | "big"
  img: string
}

const hero: React.SFC<Props & { classes: StyleClassNames }> = ({
  header,
  type,
  img,
  classes,
}) => (
  <Grid
    container
    className={classes[type]}
    align="center"
    justify="center"
    style={backgroundStyle(img)}
  >
    <Grid item>
      <div className={classes.inner}>
        <Typography
          type="display3"
          gutterBottom
          style={{ color: "#fff" }}
          className={classes.header}
        >
          {header}
        </Typography>
        <Button color="accent" raised>
          Kontakt oss
        </Button>
      </div>
    </Grid>
  </Grid>
)

const backgroundStyle = (image: any) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
  }
}

type StyleClassNames = {
  big: string
  small: string
  inner: string
  header: string
}

const styles: StyleRulesCallback = theme => ({
  big: {
    height: 700,
  },
  small: {
    height: 400,
  },
  inner: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    textAlign: "center",
  },
  header: {
    backgroundColor: "black",
    paddingLeft: 20,
    paddingRight: 20,
  },
})

export const Hero = withStyles(styles)<Props>(hero)
