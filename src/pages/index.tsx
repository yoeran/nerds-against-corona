import React from "react"

import { Layout } from "../components/Layout"
import { Seo } from "../components/Seo"
import { Team } from "../components/Team"
import { Sponsors } from "../components/Sponsors"
import { Explainer } from "../components/Explainer"

import headerImage from "../images/nerds-against-corona-header.png"

const IndexPage = () => (
  <Layout>
    <Seo
      title="Hulp nodig?"
      meta={[{ property: "og:image", content: headerImage }]}
    />

    <Explainer />
    <Team />
    <Sponsors />
  </Layout>
)

export default IndexPage
