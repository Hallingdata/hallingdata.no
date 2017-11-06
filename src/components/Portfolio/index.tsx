import { Button, Grid, Typography } from "material-ui"
import Card, { CardActions, CardContent, CardMedia } from "material-ui/Card"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import { test, map } from "ramda"
import * as React from "react"

import { PageSection } from "../PageSection"
import * as fargerikehemsedalImg from "./img/fargerikehemsedal.min.jpg"
import * as haraldestImg from "./img/haraldset.min.jpg"
import * as nhageImg from "./img/nhage.min.jpg"
import * as sagabilImg from "./img/saga-bil.min.jpg"
import * as smartdekkImg from "./img/smart-dekk.min.jpg"
import * as stolsrockImg from "./img/stolsrock.min.jpg"

type Props = {
  header: string
  portfolioItems: Array<PortfolioItem>
}

const portfolio: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
  header,
  portfolioItems,
}) => (
  <PageSection header={header} className={classes.outer}>
    <Grid
      container
      direction="row"
      alignItems="stretch"
      justify="center"
      className={classes.grid}
    >
      {map(
        portfolioItem => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={portfolioItem.url}
            className={classes.gridItem}
          >
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
  </PageSection>
)

type StyleClassNames = {
  card: string
  media: string
  outer: string
  header: string
  grid: string
  gridItem: string
}

const styles: StyleRulesCallback = theme => ({
  gridItem: {
    padding: "20px !important",
  },
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
    backgroundColor: "#F9F7F3",
    width: "100%",
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
