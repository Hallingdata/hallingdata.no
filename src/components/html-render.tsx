import * as React from 'react'
import Link from 'gatsby-link'

const HtmlRenderComponent = (props: any) => {
    return (
        < div >
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: props.content }} />
        </div >
    )
}

export default HtmlRenderComponent
