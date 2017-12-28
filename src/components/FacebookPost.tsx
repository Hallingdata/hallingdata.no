import * as React from "react"

type Props = {
  postId: string
}

export const FacebookPost: React.SFC<Props> = ({ postId }: Props) => (
  <div
    style={{
      width: "90%",
      margin: "auto",
    }}
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fhallingdata%2Fposts%2F${postId}&width=450" width="100%" height="900" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>`,
    }}
  />
)
