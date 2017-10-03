import * as React from 'react'
import Link from 'gatsby-link'

const ImageComponent = (props: any) => {
    return (
        < div >
            <img src={props.url} />
        </div >
    )
}

export default ImageComponent
