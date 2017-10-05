import * as React from "react"
import Link from "gatsby-link"
import Grid from "material-ui/grid"

type Props = {
  content: string
}

const HtmlRenderComponent = ({ content }: Props) => (
  <Grid item xs={12}>
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </Grid>
)

export default HtmlRenderComponent
