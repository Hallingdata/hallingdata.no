import * as React from "react"

import * as appleTouchIcon from "./favicons/apple-touch-icon.png"
import * as icon16 from "./favicons/favicon-16x16.png"
import * as icon32 from "./favicons/favicon-32x32.png"
import * as manifest from "./favicons/manifest.json"
import * as safariPinned from "./favicons/safari-pinned-tab.svg"
import * as screenshot from "./screenshot.png"

const page = {
  title: "Hallingdata",
  description: "Hallingdata - utvikling av nettsider, apps og andre systemer",
  url: "http://hallingdata.no",
  screenshot,
}

// Load production style
let styles: string
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require("!raw-loader!../public/styles.css")
  } catch (err) {
    console.log(err)
  }
}

interface HtmlProps {
  body: any
  postBodyComponents: any
  headComponents: any
}

// Use `module.exports` to be compliant with `webpack-require` import method
module.exports = (data: any) => {
  const css =
    process.env.NODE_ENV === `production` ? (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    ) : null

  return (
    <html lang="en" style={{ fontFamily: "'Roboto', 'sans-serif'" }}>
      <head>
        {data.headComponents}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <title>Hallingdata</title>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
        <link rel="manifest" href={manifest} />
        <link rel="mask-icon" href={safariPinned} color="#5bbad5" />
        <meta name="theme-color" content="#673ab7" />
        <meta property="og:url" content="http://hallingdata.no" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hallingdata" />
        <meta property="og:image" content={screenshot} />
        <meta property="og:description" content={page.description} />
        <meta property="og:site_name" content={page.title} />
        <meta property="og:locale" content="no_NO" />
        <meta name="twitter:card" content={page.description} />
        <meta name="twitter:creator" content="@sogasg" />
        <meta name="twitter:url" content={page.url} />
        <meta name="twitter:title" content={page.title} />
        <meta name="twitter:description" content={page.description} />
        <meta name="twitter:image" content={page.screenshot} />
        {css}
      </head>
      <body style={{ margin: 0 }}>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: data.body }} />
        {data.postBodyComponents}
      </body>
    </html>
  )
}
