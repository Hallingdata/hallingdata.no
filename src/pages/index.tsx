import TeamComponent from "../components/team/team.component"
import * as image from "../content/index/row1.jpg"

import * as React from "react"
import Link from "gatsby-link"
import Grid from "material-ui/Grid"

import HeroComponent from "../components/hero/hero.component"
import ServicesComponent from "../components/services/services.component"
import CustomersComponents from "../components/customers/customers.component"
import * as style from "./index.module.css"
import { Typography } from "material-ui"

type Props = {
  data: {
    row1: any
    services: any
  }
}

// https://github.com/callemall/material-ui/issues/7466
const gridFix = {
  "width": "100%",
  "overflow-x": "hidden"
}
const IndexPage = ({ data }: Props) => (
  <div style={gridFix}>
    <HeroComponent />
    <ServicesComponent
      services={data.services.childMarkdownRemark.frontmatter.services}
    />
    <div>
      <Typography
        type="display2"
        style={{ "text-align": "center", padding: "50px" }}
      >
        Vi er teknologiske eksperter
      </Typography>
    </div>
    <TeamComponent />
    <CustomersComponents/>
  </div>
)

export default IndexPage

export const pageQuery = graphql`
  query PromoContent {
    row1: file(relativePath: { eq: "content/index/row1.md" }) {
      childMarkdownRemark {
        html
        timeToRead
      }
    }
    services: file(relativePath: { eq: "content/index/services.md" }) {
      childMarkdownRemark {
        html
        timeToRead
        frontmatter {
          services {
            header
            icon
            description
          }
        }
      }
    }
  }
`
