import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFound = () => {
  return (
    <Layout>
      <Seo title="Error" />
      <main className="error-page">
        <h1>404</h1>
        <h3>page not fount</h3>
      </main>
    </Layout>
  )
}

export default NotFound
