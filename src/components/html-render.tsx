import * as React from "react"
import Link from "gatsby-link"
import Grid from "material-ui/grid"

type Props = {
  content: string
}

const HtmlRenderComponent = ({ content }: Props) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)

export default HtmlRenderComponent
