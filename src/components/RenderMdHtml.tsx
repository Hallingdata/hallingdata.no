import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

type Props = {
  html: string
  className?: string
}

const renderMdHtml: React.SFC<Props & { classes: StyleClassNames }> = ({
  classes,
  className,
  html,
}) => (
  <div
    className={`${className} ${classes.content}`}
    dangerouslySetInnerHTML={{ __html: html }}
  />
)

type StyleClassNames = {
  content: string
}

const styles: StyleRulesCallback = theme => ({
  content: {
    padding: 20,
    marginBottom: "0.35em",
    textAlign: "justify",
    color: "rgba(0, 0, 0, 0.87)",
    fontWeight: 400,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    lineHeight: "1.46429em",
    margin: 0,
    display: "block",
  },
})

export const RenderMdHtml = withStyles(styles)<Props>(renderMdHtml)
