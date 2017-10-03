import * as React from "react"
import Link from "gatsby-link"

type Props = {
  content: string
}

const HtmlRenderComponent = ({ content }: Props) => (
  <div
    className="blog-post-content"
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

export default HtmlRenderComponent
