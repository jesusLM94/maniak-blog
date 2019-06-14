import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to our brand new Maniak Blog.</p>
    <p>We will soon create awesome content.</p>
    <Link to="/hello-world/">Go to first post</Link>
  </Layout>
)

export default IndexPage
