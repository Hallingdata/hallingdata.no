/* tslint:disable no-var-requires */
/* tslint:disable no-console */

import * as React from "react"

// Load production style
let styles: string;
if (process.env.NODE_ENV === `production`) {
    try {
        styles = require("!raw-loader!../public/styles.css");
    } catch (err) {
        console.log(err);
    }
}

interface HtmlProps {
    body: any;
    postBodyComponents: any;
    headComponents: any;
}

// Use `module.exports` to be compliant with `webpack-require` import method
module.exports = (data: any) => {
    const css = (process.env.NODE_ENV === `production`) ?
        <style
            id="gatsby-inlined-css"
            dangerouslySetInnerHTML={{ __html: styles }}
        />
        : null;

    const noMargin = {
        "margin": 0
    }

    return (
        <html lang="en">
            <head>
                {data.headComponents}
                <title>My website</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
                />
                {css}
            </head>
            <body style={noMargin}>
                <div
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: data.body }}
                />
                {data.postBodyComponents}
            </body>
        </html>
    )
};