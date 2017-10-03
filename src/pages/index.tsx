import * as React from 'react'
import Link from 'gatsby-link'
import PromoComponent from "../components/promo"
import PageRowComponent from "../components/page-row"
import ImageComponent from "../components/image"
import HtmlRenderComponent from "../components/html-render"

const IndexPage = ({ data }) => {
  console.log(JSON.stringify(data, null, "  "))
  return (<div>
    <PageRowComponent>
      <ImageComponent url={data.row1.childMarkdownRemark.frontmatter.imgUrl}></ImageComponent>
      <HtmlRenderComponent content={data.row1.childMarkdownRemark.html}></HtmlRenderComponent>
    </PageRowComponent>
  </div>
)}

export default IndexPage

export const pageQuery = graphql`
query PromoContent{
    row1: file(relativePath: {eq: "content/index/row1.md"}) {
      childMarkdownRemark {
        html
        timeToRead
        frontmatter {
          imgUrl
        }
      }
    }
  }
`