import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Counter from "../components/counter"

const SecondPage = () => (
  <Layout>
    <SEO title="Counter" />
    <h1>Counter</h1>
    <Counter/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage


