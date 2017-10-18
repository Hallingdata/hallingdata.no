import * as React from "react"
import { navigateTo } from "gatsby-link"

import * as logo from "./logo-white-transparent.png"

type Props = {
  className?: string
}

export const Logo: React.SFC<Props> = ({
  className,
}) => (
  <img
    src={logo}
    alt="Hallingdata logo"
    className={className}
    style={{cursor: "pointer"}}
    onClick={() => navigateTo("/")}
  />
)