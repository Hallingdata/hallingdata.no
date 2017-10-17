import * as React from "react"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import { Typography } from "material-ui"

type Props = {
  packages: Array<PricePackage>
}

export const pricePackages: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
}) => (
  <section className={classes.outer}>
    <Typography
      type="display1"
      color="inherit"
      className={classes.header}
      gutterBottom
    >
      Pakke priser
    </Typography>
  </section>
)

type StyleClassNames = {
  personOuter: string
  img: string
  header: string
  outer: string
  item: string
  icons: string
}

const styles: StyleRulesCallback = theme => ({
  personOuter: {
    textAlign: "center",
  },
  img: {
    borderRadius: "100%",
    width: 150,
    height: 150,
  },
  header: {
    textAlign: "center",
  },
  outer: {
    backgroundColor: "#673ab7",
    color: "#fff",
    paddingTop: 100,
    paddingBottom: 100,
  },
  item: {
    textAlign: "center",
    padding: "2em",
    maxWidth: 250,
    margin: "auto",
  },
  icons: {
    fontSize: 20,
  },
})

export const PricePackages = withStyles(styles)<Props>(pricePackages)

export type PricePackage = {
  name: string
  initPrice: number
  monthPrice: number
  description: string
  includes: Array<PackageInclude>
}

type PackageInclude = {
  name: string
  amount: string
  important: boolean
}
