import * as React from "react"

type Props = {}

export const FacebookFeed: React.SFC<Props> = (props: Props) => (
  <div
    style={{
      height: 600,
      width: 500,
    }}
    dangerouslySetInnerHTML={{
      __html:
        '<iframe style="width: 100%; height: 100%;" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhallingdata%2F&tabs=timeline&width=500&height=600&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=1517316898553926" width="500" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>',
    }}
  />
)
