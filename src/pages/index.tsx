import * as React from 'react'
import Link from 'gatsby-link'
import PromoComponent from "../components/promo"

const IndexPage = (props: any) => {
  const data = props.data
  const timeToRead = props.data.file.childMarkdownRemark.timeToRead
  console.log(props)
  return (
    <div>
      <PromoComponent content={props.data.file.childMarkdownRemark.html}></PromoComponent>
    </div>
  )
}

export default IndexPage

export const pageQuery = graphql`
query PromoContent{
    file(relativePath: {eq: "components/promo/promo.md"}) {
      childMarkdownRemark {
        html
        timeToRead
      }
    }
  }
`