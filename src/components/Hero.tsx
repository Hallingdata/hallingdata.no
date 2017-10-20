import { navigateTo } from "gatsby-link"
import { Button, Grid, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

type Props = {
  header: string
  type: "small" | "big"
  img: string
  imgPosition?: "top" | "bottom" | "center"
  hideButton?: boolean
}

const hero: React.SFC<Props & { classes: StyleClassNames }> = ({
  header,
  type,
  img,
  classes,
  hideButton = false,
  imgPosition = "top",
}) => (
  <Grid
    container
    className={classes[type]}
    alignItems="center"
    justify="center"
    style={backgroundStyle(img, imgPosition)}
  >
    <Grid item xs={12} style={{ flexBasis: "unset" }}>
      <div className={classes.inner}>
        <Typography
          type="display3"
          gutterBottom
          style={{ color: "#fff" }}
          className={classes.header}
        >
          {header}
        </Typography>
        {hideButton ? (
          undefined
        ) : (
          <Button color="accent" raised onClick={() => navigateTo("/kontakt")}>
            Kontakt oss
          </Button>
        )}
      </div>
    </Grid>
  </Grid>
)

const backgroundStyle = (image: any, backgroundPosition: string) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundColor: "#363839",
    backgroundPosition,
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
