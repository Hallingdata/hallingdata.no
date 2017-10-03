import * as React from 'react'
import Link from 'gatsby-link'

const PromoComponent = (props: any) => {
    //const { file: post } = data;
    console.log(JSON.stringify(props, null, "  "))
    return (
        < div >
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: props.content }} />
        </div >
    )
}

export default PromoComponent
