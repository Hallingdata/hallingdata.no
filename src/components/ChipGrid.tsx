import { PageSection } from "./PageSection"
import { Button, Grid, Typography, Chip } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"
import { map } from "ramda"

type Props = {
  header: string
  items: Array<string>
}

const chipGrid: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
  header,
  items,
}) => (
  <PageSection header={header} className={classes.outer}>
    <div className={classes.chipsGrid}>
      {map(item => <Chip key={item} label={item} className={classes.chip} />, items)}
    </div>
  </PageSection>
)

const backgroundStyle = (image: any) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
  }
}

type StyleClassNames = {
  outer: string
  chip: string
  header: string
  chipsGrid: string
}

const styles: StyleRulesCallback = theme => ({
  outer: {
    backgroundColor: "#F9F7F3",
  },
  chip: {
    margin: theme.spacing.unit,
  },
  header: {
    textAlign: "center",
  },
  chipsGrid: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: (theme as any).custom.pageMaxWith,
    margin: "auto",
  },
})

export const ChipGrid = withStyles(styles)<Props>(chipGrid)
