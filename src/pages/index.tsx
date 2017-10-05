import * as image from "../content/index/row1.jpg"

import * as React from "react"
import Link from "gatsby-link"
import Grid from "material-ui/Grid"

import HtmlRenderComponent from "../components/html-render"
import PromoTopComponent from "../components/promo-top"
import ServicesComponent from "../components/services"
import * as styles from "./index.module.css"

type Props = {
  data: {
    row1: any,
    services: any
  }
}

const IndexPage = ({ data }: Props) => (
  <div>
    <PromoTopComponent />
    <ServicesComponent services={data.services.childMarkdownRemark.frontmatter.services}/>
    <HtmlRenderComponent content={data.row1.childMarkdownRemark.html} />
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
