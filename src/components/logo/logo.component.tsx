import * as React from "react"

import * as logo from "./logo-white-transparent.png"

type props = {
  height: string
  color: "white-transparent"
  className?: string
}

export const Logo = (props: props) => (
  <img
    src={logo}
    alt="Hallingdata logo"
    height={props.height}
    className={props.className}
  />
)
