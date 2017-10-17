import * as React from "react"
import { StyleRulesCallback, withStyles } from "material-ui/styles"
import { Grid, Typography } from "material-ui"

import * as appleLogo from "../img/apple-logo.png"
import * as androidLogo from "../img/android-logo.png"

type Props = {
  img: string
}

const bigImg: React.SFC<Props> = ({ img }) => (
  <div style={backgroundStyle(img)} />
)

const backgroundStyle = (image: any) => {
  return {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    height: 600,
  }
}

export const BigImg = bigImg
