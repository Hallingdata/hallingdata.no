import * as React from "react"
import { Helmet } from "react-helmet"

type Props = {
  title: string
  url: string
  description?: string
}

const Head: React.SFC<Props> = ({ title, description, url }) => (
  <Helmet>
    <title>{title}</title>
    {description != null ?<meta name="description" content={description} /> : null}
    <link rel="canonical" href={url} />
    <meta property="og:title" content={title} />
    {description != null ?<meta property="og:description" content={description} /> : null}
    <meta property="og:site_name" content={title} />
    {description != null ?<meta name="twitter:card" content={description} /> : null}
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    {description != null ? <meta name="twitter:description" content={description} /> : null}
  </Helmet>
)

export default Head
