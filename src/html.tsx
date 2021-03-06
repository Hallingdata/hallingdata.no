import * as React from "react"

import * as appleTouchIcon from "./favicons/apple-touch-icon.png"
import * as icon16 from "./favicons/favicon-16x16.png"
import * as icon32 from "./favicons/favicon-32x32.png"
import * as manifest from "./favicons/manifest.json"
import * as safariPinned from "./favicons/safari-pinned-tab.svg"

// Load production style
let styles: string
if (process.env.NODE_ENV === `production`) {
  try {
    styles = require("!raw-loader!../public/styles.css")
  } catch (err) {
    console.log(err)
  }
}

interface HtmlProps {
  body: any
  postBodyComponents: any
  headComponents: any
}

const screenshot = "https://www.hallingdata.no/screenshot.png"

// Use `module.exports` to be compliant with `webpack-require` import method
module.exports = (data: any) => {
  const css =
    process.env.NODE_ENV === `production` ? (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    ) : null

  return (
    <html lang="no" style={{ fontFamily: "'Roboto', 'sans-serif'" }}>
      <head>
        {data.headComponents}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="google-site-verification"
          content="1yiEMEoDW18WwjhUFd5DBQKzG_3tbfm8SBYoriT1oSw"
        />
        <meta name="msvalidate.01" content="F99B74BB59D9EB230374FE7306F24B26" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon16} />
        <link rel="manifest" href={manifest} />
        <link rel="mask-icon" href={safariPinned} color="#5bbad5" />
        <meta name="author" content="Hallingdata" />
        <meta name="theme-color" content="#673ab7" />
        <meta property="og:url" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={screenshot} />
        <meta property="og:locale" content="no_NO" />
        <meta property="twitter:site" content="@hallingdata" />
        <meta name="twitter:creator" content="@sogasg" />
        <meta name="twitter:image" content={screenshot} />
        {css}
      </head>
      <body style={{ margin: 0 }}>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: data.body }} />
        {data.postBodyComponents}
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/index.html';
          });
        }
      });
    }
