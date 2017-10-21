import * as React from "react"
import { Helmet } from "react-helmet"

const AdminPage = () => (
  <div>
    <Helmet
      title="Hallingdata - Admin"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" },
      ]}
      link={[
        <link
          rel="stylesheet"
          href="https://unpkg.com/netlify-cms@^0.5.0/dist/cms.css"
        />,
      ]}
    />
    <script src="https://unpkg.com/netlify-cms@^0.5.0/dist/cms.js" />
  </div>
)

export default AdminPage
