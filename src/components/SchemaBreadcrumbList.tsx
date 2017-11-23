import { Grid } from "material-ui"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import * as React from "react"

import { ChecklistCard } from "./ChecklistCard"
import { RenderMdHtml } from "./RenderMdHtml"

type Props = {
  pageName: string
}

const breadcrumbList: React.SFC<Props> = ({
pageName
}) => (
    console.log("pageNAme: " + pageName),
    <div
    dangerouslySetInnerHTML={{
      __html: `<script type="application/ld+json">
      {
        "@context": "http://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://www.hallingdata.no/${pageName.toLowerCase().replace(" ", "-")}/",
            "name": "${pageName}"
          }
        }]
      }
      </script>`,
    }}
  />
)

export default breadcrumbList