`,
          }}
        />

        {/* Facebook chat integration */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <style>.fb-livechat,.fb-widget{display:none}.ctrlq.fb-button,.ctrlq.fb-close{position:fixed;right:24px;cursor:pointer}.ctrlq.fb-button{z-index:1;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyOCAxMjgiIGhlaWdodD0iMTI4cHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB3aWR0aD0iMTI4cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxyZWN0IGZpbGw9IiMwMDg0RkYiIGhlaWdodD0iMTI4IiB3aWR0aD0iMTI4Ii8+PC9nPjxwYXRoIGQ9Ik02NCwxNy41MzFjLTI1LjQwNSwwLTQ2LDE5LjI1OS00Niw0My4wMTVjMCwxMy41MTUsNi42NjUsMjUuNTc0LDE3LjA4OSwzMy40NnYxNi40NjIgIGwxNS42OTgtOC43MDdjNC4xODYsMS4xNzEsOC42MjEsMS44LDEzLjIxMywxLjhjMjUuNDA1LDAsNDYtMTkuMjU4LDQ2LTQzLjAxNUMxMTAsMzYuNzksODkuNDA1LDE3LjUzMSw2NCwxNy41MzF6IE02OC44NDUsNzUuMjE0ICBMNTYuOTQ3LDYyLjg1NUwzNC4wMzUsNzUuNTI0bDI1LjEyLTI2LjY1N2wxMS44OTgsMTIuMzU5bDIyLjkxLTEyLjY3TDY4Ljg0NSw3NS4yMTR6IiBmaWxsPSIjRkZGRkZGIiBpZD0iQnViYmxlX1NoYXBlIi8+PC9zdmc+) center no-repeat #0084ff;width:60px;height:60px;text-align:center;bottom:24px;border:0;outline:0;border-radius:60px;-webkit-border-radius:60px;-moz-border-radius:60px;-ms-border-radius:60px;-o-border-radius:60px;box-shadow:0 1px 6px rgba(0,0,0,.06),0 2px 32px rgba(0,0,0,.16);-webkit-transition:box-shadow .2s ease;background-size:80%;transition:all .2s ease-in-out}.ctrlq.fb-button:focus,.ctrlq.fb-button:hover{transform:scale(1.1);box-shadow:0 2px 8px rgba(0,0,0,.09),0 4px 40px rgba(0,0,0,.24)}.fb-widget{background:#fff;z-index:2;position:fixed;width:360px;overflow:hidden;opacity:0;bottom:0;right:24px;border-radius:6px;-o-border-radius:6px;-webkit-border-radius:6px;box-shadow:0 5px 40px rgba(0,0,0,.16);-webkit-box-shadow:0 5px 40px rgba(0,0,0,.16);-moz-box-shadow:0 5px 40px rgba(0,0,0,.16);-o-box-shadow:0 5px 40px rgba(0,0,0,.16)}.fb-credit{text-align:center;margin-top:8px}.fb-credit a{transition:none;color:#bec2c9;font-family:Helvetica,Arial,sans-serif;font-size:12px;text-decoration:none;border:0;font-weight:400}.ctrlq.fb-overlay{z-index:0;position:fixed;height:100vh;width:100vw;-webkit-transition:opacity .4s,visibility .4s;transition:opacity .4s,visibility .4s;top:0;left:0;background:rgba(0,0,0,.05);display:none}.ctrlq.fb-close{z-index:4;padding:0 6px;background:#365899;font-weight:700;font-size:11px;color:#fff;margin:8px;border-radius:3px}.ctrlq.fb-close::after{content:'x';font-family:sans-serif}</style>
            
            <div class="fb-livechat">
              <div class="ctrlq fb-overlay"></div>
              <div class="fb-widget">
                <div class="ctrlq fb-close"></div>
                <div class="fb-page" data-href="https://www.facebook.com/hallingdata/" data-tabs="messages" data-width="360" data-height="400" data-small-header="true" data-hide-cover="true" data-show-facepile="false">
                  <blockquote cite="https://www.facebook.com/hallingdata/" class="fb-xfbml-parse-ignore"> </blockquote>
                </div>
                <div id="fb-root"></div>
              </div>
              <a href="https://m.me/hallingdata" title="Send us a message on Facebook" class="ctrlq fb-button"></a> 
            </div>
              
            <script src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.9"></script>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <script>$(document).ready(function(){var t={delay:125,overlay:$(".fb-overlay"),widget:$(".fb-widget"),button:$(".fb-button")};setTimeout(function(){$("div.fb-livechat").fadeIn()},8*t.delay),$(".ctrlq").on("click",function(e){e.preventDefault(),t.overlay.is(":visible")?(t.overlay.fadeOut(t.delay),t.widget.stop().animate({bottom:0,opacity:0},2*t.delay,function(){$(this).hide("slow"),t.button.show()})):t.button.fadeOut("medium",function(){t.widget.stop().show().animate({bottom:"30px",opacity:1},2*t.delay),t.overlay.fadeIn(t.delay)})})});</script>
            
`,
          }}
        />

        {/* Schema.org SEO */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
            <script type="application/ld+json">
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Hallingdata",
              "url": "https://www.hallingdata.no",
              "logo": "https://www.hallingdata.no/img/logo-color-circle.png",
              "contactPoint": [{
                "@type": "ContactPoint",
                "telephone": "+47-32178032",
                "contactType": "customer service",
                "availableLanguage": ["Norwegian", "English"]
              }],
              "sameAs": [
                "http://facebook.com/hallingdata/",
                "http://www.linkedin.com/company/5025257/",
                "https://twitter.com/hallingdata"
              ]
            }
`,
          }}
        />
      </body>
    </html>
  )
}
