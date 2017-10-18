import { Grid, Typography } from "material-ui"
import { map, test } from "ramda"
import * as React from "react"
import { StyleRulesCallback, withStyles } from "material-ui/styles"

type Props = {
  header: string
  headerColor?:
    | "inherit"
    | "primary"
    | "accent"
    | "default"
    | "secondary"
    | "error"
  className?: string
}

const pageSection: React.SFC<Props & { classes: StyleClassNames }> = ({
  header,
  headerColor = "default",
  classes,
  className,
  children,
}) => (
  <section className={`${classes.outer} ${className}`}>
    <Typography
      type="display1"
      color={headerColor}
      className={classes.header}
      gutterBottom
    >
      {header}
    </Typography>
    {children}
  </section>
)

type StyleClassNames = {
  header: string
  outer: string
}

const styles: StyleRulesCallback = theme => ({
  header: {
    textAlign: "center",
    marginBottom: 20
  },
  outer: {
    paddingTop: 100,
    paddingBottom: 100,
  },
})

export const PageSection = withStyles(styles)<Props>(pageSection)
