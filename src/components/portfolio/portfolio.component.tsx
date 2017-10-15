import { Button, Grid, Typography } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"
import { map, test } from "ramda"
import * as fargerikehemsedalImg from "./img/fargerikehemsedal.png"
import * as stolsrockImg from "./img/stolsrock.png"
import * as nhageImg from "./img/nhage.png"
import * as smartdekkImg from "./img/smart-dekk.jpg"
import * as sagabilImg from "./img/saga-bil.jpg"
import * as haraldestImg from "./img/haraldset.jpg"

import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card"

type Props = {
  header: string
  portfolioItems: Array<PortfolioItem>
}

const portfolio: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
  header,
  portfolioItems,
}) => (
  <section className={classes.outer}>
    <Typography type="display1" gutterBottom className={classes.header}>
      {header}
    </Typography>
    <Grid
      container
      direction="row"
      align="stretch"
      justify="center"
      className={classes.grid}
    >
      {map(
        portfolioItem => (
          <Grid item xs={12} sm={6} md={4} key={portfolioItem.url}>
            <Card className={classes.card}>
              {itemPicture(portfolioItem.title, classes.media)}
              <CardContent>
                <Typography type="headline" component="h2">
                  {portfolioItem.title}
                </Typography>
                <Typography component="p">
                  {portfolioItem.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  dense
                  color="primary"
                  href={portfolioItem.url}
                  target="_blank"
                >
                  Gå til nettsiden
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ),
        portfolioItems
      )}
    </Grid>
  </section>
)

type StyleClassNames = {
  card: string
  media: string
  outer: string
  header: string
  grid: string
}

const styles: StyleRulesCallback = theme => ({
  card: {
    maxWidth: 290,
    height: "100%",
    margin: "auto",
  },
  media: {
    height: 200,
  },
  header: {
    textAlign: "center",
    marginBottom: 40,
  },
  outer: {
    backgroundColor: "#FAFAFA",
    paddingTop: 100,
    paddingBottom: 100,
  },
  grid: {
    maxWidth: 1000,
    margin: "auto",
  },
})

export const Portfolio = withStyles(styles)<Props>(portfolio)

export type PortfolioItem = {
  title: string
  img: string
  description: string
  url: string
}

const itemPicture = (name: string, imgClassName?: string) => {
  if (test(/Fargerike/i, name)) {
    return (
      <CardMedia
        className={imgClassName}
        image={fargerikehemsedalImg}
        title="Skjerm bilde av nettside"
      />
    )
  } else if (test(/Stølsrock/i, name)) {
    return (
      <CardMedia
        className={imgClassName}
        image={stolsrockImg}
        title="Skjerm bilde av nettside"
      />
    )
  } else if (test(/Næringshage/i, name)) {
    return (
      <CardMedia
        className={imgClassName}
        image={nhageImg}
        title="Skjerm bilde av nettside"
      />
    )
  } else if (test(/Smart dekk/i, name)) {
    return (
      <CardMedia
        className={imgClassName}
        image={smartdekkImg}
        title="Skjerm bilde av nettside"
      />
    )
  } else if (test(/^Saga bil/i, name)) {
    return (
      <CardMedia
        className={imgClassName}
        image={sagabilImg}
        title="Skjerm bilde av nettside"
      />
    )
  } else if (test(/Haraldset/i, name)) {
    return (
      <CardMedia
        className={imgClassName}
        image={haraldestImg}
        title="Skjerm bilde av nettside"
      />
    )
  } else {
    throw new Error("Every webiste needs a picture")
  }
}
