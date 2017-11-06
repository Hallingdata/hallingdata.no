import { Grid } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { ChecklistCard } from "./ChecklistCard"
import { RenderMdHtml } from "./RenderMdHtml"

type Props = {
  htmlContent: string
  checklistHeader?: string
  checkListIcon?: string
  checklistItems: Array<string>
}

const infoWithCard: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
  htmlContent,
  checklistHeader,
  checkListIcon,
  checklistItems,
}) => (
  <Grid container justify="space-around" className={classes.infoContainer}>
    <Grid item sm={6} md={5} xs={10}>
      <RenderMdHtml html={htmlContent} className={classes.content} />
    </Grid>
    <Grid item sm={5} md={4} xs={10}>
      <ChecklistCard
        header={checklistHeader}
        list={checklistItems}
        icon={checkListIcon}
      />
    </Grid>
  </Grid>
)

type StyleClassNames = {
  infoContainer: string
  content: string
}

const styles: StyleRulesCallback = theme => ({
  infoContainer: {
    maxWidth: (theme as any).custom.pageMaxWith,
    margin: "auto",
  },
  content: {
    fontSize: "16px",
  },
})

export const InfoWithCard = withStyles(styles)<Props>(infoWithCard)
