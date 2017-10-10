import * as React from "react"

type Props = {
  content: string
}

export const HtmlRender = ({ content }: Props) => (
  <div dangerouslySetInnerHTML={{ __html: content }} />
)
