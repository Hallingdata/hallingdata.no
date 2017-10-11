import * as React from "react"

import * as logo from "./logo-white-transparent.png"

type Props = {
  color: "white-transparent"
  className?: string
}

export const Logo: React.SFC<Props> = props => (
  <img src={logo} alt="Hallingdata logo" className={props.className} />
)
